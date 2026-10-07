/** Small monochrome SVG icon from /public, inverted in dark mode so it stays visible. */
export function IconImage({ src }: { src: string }) {
  // eslint-disable-next-line @next/next/no-img-element -- tiny static SVG, no optimization needed
  return <img src={src} alt="" width={18} height={18} className="size-4.5 shrink-0 opacity-70 dark:invert" />;
}
