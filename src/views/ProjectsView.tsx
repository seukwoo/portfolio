import { Container } from "@/components/layout";
import { SplitHeadline } from "@/components/motion";
import { ProjectGrid, ProjectRowList } from "@/components/project";
import { Eyebrow } from "@/components/ui";
import { contentByLang } from "@/content/by-lang";
import type { Lang } from "@/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";
import { routes } from "@/lib/routes";

export const projectsMetadata = (lang: Lang) =>
  pageMetadata(lang, routes.projects, {
    title: "Projects",
    description: contentByLang[lang].projects.map((p) => p.name).join(", "),
  });

export function ProjectsView({ lang }: { lang: Lang }) {
  const c = contentByLang[lang];
  return (
    <Container className="pt-14 pb-24 sm:pt-20">
      <Eyebrow latin>{c.sections.projects.eyebrow}</Eyebrow>
      <SplitHeadline className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{c.sections.projects.title}</SplitHeadline>
      <p className="mt-5 text-muted">{c.labels.projects.total(c.projects.length)}</p>

      <h2 className="mt-14 mb-6 text-xl font-bold">{c.labels.projects.featured}</h2>
      <ProjectGrid projects={getFeaturedProjects(c)} priorityCount={3} />

      <h2 className="mt-16 mb-2 text-xl font-bold">{c.labels.projects.more}</h2>
      <ProjectRowList projects={getOtherProjects(c)} />
    </Container>
  );
}
