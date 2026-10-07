import { labels } from "@/content";
import { AppLink, Card, Eyebrow } from "@/components/ui";
import type { LatestWork } from "@/types/content";

/** Wide light card for the latest main project: title on the left, numbered layers as a left-to-right flow. */
export function LatestWorkCard({ work }: { work: LatestWork }) {
  return (
    <Card className="grid gap-6 p-6 shadow-sm sm:p-7 lg:grid-cols-[300px_1fr] lg:gap-10">
      <div className="flex flex-col">
        <Eyebrow latin className="flex items-center gap-2">
          <span className="size-1.5 rounded-full bg-accent" aria-hidden />
          {work.kicker}
        </Eyebrow>
        <h2 className="mt-4 text-2xl font-bold tracking-tight">{work.title}</h2>
        <p className="mt-1 text-sm text-muted">{work.summary}</p>
        <div className="mt-6 flex items-center justify-between gap-4 border-t border-line pt-4 text-xs lg:mt-auto">
          <span className="whitespace-nowrap text-muted">{work.footnote}</span>
          <AppLink href={work.href} className="font-semibold whitespace-nowrap text-accent hover:underline">
            {labels.home.latestWorkCta}
          </AppLink>
        </div>
      </div>

      <ol className="grid gap-2 sm:grid-cols-2 sm:gap-3 lg:grid-cols-4 lg:self-center">
        {work.layers.map((layer, i) => (
          <li key={layer.label} className="relative flex flex-col">
            <div className="h-full rounded-xl border border-line bg-surface-2/60 px-4 py-3">
              <p className="font-mono text-xs tracking-[0.12em] text-muted uppercase">{layer.label}</p>
              <p className="mt-1 text-sm">{layer.value}</p>
            </div>
            {i < work.layers.length - 1 && (
              <>
                <span aria-hidden className="block text-center text-xs leading-4 text-muted/60 sm:hidden">
                  ↓
                </span>
                <span
                  aria-hidden
                  className="absolute top-1/2 -right-3 z-10 hidden w-3 -translate-y-1/2 text-center text-xs text-muted/60 lg:block"
                >
                  →
                </span>
              </>
            )}
          </li>
        ))}
      </ol>
    </Card>
  );
}
