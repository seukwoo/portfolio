import { ExperienceCard } from "@/components/experience";
import { Reveal } from "@/components/motion";
import type { Experience, SectionMeta } from "@/types/content";
import { Section } from "./Section";

export function ExperienceSection({ meta, experiences, bare }: { meta: SectionMeta; experiences: Experience[]; bare?: boolean }) {
  return (
    <Section meta={meta} bare={bare}>
      <ol className="space-y-6">
        {experiences.map((experience) => (
          <li key={experience.company}>
            <Reveal>
              <ExperienceCard experience={experience} />
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
