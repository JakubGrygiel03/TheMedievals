import { clientOffers } from "@/lib/offers";
import type { OfferCard, OfferCardId } from "@/lib/offer-cards";
import {
  goldStemRow,
  paragraphStemBreak,
} from "@/lib/offer-email-ornaments";
import { folioMail as c } from "@/lib/offer-email-palette";
import { offerEmailHeadStyles } from "@/lib/offer-email-styles";
import { CANONICAL_HOST, siteConfig } from "@/lib/seo/site";

/** Always production host in outbound offer cards (local env must not leak). */
const site = `https://${CANONICAL_HOST}`;
const contact = siteConfig.email;
const offers = clientOffers.pl;
const host = CANONICAL_HOST;

export type FolioFrame = "full" | "bands" | "header" | "sides";

function borderImg(file: string, width: number) {
  return `<img src="${site}/email/${file}" width="${width}" alt="" style="display:block;width:100%;max-width:${width}px;height:auto;border:0;outline:none;text-decoration:none;margin:0 auto;" />`;
}

function sideImg(file: string) {
  return `<img src="${site}/email/${file}" width="40" alt="" style="display:block;width:40px;height:auto;border:0;outline:none;text-decoration:none;" />`;
}

function floralChrome(frame: FolioFrame, inner: string) {
  const top =
    frame === "header"
      ? `<tr><td colspan="3" align="center" style="padding:4px 18px 0;font-size:0;line-height:0;">${borderImg("border-floating.png", 480)}</td></tr>`
      : frame === "sides"
        ? ""
        : `<tr><td colspan="3" style="padding:0;font-size:0;line-height:0;">${borderImg("border-top.png", 560)}</td></tr>`;

  const bottom =
    frame === "full" || frame === "bands"
      ? `<tr><td colspan="3" style="padding:0;font-size:0;line-height:0;">${borderImg("border-bottom.png", 560)}</td></tr>`
      : "";

  const left =
    frame === "full" || frame === "sides"
      ? `<td class="folio-side" width="44" valign="top" style="width:44px;padding:12px 0 8px 6px;font-size:0;line-height:0;">${sideImg("border-left.png")}</td>`
      : `<td width="8" style="width:8px;font-size:0;line-height:0;">&nbsp;</td>`;

  const right =
    frame === "full" || frame === "sides"
      ? `<td class="folio-side" width="44" valign="top" style="width:44px;padding:12px 6px 8px 0;font-size:0;line-height:0;">${sideImg("border-right.png")}</td>`
      : `<td width="8" style="width:8px;font-size:0;line-height:0;">&nbsp;</td>`;

  return `${top}
    <tr>
      ${left}
      <td valign="top">${inner}</td>
      ${right}
    </tr>
    ${bottom}`;
}

function shell(options: {
  title: string;
  eyebrow: string;
  bodyHtml: string;
  sample?: boolean;
  goldAccent?: boolean;
  frame?: FolioFrame;
  ctaLabel?: string;
}) {
  const frame = options.frame ?? "bands";
  const topBar = options.goldAccent
    ? `<tr>
        <td class="folio-bar-shimmer" style="height:4px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
      </tr>
      <tr>
        <td style="height:3px;background:${c.vermilion};font-size:0;line-height:0;">&nbsp;</td>
      </tr>`
    : `<tr>
        <td class="folio-bar-shimmer" style="height:5px;background:${c.vermilion};font-size:0;line-height:0;">&nbsp;</td>
      </tr>
      <tr>
        <td style="height:2px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
      </tr>`;

  const badge = options.sample
    ? `<p class="folio-badge" style="margin:0 0 14px;padding:7px 12px;background:${c.parchmentDeep};border:1px solid ${c.ruleStrong};color:${c.vermilion};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;text-align:center;">
        Próbny układ wizytówki
      </p>`
    : "";

  const inner = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
      <tr>
        <td class="folio-pad" style="padding:18px 16px 4px;text-align:center;">
          ${badge}
          <p class="folio-brand" style="margin:0;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${c.vermilion};font-weight:700;">
            The Medievals
          </p>
          <div style="margin:12px 0 2px;">${goldStemRow("short")}</div>
          <p class="folio-ink-soft" style="margin:12px 0 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${c.inkSoft};">
            ${escapeHtml(options.eyebrow)}
          </p>
          <h1 class="folio-title folio-ink" style="margin:14px 0 0;font-size:26px;line-height:1.28;color:${c.ink};font-weight:700;">
            ${escapeHtml(options.title)}
          </h1>
        </td>
      </tr>
      <tr>
        <td class="folio-pad" style="padding:14px 16px 8px;">
          ${options.bodyHtml}
        </td>
      </tr>
      <tr>
        <td class="folio-pad" style="padding:8px 16px 22px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
            <tr>
              <td align="center" style="padding:6px 0 4px;">
                <a class="folio-cta" href="${site}/pl#kontakt" style="display:inline-block;padding:14px 28px;background:${c.vermilion};color:${c.parchment};text-decoration:none;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;border:1px solid ${c.vermilionDeep};">
                  ${escapeHtml(options.ctaLabel ?? "Zapytaj o termin")}
                </a>
              </td>
            </tr>
          </table>
          <div style="margin-top:22px;">${goldStemRow("short")}</div>
          <p class="folio-ink-soft" style="margin:16px 0 0;font-size:12px;line-height:1.6;color:${c.inkSoft};text-align:center;">
            <a class="folio-link" href="mailto:${escapeHtml(contact)}" style="color:${c.vermilion};text-decoration:none;">${escapeHtml(contact)}</a>
            <span style="color:${c.gold};"> · </span>
            <a class="folio-link" href="${site}/pl" style="color:${c.vermilion};text-decoration:none;">${escapeHtml(host)}</a>
          </p>
          <p class="folio-ink-soft" style="margin:8px 0 0;font-size:11px;line-height:1.5;color:${c.inkSoft};text-align:center;font-style:italic;">
            zespół muzyki dawnej · 6 muzyków · instrumenty z epoki
          </p>
        </td>
      </tr>
    </table>`;

  return `<!DOCTYPE html>
<html lang="pl" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no" />
  <meta name="color-scheme" content="light only" />
  <meta name="supported-color-schemes" content="light" />
  <title>${escapeHtml(options.title)}</title>
  ${offerEmailHeadStyles()}
  <!--[if mso]>
  <noscript>
    <xml>
      <o:OfficeDocumentSettings>
        <o:PixelsPerInch>96</o:PixelsPerInch>
      </o:OfficeDocumentSettings>
    </xml>
  </noscript>
  <![endif]-->
</head>
<body class="folio-bg" style="margin:0;padding:0;width:100%;background:${c.parchmentDeep};font-family:Georgia,'Times New Roman',serif;color:${c.ink};">
  <div style="display:none;max-height:0;overflow:hidden;mso-hide:all;">
    The Medievals — ${escapeHtml(options.eyebrow)} · zapytaj o termin
  </div>
  <table role="presentation" class="folio-outer folio-bg" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:${c.parchmentDeep};">
    <tr>
      <td class="folio-frame" align="center" style="padding:28px 12px;">
        <!--[if mso]>
        <table role="presentation" width="560" cellpadding="0" cellspacing="0"><tr><td>
        <![endif]-->
        <table role="presentation" class="folio-shell" width="100%" cellpadding="0" cellspacing="0" style="width:100%;max-width:560px;border:1px solid ${c.ruleStrong};">
          <tr>
            <td class="folio-mat" style="padding:10px;background:${c.parchment};">
              <table role="presentation" class="folio-card" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:${c.panel};border:1px solid ${c.rule};">
                ${topBar}
                ${floralChrome(frame, inner)}
              </table>
            </td>
          </tr>
        </table>
        <!--[if mso]></td></tr></table><![endif]-->
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function offerRow(title: string, body: string) {
  return `
    <tr>
      <td style="padding:16px 0;border-bottom:1px solid ${c.rule};">
        <p class="folio-brand" style="margin:0;font-size:13px;font-weight:700;color:${c.vermilion};letter-spacing:0.08em;text-transform:uppercase;">
          ${escapeHtml(title)}
        </p>
        <p class="folio-body folio-ink" style="margin:8px 0 0;font-size:15px;line-height:1.6;color:${c.ink};">
          ${escapeHtml(body)}
        </p>
      </td>
    </tr>`;
}

function washBox(html: string) {
  return `
    <table role="presentation" class="folio-wash" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:${c.parchmentDeep};border:1px solid ${c.rule};">
      <tr>
        <td class="folio-ink" style="padding:14px 16px;font-size:14px;line-height:1.55;color:${c.ink};">
          ${html}
        </td>
      </tr>
    </table>`;
}

function goldCallout(text: string) {
  return `
    <table role="presentation" class="folio-wash" width="100%" cellpadding="0" cellspacing="0" style="width:100%;background:${c.parchmentDeep};border-left:3px solid ${c.gold};">
      <tr>
        <td class="folio-ink" style="padding:14px 16px;font-size:14px;line-height:1.55;color:${c.ink};font-style:italic;">
          ${escapeHtml(text)}
        </td>
      </tr>
    </table>`;
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function plainFromHtml(html: string) {
  return html
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function renderFolioLetter(options: {
  title: string;
  eyebrow: string;
  bodyHtml: string;
  frame?: FolioFrame;
  ctaLabel?: string;
}) {
  return shell({
    title: options.title,
    eyebrow: options.eyebrow,
    bodyHtml: options.bodyHtml,
    frame: options.frame ?? "bands",
    ctaLabel: options.ctaLabel,
    sample: false,
  });
}

export function buildOfferEmail(
  card: OfferCard,
  options: { sample?: boolean } = {},
): { subject: string; html: string; text: string } {
  const sample = options.sample ?? true;
  const prefix = sample ? "[PRÓBA] " : "";

  const builders: Record<OfferCardId, () => string> = {
    "folio-full": () =>
      shell({
        title: card.title,
        eyebrow: card.eyebrow,
        sample,
        frame: "full",
        bodyHtml: `
          <p class="folio-body folio-ink" style="margin:0;font-size:16px;line-height:1.65;color:${c.ink};text-align:center;">
            Dzień dobry — poniżej skrócona oferta The Medievals, którą możemy dopasować do Waszego wydarzenia.
          </p>
          ${paragraphStemBreak()}
          <p class="folio-ink-soft" style="margin:0;font-size:13px;line-height:1.55;color:${c.inkSoft};font-style:italic;text-align:center;">
            ${escapeHtml(offers.venuesNote)}
          </p>
          ${paragraphStemBreak()}
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
            ${offers.items.map((item) => offerRow(item.title, item.body)).join("")}
          </table>
          ${paragraphStemBreak()}
          <p class="folio-ink-soft" style="margin:0;font-size:13px;line-height:1.55;color:${c.inkSoft};text-align:center;">
            6 zawodowych muzyków · rzemieślnicze repliki instrumentów · stroje z ikonografii XIII i XV w.
          </p>`,
      }),
    "concert-story": () => {
      const item = offers.items[0];
      return shell({
        title: item.title,
        eyebrow: card.eyebrow,
        sample,
        frame: "bands",
        bodyHtml: `
          <p class="folio-body folio-ink" style="margin:0;font-size:16px;line-height:1.7;color:${c.ink};text-align:center;">
            ${escapeHtml(item.body)}
          </p>
          ${paragraphStemBreak()}
          ${washBox("Idealne na: zamki, festiwale, turnieje rycerskie, jarmarki historyczne.")}`,
      });
    },
    "wedding-feast": () => {
      const item = offers.items[3];
      return shell({
        title: item.title,
        eyebrow: card.eyebrow,
        sample,
        goldAccent: true,
        frame: "header",
        bodyHtml: `
          <p class="folio-body folio-ink" style="margin:0;font-size:16px;line-height:1.7;color:${c.ink};text-align:center;">
            ${escapeHtml(item.body)}
          </p>
          ${paragraphStemBreak()}
          ${goldCallout(
            "Kameralnie albo pełnym składem — dopasujemy repertuar i nastrój do ceremonii oraz biesiady.",
          )}`,
      });
    },
    "station-workshop": () => {
      const station = offers.items[1];
      const workshop = offers.items[2];
      return shell({
        title: card.title,
        eyebrow: card.eyebrow,
        sample,
        frame: "sides",
        bodyHtml: `
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
            ${offerRow(station.title, station.body)}
          </table>
          ${paragraphStemBreak()}
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
            ${offerRow(workshop.title, workshop.body)}
          </table>
          ${paragraphStemBreak()}
          <p class="folio-ink-soft" style="margin:0;font-size:14px;line-height:1.55;color:${c.inkSoft};text-align:center;">
            Można zamówić osobno albo jako dodatek do koncertu z opowieścią o instrumentach.
          </p>`,
      });
    },
    "quick-booking": () =>
      shell({
        title: "Zarezerwujcie termin z The Medievals",
        eyebrow: card.eyebrow,
        sample,
        goldAccent: true,
        frame: "bands",
        bodyHtml: `
          <p class="folio-body folio-ink" style="margin:0;font-size:16px;line-height:1.7;color:${c.ink};text-align:center;">
            Jeśli macie już datę i miejsce — odezwijcie się jednym mailem. Odpowiadamy w ciągu 48 godzin.
          </p>
          ${paragraphStemBreak()}
          <table role="presentation" class="folio-wash" width="100%" cellpadding="0" cellspacing="0" style="width:100%;border:1px solid ${c.rule};">
            <tr>
              <td class="folio-ink" style="padding:12px 14px;border-bottom:1px solid ${c.rule};font-size:14px;color:${c.ink};background:${c.parchmentDeep};">
                <span class="folio-brand" style="color:${c.vermilion};font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:11px;">Co potrzebujemy</span><br/>
                data, miejsce, rodzaj wydarzenia
              </td>
            </tr>
            <tr>
              <td class="folio-ink" style="padding:12px 14px;border-bottom:1px solid ${c.rule};font-size:14px;color:${c.ink};">
                <span class="folio-brand" style="color:${c.vermilion};font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:11px;">Kontakt</span><br/>
                <a class="folio-link" href="mailto:${escapeHtml(contact)}" style="color:${c.ink};text-decoration:none;">${escapeHtml(contact)}</a>
              </td>
            </tr>
            <tr>
              <td class="folio-ink" style="padding:12px 14px;font-size:14px;color:${c.ink};">
                <span class="folio-brand" style="color:${c.vermilion};font-weight:700;letter-spacing:0.06em;text-transform:uppercase;font-size:11px;">Formularz</span><br/>
                <a class="folio-link" href="${site}/pl#kontakt" style="color:${c.vermilion};text-decoration:none;">${host}/pl#kontakt</a>
              </td>
            </tr>
          </table>`,
      }),
  };

  const html = builders[card.id]();
  return {
    subject: `${prefix}The Medievals — ${card.title}`,
    html,
    text: plainFromHtml(html),
  };
}
