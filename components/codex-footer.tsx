import { siteConfig } from "@/lib/seo/site";
import type { Dictionary } from "@/lib/i18n/types";

type CodexFooterProps = {
  dictionary: Dictionary;
};

export function CodexFooter({ dictionary }: CodexFooterProps) {
  return (
    <footer className="relative z-20 mt-8 border-t border-[var(--rule)] px-5 py-12 text-center">
      <p className="font-cinzel text-sm tracking-[0.16em] uppercase">The Medievals</p>
      <p className="mt-2 text-[var(--ink-soft)]">{dictionary.footer.tagline}</p>
      <ul className="mt-5 flex flex-wrap justify-center gap-5 font-cinzel text-sm">
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
      <p className="mt-6 text-sm text-[var(--ink-soft)]">{dictionary.footer.rights}</p>
    </footer>
  );
}
