import type { MetadataRoute } from "next";
import { contentByLang } from "@/content/by-lang";
import { LANGS } from "@/i18n/config";
import { localizePath } from "@/i18n/paths";
import { routes } from "@/lib/routes";

// Every page in both languages, each entry linking to its other-language version.
export default function sitemap(): MetadataRoute.Sitemap {
  const { site, projects } = contentByLang.ko;
  const url = (path: string) => `${site.url}${path === "/" ? "" : path}`;
  const pages: [string, number][] = [
    [routes.home, 1],
    [routes.resume, 0.9],
    [routes.projects, 0.8],
    ...projects.map((p): [string, number] => [routes.project(p.slug), 0.6]),
  ];
  return pages.flatMap(([path, priority]) =>
    LANGS.map((lang) => ({
      url: url(localizePath(path, lang)),
      priority,
      alternates: { languages: Object.fromEntries(LANGS.map((l) => [l, url(localizePath(path, l))])) },
    })),
  );
}
