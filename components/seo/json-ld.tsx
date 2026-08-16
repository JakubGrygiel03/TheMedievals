import { schemaMembers } from "@/lib/members";
import { clientOffers } from "@/lib/offers";
import { releases } from "@/lib/releases";
import { localePath, siteConfig } from "@/lib/seo/site";
import type { Concert } from "@/lib/concerts";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type JsonLdProps = {
  lang: Locale;
  dictionary: Dictionary;
  concerts: Concert[];
};

export function JsonLd({ lang, dictionary, concerts }: JsonLdProps) {
  const pageUrl = localePath(lang);
  const offers = clientOffers[lang];

  const group = {
    "@context": "https://schema.org",
    "@type": ["MusicGroup", "PerformingGroup"],
    name: siteConfig.name,
    url: pageUrl,
    email: siteConfig.email,
    description: dictionary.meta.description,
    image: [`${siteConfig.url}/og-image.png`, `${siteConfig.url}/brand-logo.png`],
    logo: `${siteConfig.url}/brand-logo.png`,
    genre: [...siteConfig.genres],
    inLanguage: lang,
    areaServed: {
      "@type": "Country",
      name: "Poland",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "booking",
      email: siteConfig.email,
      availableLanguage: ["pl", "en", "es", "it"],
    },
    member: schemaMembers(lang),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.spotify,
      siteConfig.social.youtube,
    ],
    makesOffer: offers.items.map((item) => ({
      "@type": "Offer",
      name: item.title,
      description: item.body,
      url: `${pageUrl}#oferta`,
      category: "LivePerformance",
    })),
  };

  const albums = releases.map((release) => ({
    "@context": "https://schema.org",
    "@type": "MusicAlbum",
    name: release.title,
    albumReleaseType:
      release.albumType === "EP" ? "EPRelease" : "AlbumRelease",
    datePublished: release.premiere,
    description: release.description[lang],
    byArtist: { "@type": "MusicGroup", name: siteConfig.name },
    url: siteConfig.social.spotify,
    sameAs: siteConfig.social.spotify,
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
      address: {
        "@type": "PostalAddress",
        addressLocality: concert.city,
        addressCountry: "PL",
      },
    },
    performer: { "@type": "MusicGroup", name: siteConfig.name },
    url: concert.ticket_link ?? pageUrl,
  }));

  const breadcrumbs = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: siteConfig.name,
        item: pageUrl,
      },
    ],
  };

  const payload = [group, ...albums, ...events, breadcrumbs];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(payload) }}
    />
  );
}
