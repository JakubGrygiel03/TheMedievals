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
  const primary = links.slice(0, 3);
  const secondary = links.slice(3);

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
        <div className="flex min-w-0 flex-1 flex-col items-center justify-center gap-1 font-cinzel text-[13px] font-bold tracking-[0.06em] sm:text-[15px] xl:flex-row xl:gap-8 xl:text-[16px]">
          <ul className="flex items-center justify-center gap-x-2 sm:gap-x-3">
            {primary.map((link, index) => (
              <li key={link.href}>
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
          <ul className="flex items-center justify-center gap-x-2 sm:gap-x-3">
            {secondary.map((link, index) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="nav-chip"
                  style={{ animationDelay: `${0.4 + index * 0.07}s` }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <span aria-hidden="true" className="my-1.5 w-px shrink-0 bg-[var(--ink)]/30" />
        <div className="flex items-center">
          <LanguageSwitcher lang={lang} label={dictionary.a11y.language} />
        </div>
      </nav>
    </header>
  );
}
