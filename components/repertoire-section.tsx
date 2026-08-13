import { FolioSection } from "@/components/ui/folio-section";
import { repertoireCopy, repertoireTracks } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type RepertoireSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function RepertoireSection({ lang, dictionary }: RepertoireSectionProps) {
  return (
    <FolioSection
      id="program"
      eyebrow={dictionary.repertoire.eyebrow}
      heading={dictionary.repertoire.heading}
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {repertoireCopy[lang]}
      </p>
      <ol className="mt-5 grid grid-cols-1 gap-x-10 sm:grid-cols-2">
        {repertoireTracks.map((track, index) => (
          <li
            key={track}
            className="flex gap-3 border-b border-[var(--rule)] py-2"
          >
            <span className="track-index">{String(index + 1).padStart(2, "0")}</span>
            <span>{track}</span>
          </li>
        ))}
      </ol>
    </FolioSection>
  );
}
