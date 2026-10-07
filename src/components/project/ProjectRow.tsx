import Image from "next/image";
import Link from "next/link";
import { routes } from "@/lib/routes";
import type { Project } from "@/types/content";

/** Compact numbered row for non-featured projects. */
export function ProjectRow({ project, index }: { project: Project; index: number }) {
  const cover = project.images[0];
  return (
    <Link
      href={routes.project(project.slug)}
      className="group grid grid-cols-[2.5rem_1fr] items-center gap-4 py-5 sm:grid-cols-[3rem_1fr_160px] sm:gap-6"
    >
      <span className="font-mono text-sm text-muted">{String(index + 1).padStart(2, "0")}</span>
      <div className="min-w-0">
        <p className="font-mono text-xs text-muted">
          {[project.client, project.period].filter(Boolean).join(" · ")}
        </p>
        <h3 className="mt-1 font-semibold group-hover:text-accent">
          {project.name} <span aria-hidden>↗</span>
        </h3>
        <p className="mt-1 text-sm text-muted">{project.summary}</p>
      </div>
      {cover && (
        <div className="relative hidden aspect-16/10 overflow-hidden rounded-lg border border-line bg-surface-2 sm:block">
          <Image src={cover.src} alt="" fill sizes="160px" className="object-cover object-top" />
        </div>
      )}
    </Link>
  );
}
