import type { MetadataRoute } from "next";
import { projects, site } from "@/content";
import { routes } from "@/lib/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${site.url}${path === "/" ? "" : path}`;
  return [
    { url: url(routes.home), priority: 1 },
    { url: url(routes.resume), priority: 0.9 },
    { url: url(routes.projects), priority: 0.8 },
    ...projects.map((p) => ({ url: url(routes.project(p.slug)), priority: 0.6 })),
  ];
}
