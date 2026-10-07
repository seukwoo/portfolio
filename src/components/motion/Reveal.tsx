"use client";

import { useRef } from "react";
import { gsap, MOTION_OK, useGSAP } from "./gsap";

type Props = React.ComponentProps<"div">;

/** Fades content up when scrolled into view. Descendants marked `data-reveal` animate one after another. */
export function Reveal({ children, ...props }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.matchMedia().add(MOTION_OK, () => {
        const root = ref.current!;
        const items = root.querySelectorAll("[data-reveal]");
        gsap.from(items.length ? items : root, {
          autoAlpha: 0,
          y: 28,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: { trigger: root, start: "top 88%", once: true },
        });
      });
    },
    { scope: ref },
  );

  return (
    <div ref={ref} {...props}>
      {children}
    </div>
  );
}
