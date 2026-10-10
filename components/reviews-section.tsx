import { FolioSection } from "@/components/ui/folio-section";
import { reviewsCopy } from "@/lib/reviews";
import type { Locale } from "@/lib/i18n/config";

type ReviewsSectionProps = {
  lang: Locale;
};

export function ReviewsSection({ lang }: ReviewsSectionProps) {
  const copy = reviewsCopy[lang];

  return (
    <FolioSection
      id="recenzje"
      eyebrow={copy.eyebrow}
      heading={copy.heading}
      tone="wash"
    >
      <div className="mt-6 grid gap-8">
        {copy.groups.map((group) => (
          <div key={group.lead} className="grid gap-4">
            <p className="max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
              {group.lead}
            </p>
            <ul className="grid list-none gap-4 lg:grid-cols-2">
              {group.quotes.map((quote) => (
                <li key={`${quote.author ?? "anon"}-${quote.text.slice(0, 40)}`}>
                  <blockquote className="folio-panel flex h-full flex-col p-6">
                    {quote.title ? (
                      <p className="font-cinzel text-sm tracking-[0.12em] text-gold uppercase">
                        {quote.title}
                      </p>
                    ) : null}
                    <p
                      className={`review-quote text-lg leading-relaxed text-[var(--ink)] ${
                        quote.title ? "mt-3" : ""
                      }`}
                    >
                      „{quote.text}”
                    </p>
                    {quote.author ? (
                      <footer className="mt-4 font-cinzel text-sm tracking-[0.06em] text-vermilion not-italic">
                        — {quote.author}
                      </footer>
                    ) : null}
                    <a
                      href={quote.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-auto pt-5 font-cinzel text-xs tracking-[0.14em] text-gold uppercase underline-offset-4 hover:underline"
                    >
                      {quote.readLabel}
                    </a>
                  </blockquote>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </FolioSection>
  );
}
