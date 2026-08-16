import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n/config";
import { locales } from "@/lib/i18n/config";
import { localePath } from "@/lib/seo/site";

export const openGraphLocales: Record<Locale, string> = {
  pl: "pl_PL",
  en: "en_GB",
  es: "es_ES",
  it: "it_IT",
};

export function hreflangMap(path = "") {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, localePath(locale, path)]),
    ),
    "x-default": localePath("pl", path),
  } as Record<Locale | "x-default", string>;
}

export function socialMetadata({
  lang,
  title,
  description,
  path = "",
}: {
  lang: Locale;
  title: string;
  description: string;
  path?: string;
}): Pick<Metadata, "openGraph" | "twitter"> {
  const url = localePath(lang, path);
  const alternateLocale = locales
    .filter((locale) => locale !== lang)
    .map((locale) => openGraphLocales[locale]);

  return {
    openGraph: {
      type: "website",
      locale: openGraphLocales[lang],
      alternateLocale,
      url,
      siteName: "The Medievals",
      title,
      description,
      images: [
        {
          url: "/hero.png",
          width: 1024,
          height: 571,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/hero.png"],
    },
  };
}
