import { lang as langParam } from "next/root-params";
import { contentByLang } from "@/content/by-lang";
import { DEFAULT_LANG, isLang, type Lang } from "./config";

/**
 * The language of the page being rendered, read from the root `[lang]` segment.
 * Korean pages live in the `(ko)` root layout, which has no `[lang]` param → Korean.
 * Server Components only (next/root-params doesn't work in Client Components).
 */
export async function getLang(): Promise<Lang> {
  const value = await langParam();
  return isLang(value) ? value : DEFAULT_LANG;
}

/** All content for the page being rendered. */
export async function getContent() {
  return contentByLang[await getLang()];
}
