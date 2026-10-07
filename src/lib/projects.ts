import type { Content } from "@/content/by-lang";

type Projects = Pick<Content, "projects" | "featuredProjectSlugs">;

export const getProject = ({ projects }: Projects, slug: string) => projects.find((p) => p.slug === slug);

export function getAdjacentProjects({ projects }: Projects, slug: string) {
  const index = projects.findIndex((p) => p.slug === slug);
  return { prev: projects[index - 1], next: projects[index + 1] };
}

/** Featured projects (picked in content/home.ts), newest first like every project list. */
export const getFeaturedProjects = ({ projects, featuredProjectSlugs }: Projects) =>
  projects.filter((p) => featuredProjectSlugs.includes(p.slug));

/** Everything not featured, newest first. */
export const getOtherProjects = ({ projects, featuredProjectSlugs }: Projects) =>
  projects.filter((p) => !featuredProjectSlugs.includes(p.slug));
