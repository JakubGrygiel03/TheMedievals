import { schemaMembers } from "@/lib/members";
import { releases } from "@/lib/releases";
import { siteConfig } from "@/lib/seo/site";
import type { Concert } from "@/lib/concerts";
import type { Locale } from "@/lib/i18n/config";

type JsonLdProps = {
  lang: Locale;
  concerts: Concert[];
};

export function JsonLd({ lang, concerts }: JsonLdProps) {
  const group = {
    "@context": "https://schema.org",
    "@type": "MusicGroup",
    name: siteConfig.name,
    url: siteConfig.url,
    email: siteConfig.email,
    genre: [...siteConfig.genres],
    inLanguage: lang,
    member: schemaMembers(lang),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.spotify,
      siteConfig.social.youtube,
    ],
  };

  const albums = releases.map((release) => ({
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: release.title,
    albumReleaseType: release.albumType,
    datePublished: release.premiere,
    description: release.description[lang],
    byArtist: { "@type": "MusicGroup", name: siteConfig.name },
  }));

  const audio = releases.map((release) => ({
    "@context": "https://schema.org",
    "@type": "AudioObject",
    name: release.title,
    description: release.description[lang],
    encodingFormat: "audio/mpeg",
  }));

  const events = concerts.map((concert) => ({
    "@context": "https://schema.org",
    "@type": "MusicEvent",
    name: concert.event_name,
    startDate: concert.event_date,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: concert.venue ?? concert.city,
      address: concert.city,
    },
    performer: { "@type": "MusicGroup", name: siteConfig.name },
    url: concert.ticket_link ?? `${siteConfig.url}/${lang}`,
  }));

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: `${siteConfig.url}/${lang}`,
      },
    ],
  };

  const payload = [group, ...albums, ...audio, ...events, breadcrumbs];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
