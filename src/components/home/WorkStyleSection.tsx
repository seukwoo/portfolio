import { Reveal } from "@/components/motion";
import { Section } from "@/components/sections";
import type { SectionMeta, WorkStyle } from "@/types/content";

/** Slogan on the left, short paragraphs on the right. Renders nothing until content exists. */
export function WorkStyleSection({ meta, workStyle }: { meta: SectionMeta; workStyle: WorkStyle | null }) {
  if (!workStyle) return null;
  return (
    <Section meta={meta}>
      <Reveal className="grid gap-8 lg:grid-cols-2">
        <p data-reveal className="text-3xl leading-tight font-bold tracking-tight sm:text-4xl">
          {workStyle.headline.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </p>
        <div data-reveal className="space-y-4 leading-relaxed text-ink/90">
          {workStyle.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </Reveal>
    </Section>
  );
}
