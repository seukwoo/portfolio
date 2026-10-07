import { Reveal } from "@/components/motion";
import type { Project } from "@/types/content";
import { ProjectCard } from "./ProjectCard";

/** Featured cards: 1 column on phones, 2 on tablets, one row of 4 on desktop. */
export function ProjectGrid({ projects, priorityCount = 0 }: { projects: Project[]; priorityCount?: number }) {
  return (
    <Reveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
      {projects.map((project, i) => (
        <div data-reveal key={project.slug}>
          <ProjectCard project={project} priority={i < priorityCount} />
        </div>
      ))}
    </Reveal>
  );
}
