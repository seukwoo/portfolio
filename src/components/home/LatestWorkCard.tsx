import { labels } from "@/content";
import { AppLink } from "@/components/ui";
import type { LatestWork } from "@/types/content";

/** Dark card showing the current main project as stacked, numbered layers. */
export function LatestWorkCard({ work }: { work: LatestWork }) {
  return (
    <article className="rounded-3xl bg-panel p-6 text-panel-ink shadow-xl sm:p-7 dark:border dark:border-line">
      <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-panel-accent uppercase">
        <span className="size-1.5 rounded-full bg-panel-accent" aria-hidden />
        {work.kicker}
      </p>
      <h2 className="mt-4 text-2xl font-bold tracking-tight">{work.title}</h2>
      <p className="mt-1 text-sm text-panel-ink/70">{work.summary}</p>

      <ol className="mt-6 space-y-2">
        {work.layers.map((layer, i) => (
          <li key={layer.label}>
            <div className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3">
              <p className="font-mono text-[10px] tracking-[0.15em] text-panel-ink/50 uppercase">{layer.label}</p>
              <p className="mt-1 text-sm">{layer.value}</p>
            </div>
            {i < work.layers.length - 1 && (
              <span aria-hidden className="block text-center text-xs leading-4 text-panel-ink/30">
                ↓
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 pt-4 text-xs">
        <span className="text-panel-ink/60">{work.footnote}</span>
        <AppLink href={work.href} className="font-semibold text-panel-accent hover:underline">
          {labels.home.latestWorkCta}
        </AppLink>
      </div>
    </article>
  );
}
