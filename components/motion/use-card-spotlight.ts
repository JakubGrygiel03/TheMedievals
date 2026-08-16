"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";

/**
 * Steps 0 → 1 → … → count-1 → 0 with equal dwell on every index.
 * Only ticks while `enabled` (e.g. section in view).
 */
export function useCardSpotlight(
  count: number,
  {
    intervalMs = 5000,
    enabled = true,
  }: { intervalMs?: number; enabled?: boolean } = {},
) {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (reduce || !enabled || count < 2) return;

    const id = window.setInterval(() => {
      setActive((current) => (current + 1) % count);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [count, intervalMs, reduce, enabled]);

  if (reduce) return -1;
  return active;
}
