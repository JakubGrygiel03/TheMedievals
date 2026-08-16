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
    { href: `/${lang}#o-nas`, label: dictionary.nav.about },
    { href: `/${lang}#oferta`, label: dictionary.nav.offer },
    { href: `/${lang}#muzycy`, label: dictionary.nav.members },
    {
      href: `/${lang}#portfolio`,
      label: dictionary.nav.portfolio,
      desktop: false,
    },
    { href: `/${lang}#galeria`, label: dictionary.nav.gallery },
    { href: `/${lang}#program`, label: dictionary.nav.program },
    {
      href: `/${lang}#organizator`,
      label: dictionary.nav.press,
      desktop: lang === "es" || lang === "it" ? false : undefined,
    },
    { href: `/${lang}#kontakt`, label: dictionary.nav.contact },
  ];

  return (
    <header className="codex-masthead z-40">
      <div className="codex-masthead-bar">
        <nav
          aria-label={dictionary.nav.home}
          className="codex-nav min-h-14 w-full min-w-0 max-w-full items-center px-2 py-2 sm:min-h-16 sm:px-5"
        >
          <Link href={`/${lang}`} className="brand-mark">
            The Medievals
          </Link>
          <span aria-hidden="true" className="codex-nav-rule" />
          <SiteNav
            links={links}
            menuLabel={dictionary.a11y.menu}
            closeLabel={dictionary.a11y.closeMenu}
            languages={
              <LanguageSwitcher lang={lang} label={dictionary.a11y.language} />
            }
          />
        </nav>
      </div>
      <div className="h-14 sm:h-16" aria-hidden="true" />
    </header>
  );
}
