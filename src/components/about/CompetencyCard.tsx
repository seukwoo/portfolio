import { Card, RichText } from "@/components/ui";
import type { Competency } from "@/types/content";

/** One core competency: numbered claim with its evidence underneath. */
export function CompetencyCard({ competency, index }: { competency: Competency; index: number }) {
  return (
    <Card className="h-full rounded-2xl p-6">
      <p className="flex items-baseline gap-3 text-lg font-semibold tracking-tight">
        <span className="font-mono text-sm text-accent">{String(index + 1).padStart(2, "0")}</span>
        {competency.title}
      </p>
      <ul className="mt-3 space-y-2 text-[15px] leading-relaxed text-ink/85">
        {competency.evidence.map((line) => (
          <li key={line} className="flex gap-2.5">
            <span aria-hidden className="mt-[0.7em] size-1 shrink-0 rounded-full bg-accent" />
            <span>
              <RichText text={line} />
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}
