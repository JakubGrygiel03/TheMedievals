function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://themedievals.pl";
}

export const siteConfig = {
  name: "The Medievals",
  url: resolveSiteUrl(),
  email: "contact@themedievals.pl",
  inbox: "the.medievals.org@gmail.com",
  social: {
    spotify: "https://open.spotify.com/artist/637sxsUGfwehtTHoUNnWER",
    youtube: "https://www.youtube.com/channel/UCwnpaJ0l0MEX2jjbobER-7w",
    instagram: "https://www.instagram.com/the_medievals_official/",
    facebook: "https://www.facebook.com/TheMedievalsofficial",
  },
  embeds: {
    spotify:
      process.env.NEXT_PUBLIC_SPOTIFY_EMBED_URL ||
      "https://open.spotify.com/embed/artist/637sxsUGfwehtTHoUNnWER?utm_source=generator",
    videos: [
      {
        id: "nIUcs-GJ-5E",
        title: "The Medievals – Ai vis lo lop",
      },
      {
        id: "gK0RymZkpSw",
        title: "The Medievals – Douce Dame Jolie",
      },
    ],
  },
  genres: [
    "Early Music",
    "Medieval Music",
    "Muzyka dawna",
    "Muzyka średniowieczna",
  ],
} as const;

/** Bump when public copy or assets change, so sitemap lastmod stays stable. */
export const contentRevisedAt = new Date("2026-09-02T00:00:00.000Z");

export function localePath(lang: string, path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `${siteConfig.url}/${lang}`;
  }
  return `${siteConfig.url}/${lang}${normalized}`;
}
