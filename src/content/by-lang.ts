import type { Lang } from "@/i18n/config";
import * as en from "./en";
import * as ko from "./index";

export type Content = typeof ko;
export type Labels = Content["labels"];

/** All site content per language. `satisfies` makes typecheck fail if the English files drift from the Korean shape. */
export const contentByLang: Record<Lang, Content> = { ko, en: en satisfies Content };
