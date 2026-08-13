"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/lib/i18n/config";

type LanguageSwitcherProps = {
  lang: Locale;
  label: string;
};

const shields: Record<Locale, string> = {
  pl: "/lang/pl-sm.jpg",
  en: "/lang/en-sm.jpg",
  es: "/lang/es-3-sm.jpg",
  it: "/lang/it-sm.jpg",
};

export function LanguageSwitcher({ lang, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(pl|en|es|it)/, "") || "";

  return (
    <nav
      aria-label={label}
      className="grid shrink-0 grid-cols-2 gap-1 lg:flex lg:items-center lg:gap-1.5"
    >
      {locales.map((locale) => {
        const active = locale === lang;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest}`}
            hrefLang={locale}
            lang={locale}
            title={localeLabels[locale]}
            aria-label={localeLabels[locale]}
            aria-current={active ? "page" : undefined}
            className={
              active
                ? "block size-8 overflow-hidden rounded-sm border-2 border-vermilion transition duration-300 sm:size-9 lg:size-10"
                : "block size-8 overflow-hidden rounded-sm border-2 border-[var(--rule)] transition duration-300 hover:scale-105 hover:border-ink/40 sm:size-9 lg:size-10"
            }
          >
            <Image
              src={shields[locale]}
              alt={localeLabels[locale]}
              width={192}
              height={192}
              className="size-full object-cover"
            />
          </Link>
        );
      })}
    </nav>
  );
}
