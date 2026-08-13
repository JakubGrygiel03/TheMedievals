import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { FolioSection } from "@/components/ui/folio-section";
import { siteConfig } from "@/lib/seo/site";
import { formatPremiere, releases } from "@/lib/releases";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type ReleasesSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function ReleasesSection({ lang, dictionary }: ReleasesSectionProps) {
  return (
    <FolioSection
      id="wydawnictwa"
      eyebrow={dictionary.media.eyebrow}
      heading={dictionary.media.heading}
    >
      <StaggerList className="mt-10 grid gap-6 lg:grid-cols-3">
        {releases.map((release) => (
          <StaggerItem key={release.id} className="folio-panel flex flex-col p-6">
            <p className="font-cinzel text-[11px] tracking-[0.18em] text-gold uppercase">
              {release.albumType} · {dictionary.media.premiere}{" "}
              {formatPremiere(release.premiere, lang)}
            </p>
            <h3 className="mt-3 font-cinzel text-xl">{release.title}</h3>
            <p className="mt-4 flex-1 text-base leading-relaxed text-[var(--ink-soft)]">
              {release.description[lang]}
            </p>
            <p className="mt-4 text-sm italic text-[var(--ink-soft)]">
              {release.credits[lang]}
            </p>
            <a
              href={siteConfig.social.spotify}
              className="mt-5 font-cinzel text-xs tracking-[0.18em] text-gold uppercase"
            >
              {dictionary.media.listen}
            </a>
          </StaggerItem>
        ))}
      </StaggerList>
    </FolioSection>
  );
}
