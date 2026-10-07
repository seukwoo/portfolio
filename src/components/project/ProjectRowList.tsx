import { Reveal } from "@/components/motion";
import type { Project } from "@/types/content";
import { ProjectRow } from "./ProjectRow";

export function ProjectRowList({ projects }: { projects: Project[] }) {
  return (
    <Reveal>
      <ol className="divide-y divide-line border-y border-line">
        {projects.map((project, i) => (
          <li data-reveal key={project.slug}>
            <ProjectRow project={project} index={i} />
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
