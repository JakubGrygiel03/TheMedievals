import { faqCopy } from "@/lib/seo/faq";
import { media } from "@/lib/media";
import { schemaMembers } from "@/lib/members";
import { clientOffers } from "@/lib/offers";
import { releases } from "@/lib/releases";
import {
  displayRecordingName,
  featuredRecordings,
  recordingImageUrl,
} from "@/lib/seo/recordings";
import { localePath, siteConfig } from "@/lib/seo/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export type JsonLdNode = Record<string, unknown>;

export function ensembleId() {
  return `${siteConfig.url}/#ensemble`;
}

function albumId(id: string) {
  return `${siteConfig.url}/#album-${id}`;
}

function recordingId(id: string) {
  return `${siteConfig.url}/#track-${id}`;
}

export function identityGraph(lang: Locale, dictionary: Dictionary): JsonLdNode[] {
  const pageUrl = localePath(lang);
  const bookingUrl = localePath(lang, "/kontakt");

  const website: JsonLdNode = {
    "@type": "WebSite",
    "@id": `${pageUrl}#website`,
    name: siteConfig.name,
    url: pageUrl,
    inLanguage: lang,
    publisher: { "@id": ensembleId() },
    potentialAction: {
      "@type": "ListenAction",
      target: siteConfig.social.spotify,
    },
  };

  const ensemble: JsonLdNode = {
    "@type": ["MusicGroup", "PerformingGroup"],
    "@id": ensembleId(),
    name: siteConfig.name,
    alternateName: ["Medievals", "Zespół The Medievals"],
    url: pageUrl,
    email: siteConfig.email,
    description: dictionary.meta.description,
    image: [
      `${siteConfig.url}${media.hero}`,
      `${siteConfig.url}${media.icon}`,
      ...featuredRecordings.slice(0, 4).map((track) => recordingImageUrl(track.image)),
    ],
    logo: `${siteConfig.url}${media.icon}`,
    genre: [...siteConfig.genres],
    inLanguage: lang,
    knowsAbout: [
      ...siteConfig.genres,
      "muzyka średniowieczna",
      "zespół muzyki dawnej",
      "koncert na zamek",
      "oprawa muzyczna wydarzeń historycznych",
    ],
    areaServed: [
      { "@type": "Country", name: "Poland" },
      { "@type": "Country", name: "Germany" },
      { "@type": "Country", name: "Czech Republic" },
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "booking",
      email: siteConfig.email,
      availableLanguage: ["pl", "en", "es", "it"],
      url: bookingUrl,
    },
    member: schemaMembers(lang),
    sameAs: [
      siteConfig.social.instagram,
      siteConfig.social.facebook,
      siteConfig.social.spotify,
      siteConfig.social.youtube,
    ],
    album: releases.map((release) => ({ "@id": albumId(release.id) })),
    track: featuredRecordings.map((track) => ({ "@id": recordingId(track.id) })),
    makesOffer: clientOffers[lang].items.map((item) => ({
      "@type": "Offer",
      name: item.title,
      description: item.body,
      url: `${pageUrl}#oferta`,
      category: "LivePerformance",
      availability: "https://schema.org/InStock",
    })),
    potentialAction: [
      {
        "@type": "ReserveAction",
        name: dictionary.contact.heading,
        target: bookingUrl,
      },
      {
        "@type": "ListenAction",
        target: siteConfig.social.spotify,
      },
    ],
  };

  return [website, ensemble];
}

export function albumNodes(lang: Locale): JsonLdNode[] {
  return releases.map((release) => {
    const tracks = featuredRecordings.filter((track) => track.albumId === release.id);
    const cover =
      tracks[0] != null
        ? recordingImageUrl(tracks[0].image)
        : `${siteConfig.url}${media.hero}`;

    return {
      "@type": "MusicAlbum",
      "@id": albumId(release.id),
      name: release.title,
      albumReleaseType: release.albumType === "EP" ? "EPRelease" : "AlbumRelease",
      datePublished: release.premiere,
      description: release.description[lang],
      byArtist: { "@id": ensembleId() },
      url: `${localePath(lang)}#wydawnictwa`,
      image: cover,
      sameAs: siteConfig.social.spotify,
      numTracks: tracks.length || undefined,
      track: tracks.length
        ? {
            "@type": "ItemList",
            numberOfItems: tracks.length,
            itemListElement: tracks.map((track, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: { "@id": recordingId(track.id) },
            })),
          }
        : undefined,
    };
  });
}

export function recordingNodes(lang: Locale): JsonLdNode[] {
  const listenPage = `${localePath(lang)}#nagrania`;

  return featuredRecordings.map((track) => ({
    "@type": "MusicRecording",
    "@id": recordingId(track.id),
    name: displayRecordingName(track, lang),
    alternateName: track.namePl && lang !== "pl" ? track.namePl : track.name,
    byArtist: { "@id": ensembleId() },
    inAlbum: { "@id": albumId(track.albumId) },
    datePublished: track.datePublished,
    image: recordingImageUrl(track.image),
    url: track.url ?? listenPage,
    genre: "Medieval Music",
    inLanguage: lang,
  }));
}

/** ItemList that helps Google surface a “Songs / Utwory” block. */
export function songsItemList(lang: Locale): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${localePath(lang)}#utwory`,
    name:
      lang === "pl"
        ? "Utwory The Medievals"
        : lang === "es"
          ? "Canciones de The Medievals"
          : lang === "it"
            ? "Brani di The Medievals"
            : "Songs by The Medievals",
    numberOfItems: featuredRecordings.length,
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    itemListElement: featuredRecordings.map((track, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: track.url ?? `${localePath(lang)}#nagrania`,
      name: displayRecordingName(track, lang),
      item: { "@id": recordingId(track.id) },
    })),
  };
}

export function videoNodes(): JsonLdNode[] {
  return siteConfig.embeds.videos.map((video) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.title,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.id}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
    contentUrl: `https://www.youtube.com/watch?v=${video.id}`,
    uploadDate: video.id === "nIUcs-GJ-5E" ? "2022-05-01" : "2022-05-01",
    publisher: { "@id": ensembleId() },
  }));
}

export function faqNode(lang: Locale): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${localePath(lang)}#faq`,
    mainEntity: faqCopy[lang].items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbNode(
  items: { name: string; url: string }[],
): JsonLdNode {
  return {
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}
