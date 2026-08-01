import React, { useState, useRef, useEffect } from "react";
import { Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, coverImage, image, tech, github, live, index, onClick }) => {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const ref = useRef(null);
  const cardImage = coverImage || image;

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilt({ x: x * 4, y: -y * 4 });
    };

    const onLeave = () => setTilt({ x: 0, y: 0 });

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  const displayIndex = String(index + 1).padStart(2, "0");

  return (
    <div
      ref={ref}
      onClick={() => onClick?.(index)}
      className="group relative border-b border-black/[0.06] dark:border-white/[0.06] transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gray-50/50 dark:hover:bg-white/[0.01] overflow-hidden cursor-pointer"
      style={{
        transform: `perspective(800px) rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
        transformStyle: "preserve-3d",
      }}
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10 md:gap-16 py-12 md:py-24 lg:py-32 px-6 md:px-12 relative z-10">
        <div className="relative w-full lg:w-[45%] aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-[#111] rounded-sm group-hover:shadow-2xl transition-all duration-700">
          {cardImage ? (
            <img
              src={cardImage}
              alt={title}
              className="w-full h-full object-cover grayscale brightness-[0.8] group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-105 transition-all duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)]"
            />
          ) : (
            <div className="flex h-full items-center justify-center text-white/10">
              <span className="text-[10px] font-mono uppercase tracking-[0.5em]">
                No_Image
              </span>
            </div>
          )}
          <div className="absolute top-4 left-4 md:top-6 md:left-6 mix-blend-difference">
            <span className="text-[10px] font-black text-white uppercase tracking-[0.4em]">
              Data_Set // {displayIndex}
            </span>
          </div>
        </div>

        <div className="flex-1 w-full space-y-8 lg:space-y-12">
          <div className="space-y-6">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-[clamp(2.5rem,8vw,5rem)] font-black text-black dark:text-white tracking-tighter uppercase leading-[0.9] transform group-hover:translate-x-2 transition-transform duration-700">
                {title}
              </h3>
              {live && (
                <a
                  href={live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 w-12 h-12 md:w-16 md:h-16 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-500 shrink-0"
                >
                  <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
                </a>
              )}
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base lg:text-lg leading-relaxed max-w-xl font-medium tracking-tight line-clamp-3">
              {description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 md:gap-3 border-t border-black/[0.05] dark:border-white/[0.05] pt-8">
            {tech.map((item, i) => (
              <span
                key={i}
                className="px-3 py-1 bg-black/[0.03] dark:bg-white/[0.05] border border-black/[0.05] dark:border-white/[0.1] text-indigo-600 dark:text-[#E6E6FA] text-[9px] font-bold uppercase tracking-[0.2em] rounded-full opacity-60 group-hover:opacity-100 transition-all duration-500"
              >
                {item}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-8">
            {github && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-black/40 dark:text-white/20 hover:text-indigo-600 dark:hover:text-white transition-all"
                onClick={(e) => e.stopPropagation()}
              >
                <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                <span className="border-b border-transparent group-hover/link:border-current transition-all">
                  Source_Code
                </span>
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-[2px] md:w-[4px] h-0 group-hover:h-full bg-indigo-600 dark:bg-[#E6E6FA] transition-all duration-700 ease-in-out" />
    </div>
  );
};

export default ProjectCard;