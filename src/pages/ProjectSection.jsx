import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectData";

const ProjectsSection = () => {
  return (
    <section className="w-full py-24 px-6 bg-gradient-to-br from-blue-950 via-black to-blue-900">
      
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white">
          My <span className="text-green-400">Projects</span>
        </h2>
        <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
          A selection of real-world projects showcasing my skills in full-stack
          development, AI, and system design.
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
