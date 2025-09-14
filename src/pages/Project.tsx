import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projectsDetails";

const Project = () => {
  return (
    <section id="projects" className="pb-32">
      
      <h2 className="text-4xl text-indigo-500 font-semibold mb-12">
        My Projects
      </h2>
      <p className="text-md italic mb-12">
        Here are my projects including internal tools I built for my work as well as personal projects.
      </p>
      <div className="space-y-12">
        {projects.map((p) => (
          <ProjectCard key={p.title} item={p} />
        ))}
      </div>
    </section>
  );
};

export default Project;
