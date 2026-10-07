"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, SplitText, useGSAP } from "./gsap";

/** Page headline (<h1>) whose characters rise in line by line on first paint. */
export function SplitHeadline({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        SplitText.create(ref.current!, {
          type: "lines,chars",
          mask: "lines",
          autoSplit: true,
          onSplit: (self) =>
            gsap.from(self.chars, { yPercent: 110, duration: 1, ease: "expo.out", stagger: 0.02, delay: 0.1 }),
        });
      });
    },
    { scope: ref },
  );

  return (
    <h1 ref={ref} className={className}>
      {children}
    </h1>
  );
}
