import { describe, expect, it } from "vitest";
import { detectLang } from "./detect";
import { localizePath, splitLangPath, switchLangPath } from "./paths";

describe("detectLang", () => {
  it("keeps Korean for Korean, empty or wildcard headers", () => {
    expect(detectLang("ko-KR,ko;q=0.9,en-US;q=0.8")).toBe("ko");
    expect(detectLang("ko")).toBe("ko");
    expect(detectLang(null)).toBe("ko");
    expect(detectLang("")).toBe("ko");
    expect(detectLang("*")).toBe("ko");
  });

  it("sends other languages to English, by weight", () => {
    expect(detectLang("en-US,en;q=0.9")).toBe("en");
    expect(detectLang("ja-JP,ja;q=0.9")).toBe("en");
    expect(detectLang("en;q=0.5,ko;q=0.8")).toBe("ko");
  });
});

describe("paths", () => {
  it("prefixes site paths for English only", () => {
    expect(localizePath("/", "en")).toBe("/en");
    expect(localizePath("/projects/alan", "en")).toBe("/en/projects/alan");
    expect(localizePath("/projects", "ko")).toBe("/projects");
  });

  it("leaves hashes, files, external links and already-English paths alone", () => {
    expect(localizePath("#contact", "en")).toBe("#contact");
    expect(localizePath("/docs/resume-en.pdf", "en")).toBe("/docs/resume-en.pdf");
    expect(localizePath("https://myalan.ai/", "en")).toBe("https://myalan.ai/");
    expect(localizePath("/en/resume", "en")).toBe("/en/resume");
  });

  it("maps a page to the same page in the other language", () => {
    expect(splitLangPath("/en/resume")).toEqual({ lang: "en", path: "/resume" });
    expect(splitLangPath("/en")).toEqual({ lang: "en", path: "/" });
    expect(switchLangPath("/projects/alan", "en")).toBe("/en/projects/alan");
    expect(switchLangPath("/en/projects/alan", "ko")).toBe("/projects/alan");
    expect(switchLangPath("/en", "ko")).toBe("/");
  });
});
