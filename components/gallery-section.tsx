import Image from "next/image";
import { FolioSection } from "@/components/ui/folio-section";
import { photoPersonFirstName, photoPersonName } from "@/lib/members";
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
      tone="wash"
      reveal={false}
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {dictionary.gallery.lead}
      </p>
      <ul className="mt-6 grid list-none gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {portfolioPhotos.map((photo) => {
          const compact = (photo.people?.length ?? 0) > 1;
          const caption = photo.people
            ?.map((id) => (compact ? photoPersonFirstName(id) : photoPersonName(id)))
            .join(" · ");

          return (
            <li key={photo.src} className="gallery-frame">
              <figure className="gallery-shot folio-panel">
                <Image
                  src={photo.src}
                  alt={photo.alt[lang]}
                  width={photo.width}
                  height={photo.height}
                  quality={photo.width >= 1100 ? 85 : undefined}
                  unoptimized={photo.width < 1100}
                  className="gallery-shot-img aspect-[3/4] h-auto w-full object-cover"
                  sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                />
                <span className="gallery-shot-veil" aria-hidden="true" />
                {caption ? (
                  <figcaption
                    className={
                      compact
                        ? "gallery-shot-caption gallery-shot-caption--compact"
                        : "gallery-shot-caption"
                    }
                    title={photo.people?.map(photoPersonName).join(" · ")}
                  >
                    {caption}
                  </figcaption>
                ) : null}
              </figure>
            </li>
          );
        })}
      </ul>
    </FolioSection>
  );
}
