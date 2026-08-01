import React from "react";

const Divider = ({ label }) => (
  <div className="max-w-6xl mx-auto px-4 md:px-6 flex items-center gap-4 font-mono text-[9px] uppercase tracking-[0.3em] text-void/30 dark:text-paper/30">
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
    <span>/// {label}</span>
    <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
  </div>
);

export default Divider;
