function resolveSiteUrl() {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://themedievals.pl";
}

export const siteConfig = {
  name: "The Medievals",
  url: resolveSiteUrl(),
  email: "booking@themedievals.pl",
  inbox: "the.medievals.org@gmail.com",
  phone: "",
  social: {
    spotify: "https://open.spotify.com/artist/637sxsUGfwehtTHoUNnWER",
    youtube: "https://www.youtube.com/channel/UCwnpaJ0l0MEX2jjbobER-7w",
    youtubePlaylist:
      "https://www.youtube.com/playlist?list=PLPZzRLQy8somTvumhwTZhWuual9qRbqbf",
    instagram: "https://www.instagram.com/the_medievals_official/",
    facebook: "https://www.facebook.com/TheMedievalsofficial",
  },
  embeds: {
    spotify:
      process.env.NEXT_PUBLIC_SPOTIFY_EMBED_URL ||
      "https://open.spotify.com/embed/artist/637sxsUGfwehtTHoUNnWER?utm_source=generator",
    youtube:
      process.env.NEXT_PUBLIC_YOUTUBE_EMBED_URL ||
      "https://www.youtube.com/embed/nIUcs-GJ-5E",
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

export function localePath(lang: string, path = "") {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (normalized === "/") {
    return `${siteConfig.url}/${lang}`;
  }
  return `${siteConfig.url}/${lang}${normalized}`;
}
