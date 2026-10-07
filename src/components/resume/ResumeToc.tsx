"use client";

import { useEffect, useRef, useState } from "react";
import { labels } from "@/content/labels";
import { cn } from "@/lib/cn";
import type { SectionMeta } from "@/types/content";

/**
 * In-page table of contents for /resume.
 * Desktop: vertical list beside the content. Mobile: horizontal chips under the header.
 * The parent decides stickiness (see app/resume/page.tsx).
 * Highlights the section currently in view.
 */
export function ResumeToc({ sections }: { sections: SectionMeta[] }) {
  const [active, setActive] = useState(sections[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActive(visible[0].target.id);
      },
      // A band near the top of the viewport decides which section is "current".
      { rootMargin: "-20% 0px -65% 0px" },
    );
    for (const s of sections) {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [sections]);

  // On mobile the chips scroll sideways — keep the active chip in view.
  useEffect(() => {
    const list = listRef.current;
    const chip = list?.querySelector<HTMLElement>('[aria-current="location"]');
    if (!list || !chip || list.scrollWidth <= list.clientWidth) return;
    list.scrollTo({ left: chip.offsetLeft - list.offsetLeft - 16, behavior: "smooth" });
  }, [active]);

  return (
    <nav
      aria-label={labels.resume.toc}
      className="-mx-4 border-b border-line bg-bg/90 px-4 backdrop-blur-md lg:mx-0 lg:border-0 lg:bg-transparent lg:px-0 lg:backdrop-blur-none"
    >
      <p className="hidden pb-3 text-xs font-semibold text-muted lg:block">{labels.resume.toc}</p>
      <ul ref={listRef} className="flex gap-2 overflow-x-auto py-3 [scrollbar-width:none] lg:flex-col lg:gap-1 lg:overflow-visible lg:py-0">
        {sections.map((s) => (
          <li key={s.id} className="shrink-0">
            <a
              href={`#${s.id}`}
              aria-current={active === s.id ? "location" : undefined}
              className={cn(
                "block rounded-full border border-line px-3 py-1.5 text-sm whitespace-nowrap lg:rounded-lg lg:border-0 lg:px-3 lg:py-2",
                active === s.id ? "border-accent bg-accent-soft text-accent lg:bg-accent-soft" : "text-muted hover:text-ink",
              )}
            >
              {s.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
