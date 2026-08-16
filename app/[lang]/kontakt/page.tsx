import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { DirectContact } from "@/components/direct-contact";
import { EditorialHeading } from "@/components/ui/editorial-heading";
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
    locales.map((locale) => [locale, localePath(locale, "/kontakt")]),
  ) as Record<Locale, string>;

  return {
    title: `${dictionary.contact.heading} | The Medievals`,
    description: dictionary.contact.lead,
    alternates: {
      canonical: localePath(lang, "/kontakt"),
      languages: { ...languages, "x-default": localePath("pl", "/kontakt") },
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();

  const dictionary = getDictionary(lang);

  return (
    <main id="tresc" className="relative z-10 mx-auto max-w-3xl px-5 py-12">
      <EditorialHeading
        as="h1"
        eyebrow={dictionary.nav.contact}
        heading={dictionary.contact.heading}
      />
      <p className="mt-5 text-lg italic text-[var(--ink-soft)]">{dictionary.contact.lead}</p>
      <div className="mt-6 max-w-sm">
        <DirectContact dictionary={dictionary} />
      </div>
      <div className="mt-6">
        <ContactForm lang={lang} dictionary={dictionary} />
      </div>
    </main>
  );
}
