"use server";

import { contactSchema } from "@/lib/contact-schema";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { sendBookingEmail } from "@/lib/resend";
import { clientKey, rateLimit } from "@/lib/security/rate-limit";
import { createServiceClient } from "@/lib/supabase/server";

export type ContactActionResult = {
  ok: boolean;
  error?: string;
};

export async function submitContact(
  input: unknown,
  lang: Locale = "pl",
): Promise<ContactActionResult> {
  const payload =
    input && typeof input === "object" ? (input as Record<string, unknown>) : {};

  if (typeof payload.website === "string" && payload.website.trim()) {
    return { ok: true };
  }

  const gate = rateLimit(await clientKey("contact"), 5, 60 * 60 * 1000);
  if (!gate.ok) {
    return { ok: false, error: "error" };
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return { ok: false, error: "invalid" };
  }

  const locale = isLocale(lang) ? lang : "pl";

  try {
    const mail = await sendBookingEmail(parsed.data, locale);
    if (!mail.sent) {
      return { ok: false, error: "backend" };
    }
  } catch {
    return { ok: false, error: "error" };
  }

  const supabase = createServiceClient();
  if (supabase) {
    const { error } = await supabase.from("contact_messages").insert({
      sender_name: parsed.data.sender_name,
      email: parsed.data.email,
      phone: parsed.data.phone || null,
      event_type: parsed.data.event_type,
      event_date: parsed.data.event_date || null,
      location: parsed.data.location || null,
      message: parsed.data.message,
    });
    if (error) {
      console.error("contact_messages insert", error.message);
    }
  }

  return { ok: true };
}
