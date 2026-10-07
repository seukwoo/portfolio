// Site-wide settings: metadata, navigation, and the heading of each section.
import { buildDate } from "@/lib/date";
import { routes } from "@/lib/routes";
import type { LinkItem, SectionMeta, Site } from "@/types/content";

export const site: Site = {
  url: "https://seukwoolee.vercel.app",
  title: "Seukwoo Lee — Resume & Portfolio",
  greeting: "Hello!",
  // Set at build time, so every deploy updates it automatically.
  lastUpdated: buildDate,
};

/** Header menu (the "Home" link on the left is separate). */
export const navigation: LinkItem[] = [
  { label: "Projects", href: routes.projects },
  { label: "Resume", href: routes.resume },
  { label: "Contact", href: routes.contact },
];

/** Section headings. Home sections are numbered; resume sections mirror the Notion page. */
export const sections = {
  // Home
  featured: { id: "featured", eyebrow: "01 / Selected Projects", title: "Selected projects" },
  leadership: { id: "leadership", eyebrow: "02 / Leadership", title: "Leadership" },
  moreProjects: { id: "more-projects", eyebrow: "03 / More Projects", title: "More projects" },
  workStyle: { id: "how-i-work", eyebrow: "How I Work", title: "How I work" },
  // Projects page
  projects: { id: "projects", eyebrow: "Projects", title: "Projects" },
  // Resume page
  introduction: { id: "introduction", eyebrow: "Introduction", title: "In one line" },
  about: { id: "about", eyebrow: "About Me", title: "Core strengths" },
  experience: { id: "experience", eyebrow: "Experiences", title: "Experience" },
  skills: { id: "skills", eyebrow: "Skill", title: "Skills" },
  degrees: { id: "degree", eyebrow: "Degree", title: "Education" },
  activities: { id: "activity", eyebrow: "Award & Activity", title: "Awards & activities" },
  certifications: { id: "certification", eyebrow: "Certification & Language", title: "Certifications & languages" },
} satisfies Record<string, SectionMeta>;

/** Order of sections on /resume (also drives its table of contents). */
export const resumeSections: SectionMeta[] = [
  sections.introduction,
  sections.about,
  sections.experience,
  sections.skills,
  sections.degrees,
  sections.activities,
  sections.certifications,
];
