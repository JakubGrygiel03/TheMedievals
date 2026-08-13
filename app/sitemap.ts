import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { localePath, siteConfig } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const entries: MetadataRoute.Sitemap = locales.flatMap((lang) => [
    {
      url: localePath(lang),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alternate) => [alternate, localePath(alternate)]),
        ),
      },
    },
    {
      url: localePath(lang, "/kontakt"),
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
      alternates: {
        languages: Object.fromEntries(
          locales.map((alternate) => [
            alternate,
            localePath(alternate, "/kontakt"),
          ]),
        ),
      },
    },
  ]);

  entries.push({
    url: siteConfig.url,
    lastModified,
    changeFrequency: "weekly",
    priority: 1,
  });

  return entries;
}
