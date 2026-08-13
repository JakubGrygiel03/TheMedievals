import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { FolioSection } from "@/components/ui/folio-section";
import { clientOffers } from "@/lib/offers";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type OfferSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function OfferSection({ lang, dictionary }: OfferSectionProps) {
  const copy = clientOffers[lang];

  return (
    <FolioSection
      id="oferta"
      eyebrow={dictionary.offer.eyebrow}
      heading={dictionary.offer.heading}
    >
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {copy.lead}
      </p>
      <StaggerList className="mt-5 grid gap-5 md:grid-cols-3">
        {copy.items.map((item) => (
          <StaggerItem key={item.title} className="folio-panel p-6">
            <h3 className="font-cinzel text-lg text-lapis">{item.title}</h3>
            <p className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">
              {item.body}
            </p>
          </StaggerItem>
        ))}
      </StaggerList>
    </FolioSection>
  );
}
