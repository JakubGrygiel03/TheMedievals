"use client";

import { useSyncExternalStore } from "react";
import { THEME_STORAGE_KEY, type SiteTheme } from "@/lib/theme";

type ThemeToggleProps = {
  nightLabel: string;
  dayLabel: string;
};

const listeners = new Set<() => void>();

function subscribe(onChange: () => void) {
  listeners.add(onChange);
  return () => listeners.delete(onChange);
}

function readTheme(): SiteTheme {
  if (typeof document === "undefined") return "burgundy";
  return document.documentElement.getAttribute("data-theme") === "day"
    ? "day"
    : "burgundy";
}

function applyTheme(theme: SiteTheme) {
  if (theme === "day") {
    document.documentElement.setAttribute("data-theme", "day");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  localStorage.setItem(THEME_STORAGE_KEY, theme);
  listeners.forEach((onChange) => onChange());
}

export function ThemeToggle({ nightLabel, dayLabel }: ThemeToggleProps) {
  const theme = useSyncExternalStore(subscribe, readTheme, () => "burgundy");
  const isDay = theme === "day";
  const label = isDay ? nightLabel : dayLabel;

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={label}
      title={label}
      onClick={() => applyTheme(isDay ? "burgundy" : "day")}
    >
      {isDay ? <MoonMark /> : <SunMark />}
    </button>
  );
}

function SunMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-toggle-mark">
      <circle cx="12" cy="12" r="4.2" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M12 3.2v2.1M12 18.7v2.1M3.2 12h2.1M18.7 12h2.1M6.1 6.1l1.5 1.5M16.4 16.4l1.5 1.5M6.1 17.9l1.5-1.5M16.4 7.6l1.5-1.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonMark() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="theme-toggle-mark">
      <path
        d="M15.2 4.4a7.4 7.4 0 1 0 4.4 13.2 6.2 6.2 0 0 1-4.4-13.2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}
