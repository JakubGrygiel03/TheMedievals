import type { Metadata } from "next";
import { AboutSection } from "@/components/about-section";
import { ContactSection } from "@/components/contact-section";
import { EnsembleHero } from "@/components/ensemble-hero";
import { MediaPlayer } from "@/components/media-player";
import { MemberCards } from "@/components/member-cards";
import { OfferSection } from "@/components/offer-section";
import { GallerySection } from "@/components/gallery-section";
import { OrganizerZone } from "@/components/organizer-zone";
import { PortfolioSection } from "@/components/portfolio-section";
import { RepertoireSection } from "@/components/repertoire-section";
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

  return (
    <main id="tresc" className="relative z-10 flex flex-col">
      <EnsembleHero lang={lang} dictionary={dictionary} />
      <AboutSection lang={lang} dictionary={dictionary} />
      <OfferSection lang={lang} dictionary={dictionary} />
      <MemberCards lang={lang} copy={dictionary.members} />
      <MediaPlayer dictionary={dictionary} />
      <RepertoireSection lang={lang} dictionary={dictionary} />
      <PortfolioSection lang={lang} dictionary={dictionary} />
      <GallerySection lang={lang} dictionary={dictionary} />
      <OrganizerZone lang={lang} dictionary={dictionary} />
      <ContactSection lang={lang} dictionary={dictionary} />
    </main>
  );
}
