import { faqCopy } from "@/lib/seo/faq";
import { schemaMembers } from "@/lib/members";
import { clientOffers } from "@/lib/offers";
import { releases } from "@/lib/releases";
import { localePath, siteConfig } from "@/lib/seo/site";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

export type JsonLdNode = Record<string, unknown>;

export function ensembleId() {
  return `${siteConfig.url}/#ensemble`;
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
  };

  const ensemble: JsonLdNode = {
    "@type": ["MusicGroup", "PerformingGroup"],
    "@id": ensembleId(),
    name: siteConfig.name,
    url: pageUrl,
    email: siteConfig.email,
    description: dictionary.meta.description,
    image: [
      `${siteConfig.url}/icon.png`,
      `${siteConfig.url}/hero.png`,
      `${siteConfig.url}/brand-logo.png`,
    ],
    logo: `${siteConfig.url}/icon.png`,
    genre: [...siteConfig.genres],
    inLanguage: lang,
    knowsAbout: [...siteConfig.genres],
    areaServed: { "@type": "Country", name: "Poland" },
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
    makesOffer: clientOffers[lang].items.map((item) => ({
      "@type": "Offer",
      name: item.title,
      description: item.body,
      url: `${pageUrl}#oferta`,
      category: "LivePerformance",
    })),
    potentialAction: {
      "@type": "ReserveAction",
      name: dictionary.contact.heading,
      target: bookingUrl,
    },
  };

  return [website, ensemble];
}

export function albumNodes(lang: Locale): JsonLdNode[] {
  return releases.map((release) => ({
    "@type": "MusicAlbum",
    "@id": `${siteConfig.url}/#album-${release.id}`,
    name: release.title,
    albumReleaseType: release.albumType === "EP" ? "EPRelease" : "AlbumRelease",
    datePublished: release.premiere,
    description: release.description[lang],
    byArtist: { "@id": ensembleId() },
    url: `${localePath(lang)}#wydawnictwa`,
    sameAs: siteConfig.social.spotify,
  }));
}

export function videoNodes(): JsonLdNode[] {
  return siteConfig.embeds.videos.map((video) => ({
    "@type": "VideoObject",
    name: video.title,
    description: video.title,
    embedUrl: `https://www.youtube.com/embed/${video.id}`,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`,
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
