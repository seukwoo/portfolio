import { StrengthCard } from "@/components/about";
import { Reveal } from "@/components/motion";
import type { About, SectionMeta } from "@/types/content";
import { Section } from "./Section";

export function AboutSection({ meta, about, bare }: { meta: SectionMeta; about: About; bare?: boolean }) {
  return (
    <Section meta={meta} bare={bare}>
      <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
        <Reveal className="space-y-5 text-[17px] leading-relaxed text-ink/90">
          {about.paragraphs.map((paragraph) => (
            <p data-reveal key={paragraph}>
              {paragraph}
            </p>
          ))}
        </Reveal>
        <div>
          <h3 className="text-lg font-semibold">{about.strengthsTitle}</h3>
          <Reveal className="mt-4 grid gap-3">
            {about.strengths.map((strength, i) => (
              <div data-reveal key={strength.title}>
                <StrengthCard strength={strength} index={i} />
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
