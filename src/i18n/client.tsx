"use client";

import { createContext, useContext } from "react";
import { labels as en } from "@/content/en/labels";
import { labels as ko } from "@/content/labels";
import { DEFAULT_LANG, type Lang } from "./config";

const LangContext = createContext<Lang>(DEFAULT_LANG);

/** Set once per root layout; client components read the language and UI copy from it. */
export function LangProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

export const useLang = () => useContext(LangContext);

/** UI copy for client components (only the labels, so page content stays out of the client bundle). */
export const useLabels = () => (useLang() === "en" ? en : ko);
