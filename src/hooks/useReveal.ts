"use client";

import { useEffect, useRef } from "react";

/**
 * Adds the `is-in` class to an element when it scrolls into view, which in
 * turn reveals any descendant `.reveal` elements (see globals.css).
 * Respects prefers-reduced-motion and degrades gracefully when
 * IntersectionObserver is unavailable.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(margin = "-8%") {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce || typeof IntersectionObserver === "undefined") {
      el.classList.add("is-in");
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("is-in");
            observer.unobserve(el);
          }
        });
      },
      { rootMargin: `0px 0px ${margin} 0px` }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [margin]);

  return ref;
}
