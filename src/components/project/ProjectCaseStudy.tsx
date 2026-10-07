import { labels } from "@/content";
import { Reveal } from "@/components/motion";
import { Card, Eyebrow, RichText } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { CaseStudy, CaseStudyItem } from "@/types/content";

/**
 * Problem → key decisions → outcome, shown first on featured project pages.
 * With `challenges`, each decision and result carries the tag of the challenge it answers.
 */
export function ProjectCaseStudy({ caseStudy }: { caseStudy: CaseStudy }) {
  const l = labels.projects.caseStudy;
  const challengeLabel = (id?: string) => caseStudy.challenges?.find((c) => c.id === id)?.label;
  const toItem = (d: string | CaseStudyItem): CaseStudyItem => (typeof d === "string" ? { text: d } : d);

  return (
    <section aria-label={l.title}>
      <Reveal className="grid gap-5 lg:grid-cols-[1fr_1.4fr_1fr]">
        <Card data-reveal className="p-6 sm:p-7">
          <Eyebrow>{l.problem}</Eyebrow>
          <p className="mt-3 leading-relaxed">{caseStudy.problem}</p>
          {caseStudy.challenges && (
            <ul className="mt-4 space-y-3">
              {caseStudy.challenges.map((c) => (
                <li key={c.id} className="text-sm leading-relaxed">
                  <ChallengeTag>{c.label}</ChallengeTag>
                  <p className="mt-1.5 text-muted">{c.text}</p>
                </li>
              ))}
            </ul>
          )}
        </Card>
        <Card data-reveal className="p-6 sm:p-7">
          <Eyebrow>{l.decisions}</Eyebrow>
          <ol className="mt-3 space-y-3 leading-relaxed">
            {caseStudy.decisions.map(toItem).map((decision, i) => (
              <li key={decision.text} className="flex gap-3">
                <span className="shrink-0 font-mono text-sm leading-relaxed text-accent">{String(i + 1).padStart(2, "0")}</span>
                <span>
                  {decision.challenge && (
                    <ChallengeTag className="mr-2 align-[1px]">{challengeLabel(decision.challenge)}</ChallengeTag>
                  )}
                  <RichText text={decision.text} />
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
          {caseStudy.outcome.points && (
            <ul className="mt-4 space-y-3">
              {caseStudy.outcome.points.map((point) => (
                <li key={point.text} className="leading-relaxed">
                  {point.challenge && (
                    <ChallengeTag className="bg-surface">{challengeLabel(point.challenge)}</ChallengeTag>
                  )}
                  <p className="mt-1.5">
                    <RichText text={point.text} />
                  </p>
                </li>
              ))}
            </ul>
          )}
          {caseStudy.outcome.note && <p className="mt-3 text-xs text-muted">{caseStudy.outcome.note}</p>}
        </Card>
      </Reveal>
    </section>
  );
}

function ChallengeTag({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-block rounded-full bg-accent-soft px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap text-accent",
        className,
      )}
    >
      {children}
    </span>
  );
}
