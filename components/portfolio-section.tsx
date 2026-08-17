import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { FolioSection } from "@/components/ui/folio-section";
import { portfolioVenues } from "@/lib/portfolio";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type PortfolioSectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function PortfolioSection({ lang, dictionary }: PortfolioSectionProps) {
  const venues = portfolioVenues[lang];

  return (
    <FolioSection
      id="portfolio"
      eyebrow={dictionary.portfolio.eyebrow}
      heading={dictionary.portfolio.heading}
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {dictionary.portfolio.lead}
      </p>
      <StaggerList className="mt-5 grid items-stretch gap-3 sm:grid-cols-2">
        {venues.map((venue, index) => (
          <StaggerItem
            key={venue}
            className={[
              "card-spotlight folio-panel flex min-h-[4.75rem] items-center justify-center px-5 py-5 text-center",
              index === venues.length - 1 ? "sm:col-span-2" : "",
            ]
              .filter(Boolean)
              .join(" ")}
          >
            <p className="card-spotlight-copy font-cinzel text-base leading-snug text-balance">
              {venue}
            </p>
          </StaggerItem>
        ))}
      </StaggerList>
    </FolioSection>
  );
}
