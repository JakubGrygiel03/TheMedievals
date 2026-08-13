import { FolioSection } from "@/components/ui/folio-section";
import { offerCopy } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type OrganizerZoneProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function OrganizerZone({ lang, dictionary }: OrganizerZoneProps) {
  return (
    <FolioSection
      id="organizator"
      eyebrow={dictionary.organizers.eyebrow}
      heading={dictionary.organizers.heading}
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {offerCopy[lang]}
      </p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href="/documents/raider.pdf" className="codex-btn codex-btn-secondary">
          {dictionary.organizers.rider}
        </a>
        <a href="/documents/stage-plan.pdf" className="codex-btn codex-btn-secondary">
          {dictionary.organizers.stagePlan}
        </a>
        <a href={`/${lang}/kontakt`} className="codex-btn codex-btn-primary">
          {dictionary.organizers.cta}
        </a>
      </div>
    </FolioSection>
  );
}
