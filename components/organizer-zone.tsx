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
        {dictionary.organizers.lead} {offerCopy[lang]}
      </p>
      <div className="organizer-kit">
        <a href={`/${lang}/notka`} className="codex-btn codex-btn-secondary">
          {dictionary.organizers.pressNote}
        </a>
        <a href="/hero.png" download className="codex-btn codex-btn-secondary">
          {dictionary.organizers.photos}
        </a>
        <a href="/documents/raider.pdf" className="codex-btn codex-btn-secondary">
          {dictionary.organizers.rider}
        </a>
        <a href="/documents/stage-plan.pdf" className="codex-btn codex-btn-secondary">
          {dictionary.organizers.stagePlan}
        </a>
      </div>
    </FolioSection>
  );
}
