import type { Locale } from "@/lib/i18n/config";

/**
 * Single public catalog. Sections link here — they must not copy files on disk.
 * Hero, OG and the press photo are the same PNG.
 */
export const media = {
  hero: "/hero.png",
  ogImage: "/hero.png",
  pressPhoto: "/hero.png",
  icon: "/icon.png",
  icon48: "/icon-48.png",
  appleIcon: "/apple-icon.png",
  favicon: "/favicon.ico",
  bookMarginLeft: "/book-margin-left.jpg",
  bookMarginRight: "/book-margin-right.jpg",
  flags: {
    pl: "/lang/pl-sm.jpg",
    en: "/lang/en-sm.jpg",
    es: "/lang/es-3-sm.jpg",
    it: "/lang/it-sm.jpg",
  } satisfies Record<Locale, string>,
} as const;

export const pressPhotoDownloadName = "TheMedievals-press.png";

/** Hard cap if an upload path is ever added. Nothing in admin accepts files today. */
export const mediaPolicy = {
  maxBytes: 1_500_000,
  maxFiles: 1,
  allowedTypes: ["image/jpeg", "image/png", "image/webp"] as const,
};

export function assertNoUploadedFiles(formData: FormData) {
  for (const value of formData.values()) {
    if (value instanceof File && value.size > 0) {
      throw new Error("uploads-disabled");
    }
  }
}
