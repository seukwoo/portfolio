import { getContent } from "@/i18n/server";
import { Reveal } from "@/components/motion";
import { ChipList, RichText } from "@/components/ui";
import type { Project } from "@/types/content";

/** The numbered 1–6 fields from each Notion project page, as a label/value list. */
export async function ProjectInfoList({ project }: { project: Project }) {
  const { labels } = await getContent();
  const f = labels.projects.fields;
  const rows: { label: string; value: React.ReactNode }[] = [
    { label: f.fullName, value: project.fullName },
    { label: f.domain, value: project.domain },
    { label: f.period, value: project.period },
    {
      label: f.tasks,
      value: (
        <ul className="list-disc space-y-1.5 pl-5 marker:text-accent">
          {project.tasks.map((task) => (
            <li key={task}>
              <RichText text={task} />
            </li>
          ))}
        </ul>
      ),
    },
    {
      label: f.roles,
      value: project.roles.map((role) => (
        <p key={role} className="first:font-semibold">
          {role}
        </p>
      )),
    },
    { label: f.skills, value: <ChipList items={project.skills} /> },
  ];

  return (
    <Reveal>
      <dl className="divide-y divide-line border-y border-line">
        {rows.map((row) => (
          <div data-reveal key={row.label} className="grid gap-3 py-6 sm:grid-cols-[200px_1fr] sm:gap-8">
            <dt className="font-semibold">{row.label}</dt>
            <dd className="leading-relaxed text-ink/90">{row.value}</dd>
          </div>
        ))}
      </dl>
    </Reveal>
  );
}
