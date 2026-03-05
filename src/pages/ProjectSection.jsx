import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import {projects} from '../data/projectData'

const categories = ["All", "Web", "AI/ML"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-24 px-6 bg-[#1e1e1e]">
      
      {/* Heading - Bold & Centered */}
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase">
          My <span className="text-[#fd6f00]">Projects</span>
        </h2>
        <div className="w-20 h-1.5 bg-[#fd6f00] mx-auto mt-4 rounded-full"></div>
        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          A selection of projects showcasing expertise in LLMs, Full-Stack, and Agentic AI.
        </p>
      </div>

      {/* Category Filter - Tech Dashboard Style */}
      <div className="flex justify-center gap-3 mb-16 flex-wrap">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-8 py-2.5 rounded-xl font-bold text-sm uppercase tracking-widest border transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-[#fd6f00] border-[#fd6f00] text-white shadow-lg shadow-orange-900/30 scale-105"
                  : "bg-[#2b2b2b] border-white/5 text-gray-400 hover:border-[#fd6f00]/50 hover:text-white"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;