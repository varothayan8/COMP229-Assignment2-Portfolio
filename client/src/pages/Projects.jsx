import SectionHeading from "../components/SectionHeading.jsx";
import ProjectCard from "../components/ProjectCard.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { projects } from "../data/projects.js";

/** Projects — full detail for each project in data/projects.js. */
export default function Projects() {
  usePageMeta("Projects", "Aeruvo, FixSmart and FridgePulse: React, Firebase and Gemini AI applications by Varo, with role, problem solved, technologies and live demos.");

  return (
    <main className="container section">
      <SectionHeading
        as="h1"
        title="Projects"
        intro="Real applications I built and deployed. Each shows my role, the problem it solves, the technologies used and what it does."
      />
      <div className="stack-lg">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} reverse={index % 2 === 1} />
        ))}
      </div>
    </main>
  );
}
