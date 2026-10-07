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
import { labels, projects } from "@/content";
import { getAdjacentProjects, getProject } from "@/lib/projects";
import { routes } from "@/lib/routes";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const project = getProject((await params).slug);
  if (!project) return {};
  return {
    title: project.name,
    description: project.summary,
    openGraph: project.images[0] ? { images: [project.images[0].src] } : undefined,
  };
}

export default async function ProjectPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const { prev, next } = getAdjacentProjects(slug);

  return (
    <Container className="space-y-10 pt-10 pb-24 sm:space-y-12 sm:pt-14">
      <AppLink href={routes.projects} className="inline-block text-sm text-muted hover:text-accent">
        {labels.projects.backToList}
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
      {project.caseStudy && <h2 className="text-xl font-bold">{labels.projects.detailsTitle}</h2>}
      <ProjectInfoList project={project} />
      <ProjectPager prev={prev} next={next} />
    </Container>
  );
}
