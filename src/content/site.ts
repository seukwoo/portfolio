// Site-wide settings: metadata, navigation, and the heading of each section.
import { routes } from "@/lib/routes";
import type { LinkItem, SectionMeta, Site } from "@/types/content";

export const site: Site = {
  url: "https://seukwoolee.vercel.app",
  title: "이석우 이력서 & 포트폴리오",
  greeting: "안녕하세요!",
  lastUpdated: "2026.06.01",
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
  featured: { id: "featured", eyebrow: "01 / Selected Projects", title: "대표 프로젝트" },
  leadership: { id: "leadership", eyebrow: "02 / Leadership", title: "리더십" },
  moreProjects: { id: "more-projects", eyebrow: "03 / More Projects", title: "그 밖의 프로젝트" },
  workStyle: { id: "how-i-work", eyebrow: "How I Work", title: "일하는 방식" },
  // Projects page
  projects: { id: "projects", eyebrow: "Projects", title: "프로젝트" },
  // Resume page
  introduction: { id: "introduction", eyebrow: "Introduction", title: "한 줄 소개" },
  about: { id: "about", eyebrow: "About Me", title: "핵심 역량" },
  experience: { id: "experience", eyebrow: "Experiences", title: "직무 및 이력" },
  skills: { id: "skills", eyebrow: "Skill", title: "보유 스킬" },
  degrees: { id: "degree", eyebrow: "Degree", title: "학위" },
  activities: { id: "activity", eyebrow: "Award & Activity", title: "수상 및 활동" },
  certifications: { id: "certification", eyebrow: "Certification & Language", title: "자격증 & 언어" },
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
