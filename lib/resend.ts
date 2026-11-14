import { randomUUID } from "crypto";
import { Resend } from "resend";
import { eventLabels } from "@/lib/admin-labels";
import { bookingConfirmationMail } from "@/lib/booking-confirmation";
import { siteConfig } from "@/lib/seo/site";
import type { ContactInput } from "@/lib/contact-schema";
import type { Locale } from "@/lib/i18n/config";

/** Oficjalny adres na stronie i jako nadawca Resend (contact@…). */
const BOOKING_FROM = siteConfig.email;
/** Prawdziwa skrzynka zespołu — tu lądują maile z formularza. */
const MEDIEVALS_GMAIL = siteConfig.inbox;
/** Twój prywatny adres — tylko tropy do prowizji. */
const COMMISSION_INBOX = "jakubgrygiel.official@gmail.com";

function extraRecipients() {
  return (process.env.RESEND_TO ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(
      (value) =>
        value &&
        value !== COMMISSION_INBOX &&
        value !== MEDIEVALS_GMAIL &&
        value !== BOOKING_FROM,
    );
}

async function sendNotice(options: {
  subject: string;
  text: string;
  html?: string;
  replyTo?: string;
  to: string[];
  /** Stops Gmail from folding the card into the previous mail as quoted text. */
  standalone?: boolean;
}) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from =
    process.env.RESEND_FROM?.trim() || `The Medievals <${BOOKING_FROM}>`;
  const to = [...new Set(options.to.filter(Boolean))];

  if (!apiKey || to.length === 0) {
    return { sent: false as const };
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to,
    replyTo: options.replyTo,
    subject: options.subject,
    text: options.text,
    ...(options.html ? { html: options.html } : {}),
    ...(options.standalone
      ? { headers: { "X-Entity-Ref-ID": randomUUID() } }
      : {}),
  });

  if (error) {
    throw new Error(error.message);
  }

  return { sent: true as const };
}

export async function sendBookingEmail(input: ContactInput, lang: Locale = "pl") {
  const kind =
    eventLabels[input.event_type as keyof typeof eventLabels] ?? input.event_type;

  const text = [
    "Nowe zapytanie z formularza The Medievals.",
    "",
    `Imię: ${input.sender_name}`,
    `E-mail: ${input.email}`,
    `Telefon: ${input.phone || "-"}`,
    `Rodzaj: ${kind}`,
    `Data wydarzenia: ${input.event_date || "-"}`,
    `Miejsce: ${input.location || "-"}`,
    "",
    "Treść:",
    input.message,
  ].join("\n");

  const booking = await sendNotice({
    to: [MEDIEVALS_GMAIL, ...extraRecipients()],
    subject: `Zapytanie: ${kind} — ${input.sender_name}`,
    replyTo: input.email,
    text,
  });

  await sendNotice({
    to: [COMMISSION_INBOX],
    subject: `Prowizja — formularz: ${kind} — ${input.sender_name}`,
    replyTo: input.email,
    text: `Kopia do rozliczenia prowizji.\n\n${text}`,
  });

  if (booking.sent) {
    const confirmation = bookingConfirmationMail(input, lang);
    try {
      await sendNotice({
        to: [input.email],
        subject: confirmation.subject,
        replyTo: MEDIEVALS_GMAIL,
        text: confirmation.text,
        html: confirmation.html,
      });
    } catch (error) {
      console.error("booking confirmation email", error);
    }
  }

  return booking;
}

export async function sendPhoneClickEmail(input: {
  phone: string;
  page?: string;
}) {
  const text = [
    "Ktoś kliknął numer telefonu na stronie The Medievals, żeby zadzwonić.",
    "",
    `Numer: ${input.phone}`,
    `Strona: ${input.page || "-"}`,
  ].join("\n");

  const booking = await sendNotice({
    to: [MEDIEVALS_GMAIL, ...extraRecipients()],
    subject: `Kliknięcie numeru ${input.phone}`,
    text,
  });

  await sendNotice({
    to: [COMMISSION_INBOX],
    subject: `Prowizja — kliknięcie numeru ${input.phone}`,
    text: `Kopia do rozliczenia prowizji.\n\n${text}`,
  });

  return booking;
}

export type OfferMailResult =
  | { ok: true; sent: true; to: string }
  | { ok: true; sent: false; reason: "missing_resend" }
  | { ok: false; error: string };

/** Sends an HTML offer “business card” email (sample layouts for organizers). */
export async function sendOfferCardEmail(input: {
  subject: string;
  html: string;
  text: string;
  to?: string;
}): Promise<OfferMailResult> {
  const to = (input.to?.trim() || COMMISSION_INBOX).toLowerCase();

  try {
    const result = await sendNotice({
      to: [to],
      subject: input.subject,
      text: input.text,
      html: input.html,
      standalone: true,
    });

    if (!result.sent) {
      return { ok: true, sent: false, reason: "missing_resend" };
    }

    return { ok: true, sent: true, to };
  } catch (error) {
    return {
      ok: false,
      error: error instanceof Error ? error.message : "Send failed",
    };
  }
}

export function getOfferSampleInbox() {
  return COMMISSION_INBOX;
}
