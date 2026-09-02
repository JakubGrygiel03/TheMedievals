import { JsonLdScript } from "@/components/seo/json-ld-script";
import { breadcrumbNode } from "@/lib/seo/schema";
import { localePath } from "@/lib/seo/site";
import type { Locale } from "@/lib/i18n/config";

type Crumb = {
  name: string;
  path?: string;
};

type BreadcrumbJsonLdProps = {
  lang: Locale;
  homeLabel: string;
  current: Crumb;
};

export function BreadcrumbJsonLd({
  lang,
  homeLabel,
  current,
}: BreadcrumbJsonLdProps) {
  return (
    <JsonLdScript
      data={breadcrumbNode([
        { name: homeLabel, url: localePath(lang) },
        { name: current.name, url: localePath(lang, current.path ?? "") },
      ])}
    />
  );
}
