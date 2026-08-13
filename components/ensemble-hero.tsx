import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type EnsembleHeroProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function EnsembleHero({ lang, dictionary }: EnsembleHeroProps) {
  return (
    <section className="pt-3 pb-8 sm:pt-4">
      <h1 className="sr-only">The Medievals</h1>
      <div className="hero-folio">
        <Image
          src="/hero.png"
          alt={dictionary.hero.heading}
          width={1024}
          height={571}
          priority
          className="h-auto w-full"
          sizes="(min-width: 1024px) calc(100vw - min(17rem, 19vw)), 100vw"
        />
      </div>
      <p className="hero-pitch mx-auto mt-4 px-6 text-center font-semibold text-[1.25rem] leading-[1.5] text-ink sm:text-[1.4rem] md:text-[1.55rem]">
        {dictionary.hero.pitch}
      </p>
      <div className="hero-actions mt-4 flex flex-wrap justify-center gap-3 px-5">
        <Link href={`/${lang}/kontakt`} className="codex-btn codex-btn-primary">
          {dictionary.hero.ctaPrimary}
        </Link>
        <a href="#nagrania" className="codex-btn codex-btn-secondary">
          {dictionary.hero.ctaSecondary}
        </a>
      </div>
    </section>
  );
}
