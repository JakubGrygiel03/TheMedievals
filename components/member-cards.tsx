import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { FolioSection } from "@/components/ui/folio-section";
import { members } from "@/lib/members";
import type { Locale } from "@/lib/i18n/config";

type MemberCardsProps = {
  lang: Locale;
  eyebrow: string;
  heading: string;
  lead: string;
};

export function MemberCards({ lang, eyebrow, heading, lead }: MemberCardsProps) {
  return (
    <FolioSection id="miniatury" eyebrow={eyebrow} heading={heading}>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {lead}
      </p>
      <StaggerList className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {members.map((member) => (
          <StaggerItem key={member.id} className="folio-panel p-6">
            <h3 className="font-cinzel text-xl">{member.name}</h3>
            <p className="mt-2 text-[var(--ink-soft)]">{member.instrument[lang]}</p>
          </StaggerItem>
        ))}
      </StaggerList>
    </FolioSection>
  );
}
