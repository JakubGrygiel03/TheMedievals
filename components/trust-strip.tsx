import { StaggerItem, StaggerList } from "@/components/motion/reveal";
import { trustPoints } from "@/lib/offers";
import type { Locale } from "@/lib/i18n/config";

export function TrustStrip({ lang }: { lang: Locale }) {
  return (
    <StaggerList className="mx-auto grid max-w-6xl gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
      {trustPoints[lang].map((point) => (
        <StaggerItem
          key={point}
          className="folio-panel flex flex-col items-center px-5 py-7 text-center"
        >
          <p className="trust-copy font-cinzel">{point}</p>
          <span className="ornament-rule mt-4" aria-hidden="true" />
        </StaggerItem>
      ))}
    </StaggerList>
  );
}
