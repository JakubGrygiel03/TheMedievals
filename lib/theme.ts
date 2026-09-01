export const THEME_STORAGE_KEY = "medievals-theme";

export type SiteTheme = "burgundy" | "day";

export function themeFromStorage(value: string | null): SiteTheme {
  return value === "day" ? "day" : "burgundy";
}
