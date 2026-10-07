/** Korean lives at unprefixed URLs (/, /projects …); English under /en. */
export const LANGS = ["ko", "en"] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = "ko";

/** Set by the header switch; a manual choice always beats Accept-Language detection (see src/proxy.ts). */
export const LANG_COOKIE = "lang";

export const isLang = (value: unknown): value is Lang => LANGS.includes(value as Lang);

/** Open Graph locale per language. */
export const ogLocale: Record<Lang, string> = { ko: "ko_KR", en: "en_US" };

/** Reads the `[lang]` route param (only "en" is generated; anything else 404s via dynamicParams = false). */
export async function langFromParams(params: Promise<{ lang: string }>): Promise<Lang> {
  const { lang } = await params;
  return isLang(lang) ? lang : DEFAULT_LANG;
}
