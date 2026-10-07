import { HomeHero, LatestWorkCard, LeadershipSection, ProofStrip, WorkStyleSection } from "@/components/home";
import { ProjectGrid, ProjectRowList } from "@/components/project";
import { Section } from "@/components/sections";
import { AppLink } from "@/components/ui";
import { contentByLang } from "@/content/by-lang";
import type { Lang } from "@/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import { getFeaturedProjects, getOtherProjects } from "@/lib/projects";
import { routes } from "@/lib/routes";

export const homeMetadata = (lang: Lang) => pageMetadata(lang, routes.home);

// Home = the curated argument. Full records live on /resume, every project on /projects.
export function HomeView({ lang }: { lang: Lang }) {
  const c = contentByLang[lang];
  return (
    <>
      <HomeHero hero={c.hero} photo={c.profile.photo} feature={<LatestWorkCard work={c.latestWork} />} />
      <ProofStrip metrics={c.metrics} />
      <Section
        meta={c.sections.featured}
        action={
          <AppLink href={routes.projects} className="text-sm font-semibold text-accent hover:underline">
            {c.labels.projects.viewAll}
          </AppLink>
        }
      >
        <ProjectGrid projects={getFeaturedProjects(c)} />
      </Section>
      <LeadershipSection meta={c.sections.leadership} blocks={c.leadership} />
      <Section meta={c.sections.moreProjects}>
        <ProjectRowList projects={getOtherProjects(c)} />
      </Section>
      <WorkStyleSection meta={c.sections.workStyle} workStyle={c.workStyle} />
    </>
  );
}
