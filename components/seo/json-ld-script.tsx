import type { JsonLdNode } from "@/lib/seo/schema";

type JsonLdScriptProps = {
  data: JsonLdNode | JsonLdNode[];
};

export function JsonLdScript({ data }: JsonLdScriptProps) {
  const payload = Array.isArray(data)
    ? { "@context": "https://schema.org", "@graph": data }
    : { "@context": "https://schema.org", ...data };
  const json = JSON.stringify(payload).replace(/</g, "\\u003c");

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
