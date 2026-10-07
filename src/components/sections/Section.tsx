import { Reveal } from "@/components/motion";
import { Container } from "@/components/layout";
import { Eyebrow } from "@/components/ui";
import { cn } from "@/lib/cn";
import type { SectionMeta } from "@/types/content";

export type SectionProps = {
  meta: SectionMeta;
  /** Optional element on the right of the heading (e.g. a "view all" link). */
  action?: React.ReactNode;
  /** Skip the page-width container — for sections placed inside another layout column (e.g. /resume). */
  bare?: boolean;
  children: React.ReactNode;
};

/** Shared frame for every section: divider, eyebrow + title heading, then content. */
export function Section({ meta, action, bare = false, children }: SectionProps) {
  const body = (
    <>
      <Reveal className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow latin>{meta.eyebrow}</Eyebrow>
          <h2 id={`${meta.id}-title`} className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {meta.title}
          </h2>
        </div>
        {action}
      </Reveal>
      <div className={bare ? "mt-8" : "mt-10 sm:mt-14"}>{children}</div>
    </>
  );

  return (
    <section
      id={meta.id}
      aria-labelledby={`${meta.id}-title`}
      className={cn("scroll-mt-20 border-t border-line", bare && "py-14 first:border-t-0 first:pt-0")}
    >
      {bare ? body : <Container className="py-20 sm:py-28">{body}</Container>}
    </section>
  );
}
