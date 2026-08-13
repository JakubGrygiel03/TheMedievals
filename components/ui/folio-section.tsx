import type { ReactNode } from "react";
import { EditorialHeading } from "@/components/ui/editorial-heading";
import { Reveal } from "@/components/motion/reveal";

type FolioSectionProps = {
  id?: string;
  eyebrow?: string;
  heading: string;
  goldWord?: string;
  children: ReactNode;
};

export function FolioSection({
  id,
  eyebrow,
  heading,
  goldWord,
  children,
}: FolioSectionProps) {
  return (
    <Reveal>
      <section
        id={id}
        className="relative z-20 mx-auto max-w-6xl px-5"
      >
        <EditorialHeading eyebrow={eyebrow} heading={heading} goldWord={goldWord} />
        {children}
      </section>
    </Reveal>
  );
}
