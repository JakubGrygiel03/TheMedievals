import Link from "next/link";
import { Reveal } from "@/components/motion/reveal";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type BookingCtaProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function BookingCta({ lang, dictionary }: BookingCtaProps) {
  return (
    <Reveal>
    <section className="relative z-20 mx-auto max-w-6xl px-5 text-center">
      <EditorialHeading
        eyebrow={dictionary.booking.eyebrow}
        heading={dictionary.booking.heading}
        goldWord={dictionary.booking.goldWord}
      />
      <p className="mx-auto mt-8 max-w-xl text-lg text-[var(--ink-soft)]">
        {dictionary.booking.lead}
      </p>
      <Link href={`/${lang}/kontakt`} className="codex-btn codex-btn-primary mt-10">
        {dictionary.booking.cta}
      </Link>
    </section>
    </Reveal>
  );
}
