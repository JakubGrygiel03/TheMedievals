import { siteConfig } from "@/lib/seo/site";
import type { Dictionary } from "@/lib/i18n/types";
import type { Locale } from "@/lib/i18n/config";

type CodexFooterProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function CodexFooter({ lang, dictionary }: CodexFooterProps) {
  const pageLinks = [
    { href: `/${lang}#oferta`, label: dictionary.nav.offer },
    { href: `/${lang}#nagrania`, label: dictionary.nav.media },
    { href: `/${lang}#program`, label: dictionary.nav.program },
    { href: `/${lang}/notka`, label: dictionary.organizers.pressNote },
    { href: `/${lang}/kontakt`, label: dictionary.nav.contact },
    { href: `/${lang}/prywatnosc`, label: dictionary.footer.privacy },
  ];

  return (
    <footer className="codex-footer relative z-20 overflow-hidden border-t border-[var(--rule)] px-5 pt-12 pb-10 text-center">
      <p className="font-cinzel text-sm tracking-[0.16em] uppercase">The Medievals</p>
      <p className="mt-2 text-[var(--ink-soft)]">{dictionary.footer.tagline}</p>
      <nav aria-label={dictionary.nav.home}>
        <ul className="mt-5 flex flex-wrap justify-center gap-5 font-cinzel text-sm">
          {pageLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="hover:text-vermilion">
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <ul className="mt-5 flex flex-wrap justify-center gap-5 font-cinzel text-sm">
        <li>
          <a href={siteConfig.social.instagram} className="hover:text-vermilion">
            Instagram
          </a>
        </li>
        <li>
          <a href={siteConfig.social.facebook} className="hover:text-vermilion">
            Facebook
          </a>
        </li>
        <li>
          <a href={siteConfig.social.spotify} className="hover:text-vermilion">
            Spotify
          </a>
        </li>
        <li>
          <a href={siteConfig.social.youtube} className="hover:text-vermilion">
            YouTube
          </a>
        </li>
        <li>
          <a href={`mailto:${siteConfig.email}`} className="hover:text-vermilion">
            {siteConfig.email}
          </a>
        </li>
      </ul>
    </footer>
  );
}
