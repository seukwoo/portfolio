import { labels } from "@/content";
import { AppLink, Card, Eyebrow, RichText } from "@/components/ui";
import type { LatestWork } from "@/types/content";

/**
 * Light card for the latest main project with its numbered layers stacked top to bottom.
 * Between the tablet and wide layouts (where the card spans the hero width) the layers sit two per row.
 */
export function LatestWorkCard({ work }: { work: LatestWork }) {
  return (
    <Card className="p-6 shadow-sm sm:p-7">
      <Eyebrow latin className="flex items-center gap-2">
        <span className="size-1.5 rounded-full bg-accent" aria-hidden />
        {work.kicker}
      </Eyebrow>
      <h2 className="mt-4 text-2xl font-bold tracking-tight">{work.title}</h2>
      <p className="mt-1 text-sm text-muted">
        <RichText text={work.summary} />
      </p>

      <ol className="mt-6 grid gap-2 sm:grid-cols-2 sm:gap-3 xl:grid-cols-1 xl:gap-0">
        {work.layers.map((layer, i) => (
          <li key={layer.label}>
            <div className="rounded-xl border border-line bg-surface-2/60 px-4 py-3 sm:h-full xl:h-auto">
              <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{layer.label}</p>
              <p className="mt-1 text-sm">{layer.value}</p>
            </div>
            {i < work.layers.length - 1 && (
              <span aria-hidden className="block text-center text-xs leading-5 text-muted/60 sm:hidden xl:block">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-xs">
        <span className="text-muted">{work.footnote}</span>
        <AppLink href={work.href} className="font-semibold whitespace-nowrap text-accent hover:underline">
          {labels.home.latestWorkCta}
        </AppLink>
      </div>
    </Card>
  );
}
