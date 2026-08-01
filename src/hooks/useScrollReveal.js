import { useEffect, useRef, useState } from "react";

export function useScrollReveal(threshold = 0.15, once = true) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (once && hasRevealed) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setHasRevealed(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once, hasRevealed]);

  return { ref, isVisible, hasRevealed };
}

export function useScrollRevealList(threshold = 0.15, once = true) {
  const containerRef = useRef(null);
  const [visibleIndices, setVisibleIndices] = useState(new Set());
  const hasRevealedRef = useRef(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (once && hasRevealedRef.current) return;

    const children = container.children;
    if (!children.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Array.from(children).indexOf(entry.target);
            setVisibleIndices((prev) => {
              const next = new Set(prev);
              next.add(index);
              return next;
            });
            if (once && index === children.length - 1) {
              hasRevealedRef.current = true;
              observer.disconnect();
            }
          } else if (!once) {
            const index = Array.from(children).indexOf(entry.target);
            setVisibleIndices((prev) => {
              const next = new Set(prev);
              next.delete(index);
              return next;
            });
          }
        });
      },
      { threshold }
    );

    for (const child of children) {
      observer.observe(child);
    }
    return () => observer.disconnect();
  }, [threshold, once]);

  return { containerRef, visibleIndices };
}