import { FolioSection } from "@/components/ui/folio-section";
import { faqCopy } from "@/lib/seo/faq";
import type { Locale } from "@/lib/i18n/config";

type FaqSectionProps = {
  lang: Locale;
};

export function FaqSection({ lang }: FaqSectionProps) {
  const copy = faqCopy[lang];

  return (
    <FolioSection id="faq" eyebrow={copy.eyebrow} heading={copy.heading} tone="wash">
      <dl className="mt-6 space-y-4">
        {copy.items.map((item) => (
          <div key={item.question} className="folio-panel p-6">
            <dt>
              <h3 className="font-cinzel text-lg text-lapis">{item.question}</h3>
            </dt>
            <dd className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">
              {item.answer}
            </dd>
          </div>
        ))}
      </dl>
    </FolioSection>
  );
}
