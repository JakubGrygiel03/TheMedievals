"use server";

import { contactSchema, type ContactInput } from "@/lib/contact-schema";
import { sendBookingEmail } from "@/lib/resend";
import { createClient } from "@/lib/supabase/server";

export type ContactActionResult = {
  ok: boolean;
  error?: string;
};

export async function submitContact(
  input: ContactInput,
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(input);
  if (!parsed.success) {
    return { ok: false, error: "invalid" };
  }

  const supabase = await createClient();
  if (!supabase) {
    return { ok: false, error: "backend" };
  }

  const payload = {
    sender_name: parsed.data.sender_name,
    email: parsed.data.email,
    phone: parsed.data.phone || null,
    event_type: parsed.data.event_type,
    event_date: parsed.data.event_date || null,
    location: parsed.data.location || null,
    message: parsed.data.message,
  };

  const { error } = await supabase.from("contact_messages").insert(payload);
  if (error) {
    return { ok: false, error: "save" };
  }

  try {
    await sendBookingEmail(parsed.data);
  } catch {
    return { ok: true, error: "mail" };
  }

  return { ok: true };
}
