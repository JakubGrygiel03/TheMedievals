import { clientOffers } from "@/lib/offers";
import type { OfferCard, OfferCardId } from "@/lib/offer-cards";
import { folioMail as c } from "@/lib/offer-email-palette";
import { offerEmailHeadStyles } from "@/lib/offer-email-styles";
import { formatContactPhone, telHref } from "@/lib/contact-phone";
import { CANONICAL_HOST, siteConfig } from "@/lib/seo/site";

/** Always production host in outbound offer cards (local env must not leak). */
const site = `https://${CANONICAL_HOST}`;
const contact = siteConfig.email;
const offers = clientOffers.pl;
const host = CANONICAL_HOST;

export type FolioFrame = "full" | "bands" | "header" | "sides";

function cornerImg(file: string) {
  return `<img src="${site}/email/${file}" width="48" alt="" style="display:block;width:48px;height:auto;border:0;outline:none;text-decoration:none;" />`;
}

function sideImg(file: string) {
  return `<img src="${site}/email/${file}" width="48" alt="" style="display:block;width:48px;height:auto;border:0;outline:none;text-decoration:none;" />`;
}

function floralChrome(inner: string) {
  const band = (file: string) =>
    `<img src="${site}/email/${file}" width="544" alt="" style="display:block;width:544px;max-width:100%;height:auto;border:0;outline:none;text-decoration:none;" />`;

  return `<tr>
      <td width="48" valign="top" style="width:48px;padding:0;font-size:0;line-height:0;">${cornerImg("corner-tl.png")}</td>
      <td width="544" valign="top" style="width:544px;padding:0;font-size:0;line-height:0;">${band("border-top-mid.png")}</td>
      <td width="48" valign="top" style="width:48px;padding:0;font-size:0;line-height:0;">${cornerImg("corner-tr.png")}</td>
    </tr>
    <tr>
      <td class="folio-side" width="48" valign="top" style="width:48px;padding:0;font-size:0;line-height:0;">${sideImg("border-left.png")}</td>
      <td width="544" valign="top" style="width:544px;">${inner}</td>
      <td class="folio-side" width="48" valign="top" style="width:48px;padding:0;font-size:0;line-height:0;">${sideImg("border-right.png")}</td>
    </tr>
    <tr>
      <td width="48" valign="bottom" style="width:48px;padding:0;font-size:0;line-height:0;">${cornerImg("corner-bl.png")}</td>
      <td width="544" valign="bottom" style="width:544px;padding:0;font-size:0;line-height:0;">${band("border-bottom-mid.png")}</td>
      <td width="48" valign="bottom" style="width:48px;padding:0;font-size:0;line-height:0;">${cornerImg("corner-br.png")}</td>
    </tr>`;
}

function shell(options: {
  title: string;
  eyebrow: string;
  bodyHtml: string;
  sample?: boolean;
  goldAccent?: boolean;
  frame?: FolioFrame;
  ctaLabel?: string;
  /** Landscape card: photo and text side by side, stacks under 680px. */
  wide?: boolean;
  /** Skip the centered title block; the body draws its own heading. */
  bare?: boolean;
}) {
  const shellWidth = 640;

  const badge = options.sample
    ? `<p class="folio-badge" style="margin:0 0 14px;padding:7px 12px;background:${c.parchmentDeep};border:1px solid ${c.ruleStrong};color:${c.vermilion};font-size:11px;letter-spacing:0.14em;text-transform:uppercase;text-align:center;">
        Próbny układ wizytówki
      </p>`
    : "";

  const standardInner = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
      <tr>
        <td class="folio-pad" style="padding:18px 16px 4px;text-align:center;">
          ${badge}
          <p class="folio-brand" style="margin:0;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:${c.vermilion};font-weight:700;">
            The Medievals
          </p>
          <p class="folio-ink-soft" style="margin:10px 0 0;font-size:12px;letter-spacing:0.12em;text-transform:uppercase;color:${c.inkSoft};">
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

  const bareInner = `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
      ${
        options.sample
          ? `<tr><td style="padding:12px 16px 0;">${badge}</td></tr>`
          : ""
      }
      <tr>
        <td>${options.bodyHtml}</td>
      </tr>
      <tr>
        <td align="center" style="padding:4px 16px 18px;">
          <a class="folio-cta" href="${site}/pl#kontakt" style="display:inline-block;padding:14px 28px;background:${c.vermilion};color:${c.parchment};text-decoration:none;font-size:12px;letter-spacing:0.16em;text-transform:uppercase;font-weight:700;border:1px solid ${c.vermilionDeep};">
            ${escapeHtml(options.ctaLabel ?? "Zapytaj o termin")}
          </a>
        </td>
      </tr>
    </table>`;

  const inner = options.bare ? bareInner : standardInner;
  const cardBg = c.parchment;

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
        <table role="presentation" width="${shellWidth}" cellpadding="0" cellspacing="0"><tr><td>
        <![endif]-->
        <table role="presentation" class="folio-shell" width="640" cellpadding="0" cellspacing="0" style="width:640px;max-width:100%;border:1px solid ${c.ruleStrong};">
          <tr>
            <td class="folio-mat" style="padding:0;background:${c.parchment};">
              <table role="presentation" class="folio-card" width="640" cellpadding="0" cellspacing="0" style="width:640px;max-width:100%;background:${cardBg};border:0;">
                ${floralChrome(inner)}
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

function widePortraitCard() {
  const digits = formatContactPhone().replace(/\D/g, "");
  const local = digits.startsWith("48") ? digits.slice(2) : digits;
  const phoneLabel =
    local.length === 9
      ? `${local.slice(0, 3)} ${local.slice(3, 6)} ${local.slice(6)}`
      : formatContactPhone();
  const paragraphs = [
    "Jesteśmy sześciorgiem zawodowych muzyków, którzy pasjonują się rekonstrukcją średniowiecza.",
    "Odtwarzamy muzykę oraz stroje od XII do XV wieku. Występujemy podczas rekonstrukcji bitew, pikników historycznych oraz eventów prywatnych, dzieląc się z odbiorcami średniowiecznymi utworami o tematyce świeckiej i sakralnej.",
    "Podczas naszego godzinnego koncertu przybliżamy publiczności grany repertuar, opowiadamy o naszych strojach zrekonstruowanych ze średniowiecznej ikonografii oraz prezentujemy instrumenty, na których gramy, opowiadając o ich pochodzeniu i specyfice.",
    "Dodatkowo oferujemy warsztaty tańca dawnego, angażując tym samym publiczność do czynnego uczestniczenia w naszych występach.",
  ];

  const copy = paragraphs
    .map(
      (paragraph) =>
        `<p class="folio-ink" style="margin:0 0 12px;font-size:15px;line-height:1.45;color:${c.ink};text-align:center;">${escapeHtml(paragraph)}</p>`,
    )
    .join("");

  const link = (href: string, label: string) =>
    `<a class="folio-link" href="${href}" style="color:${c.vermilion};text-decoration:none;font-size:12px;line-height:1.35;">${escapeHtml(label)}</a>`;

  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
      <tr>
        <td class="folio-col" width="42%" valign="top" style="width:42%;padding:16px 8px 12px 14px;">
          <img class="folio-photo" src="${site}/email/ensemble.jpg" width="320" alt="The Medievals" style="display:block;width:100%;max-width:340px;height:auto;border:0;margin:0 auto;" />
        </td>
        <td class="folio-col" width="58%" valign="middle" style="width:58%;padding:18px 18px 10px 10px;">
          <h1 class="folio-ink" style="margin:0 0 14px;font-family:Georgia,'Times New Roman',serif;font-size:32px;line-height:1.1;font-weight:700;text-align:center;color:${c.ink};">
            The Medievals
          </h1>
          ${copy}
        </td>
      </tr>
      <tr>
        <td class="folio-social" colspan="2" align="center" style="padding:4px 16px 8px;">
          <p class="folio-ink-soft" style="margin:0;text-align:center;font-size:13px;line-height:1.8;color:${c.inkSoft};">
            ${link(siteConfig.social.instagram, "Instagram @the_medievals_official")}
            <span style="color:#c9a24a;"> · </span>
            ${link(siteConfig.social.facebook, "Facebook @TheMedievalsofficial")}<br />
            ${link(telHref(), phoneLabel)}
            <span style="color:#c9a24a;"> · </span>
            ${link(siteConfig.social.youtube, "YouTube @themedievals")}
          </p>
        </td>
      </tr>
    </table>`;
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
        title: "The Medievals",
        eyebrow: card.eyebrow,
        sample,
        frame: "bands",
        wide: true,
        bare: true,
        ctaLabel: "Zapytaj o termin",
        bodyHtml: widePortraitCard(),
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

          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="width:100%;">
            ${offerRow(workshop.title, workshop.body)}
          </table>

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
