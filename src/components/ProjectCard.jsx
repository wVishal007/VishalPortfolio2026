import React from "react";
import { Github, ArrowUpRight } from "lucide-react";

const ProjectCard = ({ title, description, image, tech, github, live }) => {
  return (
    <div className="group relative border-b border-black/5 dark:border-white/5 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] hover:bg-gray-50 dark:hover:bg-white/[0.01] overflow-hidden">
      
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 py-20 px-4 md:px-12 relative z-10">
        
        {/* 1. ARCHITECTURAL IMAGE BOX */}
        <div className="relative w-full md:w-2/5 aspect-[16/10] overflow-hidden bg-gray-200 dark:bg-[#1e1e1e] group-hover:shadow-2xl transition-shadow duration-700">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 group-hover:scale-110 transition-all duration-[1.5s] ease-[cubic-bezier(0.23,1,0.32,1)]"
          />
          {/* Subtle Overlay Badge */}
          <div className="absolute top-4 left-4 mix-blend-difference">
            <span className="text-[8px] font-black text-white uppercase tracking-[0.5em]">
              Case_Study // 01
            </span>
          </div>
        </div>

        {/* 2. CONTENT ARCHITECTURE */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-5xl md:text-7xl font-black text-black dark:text-white tracking-tighter uppercase leading-none transform group-hover:translate-x-4 transition-transform duration-700">
                {title}
              </h3>
              {live && (
                <a href={live} target="_blank" rel="noopener noreferrer" 
                   className="w-12 h-12 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all">
                  <ArrowUpRight size={20} />
                </a>
              )}
            </div>

            <p className="text-gray-500 dark:text-gray-400 text-sm md:text-lg leading-tight max-w-xl font-medium tracking-tight">
              {description}
            </p>
          </div>

          {/* 3. TECH STACK - Minimalist Inline */}
          <div className="flex flex-wrap gap-x-8 gap-y-2 border-t border-black/5 dark:border-white/5 pt-6">
            {tech.map((item, index) => (
              <span key={index} className="text-indigo-600 dark:text-[#E6E6FA] text-[9px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">
                {item}
              </span>
            ))}
          </div>

          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer"
               className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] text-black/40 dark:text-white/20 hover:text-black dark:hover:text-white transition-all">
              <Github size={14} /> View Repository
            </a>
          )}
        </div>
      </div>
      
      {/* 4. HOVER REVEAL - The "Goven" Signature */}
      <div className="absolute top-0 left-0 w-2 h-0 group-hover:h-full bg-indigo-600 dark:bg-[#E6E6FA] transition-all duration-700" />
    </div>
  );
};

export default ProjectCard;