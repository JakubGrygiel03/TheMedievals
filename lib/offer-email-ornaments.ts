import { folioMail as c } from "@/lib/offer-email-palette";

/** Email-safe gold vine (Codex stem), fluid + pulse class for capable clients. */
export function goldStemRow(kind: "full" | "short" = "full") {
  if (kind === "short") {
    return `
      <table role="presentation" cellpadding="0" cellspacing="0" align="center" class="folio-stem folio-stem-pulse" style="margin:0 auto;border-collapse:collapse;width:auto;max-width:100%;">
        <tr>
          <td style="width:36px;max-width:12vw;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
          <td class="folio-stem-mark" style="padding:0 5px;font-size:10px;line-height:1;color:${c.gold};vertical-align:middle;background:transparent;">✦</td>
          <td style="width:28px;max-width:9vw;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
          <td class="folio-stem-mark" style="padding:0 6px;font-size:13px;line-height:1;color:${c.gold};vertical-align:middle;background:transparent;">❧</td>
          <td style="width:28px;max-width:9vw;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
          <td class="folio-stem-mark" style="padding:0 5px;font-size:10px;line-height:1;color:${c.gold};vertical-align:middle;background:transparent;">✦</td>
          <td style="width:36px;max-width:12vw;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
        </tr>
      </table>`;
  }

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" align="center" class="folio-stem folio-stem-full folio-stem-pulse" style="margin:0 auto;border-collapse:collapse;width:auto;max-width:100%;">
      <tr>
        <td class="folio-hide-sm" style="width:48px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
        <td class="folio-stem-mark" style="padding:0 4px;font-size:9px;line-height:1;color:${c.goldBright};vertical-align:middle;background:transparent;">•</td>
        <td style="width:32px;max-width:8vw;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
        <td class="folio-stem-mark" style="padding:0 5px;font-size:12px;line-height:1;color:${c.gold};vertical-align:middle;background:transparent;">❧</td>
        <td style="width:40px;max-width:10vw;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
        <td class="folio-stem-mark" style="padding:0 6px;font-size:11px;line-height:1;color:${c.goldBright};vertical-align:middle;background:transparent;">◆</td>
        <td style="width:40px;max-width:10vw;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
        <td class="folio-stem-mark" style="padding:0 5px;font-size:12px;line-height:1;color:${c.gold};vertical-align:middle;background:transparent;">❧</td>
        <td style="width:32px;max-width:8vw;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
        <td class="folio-stem-mark" style="padding:0 4px;font-size:9px;line-height:1;color:${c.goldBright};vertical-align:middle;background:transparent;">•</td>
        <td class="folio-hide-sm" style="width:48px;height:1px;background:${c.gold};font-size:0;line-height:0;">&nbsp;</td>
      </tr>
    </table>`;
}

export function paragraphStemBreak() {
  return `
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin:18px 0;">
      <tr>
        <td align="center">${goldStemRow("short")}</td>
      </tr>
    </table>`;
}
