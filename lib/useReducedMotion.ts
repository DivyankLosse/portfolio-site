"use client";

import { useEffect, useState } from "react";

/**
 * Tracks the viewer's prefers-reduced-motion setting, and keeps tracking it --
 * people toggle it mid-session, so a one-off read at mount is not enough.
 *
 * Returns false during SSR and the first client render so markup matches; the
 * effect corrects it immediately after hydration.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(query.matches);

    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
