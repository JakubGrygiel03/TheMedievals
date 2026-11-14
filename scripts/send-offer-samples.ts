/**
 * Send all sample offer-card emails via Resend.
 * Usage: npx tsx --env-file=.env.local scripts/send-offer-samples.ts
 */
import { randomUUID } from "node:crypto";
import { Resend } from "resend";
import { offerCards } from "../lib/offer-cards";
import { buildOfferEmail } from "../lib/offer-email-templates";

async function main() {
  const TO = process.argv[2] || "jakubgrygiel.official@gmail.com";
  const FROM =
    process.env.RESEND_FROM?.trim() ||
    "The Medievals <contact@themedievals.pl>";
  const apiKey = process.env.RESEND_API_KEY?.trim();

  if (!apiKey) {
    console.error("Missing RESEND_API_KEY");
    process.exit(1);
  }

  const resend = new Resend(apiKey);
  let ok = 0;

  for (const card of offerCards) {
    const mail = buildOfferEmail(card, { sample: true });
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      subject: mail.subject,
      html: mail.html,
      text: mail.text,
      headers: { "X-Entity-Ref-ID": randomUUID() },
    });

    if (error) {
      console.error(`FAIL ${card.id}:`, error.message);
    } else {
      ok += 1;
      console.log(`OK ${card.id} → ${TO}`);
    }
  }

  console.log(`Done: ${ok}/${offerCards.length}`);
  process.exit(ok === offerCards.length ? 0 : 1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
