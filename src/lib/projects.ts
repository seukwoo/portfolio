import { featuredProjectSlugs, projects } from "@/content";

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);

export function getAdjacentProjects(slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return { prev: projects[index - 1], next: projects[index + 1] };
}

/** Featured projects in the order listed in content/home.ts. */
export const getFeaturedProjects = () =>
  featuredProjectSlugs.map((slug) => getProject(slug)).filter((p) => p !== undefined);

/** Everything not featured, in content order. */
export const getOtherProjects = () => projects.filter((p) => !featuredProjectSlugs.includes(p.slug));
