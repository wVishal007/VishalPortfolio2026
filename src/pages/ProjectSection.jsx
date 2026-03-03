import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";

const categories = ["All", "Web", "AI/ML"];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-blue-950 via-black to-blue-900">
      
      {/* Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My <span className="text-green-400">Projects</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A selection of projects showcasing my skills in Web, AI, and Full-Stack development.
        </p>
      </div>

      {/* Category Filter Navbar */}
      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {categories.map((cat, idx) => (
          <button
            key={idx}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full font-semibold text-sm md:text-base transition
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-black shadow-lg"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;