import { JsonLdScript } from "@/components/seo/json-ld-script";
import {
  albumNodes,
  faqNode,
  recordingNodes,
  songsItemList,
  videoNodes,
} from "@/lib/seo/schema";
import type { Locale } from "@/lib/i18n/config";

type HomeJsonLdProps = {
  lang: Locale;
};

export function HomeJsonLd({ lang }: HomeJsonLdProps) {
  return (
    <JsonLdScript
      data={[
        ...albumNodes(lang),
        ...recordingNodes(lang),
        songsItemList(lang),
        ...videoNodes(),
        faqNode(lang),
      ]}
    />
  );
}
