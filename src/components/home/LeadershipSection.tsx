import { Reveal } from "@/components/motion";
import { Section } from "@/components/sections";
import { Card } from "@/components/ui";
import type { LeadershipBlock, SectionMeta } from "@/types/content";

export function LeadershipSection({ meta, blocks }: { meta: SectionMeta; blocks: LeadershipBlock[] }) {
  return (
    <Section meta={meta}>
      <Reveal className="grid gap-5 md:grid-cols-3">
        {blocks.map((block) => (
          <Card data-reveal key={block.title} className="p-6 sm:p-7">
            <h3 className="text-lg font-bold">{block.title}</h3>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed text-ink/85">
              {block.points.map((point) => (
                <li key={point} className="flex gap-2.5">
                  <span aria-hidden className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                  {point}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </Reveal>
    </Section>
  );
}
