import React from "react";
import { Github, ArrowUpRight, ExternalLink } from "lucide-react";

const getStatusConfig = (status, live) => {
  const s = (status || (live && live !== "#" ? "deployed" : "local")).toLowerCase();
  switch (s) {
    case "deployed":
    case "live":
    case "production":
      return { bg: "bg-accent/10", border: "border-accent/30", text: "text-accent", dot: "bg-accent", label: "deployed" };
    case "staging":
    case "preview":
      return { bg: "bg-primary/10", border: "border-primary/30", text: "text-primary", dot: "bg-primary", label: "staging" };
    case "archived":
    case "deprecated":
      return { bg: "bg-void/10 dark:bg-paper/10", border: "border-void/20 dark:border-paper/20", text: "text-void/50 dark:text-paper/50", dot: "bg-void/50 dark:bg-paper/50", label: "archived" };
    case "local":
    case "development":
    case "dev":
    default:
      return { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", dot: "bg-amber-400", label: "local" };
  }
};

const ProjectCard = ({
  title,
  description,
  coverImage,
  image,
  tech,
  github,
  live,
  category,
  status,
  index,
  onClick,
}) => {
  const cardImage = coverImage || image;
  const statusCfg = getStatusConfig(status, live);
  const files = 14 + (index ?? 0) * 3;
  const deps = 8 + (index ?? 0) * 2;
  const lines = ((index ?? 0) + 1) * 420;

  return (
    <div
      onClick={() => onClick?.(index)}
      className="aurora-card group rounded-xl overflow-hidden cursor-pointer flex flex-col"
    >
      <span className="card-spot" aria-hidden="true" />
      <div className="sheen duotone relative aspect-video overflow-hidden bg-surface">
        {cardImage ? (
          <img
            src={cardImage}
            alt={title}
            loading="lazy"
            className="w-full h-full object-cover opacity-95 group-hover:scale-[1.04] transition-transform duration-500 ease-out"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="font-mono text-[10px] text-void/30 dark:text-paper/30">
              &gt; no.image
            </span>
          </div>
        )}
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-void/60 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="rounded bg-void/70 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-primary">
            [{category || "project"}]
          </span>
          <span className={`rounded ${statusCfg.bg} border ${statusCfg.border} px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${statusCfg.text}`}>
            <span className={`pulse-dot h-1 w-1 rounded-full ${statusCfg.dot}`} />
            {statusCfg.label}
          </span>
        </div>
        <span className="absolute top-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-void/60 backdrop-blur-sm text-paper opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowUpRight size={14} />
        </span>
      </div>

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-display text-2xl font-bold tracking-tight text-void dark:text-paper group-hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
          <span className="index-num text-[10px] text-void/30 dark:text-paper/30 shrink-0">
            [{String(index + 1).padStart(2, "0")}]
          </span>
        </div>

        <p className="mt-3 font-body text-sm text-void/60 dark:text-paper/60 leading-relaxed line-clamp-3">
          {description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {tech.slice(0, 4).map((item) => (
            <span
              key={item}
              className="rounded bg-void/5 dark:bg-paper/5 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-void/60 dark:text-paper/60"
            >
              [{item}]
            </span>
          ))}
          {tech.length > 4 && (
            <span className="rounded px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-primary">
              [+{tech.length - 4}]
            </span>
          )}
        </div>

        <div className="mt-5 flex items-center justify-between font-mono text-[9px] uppercase tracking-widest text-void/35 dark:text-paper/35">
          <span>files: {files}</span>
          <span>deps: {deps}</span>
          <span>loc: {lines}</span>
        </div>

        <div className="flex items-center gap-5 mt-4 pt-5 border-t border-void/10 dark:border-paper/10">
          {github && github !== "#" && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-void/50 dark:text-paper/50 hover:text-primary transition-colors"
            >
              <Github size={13} /> &gt; source
            </a>
          )}
          {live && live !== "#" && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-void/50 dark:text-paper/50 hover:text-primary transition-colors"
            >
              <ExternalLink size={13} /> &gt; deploy
            </a>
          )}
          <span className="ml-auto inline-flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider text-primary">
            &gt; inspect <ArrowUpRight size={13} />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
