import { aboutCopy } from "@/lib/content";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";
import { FolioSection } from "@/components/ui/folio-section";

type AboutSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function AboutSection({ lang, dictionary }: AboutSectionProps) {
  const copy = aboutCopy[lang];
  const [profile, craft] = copy.paragraphs;

  return (
    <FolioSection
      id="o-nas"
      eyebrow={dictionary.about.eyebrow}
      heading={dictionary.about.heading}
      tone="wash"
    >
      <div className="mt-5 grid gap-6 md:grid-cols-2">
        <article className="folio-panel p-6">
          <h3 className="font-cinzel text-lg text-vermilion">
            {dictionary.about.profileHeading}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-[var(--ink-soft)]">
            {profile}
          </p>
        </article>
        <article className="folio-panel p-6">
          <h3 className="font-cinzel text-lg text-vermilion">
            {dictionary.about.craftHeading}
          </h3>
          <p className="mt-3 text-lg leading-relaxed text-[var(--ink-soft)]">
            {craft}
          </p>
        </article>
      </div>
    </FolioSection>
  );
}
