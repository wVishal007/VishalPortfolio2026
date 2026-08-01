import React from "react";

const HobbyCard = ({ title, description, image, tags, index }) => {
  return (
    <div className="aurora-card group rounded-xl overflow-hidden flex flex-col">
      <div className="sheen duotone relative aspect-[4/3] overflow-hidden bg-surface">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="w-full h-full object-cover opacity-95 group-hover:scale-[1.03] transition-transform duration-500 ease-out"
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-void/60 to-transparent" />
        <span className="index-num absolute top-3 left-3 rounded bg-void/70 px-2 py-1 font-mono text-[9px] text-primary">
          [proc_{String((index ?? 0) + 1).padStart(2, "0")}]
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl font-bold tracking-tight text-void dark:text-paper group-hover:text-primary transition-colors leading-none">
          {title}
        </h3>
        <p className="mt-3 font-body text-sm text-void/60 dark:text-paper/60 leading-relaxed">
          {description}
        </p>
        <div className="flex flex-wrap gap-x-3 gap-y-1.5 mt-auto pt-5 border-t border-void/10 dark:border-paper/10">
          {tags &&
            tags.map((tag) => (
              <span
                key={tag}
                className="rounded bg-void/5 dark:bg-paper/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-void/50 dark:text-paper/50"
              >
                [{tag}]
              </span>
            ))}
        </div>
      </div>
    </div>
  );
};

export default HobbyCard;
