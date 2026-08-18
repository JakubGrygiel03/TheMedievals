import { trustPoints } from "@/lib/offers";
import type { Locale } from "@/lib/i18n/config";

export function TrustStrip({ lang }: { lang: Locale }) {
  return (
    <ul className="hero-trust folio-band-inner mt-5 grid list-none gap-2.5 p-0 sm:mt-8 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4">
      {trustPoints[lang].map((point) => (
        <li
          key={point}
          className="trust-spotlight folio-panel flex flex-col items-center px-3.5 py-3.5 text-center sm:px-5 sm:py-7"
        >
          <div className="tile-lilt">
            <p className="trust-copy font-cinzel">{point}</p>
            <span className="ornament-rule mt-2.5 sm:mt-4" aria-hidden="true" />
          </div>
        </li>
      ))}
    </ul>
  );
}
