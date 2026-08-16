import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { FolioBackLink } from "@/components/ui/folio-back-link";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale, locales, type Locale } from "@/lib/i18n/config";
import { privacyCopy } from "@/lib/privacy";
import { localePath } from "@/lib/seo/site";

type PageProps = {
  params: Promise<{ lang: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};

  const copy = privacyCopy[lang];
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, localePath(locale, "/prywatnosc")]),
  ) as Record<Locale, string>;

  return {
    title: `${copy.heading} | The Medievals`,
    description: copy.intro,
    alternates: {
      canonical: localePath(lang, "/prywatnosc"),
      languages: { ...languages, "x-default": localePath("pl", "/prywatnosc") },
    },
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);
  const copy = privacyCopy[lang];

  return (
    <main id="tresc" className="relative z-10 mx-auto max-w-2xl px-5 py-16">
      <FolioBackLink href={`/${lang}`} label={dictionary.a11y.back} />
      <EditorialHeading
        as="h1"
        eyebrow={dictionary.footer.privacy}
        heading={copy.heading}
      />
      <p className="mt-4 text-sm text-[var(--ink-soft)]">{copy.updated}</p>
      <p className="mt-8 text-lg leading-relaxed text-[var(--ink-soft)]">{copy.intro}</p>
      <div className="mt-10 space-y-8">
        {copy.sections.map((section) => (
          <section key={section.title}>
            <h2 className="font-cinzel text-xl">{section.title}</h2>
            <div className="mt-3 space-y-3 text-lg leading-relaxed text-[var(--ink-soft)]">
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
