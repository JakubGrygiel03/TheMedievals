import { IlluminatedStem } from "@/components/illuminated-stem";

type EditorialHeadingProps = {
  eyebrow?: string;
  heading: string;
  goldWord?: string;
  as?: "h1" | "h2";
};

export function EditorialHeading({
  eyebrow,
  heading,
  as = "h2",
}: EditorialHeadingProps) {
  const Title = as;

  return (
    <header>
      {eyebrow ? (
        <p className="editorial-eyebrow">{eyebrow}</p>
      ) : null}
      <div className="editorial-title-block">
        <Title className="editorial-title">{heading}</Title>
        <IlluminatedStem />
      </div>
    </header>
  );
}
