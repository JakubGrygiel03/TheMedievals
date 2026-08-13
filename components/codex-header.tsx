import Link from "next/link";
import { LanguageSwitcher } from "@/components/language-switcher";
import { SiteNav } from "@/components/site-nav";
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
        className="flex min-h-16 w-full items-center justify-between gap-2 px-3 py-2 sm:gap-5 sm:px-6 lg:justify-start lg:px-8"
      >
        <Link href={`/${lang}`} className="brand-mark">
          The Medievals
        </Link>
        <span aria-hidden="true" className="hidden h-8 w-px shrink-0 bg-[var(--ink)]/30 lg:block" />
        <SiteNav
          links={links}
          menuLabel={dictionary.a11y.menu}
          closeLabel={dictionary.a11y.closeMenu}
          languages={
            <LanguageSwitcher lang={lang} label={dictionary.a11y.language} />
          }
        />
      </nav>
    </header>
  );
}
