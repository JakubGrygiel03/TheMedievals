import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { FolioSection } from "@/components/ui/folio-section";
import { members, percussionists } from "@/lib/members";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type MemberCardsProps = {
  lang: Locale;
  copy: Dictionary["members"];
};

export function MemberCards({ lang, copy }: MemberCardsProps) {
  return (
    <FolioSection id="muzycy" eyebrow={copy.eyebrow} heading={copy.heading} tone="wash">
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {copy.lead}
      </p>

      <h3 className="member-group-title">{copy.coreHeading}</h3>
      <StaggerList className="member-core-grid mt-4">
        {members.map((member) => (
          <StaggerItem key={member.id} className="folio-panel p-6">
            <h4 className="font-cinzel text-xl">{member.name}</h4>
            <p className="mt-2 text-[var(--ink-soft)]">{member.instrument[lang]}</p>
          </StaggerItem>
        ))}
      </StaggerList>

      <h3 className="member-group-title">{copy.percussionHeading}</h3>
      <p className="member-slot-note">{percussionists.note[lang]}</p>
      <StaggerList className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {percussionists.names.map((name) => (
          <StaggerItem key={name} className="folio-panel p-6">
            <h4 className="font-cinzel text-xl">{name}</h4>
            <p className="mt-2 text-[var(--ink-soft)]">
              {percussionists.instrument[lang]}
            </p>
          </StaggerItem>
        ))}
      </StaggerList>
    </FolioSection>
  );
}
