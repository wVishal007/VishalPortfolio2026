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
     <div className="
  max-w-7xl mx-auto
  flex gap-6 overflow-x-auto pb-4
  md:grid md:grid-cols-2
  lg:grid-cols-3
  md:gap-10
  md:overflow-visible
  scroll-smooth snap-x snap-mandatory
">
  {projects.map((project, index) => (
    <div
      key={index}
      className="min-w-[90%] snap-center
 sm:min-w-[80%] md:min-w-0"
    >
      <ProjectCard {...project} />
    </div>
  ))}
</div>
    </section>
  );
};

export default ProjectsSection;
