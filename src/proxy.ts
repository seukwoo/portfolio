import { NextResponse, type NextRequest } from "next/server";
import { LANG_COOKIE } from "@/i18n/config";
import { detectLang } from "@/i18n/detect";

/**
 * First visit to a Korean (unprefixed) page from a non-Korean browser → the same page in English.
 * A manual KO/EN choice (cookie, set by the header switch) always wins, and /en/… is never touched,
 * so a shared English link stays English.
 */
export function proxy(request: NextRequest) {
  const chosen = request.cookies.get(LANG_COOKIE)?.value;
  if (chosen === "ko" || chosen === "en" ? chosen === "ko" : detectLang(request.headers.get("accept-language")) === "ko") {
    return NextResponse.next();
  }
  const url = request.nextUrl.clone();
  url.pathname = url.pathname === "/" ? "/en" : `/en${url.pathname}`;
  return NextResponse.redirect(url, 307);
}

// Korean page routes only — not /resume/print (the PDF script runs headless Chrome with an English
// Accept-Language), files, or /en/…. Visitors who chose Korean skip the proxy entirely.
export const config = {
  matcher: [
    { source: "/", missing: [{ type: "cookie", key: "lang", value: "ko" }] },
    { source: "/projects", missing: [{ type: "cookie", key: "lang", value: "ko" }] },
    { source: "/projects/:slug", missing: [{ type: "cookie", key: "lang", value: "ko" }] },
    { source: "/resume", missing: [{ type: "cookie", key: "lang", value: "ko" }] },
  ],
};
