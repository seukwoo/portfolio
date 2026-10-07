import type { Metadata } from "next";
import { ResumePrint } from "@/components/resume/ResumePrint";
import {
  about,
  activities,
  certifications,
  degrees,
  experiences,
  introduction,
  profile,
  site,
  skillGroups,
} from "@/content";

// Source page for the downloadable resume PDF (scripts/generate-resume-pdf.mjs). Not meant to be browsed.
export const metadata: Metadata = {
  title: "Resume (print)",
  robots: { index: false, follow: false },
};

export default function ResumePrintPage() {
  return (
    <ResumePrint
      profile={profile}
      siteUrl={site.url}
      lastUpdated={site.lastUpdated}
      introduction={introduction}
      about={about}
      experiences={experiences}
      skillGroups={skillGroups}
      degrees={degrees}
      activities={activities}
      certifications={certifications}
    />
  );
}
