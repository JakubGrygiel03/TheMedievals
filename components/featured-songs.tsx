import Image from "next/image";
import {
  displayRecordingName,
  featuredRecordings,
} from "@/lib/seo/recordings";
import type { Locale } from "@/lib/i18n/config";

const headings: Record<Locale, string> = {
  pl: "Wyróżnione utwory",
  en: "Featured songs",
  es: "Canciones destacadas",
  it: "Brani in evidenza",
};

type FeaturedSongsProps = {
  lang: Locale;
};

export function FeaturedSongs({ lang }: FeaturedSongsProps) {
  return (
    <section id="utwory" className="mt-8" aria-labelledby="featured-songs-heading">
      <h3
        id="featured-songs-heading"
        className="font-cinzel text-lg tracking-[0.12em] text-ink uppercase"
      >
        {headings[lang]}
      </h3>
      <ul className="mt-4 grid list-none gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {featuredRecordings.map((track) => {
          const title = displayRecordingName(track, lang);
          const href = track.url ?? "#nagrania";

          return (
            <li key={track.id}>
              <a
                href={href}
                className="folio-panel group flex items-center gap-3 p-2.5 transition hover:border-[var(--vermilion)]"
                rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                target={href.startsWith("http") ? "_blank" : undefined}
              >
                <span className="relative size-14 shrink-0 overflow-hidden bg-[var(--rule)]">
                  <Image
                    src={track.image}
                    alt=""
                    width={112}
                    height={112}
                    className="size-full object-cover"
                    sizes="56px"
                    quality={60}
                  />
                </span>
                <span className="min-w-0">
                  <span className="block truncate font-cinzel text-sm text-ink group-hover:text-vermilion">
                    {title}
                  </span>
                  <span className="mt-0.5 block text-xs text-[var(--ink-soft)]">
                    The Medievals · {track.year}
                  </span>
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
