import React from "react";

const HudRail = () => (
  <aside
    className="fixed right-4 top-1/2 -translate-y-1/2 z-[90] hidden lg:flex flex-col items-end gap-3 font-mono text-[9px] uppercase tracking-widest text-void/40 dark:text-paper/40 pointer-events-none"
    aria-hidden="true"
  >
    <div className="terminal-window rounded px-3 py-2.5 text-right">
      <p className="flex items-center justify-end gap-2">
        <span className="eq">
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="index-num text-primary">42%</span>
        <span className="w-8 text-left">cpu</span>
      </p>
      <p className="flex items-center justify-end gap-2 mt-1.5">
        <span className="eq">
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="index-num text-secondary">64%</span>
        <span className="w-8 text-left">mem</span>
      </p>
      <p className="flex items-center justify-end gap-2 mt-1.5">
        <span className="eq">
          <span />
          <span />
          <span />
          <span />
          <span />
        </span>
        <span className="index-num text-primary">1.2gbps</span>
        <span className="w-8 text-left">net</span>
      </p>
    </div>
    <span className="h-10 w-px bg-gradient-to-b from-primary/50 to-transparent" />
    <span className="text-[8px] text-primary/50" style={{ writingMode: "vertical-rl" }}>
      agent_hud
    </span>
  </aside>
);

export default HudRail;
