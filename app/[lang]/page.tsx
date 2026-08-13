import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { BookingCta } from "@/components/booking-cta";
import { ConcertsSection } from "@/components/concerts-section";
import { EnsembleHero } from "@/components/ensemble-hero";
import { MediaPlayer } from "@/components/media-player";
import { MemberCards } from "@/components/member-cards";
import { OfferSection } from "@/components/offer-section";
import { OrganizerZone } from "@/components/organizer-zone";
import { ReleasesSection } from "@/components/releases-section";
import { RepertoireSection } from "@/components/repertoire-section";
import { TrustStrip } from "@/components/trust-strip";
import { getPublishedConcerts } from "@/lib/concerts";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/seo/site";
import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const dictionary = getDictionary(lang);
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, localePath(locale)]),
  ) as Record<Locale, string>;

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    keywords: dictionary.meta.keywords.split(", "),
    alternates: {
      canonical: localePath(lang),
      languages: { ...languages, "x-default": localePath("pl") },
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const concerts = await getPublishedConcerts();

  return (
    <main id="tresc" className="relative z-10">
      <EnsembleHero lang={lang} dictionary={dictionary} />
      <TrustStrip lang={lang} />
      <OfferSection lang={lang} dictionary={dictionary} />
      <AboutSection lang={lang} dictionary={dictionary} />
      <MemberCards
        lang={lang}
        eyebrow={dictionary.members.eyebrow}
        heading={dictionary.members.heading}
        lead={dictionary.members.lead}
      />
      <RepertoireSection lang={lang} dictionary={dictionary} />
      <MediaPlayer dictionary={dictionary} />
      <ReleasesSection lang={lang} dictionary={dictionary} />
      <ConcertsSection lang={lang} dictionary={dictionary} concerts={concerts} />
      <OrganizerZone lang={lang} dictionary={dictionary} />
      <BookingCta lang={lang} dictionary={dictionary} />
    </main>
  );
}
