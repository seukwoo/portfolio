import { getContent } from "@/i18n/server";
import { Reveal } from "@/components/motion";
import { Card, Eyebrow, RichText } from "@/components/ui";
import type { CaseStudy } from "@/types/content";

/** Problem → key decisions → outcome, shown first on featured project pages. */
export async function ProjectCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  const { labels } = await getContent();
  const l = labels.projects.caseStudy;
  return (
    <section aria-label={l.title}>
      <Reveal className="grid gap-5 lg:grid-cols-[1fr_1.4fr_1fr]">
        <Card data-reveal className="p-6 sm:p-7">
          <Eyebrow>{l.problem}</Eyebrow>
          <p className="mt-3 leading-relaxed">{caseStudy.problem}</p>
        </Card>
        <Card data-reveal className="p-6 sm:p-7">
          <Eyebrow>{l.decisions}</Eyebrow>
          <ol className="mt-3 space-y-3 leading-relaxed">
            {caseStudy.decisions.map((decision, i) => (
              <li key={decision} className="flex gap-3">
                <span className="shrink-0 font-mono text-sm leading-relaxed text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  <RichText text={decision} />
                </span>
              </li>
            ))}
          </ol>
        </Card>
        <Card data-reveal className="bg-accent-soft p-6 sm:p-7">
          <Eyebrow>{caseStudy.outcome.label}</Eyebrow>
          <p className="mt-3 leading-relaxed font-medium">
            <RichText text={caseStudy.outcome.text} />
          </p>
          {caseStudy.outcome.note && <p className="mt-3 text-xs text-muted">{caseStudy.outcome.note}</p>}
        </Card>
      </Reveal>
    </section>
  );
}
