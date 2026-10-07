import { RichText } from "@/components/ui";
import { labels, sections } from "@/content";
import { groupActivities } from "@/lib/activities";
import type { About, Activity, Certification, Degree, Experience, Profile, SkillGroup } from "@/types/content";

type Props = {
  profile: Profile;
  siteUrl: string;
  lastUpdated: string;
  introduction: string[];
  about: About;
  experiences: Experience[];
  skillGroups: SkillGroup[];
  degrees: Degree[];
  activities: Activity[];
  certifications: Certification[];
};

/**
 * A4 print layout of the /resume content, turned into /docs/resume.pdf by `pnpm resume:pdf`.
 * Same data as the web page; every "세부 내용" is expanded and no motion is used.
 */
export function ResumePrint(p: Props) {
  const resumeUrl = `${p.siteUrl}/resume`;
  return (
    <article className="mx-auto max-w-[760px] px-6 py-10 text-[13px] leading-[1.6] text-ink print:max-w-none print:px-0 print:py-0">
      <header className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
        <div>
          <h1 className="text-[28px] leading-tight font-bold">
            {p.profile.nameKo} <span className="text-base font-medium text-muted">{p.profile.nameEn}</span>
          </h1>
          <p className="mt-1 text-[14px]">
            {p.profile.position} · {p.profile.role}
          </p>
        </div>
        <div className="text-right text-[12px] text-muted">
          <p>{p.profile.email}</p>
          <p>
            <a href={p.siteUrl}>{p.siteUrl.replace(/^https?:\/\//, "")}</a>
          </p>
          <p>
            {labels.profile.lastUpdated}: {p.lastUpdated}
          </p>
        </div>
      </header>

      <Block title={sections.introduction.title}>
        <p className="text-[14px] leading-[1.7]">{p.introduction.join(" ")}</p>
      </Block>

      <Block title={sections.about.title}>
        <div className="grid grid-cols-2 gap-x-6 gap-y-4">
          {p.about.competencies.map((c, i) => (
            <div key={c.title} className="break-inside-avoid">
              <p className="text-[14px] font-bold">
                <span className="mr-1.5 text-accent tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                {c.title}
              </p>
              <ul className="mt-1 list-disc space-y-0.5 pl-4 marker:text-muted">
                {c.evidence.map((line) => (
                  <li key={line}>
                    <RichText text={line} baseUrl={p.siteUrl} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title={sections.experience.title}>
        <div className="space-y-9">
          {p.experiences.map((exp) => (
            <section key={exp.company}>
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink/70 pb-1.5 break-after-avoid">
                <h3 className="text-[16px] font-bold">
                  {exp.company} <span className="font-medium text-muted">· {exp.role}</span>
                </h3>
                <span className="shrink-0 text-[12px] text-muted tabular-nums">{exp.tenure}</span>
              </div>
              <p className="mt-1 text-[12px] text-muted">{exp.department}</p>
              <div className="mt-3 space-y-4">
                {exp.projects.map((proj) => (
                  <div key={proj.title} className="break-inside-avoid">
                    <div className="flex items-baseline justify-between gap-4 break-after-avoid">
                      <p className="font-semibold">
                        {proj.title} <span className="font-normal text-muted">{proj.subtitle}</span>
                      </p>
                      {proj.period && <span className="shrink-0 text-[12px] text-muted tabular-nums">{proj.period}</span>}
                    </div>
                    <p className="text-[12px] text-muted">
                      {proj.role} · {proj.productLabel ?? labels.experience.defaultProductLabel}:{" "}
                      <RichText text={proj.product} baseUrl={p.siteUrl} />
                    </p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 marker:text-muted">
                      {proj.details.map((d) => (
                        <li key={d}>
                          <RichText text={d} baseUrl={p.siteUrl} />
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Block>

      <Block title={sections.skills.title}>
        <dl className="space-y-1">
          {p.skillGroups.map((g) => (
            <div key={g.type} className="flex gap-3">
              <dt className="w-44 shrink-0 font-semibold">{g.type}</dt>
              <dd>{g.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </Block>

      <Block title={sections.degrees.title}>
        <div className="space-y-2">
          {p.degrees.map((d) => (
            <div key={d.school} className="break-inside-avoid">
              <div className="flex items-baseline justify-between gap-4">
                <p className="font-semibold">
                  {d.school} <span className="font-normal">· {d.degree}</span>
                </p>
                <span className="shrink-0 text-[12px] text-muted">{d.period}</span>
              </div>
              <p className="text-[12px] text-muted">
                {d.gpa} · {d.focus}
              </p>
            </div>
          ))}
        </div>
      </Block>

      <Block title={sections.activities.title}>
        <div className="space-y-4">
          {groupActivities(p.activities).map((group) => (
            <section key={group.kind}>
              <h3 className="mb-1.5 text-[14px] font-bold break-after-avoid">{labels.activityKinds[group.kind]}</h3>
              <ul className="space-y-1.5">
                {group.items.map((a) => {
                  // First line on its own (e.g. a paper title), the rest as one muted line; skip an empty "요약:" label.
                  const [first, ...rest] = a.lines.filter((line) => !/^요약:?$/.test(line.trim()));
                  return (
                    <li key={a.title} className="flex gap-3 break-inside-avoid">
                      <span className="w-20 shrink-0 text-[12px] text-muted tabular-nums">{a.date}</span>
                      <span>
                        <span className="font-semibold">{a.title}</span>
                        {group.kind === "paper" ? (
                          <>
                            <span className="block">{first}</span>
                            {rest.length > 0 && <span className="block text-[12px] text-muted">{rest.join(" · ")}</span>}
                          </>
                        ) : (
                          <span className="text-muted"> — {[first, ...rest].join(" ")}</span>
                        )}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </section>
          ))}
        </div>
      </Block>

      <Block title={sections.certifications.title}>
        <ul className="space-y-1">
          {p.certifications.map((c) => (
            <li key={c.title} className="flex gap-3">
              <span className="w-20 shrink-0 text-[12px] text-muted tabular-nums">{c.date}</span>
              <span>
                <span className="font-semibold">{c.title}</span>
                <span className="text-muted">
                  {" "}
                  — {[c.detail, c.issuer].filter(Boolean).join(" · ")}
                </span>
              </span>
            </li>
          ))}
        </ul>
      </Block>

      <p className="mt-8 border-t border-line pt-3 text-[11px] text-muted">{labels.profile.printFooter(resumeUrl)}</p>
    </article>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-6">
      <h2 className="mb-2 text-[16px] font-bold text-accent break-after-avoid">{title}</h2>
      {children}
    </section>
  );
}
