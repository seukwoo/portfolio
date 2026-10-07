import { ChipList, Eyebrow } from "@/components/ui";
import type { Project } from "@/types/content";

export function ProjectHeader({ project }: { project: Project }) {
  const subtitle = [project.client, project.duty].filter(Boolean).join(" · ") || project.domain;
  return (
    <header>
      <Eyebrow className="text-sm">{subtitle}</Eyebrow>
      <h1 className="mt-3 mb-5 text-4xl font-bold tracking-tight sm:text-5xl">{project.name}</h1>
      <ChipList items={project.keywords} />
    </header>
  );
}
