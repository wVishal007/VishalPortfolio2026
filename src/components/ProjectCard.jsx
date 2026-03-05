import React from "react";
import { Github, ArrowUpRight } from "lucide-react";

/**
 * COMPONENT: ProjectCard
 * STYLE: Editorial Row with Lavender Accents
 */
const ProjectCard = ({ title, description, image, tech, github, live }) => {
  return (
    <div className="group relative bg-[#0a0a0a] border-b border-white/5 hover:bg-[#111] transition-all duration-700 flex flex-col md:flex-row gap-8 py-12 px-4 overflow-hidden">
      
      {/* Visual: Grayscale-to-Color Image */}
      <div className="relative w-full md:w-1/3 aspect-video overflow-hidden rounded-sm bg-[#1e1e1e]">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#0a0a0a] via-transparent to-transparent opacity-60"></div>
      </div>

      {/* Content Side */}
      <div className="flex-1 flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-start justify-between">
            <h3 className="text-3xl md:text-5xl font-black text-white tracking-[-0.03em] uppercase leading-none">
              {title}
            </h3>
            {live && (
              <a 
                href={live} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-white/20 hover:text-[#E6E6FA] transition-colors p-2"
              >
                <ArrowUpRight size={32} />
              </a>
            )}
          </div>

          <p className="text-gray-500 text-sm md:text-base leading-relaxed max-w-xl font-medium">
            {description}
          </p>

          {/* Minimalist Tech Tags */}
          <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.2em] opacity-40 group-hover:opacity-100 transition-opacity"
              >
                // {item}
              </span>
            ))}
          </div>
        </div>

        {/* Action Bar */}
        <div className="flex gap-8 pt-8 items-center">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[10px] font-black uppercase tracking-[0.3em] text-white/30 hover:text-white transition-all flex items-center gap-2"
            >
              <Github size={14} /> Source Code
            </a>
          )}
          <div className="h-px flex-1 bg-white/5 group-hover:bg-[#E6E6FA]/20 transition-all duration-700"></div>
        </div>
      </div>
      
      {/* Background Accent on Hover */}
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-[#E6E6FA]/[0.02] translate-y-full group-hover:translate-y-0 transition-transform duration-500"></div>
    </div>
  );
};

export default ProjectCard;