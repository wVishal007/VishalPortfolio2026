import React from "react";
import { Github, ExternalLink } from "lucide-react";

const ProjectCard = ({ title, description, image, tech, github, live }) => {
  return (
    <div className="group relative bg-[#2b2b2b] rounded-2xl overflow-hidden border border-white/5 hover:border-[#fd6f00]/50 transition-all duration-500 flex flex-col h-full shadow-2xl">
      
      {/* Image Container with Hover Zoom */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-transform duration-700"
        />
        {/* Subtle Orange Overlay on Hover */}
        <div className="absolute inset-0 bg-[#fd6f00]/0 group-hover:bg-[#fd6f00]/10 transition-colors duration-500"></div>
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex-1 space-y-4">
          <h3 className="text-2xl font-black text-white tracking-tight uppercase group-hover:text-[#fd6f00] transition-colors">
            {title}
          </h3>

          <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
            {description}
          </p>

          {/* Tech Stack - Minimalist Pill Tags */}
          <div className="flex flex-wrap gap-2 pt-2">
            {tech.map((item, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-md bg-[#1e1e1e] border border-white/5 text-[#fd6f00] text-[10px] font-bold uppercase tracking-widest"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* Links - Clean Action Bar */}
        <div className="flex gap-3 pt-6">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#1e1e1e] border border-gray-700 text-white text-sm font-bold hover:bg-white hover:text-black transition-all"
            >
              <Github size={16} /> GitHub
            </a>
          )}

          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-[#fd6f00] text-white text-sm font-bold hover:bg-orange-600 shadow-lg shadow-orange-900/20 transition-all"
            >
              <ExternalLink size={16} /> Live
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;