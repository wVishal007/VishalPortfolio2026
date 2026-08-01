import React, { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { usePortfolio } from "../context/portfolio";
import SectionHeader from "../components/terminal/SectionHeader";

const categories = [
  { id: "All", cmd: "all" },
  { id: "Web", cmd: "web" },
  { id: "AI/ML", cmd: "ai_ml" },
];

const ProjectsSection = () => {
  const { projects } = usePortfolio();
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-24 md:py-32 px-4 md:px-6 text-void dark:text-paper">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <SectionHeader
            num="03"
            cmd="projects.run"
            title={
              <>
                Mission <span className="gradient-text">logs</span>
              </>
            }
          />

          {/* CATEGORY FILTER — commands */}
          <div className="flex items-center gap-2 w-fit mb-14 md:mb-16">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded border px-4 py-2 font-mono text-[10px] uppercase tracking-widest transition-all duration-300 ${
                  activeCategory === cat.id
                    ? "border-primary/60 bg-primary/10 text-primary glow-cyan"
                    : "border-void/15 dark:border-paper/15 text-void/50 dark:text-paper/50 hover:border-primary hover:text-primary"
                }`}
              >
                &gt; {cat.cmd}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                {...project}
                onClick={(i) => setSelectedProject(filteredProjects[i])}
              />
            ))}
          </div>
        ) : (
          <div className="py-32 text-center">
            <p className="font-mono text-[10px] uppercase tracking-widest text-void/30 dark:text-paper/30">
              &gt; no results in this category
            </p>
          </div>
        )}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};

export default ProjectsSection;
