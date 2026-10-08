import type { Content } from "@/content/by-lang";

type Projects = Pick<Content, "projects" | "featuredProjectSlugs">;

export const getProject = ({ projects }: Projects, slug: string) => projects.find((p) => p.slug === slug);

export function getAdjacentProjects({ projects }: Projects, slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return { prev: projects[index - 1], next: projects[index + 1] };
}

/** Featured projects in the order picked in content/home.ts (strongest first); other lists stay newest first. */
export const getFeaturedProjects = ({ projects, featuredProjectSlugs }: Projects) =>
  featuredProjectSlugs.map((slug) => projects.find((p) => p.slug === slug)).filter((p) => p !== undefined);

/** Everything not featured, newest first. */
export const getOtherProjects = ({ projects, featuredProjectSlugs }: Projects) =>
  projects.filter((p) => !featuredProjectSlugs.includes(p.slug));
