import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { FolioBackLink } from "@/components/ui/folio-back-link";
import { aboutCopy } from "@/lib/content";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { localePath } from "@/lib/seo/site";

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
    locales.map((locale) => [locale, localePath(locale, "/notka")]),
  ) as Record<Locale, string>;

  return {
    title: `${dictionary.organizers.pressNote} | The Medievals`,
    description: dictionary.about.lead,
    alternates: {
      canonical: localePath(lang, "/notka"),
      languages: { ...languages, "x-default": localePath("pl", "/notka") },
    },
  };
}

export default async function PressNotePage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const copy = aboutCopy[lang];

  return (
    <main id="tresc" className="relative z-10 mx-auto max-w-2xl px-5 py-16">
      <FolioBackLink
        href={`/${lang}#organizator`}
        label={dictionary.a11y.back}
      />
      <EditorialHeading
        as="h1"
        eyebrow={dictionary.organizers.pressNote}
        heading="The Medievals"
      />
      <p className="mt-8 text-lg italic text-[var(--ink-soft)]">
        {dictionary.hero.pitch}
      </p>
      <div className="mt-8 space-y-4 text-lg leading-relaxed">
        {copy.paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>
      <p className="mt-8 text-[var(--ink-soft)]">
        {dictionary.about.instrumentsLabel}: {copy.instruments}.
      </p>
    </main>
  );
}
