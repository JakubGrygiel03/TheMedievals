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
  const [featured, ...rest] = copy.items;

  return (
    <FolioSection
      id="oferta"
      eyebrow={dictionary.offer.eyebrow}
      heading={dictionary.offer.heading}
    >
      <StaggerList className="mt-5 grid list-none gap-5 sm:grid-cols-2">
        {featured ? (
          <StaggerItem
            key={featured.title}
            className="card-spotlight folio-panel h-full p-6 sm:col-span-2"
          >
            <div className="card-spotlight-copy">
              <h3 className="font-cinzel text-lg text-lapis">{featured.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">
                {featured.body}
              </p>
            </div>
          </StaggerItem>
        ) : null}
        {rest.map((item, index) => (
          <StaggerItem
            key={item.title}
            className={[
              "card-spotlight folio-panel h-full p-6",
              index === rest.length - 1 ? "sm:col-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <div className="card-spotlight-copy">
              <h3 className="font-cinzel text-lg text-lapis">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-[var(--ink-soft)]">
                {item.body}
              </p>
            </div>
          </StaggerItem>
        ))}
        <StaggerItem className="folio-panel sm:col-span-2 p-6">
          <p className="text-base leading-relaxed text-[var(--ink-soft)]">
            {copy.venuesNote}
          </p>
        </StaggerItem>
      </StaggerList>
    </FolioSection>
  );
}
