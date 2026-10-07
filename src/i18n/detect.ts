import { DEFAULT_LANG, type Lang } from "./config";

/**
 * Picks the site language from an Accept-Language header: the highest-weighted language decides.
 * Korean, a missing/empty header or "*" → Korean; any other language → English.
 */
export function detectLang(acceptLanguage: string | null | undefined): Lang {
  const ranked = (acceptLanguage ?? "")
    .split(",")
    .map((part) => {
      const [tag, ...params] = part.trim().toLowerCase().split(";");
      const q = params.map((p) => p.trim()).find((p) => p.startsWith("q="));
      return { tag, q: q ? Number(q.slice(2)) || 0 : 1 };
    })
    .filter((l) => l.tag && l.q > 0)
    .sort((a, b) => b.q - a.q);
  const top = ranked[0]?.tag;
  if (!top || top === "*" || top === "ko" || top.startsWith("ko-")) return DEFAULT_LANG;
  return "en";
}
