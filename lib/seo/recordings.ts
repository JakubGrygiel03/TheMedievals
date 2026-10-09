import { media } from "@/lib/media";
import { siteConfig } from "@/lib/seo/site";

/**
 * Featured recordings for MusicRecording JSON-LD (Google “Songs” / Utwory carousel).
 * Names and years match the official releases; images reuse existing public assets.
 */
export type FeaturedRecording = {
  id: string;
  name: string;
  /** Polish display title when it differs from the catalog name (e.g. In taberna). */
  namePl?: string;
  year: number;
  datePublished: string;
  albumId: "album-2025" | "ep-1" | "la-serena";
  /** Public path under site root, or absolute URL (YouTube thumb). */
  image: string;
  /** Optional listen / watch URL. */
  url?: string;
};

export const featuredRecordings: FeaturedRecording[] = [
  {
    id: "schiarazula-marazula",
    name: "Schiarazula Marazula",
    year: 2022,
    datePublished: "2022-05-01",
    albumId: "ep-1",
    image: "/gallery/03-gitterna.jpg",
    url: siteConfig.social.spotify,
  },
  {
    id: "douce-dame-jolie",
    name: "Douce Dame Jolie",
    year: 2022,
    datePublished: "2022-05-01",
    albumId: "ep-1",
    image: "/gallery/05-vielle.jpg",
    url: "https://www.youtube.com/watch?v=gK0RymZkpSw",
  },
  {
    id: "in-taberna",
    name: "In taberna quando sumus",
    namePl: "Pochwała karczmy",
    year: 2025,
    datePublished: "2025-06-06",
    albumId: "album-2025",
    image: media.hero,
    url: siteConfig.social.spotify,
  },
  {
    id: "herr-mannelig",
    name: "Herr Mannelig",
    year: 2025,
    datePublished: "2025-06-06",
    albumId: "album-2025",
    image: "/gallery/08-kwartet.jpg",
    url: siteConfig.social.spotify,
  },
  {
    id: "je-vivroie-liement",
    name: "Je vivroie liement",
    year: 2025,
    datePublished: "2025-06-06",
    albumId: "album-2025",
    image: "/gallery/01-flety.jpg",
    url: siteConfig.social.spotify,
  },
  {
    id: "tourdion",
    name: "Tourdion",
    year: 2025,
    datePublished: "2025-06-06",
    albumId: "album-2025",
    image: "/gallery/07-beben.jpg",
    url: siteConfig.social.spotify,
  },
  {
    id: "ai-vis-lo-lop",
    name: "Ai vis lo lop",
    year: 2022,
    datePublished: "2022-05-01",
    albumId: "ep-1",
    image: "https://i.ytimg.com/vi/nIUcs-GJ-5E/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=nIUcs-GJ-5E",
  },
  {
    id: "la-serena",
    name: "La Serena",
    year: 2022,
    datePublished: "2022-09-18",
    albumId: "la-serena",
    image: "/gallery/06-trio.jpg",
    url: siteConfig.social.spotify,
  },
];

export function recordingImageUrl(image: string) {
  if (image.startsWith("http://") || image.startsWith("https://")) return image;
  return `${siteConfig.url}${image}`;
}

export function displayRecordingName(
  recording: FeaturedRecording,
  lang: string,
) {
  if (lang === "pl" && recording.namePl) return recording.namePl;
  return recording.name;
}
