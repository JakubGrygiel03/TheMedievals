import { JsonLdScript } from "@/components/seo/json-ld-script";
import { identityGraph } from "@/lib/seo/schema";
import type { Locale } from "@/lib/i18n/config";
import type { Dictionary } from "@/lib/i18n/types";

type JsonLdProps = {
  lang: Locale;
  dictionary: Dictionary;
};

export function JsonLd({ lang, dictionary }: JsonLdProps) {
  return <JsonLdScript data={identityGraph(lang, dictionary)} />;
}
