"use server";

import { formatContactPhone, getContactPhone } from "@/lib/contact-phone";
import { sendPhoneClickEmail } from "@/lib/resend";
import { clientKey, rateLimit } from "@/lib/security/rate-limit";

export async function logPhoneClick(page?: string) {
  const gate = rateLimit(await clientKey("phone-click"), 8, 60 * 60 * 1000);
  if (!gate.ok) return;

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
