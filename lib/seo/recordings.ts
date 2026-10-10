import { media } from "@/lib/media";
import { siteConfig } from "@/lib/seo/site";

/**
 * Featured recordings for MusicRecording JSON-LD (Google “Songs” / Utwory carousel).
 * UI lists titles only — gallery photos are not used as track artwork.
 * Schema images: YouTube thumbs when a video exists, otherwise the shared press photo.
 */
export type FeaturedRecording = {
  id: string;
  name: string;
  /** Polish display title when it differs from the catalog name (e.g. In taberna). */
  namePl?: string;
  year: number;
  datePublished: string;
  albumId: "album-2025" | "ep-1";
  /** Schema image only: YouTube thumb or shared press photo — never gallery shots. */
  image: string;
  /** Optional listen / watch URL. */
  url?: string;
};

const pressImage = media.pressPhoto;

export const featuredRecordings: FeaturedRecording[] = [
  {
    id: "schiarazula-marazula",
    name: "Schiarazula Marazula",
    year: 2022,
    datePublished: "2022-05-01",
    albumId: "ep-1",
    image: pressImage,
    url: siteConfig.social.spotify,
  },
  {
    id: "douce-dame-jolie",
    name: "Douce Dame Jolie",
    year: 2022,
    datePublished: "2022-05-01",
    albumId: "ep-1",
    image: "https://i.ytimg.com/vi/gK0RymZkpSw/hqdefault.jpg",
    url: "https://www.youtube.com/watch?v=gK0RymZkpSw",
  },
  {
    id: "in-taberna",
    name: "In taberna quando sumus",
    namePl: "Pochwała karczmy",
    year: 2025,
    datePublished: "2025-06-06",
    albumId: "album-2025",
    image: pressImage,
    url: siteConfig.social.spotify,
  },
  {
    id: "herr-mannelig",
    name: "Herr Mannelig",
    year: 2025,
    datePublished: "2025-06-06",
    albumId: "album-2025",
    image: pressImage,
    url: siteConfig.social.spotify,
  },
  {
    id: "je-vivroie-liement",
    name: "Je vivroie liement",
    year: 2025,
    datePublished: "2025-06-06",
    albumId: "album-2025",
    image: pressImage,
    url: siteConfig.social.spotify,
  },
  {
    id: "tourdion",
    name: "Tourdion",
    year: 2025,
    datePublished: "2025-06-06",
    albumId: "album-2025",
    image: pressImage,
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
