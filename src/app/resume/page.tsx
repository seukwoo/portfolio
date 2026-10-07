import type { Metadata } from "next";
import { Container } from "@/components/layout";
import { ResumeHeader, ResumeToc } from "@/components/resume";
import {
  AboutSection,
  ActivitiesSection,
  CertificationsSection,
  DegreesSection,
  ExperienceSection,
  IntroductionSection,
  SkillsSection,
} from "@/components/sections";
import {
  about,
  activities,
  certifications,
  degrees,
  experiences,
  introduction,
  profile,
  resumePdf,
  resumeSections,
  sections,
  site,
  skillGroups,
} from "@/content";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export const metadata: Metadata = pageMetadata(routes.resume, {
  title: "Resume",
  description: `${profile.nameKo} — ${profile.position} 이력서: 경력, 프로젝트, 스킬, 학위, 수상`,
});

export default function ResumePage() {
  return (
    <Container className="pt-10 pb-24 sm:pt-14">
      <ResumeHeader greeting={site.greeting} profile={profile} resumePdf={resumePdf} lastUpdated={site.lastUpdated} />

      <div className="mt-10 lg:mt-16 lg:grid lg:grid-cols-[180px_1fr] lg:gap-14">
        {/* Sticky on the aside (not the nav) so it sticks for the whole page height on mobile too. */}
        <aside className="sticky top-16 z-40 lg:top-24 lg:self-start">
          <ResumeToc sections={resumeSections} />
        </aside>
        <div className="pt-10 lg:pt-0">
          <IntroductionSection meta={sections.introduction} lines={introduction} bare />
          <AboutSection meta={sections.about} about={about} bare />
          <ExperienceSection meta={sections.experience} experiences={experiences} bare />
          <SkillsSection meta={sections.skills} groups={skillGroups} bare />
          <DegreesSection meta={sections.degrees} degrees={degrees} bare />
          <ActivitiesSection meta={sections.activities} activities={activities} bare />
          <CertificationsSection meta={sections.certifications} certifications={certifications} bare />
        </div>
      </div>
    </Container>
  );
}
