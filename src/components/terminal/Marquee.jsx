import React from "react";

const STATUS =
  "SYS://init ∎ mounting vishal_ai ∎ connecting neural_graph ∎ agent_online ∎ 100% synced ∎ ";

const Marquee = () => (
  <div className="marquee relative z-10 select-none pointer-events-none" aria-hidden="true">
    <div className="marquee-track border-y border-primary/10 dark:border-primary/15 py-2.5">
      {[0, 1].map((i) => (
        <span
          key={i}
          className="font-mono text-[10px] uppercase tracking-[0.3em] text-void/40 dark:text-paper/40 whitespace-nowrap"
        >
          {STATUS}
          {STATUS}
        </span>
      ))}
    </div>
  </div>
);

export default Marquee;
