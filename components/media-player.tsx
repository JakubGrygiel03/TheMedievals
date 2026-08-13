import { FolioSection } from "@/components/ui/folio-section";
import { siteConfig } from "@/lib/seo/site";
import type { Dictionary } from "@/lib/i18n/types";

type MediaPlayerProps = {
  dictionary: Dictionary;
};

export function MediaPlayer({ dictionary }: MediaPlayerProps) {
  return (
    <FolioSection
      id="nagrania"
      eyebrow={dictionary.media.eyebrow}
      heading={dictionary.media.playerHeading}
    >
      <p className="mt-5 max-w-3xl text-lg leading-relaxed text-[var(--ink-soft)]">
        {dictionary.media.playerLead}
      </p>
      <div className="mt-5 grid gap-6 lg:grid-cols-2 lg:items-stretch">
        <div className="folio-panel h-full min-h-[32rem] overflow-hidden">
          <iframe
            src={siteConfig.embeds.spotify}
            title={dictionary.media.listen}
            className="block h-full min-h-[32rem] w-full"
            style={{ border: 0, height: "100%" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
        <div className="grid gap-4">
          {siteConfig.embeds.videos.map((video) => (
            <div key={video.id} className="folio-panel overflow-hidden">
              <iframe
                src={`https://www.youtube.com/embed/${video.id}`}
                title={video.title}
                className="block w-full"
                style={{ aspectRatio: "16 / 9", border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </FolioSection>
  );
}
