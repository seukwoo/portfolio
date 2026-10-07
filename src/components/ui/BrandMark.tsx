import { cn } from "@/lib/cn";

/** The brand mark (same drawing as the favicon, see lib/brand.ts), as inline SVG. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden className={cn("size-6 shrink-0 rounded-[5px] ring-1 ring-line", className)}>
      <rect width="64" height="64" rx="14" fill="#1d1a17" />
      <g stroke="#f2814b" strokeWidth="4" strokeLinecap="round">
        <path d="M20 20 L44 32 M20 44 L44 32" />
      </g>
      <circle cx="20" cy="20" r="7" fill="#f6f3ee" />
      <circle cx="20" cy="44" r="7" fill="#f6f3ee" />
      <circle cx="44" cy="32" r="9" fill="#f2814b" />
    </svg>
  );
}
