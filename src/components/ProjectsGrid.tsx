import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  return (
    <section 
      className="py-16 px-4 max-w-6xl mx-auto transition-colors duration-300"
      style={{ backgroundColor: 'var(--background)' }}
    >
      <h2 
        className="text-3xl font-bold mb-12 text-center transition-colors duration-300"
        style={{ color: 'var(--foreground)' }}
      >
        My Work
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}