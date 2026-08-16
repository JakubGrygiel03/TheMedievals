import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { trustPoints } from "@/lib/offers";
import type { Locale } from "@/lib/i18n/config";

export function TrustStrip({ lang }: { lang: Locale }) {
  return (
    <StaggerList className="hero-trust folio-band-inner mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {trustPoints[lang].map((point) => (
        <StaggerItem
          key={point}
          className="trust-spotlight folio-panel flex flex-col items-center px-5 py-7 text-center"
        >
          <div className="tile-lilt">
            <p className="trust-copy font-cinzel">{point}</p>
            <span className="ornament-rule mt-4" aria-hidden="true" />
          </div>
        </StaggerItem>
      ))}
    </StaggerList>
  );
}
