import { useEffect, useRef, useState } from "react";

const useCursorGlow = () => {
  const glowRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const el = glowRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = window.matchMedia("(hover: hover)").matches;
    if (reduce || !finePointer) return;

    let ticking = false;
    const onMove = (e) => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const half = el.offsetWidth / 2;
        el.style.transform = `translate3d(${e.clientX - half}px, ${e.clientY - half}px, 0)`;
        setMousePos({
          x: e.clientX / window.innerWidth,
          y: e.clientY / window.innerHeight,
        });
        ticking = false;
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return { glowRef, mousePos };
};

export default useCursorGlow;