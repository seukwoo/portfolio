import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout";
import {
  ProjectCaseStudy,
  ProjectCover,
  ProjectGallery,
  ProjectHeader,
  ProjectInfoList,
  ProjectPager,
} from "@/components/project";
import { AppLink } from "@/components/ui";
import { contentByLang } from "@/content/by-lang";
import type { Lang } from "@/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import { getAdjacentProjects, getProject } from "@/lib/projects";
import { routes } from "@/lib/routes";

export const projectSlugs = (lang: Lang) => contentByLang[lang].projects.map((p) => ({ slug: p.slug }));

export function projectMetadata(lang: Lang, slug: string): Metadata {
  const project = getProject(contentByLang[lang], slug);
  if (!project) return {};
  // Shares use the site preview image; project screenshots are SVG/WebP, which most link previews can't show.
  return pageMetadata(lang, routes.project(project.slug), { title: project.name, description: project.summary });
}

export function ProjectView({ lang, slug }: { lang: Lang; slug: string }) {
  const c = contentByLang[lang];
  const project = getProject(c, slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(c, slug);

  return (
    <Container className="space-y-10 pt-10 pb-24 sm:space-y-12 sm:pt-14">
      <AppLink href={routes.projects} className="inline-block text-sm text-muted hover:text-accent">
        {c.labels.projects.backToList}
      </AppLink>
      <ProjectHeader project={project} />
      {project.caseStudy && <ProjectCaseStudy caseStudy={project.caseStudy} />}
      <ProjectGallery
        images={project.images}
        title={project.name}
        extraSlide={
          project.coverInGallery && (
            <ProjectCover project={project} size="banner" className="aspect-video" sizes="(min-width: 1152px) 1104px, 100vw" />
          )
        }
      />
      {project.caseStudy && <h2 className="text-xl font-bold">{c.labels.projects.detailsTitle}</h2>}
      <ProjectInfoList project={project} />
      <ProjectPager prev={prev} next={next} />
    </Container>
  );
}
