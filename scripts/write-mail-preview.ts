import { cpSync, mkdirSync, writeFileSync } from "node:fs";
import { offerCards } from "../lib/offer-cards";
import { buildOfferEmail } from "../lib/offer-email-templates";

mkdirSync("mail-preview", { recursive: true });
cpSync("public/email", "mail-preview/email", { recursive: true });

const frames = [
  { id: "phone", width: 390, height: 844 },
  { id: "tablet", width: 768, height: 1024 },
  { id: "laptop", width: 1280, height: 860 },
];

for (const card of offerCards) {
  const mail = buildOfferEmail(card, { sample: true });
  const html = mail.html.replaceAll("https://www.themedievals.pl/email/", "./email/");
  writeFileSync(`mail-preview/${card.id}.html`, html);
}

const boards = offerCards
  .map((card) => {
    const framesHtml = frames
      .map(
        (frame) => `
        <figure style="margin:0;flex:0 0 auto;">
          <figcaption style="font:12px sans-serif;margin-bottom:8px;">${frame.id} ${frame.width}px</figcaption>
          <iframe src="./${card.id}.html" style="width:${frame.width}px;height:${frame.height}px;border:1px solid #999;background:#e7d7c3;"></iframe>
        </figure>`,
      )
      .join("");
    return `<section style="margin:32px 0;"><h2 style="font:20px sans-serif;">${card.title}</h2><div style="display:flex;gap:24px;align-items:flex-start;">${framesHtml}</div></section>`;
  })
  .join("");

writeFileSync(
  "mail-preview/index.html",
  `<!DOCTYPE html><html><head><meta charset="utf-8"><title>Podgląd maili</title></head><body style="margin:16px;background:#111;color:#fff;">${boards}</body></html>`,
);
console.log("preview ready");
