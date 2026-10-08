import { RichText } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { Lang } from "@/i18n/config";
import { getContent } from "@/i18n/server";
import { groupActivities } from "@/lib/activities";
import { isGroup, tenureLength } from "@/lib/experience";
import type { About, Activity, Certification, Degree, Experience, ExperienceProject, Profile, SkillGroup } from "@/types/content";

type Props = {
  lang: Lang;
  profile: Profile;
  siteUrl: string;
  /** Public code profile shown in the header (e.g. GitHub). */
  github?: string;
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
export async function ResumePrint(p: Props) {
  const { labels, sections } = await getContent();
  // Links in the PDF are absolute and stay in the PDF's language.
  const linkBase = p.lang === "en" ? `${p.siteUrl}/en` : p.siteUrl;
  const resumeUrl = `${linkBase}/resume`;
  return (
    <article className="mx-auto max-w-[760px] px-6 py-10 text-[13px] leading-[1.6] text-ink print:max-w-none print:px-0 print:py-0">
      <header className="flex items-end justify-between gap-6 border-b-2 border-ink pb-4">
        <div className="flex items-center gap-5">
          {/* Plain img: the PDF is printed from a static page, no lazy loading or srcset needed */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={p.profile.photo.src}
            alt={labels.profile.photoAlt(p.profile.name)}
            className="size-[84px] shrink-0 rounded-full border border-line object-cover"
          />
          <div>
          <h1 className="text-[28px] leading-tight font-bold">
            {p.profile.name} <span className="text-base font-medium text-muted">{p.profile.altName}</span>
          </h1>
          <p className="mt-1 text-[14px]">
            {p.profile.position} · {p.profile.role}
          </p>
          </div>
        </div>
        <div className="text-right text-[12px] text-muted">
          <p>{p.profile.email}</p>
          <p>
            <a href={p.siteUrl}>{p.siteUrl.replace(/^https?:\/\//, "")}</a>
          </p>
          {p.github && (
            <p>
              <a href={p.github}>{p.github.replace(/^https?:\/\//, "")}</a>
            </p>
          )}
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
                    <RichText text={line} baseUrl={linkBase} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Block>

      <Block title={sections.experience.title}>
        <div className="space-y-9">
          {p.experiences.map((exp) => {
            // The company (and affiliate) headings are handed to the first project as `lead`,
            // so a heading never sits alone at the bottom of a page.
            const companyHeading = (
              <div className="flex items-baseline justify-between gap-4 border-b-2 border-ink/70 pb-1.5">
                <h3 className="text-[16px] font-bold">
                  {exp.company}{" "}
                  <span className="font-medium text-muted">
                    · {isGroup(exp) ? tenureLength(exp.tenure, labels.experience.tenureLength) : exp.role}
                  </span>
                </h3>
                <span className="shrink-0 text-[12px] text-muted tabular-nums">{exp.tenure}</span>
              </div>
            );
            return (
              <section key={exp.company}>
                {isGroup(exp) ? (
                  <div className="space-y-5">
                    {exp.units.map((unit, i) => (
                      <ProjectList
                        key={unit.company}
                        projects={unit.projects}
                        siteUrl={linkBase}
                        nested
                        lead={
                          <>
                            {i === 0 && <div className="mb-3">{companyHeading}</div>}
                            <div className="flex items-baseline justify-between gap-4">
                              <p className="text-[14px] font-bold">
                                {unit.company} <span className="font-medium text-muted">· {unit.role}</span>
                              </p>
                              <span className="shrink-0 text-[12px] text-muted tabular-nums">{unit.tenure}</span>
                            </div>
                            <p className="mb-2 text-[12px] text-muted">{unit.department}</p>
                            {unit.highlights && (
                              <ul className="mb-2 list-disc pl-4 text-[12.5px] marker:text-accent">
                                {unit.highlights.map((h) => (
                                  <li key={h} className="font-medium">
                                    {h}
                                  </li>
                                ))}
                              </ul>
                            )}
                          </>
                        }
                      />
                    ))}
                  </div>
                ) : (
                  <ProjectList
                    projects={exp.projects}
                    siteUrl={linkBase}
                    lead={
                      <>
                        {companyHeading}
                        <p className="mt-1 text-[12px] text-muted">{exp.department}</p>
                        {exp.mission && (
                          <p className="mt-1.5 text-[12.5px]">
                            <span className="mr-1.5 font-semibold text-accent">{labels.experience.mission}</span>
                            {exp.mission}
                          </p>
                        )}
                        <div className="mb-3" />
                      </>
                    }
                  />
                )}
              </section>
            );
          })}
        </div>
      </Block>

      <Block title={sections.skills.title}>
        {/* Two columns: the groups are short, so this saves lines on the page. */}
        <dl className="grid grid-cols-2 gap-x-6 gap-y-1.5">
          {p.skillGroups.map((g) => (
            <div key={g.type} className="break-inside-avoid">
              <dt className="inline font-semibold">{g.type}</dt>
              <dd className="inline text-muted"> — {g.items.join(" · ")}</dd>
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
                  // First line on its own (e.g. a paper title), the rest as one muted line; skip an empty "Summary:" label.
                  const [first, ...rest] = a.lines.filter((line) => !/^(요약|summary):?$/i.test(line.trim()));
                  return (
                    <li key={a.title} className="flex gap-3 break-inside-avoid">
                      <span className="w-20 shrink-0 text-[12px] text-muted tabular-nums">{a.date}</span>
                      <span>
                        <span className="font-semibold">{a.title}</span>
                        {group.kind === "paper" ? (
                          <>
                            {/* Title only in the PDF; venue and pages stay on the site. */}
                            <span className="block">{first.replace(/^(제목|Title):\s*/, "")}</span>
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

type ProjectListProps = { projects: ExperienceProject[]; siteUrl: string; nested?: boolean; lead?: React.ReactNode };

/**
 * `nested` (inside a company group) indents each project with its own left rule, so no empty rule runs across a page break.
 * `lead` (company/affiliate headings) is kept on the same page as the first project.
 */
async function ProjectList({ projects, siteUrl, nested, lead }: ProjectListProps) {
  const { labels } = await getContent();
  const rule = cn(nested && "border-l-2 border-line pl-3");
  const bullet = (d: string) => (
    <li key={d}>
      <RichText text={d} baseUrl={siteUrl} />
    </li>
  );
  return (
    <div className="space-y-4">
      {projects.map((proj, i) => {
        // Older work keeps one summary line in the PDF; the site still has the full details.
        const [first, ...rest] = proj.brief ?? proj.details;
        return (
          <div key={proj.title}>
            {/* Headings, the project title and its first bullet stay on one page; later bullets may flow on. */}
            <div className="break-inside-avoid">
              {i === 0 && lead}
              <div className={rule}>
                <div className="flex items-baseline justify-between gap-4">
                  <p className="font-semibold">
                    {proj.title} <span className="font-normal text-muted">{proj.subtitle}</span>
                  </p>
                  {proj.period && <span className="shrink-0 text-[12px] text-muted tabular-nums">{proj.period}</span>}
                </div>
                <p className="text-[12px] text-muted">
                  {proj.role} · {proj.productLabel ?? labels.experience.defaultProductLabel}:{" "}
                  <RichText text={proj.product} baseUrl={siteUrl} />
                </p>
                {first && <ul className="mt-1 list-disc pl-4 marker:text-muted">{bullet(first)}</ul>}
              </div>
            </div>
            {rest.length > 0 && (
              <ul className={cn("mt-0.5 list-disc space-y-0.5 pl-4 marker:text-muted", nested && "ml-0 border-l-2 border-line pl-7")}>
                {rest.map(bullet)}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
