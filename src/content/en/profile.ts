// Source: https://seukwoo.notion.site — Seukwoo Lee resume & portfolio (English version)
// Inline links use markdown syntax `[label](url)`; see lib/rich-text.ts.
import type { About, DocumentItem, LinkItem, Profile } from "@/types/content";
import { profileImage } from "../images.generated";

export const profile: Profile = {
  name: "Seukwoo Lee",
  altName: "이석우",
  role: "Development leader, 10 years",
  position: "AI Engineering Lead",
  email: "seukwoo88@gmail.com",
  photo: profileImage,
};

export const introduction: string[] = [
  "A development leader with 10 years of experience,",
  "turning research- and pilot-stage technology into products people actually use and pay for.",
  "I design and write the code myself, and have led teams from a 3-person dev unit to a 50-person research division.",
];

/** Each competency is a claim plus evidence; the full history lives in experiences. */
export const about: About = {
  competencies: [
    {
      title: "From pilot technology to commercial product",
      evidence: [
        "Led [Alan](/projects/alan)'s monetization as PO, planning to launch — Pro launch (2025.07), first paid revenue (not disclosed)",
        "Built [Dr.Meta](/projects/dr-meta) and [Meta.CRO](/projects/meta-cro) on [MX Studio](/projects/mx-studio) output — used at cancer centers nationwide",
      ],
    },
    {
      title: "Designing AI systems hands-on, proving them in code",
      evidence: [
        "Designed a rules + AI code-generation pipeline and built its core (PoC) → launched with the team as [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official) (Oct 2026)",
        "Built [Decision Graph](/projects/decision-graph) solo — extracts decisions and auto-graphs their relations; 80%+ of human-labeled decisions found",
      ],
    },
    {
      title: "Deciding by measurement, not gut feel",
      evidence: [
        "Chose models by testing (lighter model rejected at 17/24) and cut calls 74%, cost 25%",
        "Set development priorities from traffic flows and per-feature usage in Google Analytics and Amplitude",
      ],
    },
    {
      title: "Leadership sized to the team",
      evidence: [
        "Led teams from 3 people to a 50-person R&D division — acting technical lead for a year without a CTO; 3 group awards",
        "Running an agile team of 4–5 AI engineers and app developers — build small, validate fast",
        "Evaluated members and leads, and adjusted how I lead from feedback both ways",
      ],
    },
  ],
};

/** Generated from the /resume content by `pnpm resume:pdf` — never edited by hand. */
export const resumePdf: DocumentItem = { id: "resume", label: "Seukwoo Lee Resume", href: "/docs/resume-en.pdf" };

export const socialLinks: LinkItem[] = [
  {
    label: "Remember",
    href: "https://connect.rememberapp.co.kr/profile/2472858?internal_path=rc_connect_search_list",
  },
  { label: "LinkedIn", href: "http://www.linkedin.com/in/seuk-woo-lee-ko" },
  { label: "GitHub", href: "https://github.com/seukwoo" },
];
