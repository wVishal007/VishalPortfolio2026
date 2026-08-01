import React from "react";

const SectionHeader = ({ num, cmd, title, description }) => (
  <header className="mb-14 md:mb-16">
    <div className="flex items-center gap-3 mb-4">
      <span className="index-num text-sm font-bold text-primary">{num}</span>
      <span className="h-px w-10 rounded-full bg-primary/40" />
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-void/50 dark:text-paper/50">
        $ {cmd}
      </span>
    </div>

    <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
      <h2 className="font-display font-bold tracking-tight text-[clamp(2.2rem,6vw,4.5rem)] leading-[0.95] text-void dark:text-paper">
        {title}
      </h2>
      {description && (
        <p className="max-w-sm font-body text-sm md:text-base text-void/60 dark:text-paper/60 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  </header>
);

export default SectionHeader;
