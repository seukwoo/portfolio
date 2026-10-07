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
import { contentByLang } from "@/content/by-lang";
import type { Lang } from "@/i18n/config";
import { pageMetadata } from "@/lib/metadata";
import { routes } from "@/lib/routes";

export function resumeMetadata(lang: Lang) {
  const { profile, labels } = contentByLang[lang];
  return pageMetadata(lang, routes.resume, {
    title: "Resume",
    description: labels.meta.resumeDescription(profile.name, profile.position),
  });
}

export function ResumeView({ lang }: { lang: Lang }) {
  const c = contentByLang[lang];
  return (
    <Container className="pt-10 pb-24 sm:pt-14">
      <ResumeHeader greeting={c.site.greeting} profile={c.profile} resumePdf={c.resumePdf} lastUpdated={c.site.lastUpdated} />

      <div className="mt-10 lg:mt-16 lg:grid lg:grid-cols-[180px_1fr] lg:gap-14">
        {/* Sticky on the aside (not the nav) so it sticks for the whole page height on mobile too. */}
        <aside className="sticky top-16 z-40 lg:top-24 lg:self-start">
          <ResumeToc sections={c.resumeSections} />
        </aside>
        <div className="pt-10 lg:pt-0">
          <IntroductionSection meta={c.sections.introduction} lines={c.introduction} bare />
          <AboutSection meta={c.sections.about} about={c.about} bare />
          <ExperienceSection meta={c.sections.experience} experiences={c.experiences} bare />
          <SkillsSection meta={c.sections.skills} groups={c.skillGroups} bare />
          <DegreesSection meta={c.sections.degrees} degrees={c.degrees} bare />
          <ActivitiesSection meta={c.sections.activities} activities={c.activities} bare />
          <CertificationsSection meta={c.sections.certifications} certifications={c.certifications} bare />
        </div>
      </div>
    </Container>
  );
}
