"use server";

import { formatContactPhone, getContactPhone } from "@/lib/contact-phone";
import { sendPhoneClickEmail } from "@/lib/resend";

export async function logPhoneClick(page?: string) {
  const phone = formatContactPhone(getContactPhone());
  if (!phone) return;

  try {
    await sendPhoneClickEmail({
      phone,
      page: page?.slice(0, 200),
    });
  } catch {
    // The call itself must not wait on mail.
  }
}
