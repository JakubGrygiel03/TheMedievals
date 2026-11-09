"use server";

import { isAdminAuthenticated } from "@/app/actions/admin-auth";
import { getOfferCard } from "@/lib/offer-cards";
import { buildOfferEmail } from "@/lib/offer-email-templates";
import {
  getOfferSampleInbox,
  sendOfferCardEmail,
  type OfferMailResult,
} from "@/lib/resend";
import { clientKey, rateLimit } from "@/lib/security/rate-limit";

export type SendOfferCardState = OfferMailResult & {
  cardId?: string;
};

export async function sendOfferCardSample(
  _prev: SendOfferCardState | null,
  formData: FormData,
): Promise<SendOfferCardState> {
  if (!(await isAdminAuthenticated())) {
    return { ok: false, error: "Brak sesji admina — zaloguj się ponownie." };
  }

  const gate = rateLimit(await clientKey("admin-offer-mail"), 20, 60 * 60 * 1000);
  if (!gate.ok) {
    return {
      ok: false,
      error: "Limit wysyłek osiągnięty — spróbuj za godzinę.",
    };
  }

  const cardId = String(formData.get("cardId") ?? "").trim();
  const toRaw = String(formData.get("to") ?? "").trim();
  const card = getOfferCard(cardId);

  if (!card) {
    return { ok: false, error: "Nieznany układ wizytówki.", cardId };
  }

  const to = toRaw || getOfferSampleInbox();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(to)) {
    return { ok: false, error: "Niepoprawny adres e-mail.", cardId };
  }

  const mail = buildOfferEmail(card, { sample: true });
  const result = await sendOfferCardEmail({
    to,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
  });

  return { ...result, cardId };
}

export async function sendAllOfferCardSamples(
  to = getOfferSampleInbox(),
): Promise<{ sent: number; failed: string[] }> {
  if (!(await isAdminAuthenticated())) {
    return { sent: 0, failed: ["Brak sesji admina"] };
  }

  const gate = rateLimit(await clientKey("admin-offer-mail-batch"), 3, 60 * 60 * 1000);
  if (!gate.ok) {
    return { sent: 0, failed: ["Limit paczek maili osiągnięty"] };
  }

  const { offerCards } = await import("@/lib/offer-cards");
  const failed: string[] = [];
  let sent = 0;

  for (const card of offerCards) {
    const mail = buildOfferEmail(card, { sample: true });
    const result = await sendOfferCardEmail({
      to,
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
    });

    if (result.ok && result.sent) {
      sent += 1;
    } else if (result.ok && !result.sent) {
      failed.push(`${card.id}: brak RESEND_API_KEY`);
    } else if (!result.ok) {
      failed.push(`${card.id}: ${result.error}`);
    }
  }

  return { sent, failed };
}
