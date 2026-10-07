import { CompetencyCard } from "@/components/about";
import { Reveal } from "@/components/motion";
import type { About, SectionMeta } from "@/types/content";
import { Section } from "./Section";

/** Core competencies as claim + evidence cards (two per row on wide screens). */
export function AboutSection({ meta, about, bare }: { meta: SectionMeta; about: About; bare?: boolean }) {
  return (
    <Section meta={meta} bare={bare}>
      <Reveal className="grid gap-4 md:grid-cols-2">
        {about.competencies.map((competency, i) => (
          <div data-reveal key={competency.title}>
            <CompetencyCard competency={competency} index={i} />
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
