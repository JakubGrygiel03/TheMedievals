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

  return (
    <FolioSection
      id="o-nas"
      eyebrow={dictionary.about.eyebrow}
      heading={dictionary.about.heading}
    >
      <div className="mt-8 max-w-3xl space-y-5 text-lg leading-relaxed text-[var(--ink-soft)]">
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 32)}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-8 max-w-3xl border-l-2 border-gold pl-5 text-lg">
        <span className="font-cinzel text-sm tracking-wide text-vermilion">
          {dictionary.about.instrumentsLabel}:{" "}
        </span>
        {copy.instruments}.
      </p>
    </FolioSection>
  );
}
