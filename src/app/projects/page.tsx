import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { SplitHeadline } from "@/components/motion";
import { ProjectGrid, ProjectRowList } from "@/components/project";
import { Eyebrow } from "@/components/ui";
import { labels, projects, sections } from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(routes.projects, {
  title: "Projects",
  description: projects.map((p) => p.name).join(", "),
});

export default function ProjectsPage() {
  return (
    <Container className="pt-14 pb-24 sm:pt-20">
      <Eyebrow latin>{sections.projects.eyebrow}</Eyebrow>
      <SplitHeadline className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">{sections.projects.title}</SplitHeadline>
      <p className="mt-5 text-muted">{labels.projects.total(projects.length)}</p>

      <h2 className="mt-14 mb-6 text-xl font-bold">{labels.projects.featured}</h2>
      <ProjectGrid projects={getFeaturedProjects()} priorityCount={3} />

      <h2 className="mt-16 mb-2 text-xl font-bold">{labels.projects.more}</h2>
      <ProjectRowList projects={getOtherProjects()} />
    </Container>
  );
}
