import Link from "next/link";

type FolioBackLinkProps = {
  href: string;
  label: string;
};

export function FolioBackLink({ href, label }: FolioBackLinkProps) {
  return (
    <p className="mb-8">
      <Link href={href} className="folio-back-link">
        <span aria-hidden="true">←</span> {label}
      </Link>
    </p>
  );
}
