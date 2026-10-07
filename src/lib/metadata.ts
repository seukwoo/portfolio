import type { Metadata } from "next";
import { contentByLang } from "@/content/by-lang";
import { ogLocale, type Lang } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { ogAlt } from "@/lib/og";

/** Fixed per-language preview image (app/share/[lang]/route.tsx). */
export const shareImageUrl = (lang: Lang) => `/share/${lang}`;

const other = (lang: Lang): Lang => (lang === "ko" ? "en" : "ko");

/** Site-wide defaults for a root layout: base URL, title template, default description and preview. */
export function layoutMetadata(lang: Lang): Metadata {
  const { profile, introduction, site, labels } = contentByLang[lang];
  const description = introduction.join(" ");
  return {
    metadataBase: new URL(site.url),
    title: { default: `${profile.name} | ${profile.position}`, template: labels.meta.titleTemplate },
    description,
    authors: [{ name: profile.name }],
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      siteName: site.title,
      description,
      images: [{ url: shareImageUrl(lang), width: 1200, height: 630, alt: ogAlt(lang) }],
    },
  };
}

/**
 * Canonical URL, hreflang alternates and link-preview tags for one page. Previews (KakaoTalk, Slack …)
 * open og:url, so every page points at itself — a shared page always opens that page in that language.
 * `path` is the plain site path (e.g. /projects); the /en prefix is added here.
 */
export function pageMetadata(lang: Lang, path: string, page: { title?: string; description?: string } = {}): Metadata {
  const { profile, introduction, site } = contentByLang[lang];
  const url = localizePath(path, lang);
  const title = page.title ? `${page.title} | ${profile.name}` : `${profile.name} | ${profile.position}`;
  const description = page.description ?? introduction.join(" ");
  const image = { url: shareImageUrl(lang), width: 1200, height: 630, alt: ogAlt(lang) };
  return {
    ...(page.title && { title: page.title }),
    ...(page.description && { description: page.description }),
    alternates: {
      canonical: url,
      languages: { ko: localizePath(path, "ko"), en: localizePath(path, "en"), "x-default": localizePath(path, "ko") },
    },
    openGraph: {
      type: "website",
      locale: ogLocale[lang],
      alternateLocale: ogLocale[other(lang)],
      siteName: site.title,
      url,
      title,
      description,
      images: [image],
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}
