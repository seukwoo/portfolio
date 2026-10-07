import { cn } from "@/lib/cn";

/** Small accent label above headings and dates. `latin` = monospace uppercase label (Latin text only, never Korean). */
export function Eyebrow({ latin = false, className, ...props }: React.ComponentProps<"p"> & { latin?: boolean }) {
  return (
    <p
      className={cn("text-xs font-semibold text-accent tabular-nums", latin && "font-mono font-medium tracking-[0.14em] uppercase", className)}
      {...props}
    />
  );
}
