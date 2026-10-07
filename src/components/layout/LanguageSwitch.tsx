"use client";

import { usePathname } from "next/navigation";
import { useLabels, useLang } from "@/i18n/client";
import { LANG_COOKIE } from "@/i18n/config";
import { switchLangPath } from "@/i18n/paths";

/**
 * KO/EN toggle: opens the same page in the other language and remembers the choice in a cookie,
 * which beats browser-language detection on later visits (src/proxy.ts).
 * A plain <a>: switching crosses root layouts, so it's a full page load anyway.
 */
export function LanguageSwitch() {
  const pathname = usePathname();
  const lang = useLang();
  const labels = useLabels();
  const to = lang === "ko" ? "en" : "ko";
  return (
    <a
      href={switchLangPath(pathname, to)}
      hrefLang={to}
      lang={to}
      aria-label={labels.nav.languageSwitchLabel}
      title={labels.nav.languageSwitch}
      onClick={(e) => {
        document.cookie = `${LANG_COOKIE}=${to}; Path=/; Max-Age=31536000; SameSite=Lax`;
        e.preventDefault();
        window.location.href = switchLangPath(pathname, to) + window.location.hash;
      }}
      className="grid h-10 min-w-10 place-items-center rounded-full border border-line px-3 font-mono text-xs font-semibold tracking-wider hover:border-accent hover:text-accent"
    >
      {to.toUpperCase()}
    </a>
  );
}
