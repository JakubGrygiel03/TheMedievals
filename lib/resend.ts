import { Resend } from "resend";
import { siteConfig } from "@/lib/seo/site";
import type { ContactInput } from "@/lib/contact-schema";

export async function sendBookingEmail(input: ContactInput) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !from) {
    return { sent: false as const };
  }

  const resend = new Resend(apiKey);
  await resend.emails.send({
    from,
    to: siteConfig.email,
    replyTo: input.email,
    subject: `Booking: ${input.event_type} — ${input.sender_name}`,
    text: [
      `Name: ${input.sender_name}`,
      `Email: ${input.email}`,
      `Phone: ${input.phone || "-"}`,
      `Type: ${input.event_type}`,
      `Date: ${input.event_date || "-"}`,
      `Location: ${input.location || "-"}`,
      "",
      input.message,
    ].join("\n"),
  });

  return { sent: true as const };
}
