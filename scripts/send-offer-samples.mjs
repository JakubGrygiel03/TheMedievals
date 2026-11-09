/**
 * One-shot: send all sample offer-card emails via Resend (Codex palette + gold stems).
 * Usage: node --env-file=.env.local scripts/send-offer-samples.mjs
 */
import { Resend } from "resend";

const TO = process.argv[2] || "jakubgrygiel.official@gmail.com";
const FROM =
  process.env.RESEND_FROM?.trim() || "The Medievals <contact@themedievals.pl>";
const SITE = "https://www.themedievals.pl";
const CONTACT = "contact@themedievals.pl";
const host = "www.themedievals.pl";

const c = {
  parchment: "#faf3e8",
  parchmentDeep: "#f0e4d2",
  panel: "#fffdf8",
  ink: "#1c1917",
  inkSoft: "#5c564e",
  vermilion: "#8b1e1e",
  vermilionDeep: "#6f1616",
  gold: "#c9a24a",
  goldBright: "#e8cc7a",
  rule: "rgba(28,25,23,0.14)",
  ruleStrong: "rgba(139,30,30,0.28)",
};

const offers = {
  venuesNote:
    "Oprawa muzyczna wydarzeń historycznych: rekonstrukcje bitew, turnieje rycerskie, jarmarki, festiwale archeologiczne i koncerty na zamkach.",
  items: [
    {
      title: "Koncert z opowieścią o instrumentach",
      body: "Koncert muzyki od XII do XVI wieku wraz z przedstawieniem instrumentów, ich budowy i pochodzenia oraz przybliżeniem historii i treści granego repertuaru. Dodatkowo istnieje możliwość poprowadzenia warsztatów tańca z tego okresu podczas występu na żywo.",
    },
    {
      title: "Stanowisko muzyczne",
      body: "Prowadzimy przedstawienie instrumentów na wyznaczonym stanowisku, opowiadamy o ich pochodzeniu, pokazujemy technikę gry oraz dajemy możliwość spróbowania swoich sił w grze na wybranym przez nas instrumencie.",
    },
    {
      title: "Warsztaty tańca dawnego",
      body: "Animacja publiczności i nauka tradycyjnych kroków. Osobny warsztat albo dodatek do koncertu.",
    },
    {
      title: "Oprawa muzyczna ślubów i uroczystości",
      body: "Oprawa ślubów historycznych, biesiad, eventów tematycznych, bankietów oraz imprez firmowych. Kameralnie albo w pełnym składzie.",
    },
  ],
};

function esc(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function goldStem(kind = "full") {
  if (kind === "short") {
    return `<table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;border-collapse:collapse;"><tr>
<td style="width:36px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:0 5px;font-size:10px;line-height:1;color:${c.gold};">✦</td>
<td style="width:28px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:0 6px;font-size:13px;line-height:1;color:${c.gold};">❧</td>
<td style="width:28px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:0 5px;font-size:10px;line-height:1;color:${c.gold};">✦</td>
<td style="width:36px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
</tr></table>`;
  }
  return `<table role="presentation" cellpadding="0" cellspacing="0" align="center" style="margin:0 auto;border-collapse:collapse;max-width:420px;"><tr>
<td style="width:48px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:0 4px;font-size:9px;line-height:1;color:${c.goldBright};">•</td>
<td style="width:32px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:0 5px;font-size:12px;line-height:1;color:${c.gold};">❧</td>
<td style="width:40px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:0 6px;font-size:11px;line-height:1;color:${c.goldBright};">◆</td>
<td style="width:40px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:0 5px;font-size:12px;line-height:1;color:${c.gold};">❧</td>
<td style="width:32px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
<td style="padding:0 4px;font-size:9px;line-height:1;color:${c.goldBright};">•</td>
<td style="width:48px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
</tr></table>`;
}

function paraBreak() {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0;"><tr><td align="center">${goldStem("short")}</td></tr></table>`;
}

function shell({ title, eyebrow, bodyHtml, goldAccent }) {
  const topBar = goldAccent
    ? `<tr><td style="height:4px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td></tr><tr><td style="height:3px;background:${c.vermilion};font-size:0;line-height:0;">&nbsp;</td></tr>`
    : `<tr><td style="height:5px;background:${c.vermilion};font-size:0;line-height:0;">&nbsp;</td></tr><tr><td style="height:2px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td></tr>`;

  return `<!DOCTYPE html>
<html lang="pl"><head><meta charset="utf-8"/><meta name="viewport" content="width=device-width, initial-scale=1"/><title>${esc(title)}</title></head>
<body style="margin:0;padding:0;background:${c.parchmentDeep};font-family:Georgia,'Times New Roman',serif;color:${c.ink};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${c.parchmentDeep};padding:28px 12px;"><tr><td align="center">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;border:1px solid ${c.ruleStrong};">
<tr><td style="padding:10px;background:${c.parchment};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${c.panel};border:1px solid ${c.rule};">
${topBar}
<tr><td style="padding:22px 28px 4px;text-align:center;">
<p style="margin:0 0 14px;padding:7px 12px;background:${c.parchmentDeep};border:1px solid ${c.ruleStrong};color:${c.vermilion};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;text-align:center;">Próbny układ wizytówki</p>
<p style="margin:0;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${c.vermilion};font-weight:700;">The Medievals</p>
<div style="margin:12px 0 2px;">${goldStem("full")}</div>
<p style="margin:12px 0 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${c.inkSoft};">${esc(eyebrow)}</p>
<h1 style="margin:14px 0 0;font-size:26px;line-height:1.28;color:${c.ink};font-weight:700;">${esc(title)}</h1>
<div style="margin-top:16px;">${goldStem("full")}</div>
</td></tr>
<tr><td style="padding:14px 28px 8px;">${bodyHtml}</td></tr>
<tr><td style="padding:8px 28px 26px;">
<table role="presentation" width="100%"><tr><td align="center" style="padding:6px 0 4px;">
<a href="${SITE}/pl#kontakt" style="display:inline-block;padding:13px 26px;background:${c.vermilion};color:${c.parchment};text-decoration:none;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;border:1px solid ${c.vermilionDeep};">Zapytaj o termin</a>
</td></tr></table>
<div style="margin-top:22px;">${goldStem("full")}</div>
<p style="margin:16px 0 0;font-size:12px;line-height:1.6;color:${c.inkSoft};text-align:center;">
<a href="mailto:${CONTACT}" style="color:${c.vermilion};text-decoration:none;">${CONTACT}</a>
<span style="color:${c.gold};"> · </span>
<a href="${SITE}/pl" style="color:${c.vermilion};text-decoration:none;">${host}</a>
</p>
<p style="margin:8px 0 0;font-size:11px;line-height:1.5;color:${c.inkSoft};text-align:center;font-style:italic;">zespół muzyki dawnej · 6 muzyków · instrumenty z epoki</p>
</td></tr>
</table></td></tr></table></td></tr></table>
</body></html>`;
}

function offerRow(title, body) {
  return `<tr><td style="padding:16px 0;border-bottom:1px solid ${c.rule};">
<p style="margin:0;font-size:13px;font-weight:700;color:${c.vermilion};letter-spacing:0.08em;text-transform:uppercase;">${esc(title)}</p>
<p style="margin:8px 0 0;font-size:15px;line-height:1.6;color:${c.ink};">${esc(body)}</p>
</td></tr>`;
}

const cards = [
  {
    id: "folio-full",
    subject: "[PRÓBA] The Medievals — Pełna oferta zespołu",
    html: shell({
      title: "Pełna oferta zespołu",
      eyebrow: "Wizytówka zbiorcza",
      bodyHtml: `<p style="margin:0;font-size:16px;line-height:1.65;color:${c.ink};text-align:center;">Dzień dobry — poniżej skrócona oferta The Medievals, którą możemy dopasować do Waszego wydarzenia.</p>
${paraBreak()}
<p style="margin:0;font-size:13px;line-height:1.55;color:${c.inkSoft};font-style:italic;text-align:center;">${esc(offers.venuesNote)}</p>
${paraBreak()}
<table role="presentation" width="100%">${offers.items.map((i) => offerRow(i.title, i.body)).join("")}</table>
${paraBreak()}
<p style="margin:0;font-size:13px;line-height:1.55;color:${c.inkSoft};text-align:center;">6 zawodowych muzyków · rzemieślnicze repliki instrumentów · stroje z ikonografii XIII i XV w.</p>`,
    }),
  },
  {
    id: "concert-story",
    subject: "[PRÓBA] The Medievals — Koncert z opowieścią",
    html: shell({
      title: offers.items[0].title,
      eyebrow: "Wizytówka koncertowa",
      bodyHtml: `<p style="margin:0;font-size:16px;line-height:1.7;color:${c.ink};text-align:center;">${esc(offers.items[0].body)}</p>
${paraBreak()}
<table role="presentation" width="100%" style="background:${c.parchmentDeep};border:1px solid ${c.rule};"><tr><td style="padding:14px 16px;font-size:14px;line-height:1.55;color:${c.ink};">Idealne na: zamki, festiwale, turnieje rycerskie, jarmarki historyczne.</td></tr></table>`,
    }),
  },
  {
    id: "wedding-feast",
    subject: "[PRÓBA] The Medievals — Śluby i uroczystości",
    html: shell({
      title: offers.items[3].title,
      eyebrow: "Wizytówka ceremonialna",
      goldAccent: true,
      bodyHtml: `<p style="margin:0;font-size:16px;line-height:1.7;color:${c.ink};text-align:center;">${esc(offers.items[3].body)}</p>
${paraBreak()}
<table role="presentation" width="100%" style="background:${c.parchmentDeep};border-left:3px solid ${c.gold};"><tr><td style="padding:14px 16px;font-size:14px;line-height:1.55;color:${c.ink};font-style:italic;">Kameralnie albo pełnym składem — dopasujemy repertuar i nastrój do ceremonii oraz biesiady.</td></tr></table>`,
    }),
  },
  {
    id: "station-workshop",
    subject: "[PRÓBA] The Medievals — Stanowisko i warsztaty",
    html: shell({
      title: "Stanowisko i warsztaty",
      eyebrow: "Wizytówka edukacyjna",
      bodyHtml: `<table role="presentation" width="100%">${offerRow(offers.items[1].title, offers.items[1].body)}</table>
${paraBreak()}
<table role="presentation" width="100%">${offerRow(offers.items[2].title, offers.items[2].body)}</table>
${paraBreak()}
<p style="margin:0;font-size:14px;line-height:1.55;color:${c.inkSoft};text-align:center;">Można zamówić osobno albo jako dodatek do koncertu z opowieścią o instrumentach.</p>`,
    }),
  },
  {
    id: "quick-booking",
    subject: "[PRÓBA] The Medievals — Szybkie zapytanie o termin",
    html: shell({
      title: "Zarezerwujcie termin z The Medievals",
      eyebrow: "Wizytówka bookingowa",
      goldAccent: true,
      bodyHtml: `<p style="margin:0;font-size:16px;line-height:1.7;color:${c.ink};text-align:center;">Jeśli macie już datę i miejsce — odezwijcie się jednym mailem. Odpowiadamy w ciągu 48 godzin.</p>
${paraBreak()}
<table role="presentation" width="100%" style="border:1px solid ${c.rule};">
<tr><td style="padding:12px 14px;border-bottom:1px solid ${c.rule};font-size:14px;color:${c.ink};background:${c.parchmentDeep};"><span style="color:${c.vermilion};font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:11px;">Co potrzebujemy</span><br/>data, miejsce, rodzaj wydarzenia</td></tr>
<tr><td style="padding:12px 14px;border-bottom:1px solid ${c.rule};font-size:14px;color:${c.ink};"><span style="color:${c.vermilion};font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:11px;">Kontakt</span><br/><a href="mailto:${CONTACT}" style="color:${c.ink};text-decoration:none;">${CONTACT}</a></td></tr>
<tr><td style="padding:12px 14px;font-size:14px;color:${c.ink};"><span style="color:${c.vermilion};font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:11px;">Formularz</span><br/><a href="${SITE}/pl#kontakt" style="color:${c.vermilion};text-decoration:none;">${host}/pl#kontakt</a></td></tr>
</table>`,
    }),
  },
];

const apiKey = process.env.RESEND_API_KEY?.trim();
if (!apiKey) {
  console.error("Missing RESEND_API_KEY");
  process.exit(1);
}

const resend = new Resend(apiKey);
let ok = 0;

for (const card of cards) {
  const text = card.html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const { error } = await resend.emails.send({
    from: FROM,
    to: [TO],
    subject: card.subject,
    html: card.html,
    text,
  });
  if (error) {
    console.error(`FAIL ${card.id}:`, error.message);
  } else {
    ok += 1;
    console.log(`OK ${card.id} → ${TO}`);
  }
}

console.log(`Done: ${ok}/${cards.length}`);
process.exit(ok === cards.length ? 0 : 1);
