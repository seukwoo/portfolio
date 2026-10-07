/** Every internal URL in one place, so pages and links never hardcode paths. */
export const routes = {
  home: "/",
  projects: "/projects",
  project: (slug: string) => `/projects/${slug}`,
  resume: "/resume",
  /** The contact strip is rendered on every page, so a bare hash works everywhere. */
  contact: "#contact",
} as const;
