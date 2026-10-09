import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { media } from "@/lib/media";
import { portfolioPhotos } from "@/lib/portfolio";
import { hreflangMap } from "@/lib/seo/metadata";
import { featuredRecordings, recordingImageUrl } from "@/lib/seo/recordings";
import { contentRevisedAt, localePath, siteConfig } from "@/lib/seo/site";

const homeImages = [
  `${siteConfig.url}${media.hero}`,
  ...featuredRecordings.map((track) => recordingImageUrl(track.image)),
  ...portfolioPhotos.map((photo) => `${siteConfig.url}${photo.src}`),
];

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ["", "/kontakt", "/notka", "/prywatnosc"] as const;
  const priorities: Record<(typeof paths)[number], number> = {
    "": 1,
    "/kontakt": 0.8,
    "/notka": 0.5,
    "/prywatnosc": 0.3,
  };
  const frequencies: Record<
    (typeof paths)[number],
    MetadataRoute.Sitemap[number]["changeFrequency"]
  > = {
    "": "weekly",
    "/kontakt": "monthly",
    "/notka": "monthly",
    "/prywatnosc": "yearly",
  };

  return locales.flatMap((lang) =>
    paths.map((path) => ({
      url: localePath(lang, path),
      lastModified: contentRevisedAt,
      changeFrequency: frequencies[path],
      priority: priorities[path],
      alternates: {
        languages: hreflangMap(path),
      },
      ...(path === "" ? { images: homeImages } : {}),
    })),
  );
}
