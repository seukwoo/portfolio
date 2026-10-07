import { HomeHero, LatestWorkCard, LeadershipSection, ProofStrip, WorkStyleSection } from "@/components/home";
import { ProjectGrid, ProjectRowList } from "@/components/project";
import { Section } from "@/components/sections";
import { AppLink } from "@/components/ui";
import { hero, labels, latestWork, leadership, metrics, profile, sections, workStyle } from "@/content";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";
import { routes } from "@/lib/routes";

// Home = the curated argument. Full records live on /resume, every project on /projects.
export default function HomePage() {
  return (
    <>
      <HomeHero hero={hero} photo={profile.photo} feature={<LatestWorkCard work={latestWork} />} />
      <ProofStrip metrics={metrics} />
      <Section
        meta={sections.featured}
        action={
          <AppLink href={routes.projects} className="text-sm font-semibold text-accent hover:underline">
            {labels.projects.viewAll}
          </AppLink>
        }
      >
        <ProjectGrid projects={getFeaturedProjects()} />
      </Section>
      <LeadershipSection meta={sections.leadership} blocks={leadership} />
      <Section meta={sections.moreProjects}>
        <ProjectRowList projects={getOtherProjects()} />
      </Section>
      <WorkStyleSection meta={sections.workStyle} workStyle={workStyle} />
    </>
  );
}
