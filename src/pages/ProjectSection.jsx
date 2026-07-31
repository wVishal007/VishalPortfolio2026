import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { usePortfolio } from "../context/portfolio";

const categories = ["All", "Web", "AI/ML"];

const ProjectsSection = () => {
  const { projects } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-20 md:py-40 bg-white dark:bg-[#0a0a0a] min-h-screen relative transition-colors duration-700 overflow-hidden">
      
      {/* ATMOSPHERIC BACKGROUND */}
      <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-indigo-50/40 dark:bg-indigo-900/[0.02] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[60vw] h-[60vw] bg-blue-50/30 dark:bg-blue-900/[0.02] blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        
        {/* EDITORIAL HEADER */}
        <div className="max-w-7xl mx-auto px-6 mb-24 md:mb-48 flex flex-col lg:flex-row lg:items-end justify-between gap-12">
          <div className="relative">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-[1px] w-12 bg-indigo-600 dark:bg-[#E6E6FA]" />
              <span className="text-indigo-600 dark:text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.8em]">
                Selected_Works
              </span>
            </div>
            
            <h2 className="text-[clamp(3.5rem,12vw,10rem)] font-black text-black dark:text-white tracking-tighter uppercase leading-[0.8]">
              PROJ<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-black/20 to-black dark:from-white/10 dark:to-white italic font-extralight">
                ECTS
              </span>
            </h2>
          </div>
          
          {/* NAVIGATION */}
          <nav className="flex flex-col gap-6 items-start lg:items-end">
            <div className="flex gap-2 p-1 bg-black/[0.03] dark:bg-white/[0.03] rounded-full border border-black/5 dark:border-white/5 backdrop-blur-md">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-6 md:px-8 py-2.5 text-[10px] font-black uppercase tracking-[0.2em] rounded-full transition-all duration-500
                    ${activeCategory === cat 
                      ? "bg-white dark:bg-[#1a1a1a] text-black dark:text-white shadow-xl scale-100" 
                      : "text-black/40 dark:text-white/30 hover:text-black dark:hover:text-white"
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </nav>
        </div>

        {/* GALLERY */}
        <div className="border-t border-black/[0.08] dark:border-white/[0.08]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} index={index} {...project} />
            ))
          ) : (
            <div className="py-40 text-center">
              <p className="text-[10px] font-mono uppercase tracking-[0.5em] text-black/20 dark:text-white/10">
                Awaiting_Data_Input...
              </p>
            </div>
          )}
        </div>

        {/* BRUTALIST FOOTER */}
        <footer className="pt-40 pb-20 flex flex-col items-center gap-10">
          <div className="h-32 w-[1px] bg-gradient-to-b from-indigo-600/50 to-transparent" />
          <div className="text-center space-y-4">
            <p className="text-[9px] font-black uppercase tracking-[1.2em] text-black/30 dark:text-white/20">
              End_of_Transmission
            </p>
            <p className="text-[8px] font-mono text-black/10 dark:text-white/5 uppercase">
              Vishal Singh // Systems_Architect // 2026
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default ProjectsSection;