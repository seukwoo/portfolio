import Link from "next/link";
import { getContent } from "@/i18n/server";
import { cn } from "@/lib/cn";
import { routes } from "@/lib/routes";
import type { Project } from "@/types/content";
import { cardClass } from "@/components/ui";

type Props = { prev?: Project; next?: Project };

/** Previous / next project links at the bottom of a detail page. */
export async function ProjectPager({ prev, next }: Props) {
  const { labels } = await getContent();
  return (
    <nav className="grid gap-4 sm:grid-cols-2" aria-label={labels.projects.pagerLabel}>
      {prev ? <PagerLink project={prev} caption={labels.projects.prev} /> : <span />}
      {next && <PagerLink project={next} caption={labels.projects.next} alignEnd />}
    </nav>
  );
}

function PagerLink({ project, caption, alignEnd }: { project: Project; caption: string; alignEnd?: boolean }) {
  return (
    <Link
      href={routes.project(project.slug)}
      className={cn(cardClass, "rounded-2xl p-5 hover:border-accent", alignEnd && "sm:text-right")}
    >
      <p className="text-xs text-muted">{caption}</p>
      <p className="mt-1 font-semibold">{project.name}</p>
    </Link>
  );
}
