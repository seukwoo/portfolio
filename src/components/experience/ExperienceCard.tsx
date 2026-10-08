import { getContent } from "@/i18n/server";
import { experienceUnits, isGroup, tenureLength } from "@/lib/experience";
import type { Experience, ExperienceUnit } from "@/types/content";
import { Card, Eyebrow } from "@/components/ui";
import { ExperienceProjectItem } from "./ExperienceProjectItem";

/**
 * One company: role/tenure on the left, the projects done there on the right.
 * A company group shows its total length on the left and each affiliate as a sub-heading on the right.
 */
export async function ExperienceCard({ experience }: { experience: Experience }) {
  const { labels } = await getContent();
  const group = isGroup(experience);
  const units = experienceUnits(experience);
  return (
    <Card className="grid gap-6 p-6 sm:p-8 lg:grid-cols-[260px_1fr]">
      <div>
        <Eyebrow>{experience.tenure}</Eyebrow>
        {group ? (
          <>
            <h3 className="mt-2 text-xl font-bold">{experience.company}</h3>
            <p className="mt-1 text-sm text-muted">{tenureLength(experience.tenure, labels.experience.tenureLength)}</p>
          </>
        ) : (
          <>
            <h3 className="mt-2 text-xl font-bold">{experience.role}</h3>
            <p className="mt-1 font-medium">{experience.company}</p>
            <dl className="mt-4 space-y-1 text-sm text-muted">
              <Field label={labels.experience.department} value={experience.department} />
              <Field label={labels.experience.tenure} value={experience.tenure} />
            </dl>
            {experience.mission && <Mission text={experience.mission} label={labels.experience.mission} />}
          </>
        )}
      </div>
      <div className="space-y-12">
        {units.map((unit) => (
          <section key={unit.company}>
            {group && <UnitHeader unit={unit} />}
            <ul className="divide-y divide-line">
              {unit.projects.map((project) => (
                <li key={project.title} className="py-5 first:pt-0 last:pb-0">
                  <ExperienceProjectItem project={project} />
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Card>
  );
}

function UnitHeader({ unit }: { unit: ExperienceUnit }) {
  return (
    <div className="mb-5 border-b border-line pb-3">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <p className="font-semibold">
          {unit.company} <span className="font-normal text-muted">· {unit.role}</span>
        </p>
        <span className="text-xs text-muted tabular-nums">{unit.tenure}</span>
      </div>
      <p className="mt-1 text-sm text-muted">{unit.department}</p>
      {unit.highlights && (
        <ul className="mt-2 space-y-1 text-sm">
          {unit.highlights.map((h) => (
            <li key={h} className="flex gap-2">
              <span aria-hidden className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent" />
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Mission({ text, label }: { text: string; label: string }) {
  return (
    <div className="mt-4 rounded-xl bg-accent-soft px-4 py-3 text-sm leading-relaxed">
      <p className="text-xs font-semibold text-accent">{label}</p>
      <p className="mt-1">{text}</p>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="inline">{label}: </dt>
      <dd className="inline">{value}</dd>
    </div>
  );
}
