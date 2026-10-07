import { labels } from "@/content";
import { AppLink, Card, Eyebrow, RichText } from "@/components/ui";
import type { LatestWork } from "@/types/content";

/**
 * Light card in the hero (e.g. "How I build" principles). The layers are a compact numbered list (label | value)
 * so the card stays about as tall as the hero text next to it.
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

      <ol className="mt-5 divide-y divide-line border-y border-line">
        {work.layers.map((layer) => (
          <li key={layer.label} className="grid grid-cols-[112px_1fr] items-baseline gap-3 py-2.5">
            <span className="font-mono text-[11px] tracking-[0.04em] whitespace-nowrap text-muted uppercase">{layer.label}</span>
            <span className="text-sm leading-snug break-keep">{layer.value}</span>
          </li>
        ))}
      </ol>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 text-xs">
        {work.footnote && <span className="whitespace-nowrap text-muted">{work.footnote}</span>}
        <AppLink href={work.href} className="font-semibold whitespace-nowrap text-accent hover:underline">
          {labels.home.latestWorkCta}
        </AppLink>
      </div>
    </Card>
  );
}
