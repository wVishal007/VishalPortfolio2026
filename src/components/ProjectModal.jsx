import { useEffect } from "react";
import { X, ExternalLink, Github } from "lucide-react";

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-void/80"
      onClick={onClose}
    >
      <div
        className="aurora-card relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-void/10 dark:border-paper/10 bg-void/80 dark:bg-void/90 px-4 py-2.5 backdrop-blur-sm rounded-t-xl">
          <span className="index-num font-mono text-[9px] uppercase tracking-widest text-void/50 dark:text-paper/50 truncate">
            cat {project.title.toLowerCase().replace(/[^a-z0-9]+/g, "_")}.py
          </span>
          <button
            onClick={onClose}
            className="flex h-7 w-7 items-center justify-center rounded-full border border-void/15 dark:border-paper/15 text-void/60 dark:text-paper/60 hover:border-primary hover:text-primary transition-all"
            aria-label="Close"
          >
            <X size={14} />
          </button>
        </div>

        {project.coverImage && (
          <div className="relative h-56 md:h-72 overflow-hidden">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-5">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-primary mb-2">
                [{project.category || "project"}] / {project.status || "selected"}
              </p>
              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-void dark:text-paper leading-tight">
                {project.title}
              </h2>
            </div>
            <div className="flex gap-3">
              {project.github && project.github !== "#" && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded border border-void/15 dark:border-paper/15 px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider text-void/60 dark:text-paper/60 hover:border-primary hover:text-primary transition-all"
                >
                  <Github size={14} /> &gt; source
                </a>
              )}
              {project.live && project.live !== "#" && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-aurora glow-cyan inline-flex items-center gap-2 rounded px-4 py-2.5 font-mono text-[10px] uppercase tracking-wider font-bold text-void dark:text-paper transition-colors"
                >
                  <ExternalLink size={14} /> &gt; deploy
                </a>
              )}
            </div>
          </div>

          <p className="font-body text-sm md:text-base text-void/60 dark:text-paper/60 leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {project.tech && project.tech.length > 0 && (
            <div className="mt-7 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded bg-void/5 dark:bg-paper/5 px-3 py-1.5 font-mono text-[9px] uppercase tracking-wider text-void/60 dark:text-paper/60"
                >
                  [{t}]
                </span>
              ))}
            </div>
          )}

          {project.images && project.images.length > 0 && (
            <div className="mt-7 grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.images.map((img, i) => (
                <div
                  key={`${img}-${i}`}
                  className="relative aspect-video overflow-hidden rounded-md bg-surface border border-void/10 dark:border-paper/10"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
