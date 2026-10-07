import Image from "next/image";
import Link from "next/link";
import { labels } from "@/content";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import type { Project } from "@/types/content";
import { cardClass, ChipList, Eyebrow } from "@/components/ui";

/**
 * Featured project card. The 16:10 header shows the cover image with the two-line punchline
 * laid over a bottom gradient; without a cover, the punchline sits on a plain surface.
 */
export function ProjectCard({ project, priority }: { project: Project; priority?: boolean }) {
  const cover = project.cardImage ?? project.images[0];
  const punchline = project.punchline;
  return (
    <Link
      href={routes.project(project.slug)}
      className={cn(cardClass, "group flex h-full flex-col overflow-hidden rounded-2xl transition-colors hover:border-accent")}
    >
      <div className="relative flex aspect-16/10 items-end overflow-hidden bg-surface-2">
        {cover && (
          <Image
            src={cover.src}
            alt={labels.projects.coverAlt(project.name)}
            fill
            priority={priority}
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
          />
        )}
        {punchline && (
          <>
            {cover && (
              <span aria-hidden className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-transparent" />
            )}
            <p
              className={cn(
                "relative p-6 text-2xl leading-snug font-semibold tracking-tight",
                cover && "text-white drop-shadow-sm",
              )}
            >
              {punchline[0]}
              <br />
              <span className={cover ? "text-panel-accent" : "text-accent"}>{punchline[1]}</span>
            </p>
          </>
        )}
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <Eyebrow>{[project.client, project.period].filter(Boolean).join(" · ")}</Eyebrow>
        <h3 className="text-lg font-semibold tracking-tight group-hover:text-accent">{project.name}</h3>
        <p className="text-sm leading-relaxed text-muted">{project.summary}</p>
        <div className="mt-auto pt-3">
          <ChipList items={project.keywords} />
        </div>
        <span className="pt-2 text-sm font-semibold text-accent">{labels.projects.readCase}</span>
      </div>
    </Link>
  );
}
