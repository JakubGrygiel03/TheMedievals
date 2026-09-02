import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { FolioBackLink } from "@/components/ui/folio-back-link";
import { aboutCopy } from "@/lib/content";
import { members, percussionists } from "@/lib/members";
import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isLocale } from "@/lib/i18n/config";
import { hreflangMap, socialMetadata } from "@/lib/seo/metadata";
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
  const title = dictionary.organizers.pressNote;
  const description = dictionary.meta.pressDescription;

  return {
    title,
    description,
    alternates: {
      canonical: localePath(lang, "/notka"),
      languages: hreflangMap("/notka"),
    },
    ...socialMetadata({
      lang,
      title: `${title} | The Medievals`,
      description,
      path: "/notka",
    }),
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
      <BreadcrumbJsonLd
        lang={lang}
        homeLabel={dictionary.nav.home}
        current={{ name: dictionary.organizers.pressNote, path: "/notka" }}
      />
      <EditorialHeading
        as="h1"
        eyebrow={dictionary.organizers.pressNote}
        heading={dictionary.hero.heading}
      />
      <p className="mt-8 text-lg leading-relaxed">
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
      <h2 className="mt-10 font-cinzel text-xl">{dictionary.members.heading}</h2>
      <ul className="mt-4 space-y-2 text-lg leading-relaxed">
        {members.map((member) => (
          <li key={member.id}>
            {member.name} — {member.instrument[lang]}
          </li>
        ))}
      </ul>
      <p className="mt-4 text-lg leading-relaxed text-[var(--ink-soft)]">
        {percussionists.note[lang]} {percussionists.names.join(", ")} —{" "}
        {percussionists.instrument[lang]}.
      </p>
    </main>
  );
}
