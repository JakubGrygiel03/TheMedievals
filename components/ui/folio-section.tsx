import type { ReactNode } from "react";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { Reveal } from "@/components/motion/reveal";

type FolioSectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  tone?: "plain" | "wash" | "letter";
  reveal?: boolean;
  children: ReactNode;
};

export function FolioSection({
  id,
  eyebrow,
  heading,
  tone = "plain",
  reveal = true,
  children,
}: FolioSectionProps) {
  const toneClass =
    tone === "wash" ? " folio-band-wash" : tone === "letter" ? " folio-band-letter" : "";

  const section = (
    <section id={id} className={`folio-band${toneClass}`}>
      <div className="folio-band-inner">
        <EditorialHeading eyebrow={eyebrow} heading={heading} />
        {children}
      </div>
    </section>
  );

  return reveal ? <Reveal>{section}</Reveal> : section;
}
