import React, { useEffect, useRef, useState } from "react";

const SkillCard = ({ title, techList, percentage, icon, index }) => {
  const pct = Number(percentage) || 0;
  const barRef = useRef(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setLoaded(true);
          io.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="terminal-window group rounded-lg p-5 flex flex-col gap-4 hover:border-primary/40 transition-all duration-300">
      <div className="flex items-center justify-between gap-3">
        <span className="index-num font-mono text-[10px] text-void/40 dark:text-paper/40">
          [mod_{String(index + 1).padStart(2, "0")}]
        </span>
        <span className="index-num font-mono text-[10px] font-bold text-primary">
          {pct}%
        </span>
        <span className="ml-auto flex items-center gap-1.5 font-mono text-[9px] uppercase tracking-widest text-accent">
          <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-accent" />
          {loaded ? "loaded" : "booting"}
        </span>
      </div>

      <div className="flex items-center gap-3">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded border border-primary/30 bg-primary/5 text-primary text-base">
          <span aria-hidden>{icon}</span>
        </span>
        <h3 className="font-display text-lg font-bold tracking-tight text-void dark:text-paper group-hover:text-primary transition-colors">
          {title}
        </h3>
      </div>

      <p className="font-mono text-[10px] leading-relaxed text-void/55 dark:text-paper/55">
        {techList}
      </p>

      <div className="mt-auto pt-3 border-t border-void/10 dark:border-paper/10">
        <div className="h-1.5 w-full rounded-full bg-void/10 dark:bg-paper/10 overflow-hidden">
          <div
            ref={barRef}
            className="stripe gradient-bg bar-fill h-full rounded-full"
            style={{ width: loaded ? `${pct}%` : "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
