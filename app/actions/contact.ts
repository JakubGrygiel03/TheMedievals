"use server";

import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { isLocale, type Locale } from "@/lib/i18n/config";
import { sendBookingEmail } from "@/lib/resend";
import { createClient, createServiceClient } from "@/lib/supabase/server";

export type ContactActionResult = {
  ok: boolean;
  error?: string;
};

export async function submitContact(
  input: ContactInput,
  lang: Locale = "pl",
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(input);
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

  const supabase = createServiceClient() ?? (await createClient());
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
