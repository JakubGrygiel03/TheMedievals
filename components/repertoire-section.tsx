"use client";

import { useId, useMemo, useState } from "react";
import { FolioSection } from "@/components/ui/folio-section";
import { CodexButton } from "@/components/ui/codex-button";
import {
  getBalancedRepertoireSplit,
  repertoireCopy,
  repertoireTracks,
} from "@/lib/content";
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
  const [expanded, setExpanded] = useState(false);
  const panelId = useId();
  const splitAt = useMemo(() => getBalancedRepertoireSplit(repertoireTracks), []);
  const left = repertoireTracks.slice(0, splitAt);
  const right = repertoireTracks.slice(splitAt);

  return (
    <FolioSection
      id="program"
      eyebrow={dictionary.repertoire.eyebrow}
      heading={dictionary.repertoire.heading}
      tone="wash"
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {repertoireCopy[lang]}
      </p>
      <CodexButton
        type="button"
        variant="gold"
        className="repertoire-toggle mt-5"
        aria-expanded={expanded}
        aria-controls={panelId}
        onClick={() => setExpanded((open) => !open)}
      >
        <span className="repertoire-toggle-label">
          {expanded ? dictionary.repertoire.collapse : dictionary.repertoire.expand}
        </span>
        <span
          className={`repertoire-toggle-icon${expanded ? " repertoire-toggle-icon--open" : ""}`}
          aria-hidden="true"
        />
      </CodexButton>
      <div
        id={panelId}
        className={`repertoire-panel${expanded ? " repertoire-panel--open" : ""}`}
        hidden={!expanded}
      >
        <div className="repertoire-columns mt-6">
          <TrackColumn tracks={left} startIndex={0} />
          <div className="repertoire-rule" aria-hidden="true" />
          <TrackColumn tracks={right} startIndex={splitAt} />
        </div>
      </div>
    </FolioSection>
  );
}
