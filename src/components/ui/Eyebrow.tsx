import { cn } from "@/lib/cn";

/** Small accent label above headings and dates. `latin` adds wide uppercase tracking (skip it for Korean text). */
export function Eyebrow({ latin = false, className, ...props }: React.ComponentProps<"p"> & { latin?: boolean }) {
  return (
    <p
      className={cn("font-mono text-xs text-accent", latin && "tracking-[0.2em] uppercase", className)}
      {...props}
    />
  );
}
