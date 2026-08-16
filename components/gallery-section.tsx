import Image from "next/image";
import { FolioSection } from "@/components/ui/folio-section";
import { portfolioPhotos } from "@/lib/portfolio";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type GallerySectionProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function GallerySection({ lang, dictionary }: GallerySectionProps) {
  return (
    <FolioSection
      id="galeria"
      eyebrow={dictionary.gallery.eyebrow}
      heading={dictionary.gallery.heading}
      reveal={false}
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {dictionary.gallery.lead}
      </p>
      <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioPhotos.map((photo) => (
          <li key={photo.src} className="gallery-frame">
            <figure className="gallery-shot folio-panel">
              <Image
                src={photo.src}
                alt={photo.alt[lang]}
                width={photo.width}
                height={photo.height}
                className="gallery-shot-img aspect-[3/4] h-auto w-full object-cover"
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
              />
              <span className="gallery-shot-veil" aria-hidden="true" />
            </figure>
          </li>
        ))}
      </ul>
    </FolioSection>
  );
}
