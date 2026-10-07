import { getContent } from "@/i18n/server";
import type { ExperienceProject } from "@/types/content";
import { RichText } from "@/components/ui";

/** A project inside a company card; the bullet list collapses like Notion's "세부 내용" toggle. */
export async function ExperienceProjectItem({ project }: { project: ExperienceProject }) {
  const { labels } = await getContent();
  return (
    <>
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="text-sm text-muted">
          {project.role} · {project.productLabel ?? labels.experience.defaultProductLabel}:{" "}
          <RichText text={project.product} />
        </p>
        {project.period && <p className="font-mono text-xs text-muted">{project.period}</p>}
      </div>
      <h4 className="mt-2 font-semibold">
        {project.title} <span className="font-normal text-muted">{project.subtitle}</span>
      </h4>
      <details className="group mt-3">
        <summary className="cursor-pointer list-none text-sm text-accent select-none">
          <span className="inline-block transition-transform group-open:rotate-90">▸</span> {labels.experience.details}
        </summary>
        <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed marker:text-accent">
          {project.details.map((detail) => (
            <li key={detail}>
              <RichText text={detail} />
            </li>
          ))}
        </ul>
      </details>
    </>
  );
}
