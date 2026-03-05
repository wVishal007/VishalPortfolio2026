import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from '../data/projectData';

/**
 * COMPONENT: ProjectsSection
 * STYLE: High-End Portfolio Exhibit
 */
const categories = ["All", "Web", "AI/ML"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-32 px-6 bg-[#0a0a0a] min-h-screen relative selection:bg-[#E6E6FA] selection:text-black">
      
      {/* Ambient Lighting */}
      <div className="absolute top-0 right-0 w-[40vw] h-[40vw] bg-[#E6E6FA]/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header: Editorial Style */}
        <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/10 pb-12">
          <div className="max-w-2xl">
            <span className="text-[#E6E6FA] text-[10px] font-black uppercase tracking-[0.6em] mb-4 block">
              Manifest // 2026
            </span>
            <h2 className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              SELECTED <br /> <span className="text-white/20">WORKS</span>
            </h2>
          </div>
          
          {/* Navigation Filter */}
          <div className="flex gap-8 md:mb-4">
            {categories.map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all relative pb-2
                  ${activeCategory === cat 
                    ? "text-[#E6E6FA] after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#E6E6FA]" 
                    : "text-white/30 hover:text-white"
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Vertical List */}
        <div className="flex flex-col">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>

        {/* Closing Detail */}
        <div className="mt-24 text-center">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-white/10">
                End of Exhibit // Archive
            </p>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;