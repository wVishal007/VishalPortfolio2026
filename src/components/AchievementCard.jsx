import React from "react";

const AchievementCard = ({ title, description, image, meta, highlight, index }) => {
  return (
    <div className="terminal-window group rounded-lg overflow-hidden flex flex-col hover:border-primary/40 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden bg-surface">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover opacity-95 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-void/70 to-transparent" />
        {highlight && (
          <span className="rounded bg-void/70 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-primary flex items-center gap-1.5 absolute top-4 left-4">
            <span className="pulse-dot h-1 w-1 rounded-full bg-primary" />
            [{highlight}]
          </span>
        )}
        <span className="index-num absolute top-4 right-4 rounded bg-void/70 px-2 py-1 font-mono text-[9px] text-paper">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold tracking-tight text-void dark:text-paper group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        <p className="mt-3 font-body text-sm text-void/60 dark:text-paper/60 leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-auto pt-5 border-t border-void/10 dark:border-paper/10">
          {meta.map((item) => (
            <span
              key={item}
              className="rounded bg-void/5 dark:bg-paper/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-void/50 dark:text-paper/50"
            >
              [{item}]
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AchievementCard;
