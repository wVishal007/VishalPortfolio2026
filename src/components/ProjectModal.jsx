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
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-300"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-[#0a0a0a] border border-white/10 shadow-2xl animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/40 transition-all hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X size={18} />
        </button>

        {project.coverImage && (
          <div className="relative h-64 md:h-80 overflow-hidden rounded-t-2xl">
            <img
              src={project.coverImage}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
          </div>
        )}

        <div className="p-6 md:p-10">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
            <div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#E6E6FA]">
                {project.category || "Project"}
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-[0.9] mt-2">
                {project.title}
              </h2>
            </div>
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-white/5 px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-white/60 transition-all hover:bg-white/10 hover:text-white"
                >
                  <Github size={14} /> Source
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-[#E6E6FA] px-4 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] text-black transition-all hover:opacity-80"
                >
                  <ExternalLink size={14} /> Live
                </a>
              )}
            </div>
          </div>

          <p className="text-sm md:text-base text-white/60 leading-relaxed max-w-2xl">
            {project.description}
          </p>

          {(project.tech && project.tech.length > 0) && (
            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-lg bg-white/5 px-3 py-1.5 text-[9px] font-bold uppercase tracking-widest text-white/50 border border-white/5"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {(project.images && project.images.length > 0) && (
            <div className="mt-8 grid grid-cols-2 md:grid-cols-3 gap-3">
              {project.images.map((img, i) => (
                <div
                  key={`${img}-${i}`}
                  className="relative aspect-video overflow-hidden rounded-xl bg-white/5"
                >
                  <img
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className="w-full h-full object-cover opacity-60 hover:opacity-100 transition-opacity"
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