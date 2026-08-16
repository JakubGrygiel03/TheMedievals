import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n/config";
import { hreflangMap } from "@/lib/seo/metadata";
import { localePath } from "@/lib/seo/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
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
      lastModified,
      changeFrequency: frequencies[path],
      priority: priorities[path],
      alternates: {
        languages: hreflangMap(path),
      },
    })),
  );
}
