import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type CodexHeaderProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function CodexHeader({ lang, dictionary }: CodexHeaderProps) {
  const links = [
    { href: `/${lang}#oferta`, label: dictionary.nav.offer },
    { href: `/${lang}#o-nas`, label: dictionary.nav.about },
    { href: `/${lang}#miniatury`, label: dictionary.nav.members },
    { href: `/${lang}#nagrania`, label: dictionary.nav.media },
    { href: `/${lang}#koncerty`, label: dictionary.nav.tour },
  ];

  return (
    <header className="codex-masthead sticky top-0 z-40 border-b border-[var(--rule)] bg-[var(--header-bg)] backdrop-blur-md">
      <nav
        aria-label={dictionary.nav.home}
        className="flex min-h-16 w-full items-stretch gap-3 px-3 py-2 sm:gap-5 sm:px-6 lg:px-8"
      >
        <Link href={`/${lang}`} className="brand-mark">
          The Medievals
        </Link>
        <span aria-hidden="true" className="my-1.5 w-px shrink-0 bg-[var(--ink)]/30" />
        <ul className="flex min-w-0 flex-1 items-center justify-center gap-x-2 font-cinzel text-[13px] font-bold tracking-[0.06em] sm:gap-x-2.5 sm:text-[15px] xl:text-[16px]">
          {links.map((link, index) => (
            <li key={link.href} className="shrink-0">
              <Link
                href={link.href}
                className="nav-chip"
                style={{ animationDelay: `${0.18 + index * 0.07}s` }}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        <span aria-hidden="true" className="my-1.5 w-px shrink-0 bg-[var(--ink)]/30" />
        <div className="flex items-center">
          <LanguageSwitcher lang={lang} label={dictionary.a11y.language} />
        </div>
      </nav>
    </header>
  );
}
