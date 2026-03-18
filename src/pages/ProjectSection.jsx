import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from '../data/projectData';

const categories = ["All", "Web", "AI/ML"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-20 md:py-40 px-0 bg-white dark:bg-[#0a0a0a] min-h-screen relative transition-colors duration-700 overflow-hidden">
      
      {/* REACTIVE BACKGROUND GRADIENTS */}
      <div className="absolute top-[-10%] right-[-10%] w-[70vw] h-[70vw] bg-indigo-100/30 dark:bg-[#E6E6FA]/[0.03] blur-[120px] pointer-events-none rounded-full animate-pulse" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[50vw] h-[50vw] bg-blue-100/20 dark:bg-blue-900/[0.03] blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-full relative z-10">
        
        {/* EDITORIAL HEADER: Responsive Flex-Col to Row */}
        <div className="max-w-7xl mx-auto px-6 mb-20 md:mb-40 flex flex-col lg:flex-row lg:items-end justify-between gap-16">
          <div className="relative group">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-px w-8 bg-black dark:bg-[#E6E6FA] transition-all group-hover:w-16" />
              <span className="text-indigo-600 dark:text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.6em]">
                Archives_2026
              </span>
            </div>
            
            {/* Fluid Typography using clamp for responsiveness */}
            <h2 className="text-[clamp(4rem,15vw,12rem)] font-black text-black dark:text-white tracking-tighter uppercase leading-[0.8] transition-all">
              PROJ<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/10 via-black/5 to-transparent dark:from-white/80 dark:via-blue-500/20 dark:to-white/90 italic font-light">
                ECTS
              </span>
            </h2>
          </div>
          
          {/* NAVIGATION: Now horizontally scrollable on mobile */}
          <nav className="flex flex-col gap-6 items-start lg:items-end w-full lg:w-auto">
            <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-[0.4em] border-l lg:border-l-0 lg:border-r border-black/10 dark:border-white/10 pl-4 lg:pl-0 lg:pr-4">
              Selection_System // Active
            </span>
            <div className="flex flex-wrap gap-3 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`whitespace-nowrap px-8 py-3 text-[10px] font-black uppercase tracking-[0.2em] border transition-all duration-500
                    ${activeCategory === cat 
                      ? "bg-black dark:bg-white text-white dark:text-black border-transparent shadow-[0_10px_30px_rgba(0,0,0,0.1)] dark:shadow-[0_10px_30px_rgba(255,255,255,0.05)] scale-105" 
                      : "bg-transparent text-black/40 dark:text-white/30 border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20 hover:text-black dark:hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* GALLERY WRAPPER */}
        <div className="flex flex-col border-t border-black/5 dark:border-white/5">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))
          ) : (
            <div className="py-40 text-center">
              <p className="text-gray-400 font-mono text-xs uppercase tracking-widest animate-pulse">
                Initializing_Data_Streams...
              </p>
            </div>
          )}
        </div>

        {/* FOOTER DETAIL: Enhanced Brutalist Signature */}
        <footer className="py-32 flex flex-col items-center justify-center gap-8 px-6">
          <div className="w-px h-24 bg-gradient-to-b from-black/10 to-transparent dark:from-white/10 dark:to-transparent" />
          <div className="group cursor-none text-center">
            <p className="text-[10px] font-black uppercase tracking-[1.5em] text-black/20 dark:text-white/10 group-hover:text-indigo-500 transition-colors duration-700">
               End_of_Exhibit
            </p>
            <span className="text-[8px] font-mono text-black/5 dark:text-white/5 uppercase mt-4 block">
              Automated_System_Report // Vishal_Singh_2026
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ProjectsSection;