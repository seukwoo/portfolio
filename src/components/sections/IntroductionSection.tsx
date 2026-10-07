import { Reveal } from "@/components/motion";
import type { SectionMeta } from "@/types/content";
import { Section } from "./Section";

/** The one-paragraph "한 줄 소개" quote, kept line by line as written in Notion. */
export function IntroductionSection({ meta, lines, bare }: { meta: SectionMeta; lines: string[]; bare?: boolean }) {
  return (
    <Section meta={meta} bare={bare}>
      <Reveal>
        <blockquote className="border-l-2 border-accent pl-5 text-lg leading-relaxed sm:text-xl">
          {lines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </blockquote>
      </Reveal>
    </Section>
  );
}
