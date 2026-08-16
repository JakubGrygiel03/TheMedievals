"use client";

import { useEffect, useRef, useState } from "react";
import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { useCardSpotlight } from "@/components/motion/use-card-spotlight";
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

  // Fixed reading order: koncert → festiwale → wydarzenia → warsztaty → uroczystości
  const active = useCardSpotlight(copy.items.length, { enabled: inView });

  return (
    <FolioSection
      id="oferta"
      eyebrow={dictionary.offer.eyebrow}
      heading={dictionary.offer.heading}
    >
      <p className="mt-6 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {copy.lead}
      </p>
      <div ref={listRef}>
        <StaggerList className="mt-5 grid list-none gap-5 sm:grid-cols-2">
          {copy.items.map((item, index) => (
            <StaggerItem
              key={item.title}
              className={[
                "card-spotlight folio-panel h-full p-6",
                item.featured ? "sm:col-span-2" : "",
                active === index && inView ? "is-lit" : "",
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
        </StaggerList>
      </div>
    </FolioSection>
  );
}
