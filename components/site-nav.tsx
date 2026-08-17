"use client";

import Link from "next/link";
import { useEffect, useState, type ReactNode } from "react";

export type NavLink = {
  href: string;
  label: string;
  /** When false, link appears only in the mobile menu. Default true. */
  desktop?: boolean;
};

type SiteNavProps = {
  links: NavLink[];
  menuLabel: string;
  closeLabel: string;
  languages: ReactNode;
};

export function SiteNav({
  links,
  menuLabel,
  closeLabel,
  languages,
}: SiteNavProps) {
  const [open, setOpen] = useState(false);
  const desktopLinks = links.filter((link) => link.desktop !== false);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const onChange = () => {
      if (media.matches) setOpen(false);
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <ul className="desktop-nav min-w-0 font-cinzel font-bold">
        {desktopLinks.map((link, index) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="nav-chip"
              style={{ animationDelay: `${0.18 + index * 0.07}s` }}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <div className="codex-nav-tools ml-auto flex min-w-0 shrink-0 items-center gap-2">
        <span
          aria-hidden="true"
          className="hidden h-6 w-px shrink-0 bg-[var(--ink)]/30 lg:block"
        />
        {languages}
        <span
          aria-hidden="true"
          className="h-9 w-px shrink-0 bg-[var(--ink)]/30 lg:hidden"
        />
        <div className="relative">
          <button
            type="button"
            className="menu-toggle font-cinzel"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? closeLabel : menuLabel}
            onClick={() => setOpen((value) => !value)}
          >
            {menuLabel}
          </button>
          {open ? (
            <div id="mobile-nav" className="mobile-nav-panel">
              <ul>
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} onClick={() => setOpen(false)}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
}
