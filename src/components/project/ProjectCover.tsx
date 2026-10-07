import Image from "next/image";
import { labels } from "@/content";
import { cn } from "@/lib/cn";
import type { Project } from "@/types/content";

type Props = {
  project: Project;
  /** Box size and shape (aspect ratio, rounding); the cover fills it. */
  className?: string;
  /** Headline size and padding: `card` for the project card, `banner` for the top of a project page. */
  size: "card" | "banner";
  sizes: string;
  priority?: boolean;
};

const punchlineClass = {
  card: "p-5 text-xl lg:p-4 lg:text-lg",
  banner: "p-6 text-2xl sm:p-10 sm:text-4xl",
};

/**
 * Cover image with the two-line punchline over a bottom gradient — shared by the project card
 * and the project page banner. Without an image, the punchline sits on a plain surface.
 */
export function ProjectCover({ project, className, size, sizes, priority }: Props) {
  const cover = project.cardImage ?? project.images[0];
  const punchline = project.punchline;
  return (
    <div className={cn("relative flex items-end overflow-hidden bg-surface-2", className)}>
      {cover && (
        <Image
          src={cover.src}
          alt={labels.projects.coverAlt(project.name)}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
        />
      )}
      {punchline && (
        <>
          {cover && <span aria-hidden className="absolute inset-0 bg-linear-to-t from-black/80 via-black/35 to-transparent" />}
          <p
            className={cn(
              "relative leading-snug font-semibold tracking-tight",
              punchlineClass[size],
              cover && "text-white drop-shadow-sm",
            )}
          >
            {punchline[0]}
            <br />
            <span className={cover ? "text-panel-accent" : "text-accent"}>{punchline[1]}</span>
          </p>
        </>
      )}
    </div>
  );
}
