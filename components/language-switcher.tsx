"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
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

const SCROLL_KEY = "medievals-lang-scroll";

export function LanguageSwitcher({ lang, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const rest = pathname.replace(/^\/(pl|en|es|it)/, "") || "";
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => setHash(window.location.hash);
    syncHash();
    window.addEventListener("hashchange", syncHash);
    return () => window.removeEventListener("hashchange", syncHash);
  }, [pathname]);

  useEffect(() => {
    const stored = sessionStorage.getItem(SCROLL_KEY);
    if (stored == null) return;
    sessionStorage.removeItem(SCROLL_KEY);
    const top = Number(stored);
    if (Number.isNaN(top)) return;

    const restore = () => window.scrollTo({ top, left: 0, behavior: "auto" });
    restore();
    requestAnimationFrame(restore);
  }, [pathname]);

  return (
    <nav
      aria-label={label}
      className="flex shrink-0 items-center gap-0.5 sm:gap-1 lg:gap-1.5"
    >
      {locales.map((locale) => {
        const active = locale === lang;
        return (
          <Link
            key={locale}
            href={`/${locale}${rest}${hash}`}
            hrefLang={locale}
            lang={locale}
            scroll={false}
            title={localeLabels[locale]}
            aria-label={localeLabels[locale]}
            aria-current={active ? "page" : undefined}
            onClick={() => {
              sessionStorage.setItem(SCROLL_KEY, String(window.scrollY));
            }}
            className={
              active
                ? "block size-5 overflow-hidden rounded-sm border-2 border-vermilion transition duration-300 sm:size-8 lg:size-10"
                : "block size-5 overflow-hidden rounded-sm border-2 border-[var(--rule)] transition duration-300 hover:scale-105 hover:border-ink/40 sm:size-8 lg:size-10"
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
