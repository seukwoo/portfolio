import { labels } from "@/content";
import { AppLink, Card, Eyebrow } from "@/components/ui";
import type { LatestWork } from "@/types/content";

/** Light card showing the latest main project as stacked, numbered layers. */
export function LatestWorkCard({ work }: { work: LatestWork }) {
  return (
    <Card className="p-6 shadow-sm sm:p-7">
      <Eyebrow latin className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        {work.kicker}
      </Eyebrow>
      <h2 className="mt-4 text-2xl font-bold tracking-tight">{work.title}</h2>
      <p className="mt-1 text-sm text-muted">{work.summary}</p>

      <ol className="mt-6 space-y-2">
        {work.layers.map((layer, i) => (
          <li key={layer.label}>
            <div className="rounded-xl border border-line bg-surface-2/60 px-4 py-3">
              <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{layer.label}</p>
              <p className="mt-1 text-sm">{layer.value}</p>
            </div>
            {i < work.layers.length - 1 && (
              <span aria-hidden className="block text-center text-xs leading-4 text-muted/60">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-xs">
        <span className="text-muted">{work.footnote}</span>
        <AppLink href={work.href} className="font-semibold text-accent hover:underline">
          {labels.home.latestWorkCta}
        </AppLink>
      </div>
    </Card>
  );
}
