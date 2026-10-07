import { Reveal } from "@/components/motion";
import { SkillTile } from "@/components/skill";
import type { SectionMeta, SkillGroup } from "@/types/content";
import { Section } from "./Section";

export function SkillsSection({ meta, groups, bare }: { meta: SectionMeta; groups: SkillGroup[]; bare?: boolean }) {
  return (
    <Section meta={meta} bare={bare}>
      <div className="grid gap-10 lg:grid-cols-3">
        {groups.map((group) => (
          <div key={group.type}>
            <h3 className="font-semibold">{group.type}</h3>
            <Reveal className="mt-4 grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-3">
              {group.items.map((name) => (
                <div data-reveal key={name}>
                  <SkillTile name={name} />
                </div>
              ))}
            </Reveal>
          </div>
        ))}
      </div>
    </Section>
  );
}
