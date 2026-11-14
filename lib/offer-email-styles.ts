import { folioMail as d } from "@/lib/offer-email-palette";

/**
 * Responsive + light motion for offer emails.
 * Always cream parchment — no dark-mode flip (organizers see day Codex only).
 */
export function offerEmailHeadStyles() {
  return `
<style type="text/css">
  html, body { margin: 0 !important; padding: 0 !important; width: 100% !important; }
  body { -webkit-text-size-adjust: 100%; -ms-text-size-adjust: 100%; }
  table, td { border-collapse: collapse; mso-table-lspace: 0pt; mso-table-rspace: 0pt; }
  img { border: 0; outline: none; text-decoration: none; -ms-interpolation-mode: bicubic; }
  a { text-decoration: none; }
  .folio-outer { width: 100% !important; }
  .folio-shell { width: 100% !important; max-width: 640px !important; }
  .folio-band { width: 100% !important; max-width: 640px !important; height: auto !important; }
  .folio-pad { padding-left: 28px !important; padding-right: 28px !important; }
  .folio-title { font-size: 26px !important; line-height: 1.28 !important; }
  .folio-body { font-size: 16px !important; line-height: 1.7 !important; }
  .folio-cta {
    display: inline-block !important;
    padding: 14px 28px !important;
    transition: background-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
  }
  .folio-cta:hover {
    background-color: ${d.vermilionDeep} !important;
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(139, 30, 30, 0.28);
  }
  .folio-stem-pulse {
    animation: folioStemPulse 3.6s ease-in-out infinite;
  }
  .folio-bar-shimmer {
    background-image: linear-gradient(90deg, ${d.vermilion} 0%, ${d.gold} 45%, ${d.vermilion} 100%);
    background-size: 200% 100%;
    animation: folioBarShimmer 5s linear infinite;
  }
  @keyframes folioStemPulse {
    0%, 100% { opacity: 0.72; }
    50% { opacity: 1; }
  }
  @keyframes folioBarShimmer {
    0% { background-position: 0% 50%; }
    100% { background-position: 200% 50%; }
  }
  .folio-card-dark { background-color: #140e0c !important; color: #f4efe6 !important; }
  .folio-on-dark { color: #f4efe6 !important; }
  .folio-on-dark-soft { color: #e4d5c4 !important; }
  @media only screen and (max-width: 680px) {
    .folio-frame { padding: 14px 8px !important; }
    .folio-mat { padding: 6px !important; }
    .folio-pad { padding-left: 16px !important; padding-right: 16px !important; }
    .folio-title { font-size: 22px !important; line-height: 1.3 !important; }
    .folio-body { font-size: 15px !important; }
    .folio-shell { width: 100% !important; }
    .folio-photo { width: 100% !important; max-width: 100% !important; height: auto !important; }
    .folio-social { display: block !important; width: 100% !important; }
    .folio-col {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
    }
    .folio-side {
      display: none !important;
      width: 0 !important;
      max-width: 0 !important;
      overflow: hidden !important;
      font-size: 0 !important;
      line-height: 0 !important;
    }
    .folio-cta {
      display: block !important;
      width: 100% !important;
      max-width: 100% !important;
      box-sizing: border-box !important;
      text-align: center !important;
      padding: 16px 18px !important;
    }
    .folio-stem-full { max-width: 92% !important; }
    .folio-hide-sm { display: none !important; width: 0 !important; height: 0 !important; overflow: hidden !important; font-size: 0 !important; line-height: 0 !important; }
  }
  @media (prefers-reduced-motion: reduce) {
    .folio-stem-pulse, .folio-bar-shimmer { animation: none !important; }
    .folio-cta { transition: none !important; }
  }
  /* Force cream even when the client tries a dark skin. */
  .folio-bg { background-color: ${d.parchmentDeep} !important; }
  .folio-mat { background-color: ${d.parchment} !important; }
  .folio-card { background-color: ${d.panel} !important; }
  .folio-ink { color: ${d.ink} !important; }
  .folio-ink-soft { color: ${d.inkSoft} !important; }
  .folio-brand, .folio-link { color: ${d.vermilion} !important; }
  .folio-wash { background-color: ${d.parchmentDeep} !important; color: ${d.ink} !important; }
  .folio-badge { background-color: ${d.parchmentDeep} !important; color: ${d.vermilion} !important; }
  .folio-cta { background-color: ${d.vermilion} !important; color: ${d.parchment} !important; }
  .folio-mat-dark { background-color: #1c1410 !important; }
  .folio-card.folio-card-dark { background-color: #140e0c !important; color: #f4efe6 !important; }
  .folio-on-dark { color: #f4efe6 !important; }
  .folio-on-dark-soft { color: #e4d5c4 !important; }
</style>
<!--[if mso]>
<style type="text/css">
  body, table, td, a { font-family: Georgia, serif !important; }
</style>
<![endif]-->`;
}
