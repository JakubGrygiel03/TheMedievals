import { FolioSection } from "@/components/ui/folio-section";
import { repertoireCopy, repertoireTracks } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type RepertoireSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

function TrackColumn({
  tracks,
  startIndex,
}: {
  tracks: readonly string[];
  startIndex: number;
}) {
  return (
    <ol className="repertoire-column" start={startIndex + 1}>
      {tracks.map((track, index) => (
        <li key={`${startIndex + index}-${track}`} className="repertoire-row">
          <span className="track-index">
            {String(startIndex + index + 1).padStart(2, "0")}
          </span>
          <span className="repertoire-title">{track}</span>
        </li>
      ))}
    </ol>
  );
}

export function RepertoireSection({ lang, dictionary }: RepertoireSectionProps) {
  const splitAt = Math.ceil(repertoireTracks.length / 2);
  const left = repertoireTracks.slice(0, splitAt);
  const right = repertoireTracks.slice(splitAt);

  return (
    <FolioSection
      id="program"
      eyebrow={dictionary.repertoire.eyebrow}
      heading={dictionary.repertoire.heading}
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {repertoireCopy[lang]}
      </p>
      <div className="repertoire-columns mt-6">
        <TrackColumn tracks={left} startIndex={0} />
        <div className="repertoire-rule" aria-hidden="true" />
        <TrackColumn tracks={right} startIndex={splitAt} />
      </div>
    </FolioSection>
  );
}
