import Link from "next/link";
import { labels } from "@/content";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import type { Project } from "@/types/content";
import { cardClass, ChipList, Eyebrow } from "@/components/ui";
import { ProjectCover } from "./ProjectCover";

/** Featured project card: 16:10 cover with the punchline (same cover as the project page banner), then the summary. */
export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  return (
    <Link
      href={routes.project(project.slug)}
      className={cn(cardClass, "group flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-accent")}
    >
      <ProjectCover
        project={project}
        size="card"
        className="aspect-16/10"
        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
        priority={priority}
      />
      <div className="flex flex-1 flex-col gap-2 p-5 lg:p-4">
        <Eyebrow>{[project.client, project.period].filter(Boolean).join(" · ")}</Eyebrow>
        <h3 className="text-lg leading-snug font-semibold tracking-tight group-hover:text-accent lg:text-base">{project.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-auto pt-3">
          <ChipList items={project.keywords} />
        </div>
        <span className="pt-2 text-sm font-semibold text-accent">{labels.projects.readCase}</span>
      </div>
    </Link>
  );
}
