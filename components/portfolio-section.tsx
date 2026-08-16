"use client";

import { useEffect, useRef, useState } from "react";
import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { useCardSpotlight } from "@/components/motion/use-card-spotlight";
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
  const listRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = listRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const active = useCardSpotlight(venues.length, { enabled: inView });

  return (
    <FolioSection
      id="portfolio"
      eyebrow={dictionary.portfolio.eyebrow}
      heading={dictionary.portfolio.heading}
      tone="wash"
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {dictionary.portfolio.lead}
      </p>
      <div ref={listRef}>
        <StaggerList className="mt-5 grid items-stretch gap-3 sm:grid-cols-2">
          {venues.map((venue, index) => (
            <StaggerItem
              key={venue}
              className={[
                "card-spotlight folio-panel flex min-h-[4.75rem] items-center justify-center px-5 py-5 text-center",
                active === index && inView ? "is-lit" : "",
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
      </div>
    </FolioSection>
  );
}
