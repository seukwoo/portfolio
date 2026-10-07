import { getContent } from "@/i18n/server";
import { Container } from "@/components/layout";
import type { Metric } from "@/types/content";

/** Row of verifiable numbers under the hero; stacks into a list on mobile. */
export async function ProofStrip({ metrics }: { metrics: Metric[] }) {
  const { labels } = await getContent();
  return (
    <section aria-label={labels.home.metricsLabel} className="border-y border-line bg-surface/60">
      <Container>
        <ul className="grid divide-y divide-line sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
          {metrics.map((m) => (
            <li key={m.label} className="flex items-baseline gap-4 py-5 sm:block lg:px-6 lg:first:pl-0">
              <p className="shrink-0 text-3xl font-bold tracking-tight sm:text-4xl">
                {m.value}
                {m.unit && <span className="ml-0.5 text-base font-semibold text-muted">{m.unit}</span>}
              </p>
              <div className="sm:mt-2">
                <p className="text-sm font-medium">{m.label}</p>
                {m.note && <p className="mt-0.5 text-xs text-muted">{m.note}</p>}
              </div>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
