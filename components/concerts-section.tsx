import Link from "next/link";
import { FolioSection } from "@/components/ui/folio-section";
import { videoClipCopy } from "@/lib/content";
import { formatPremiere } from "@/lib/releases";
import type { Concert } from "@/lib/concerts";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type ConcertsSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
  concerts: Concert[];
};

export function ConcertsSection({
  lang,
  dictionary,
  concerts,
}: ConcertsSectionProps) {
  return (
    <FolioSection
      id="koncerty"
      eyebrow={dictionary.tour.eyebrow}
      heading={dictionary.tour.heading}
    >
      {concerts.length === 0 ? (
        <p className="mt-5 text-lg italic text-[var(--ink-soft)]">{dictionary.tour.empty}</p>
      ) : (
        <ul className="mt-6 space-y-4">
          {concerts.map((concert) => (
            <li key={concert.id} className="folio-panel p-5">
              <h3 className="font-cinzel text-xl">{concert.event_name}</h3>
              <p className="mt-1">
                {concert.city}
                {concert.venue ? ` · ${concert.venue}` : ""} · {concert.event_date}
              </p>
              {concert.ticket_link ? (
                <a href={concert.ticket_link} className="mt-2 inline-block underline">
                  {dictionary.tour.tickets}
                </a>
              ) : null}
            </li>
          ))}
        </ul>
      )}
      <Link
        href={`/${lang}/kontakt`}
        className="codex-btn codex-btn-secondary mt-8"
      >
        {dictionary.tour.request}
      </Link>
      <h3 className="mt-12 font-cinzel text-xl tracking-[0.12em] uppercase">{dictionary.tour.past}</h3>
      <article className="folio-panel mt-4 p-6">
        <p className="font-cinzel text-xs tracking-[0.16em] text-gold uppercase">
          {formatPremiere(videoClipCopy.date, lang)}
        </p>
        <h4 className="mt-2 font-cinzel text-xl">{videoClipCopy.title[lang]}</h4>
        <ul className="mt-4 space-y-1 text-sm text-[var(--ink-soft)]">
          {videoClipCopy.credits.map((line) => (
            <li key={line}>{line}</li>
          ))}
        </ul>
      </article>
    </FolioSection>
  );
}
