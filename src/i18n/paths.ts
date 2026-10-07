import { DEFAULT_LANG, type Lang } from "./config";

/** "/en/projects" → { lang: "en", path: "/projects" }; unprefixed paths are Korean. */
export function splitLangPath(pathname: string): { lang: Lang; path: string } {
  if (pathname === "/en" || pathname.startsWith("/en/")) return { lang: "en", path: pathname.slice(3) || "/" };
  return { lang: DEFAULT_LANG, path: pathname };
}

/**
 * Turns a site path into the given language's URL: "/projects" → "/en/projects", "/" → "/en".
 * Hash links, files (e.g. /docs/resume.pdf) and external URLs are returned unchanged.
 */
export function localizePath(href: string, lang: Lang): string {
  if (lang === DEFAULT_LANG || !href.startsWith("/") || /\.\w+($|[?#])/.test(href)) return href;
  if (href === "/en" || href.startsWith("/en/") || href.startsWith("/en#")) return href;
  return href === "/" ? "/en" : `/en${href}`;
}

/** The same page in the other language: "/projects/alan" ↔ "/en/projects/alan". */
export const switchLangPath = (pathname: string, to: Lang) => localizePath(splitLangPath(pathname).path, to);
