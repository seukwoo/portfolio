import type { Metadata } from "next";
import { ResumePrint } from "@/components/resume/ResumePrint";
import { contentByLang } from "@/content/by-lang";
import type { Lang } from "@/i18n/config";

// Source page for the downloadable resume PDF (scripts/generate-resume-pdf.mjs). Not meant to be browsed.
export const resumePrintMetadata: Metadata = {
  title: "Resume (print)",
  robots: { index: false, follow: false },
};

export function ResumePrintView({ lang }: { lang: Lang }) {
  const c = contentByLang[lang];
  return (
    <ResumePrint
      lang={lang}
      profile={c.profile}
      siteUrl={c.site.url}
      github={c.socialLinks.find((l) => l.label === "GitHub")?.href}
      lastUpdated={c.site.lastUpdated}
      introduction={c.introduction}
      about={c.about}
      experiences={c.experiences}
      skillGroups={c.skillGroups}
      degrees={c.degrees}
      activities={c.activities}
      certifications={c.certifications}
    />
  );
}
