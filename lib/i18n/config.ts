export const locales = ["pl", "en", "es", "it"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "pl";

export const localeLabels: Record<Locale, string> = {
  pl: "Polski",
  en: "English",
  es: "Español",
  it: "Italiano",
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
