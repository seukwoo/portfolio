// Source: https://seukwoo.notion.site — Seukwoo Lee resume & portfolio (English version)
// Inline links use markdown syntax `[label](url)`; see lib/rich-text.ts.
import type { About, DocumentItem, LinkItem, Profile } from "@/types/content";
import { profileImage } from "../images.generated";

export const profile: Profile = {
  nameKo: "이석우",
  nameEn: "Seukwoo Lee",
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
        "Took [Alan](/projects/alan), an LLM service piloted by a research team, to a Pro subscription for its first paid revenue, and planned the enterprise plan — laying the groundwork for institutional contract revenue",
        "Built [Dr.Meta](/projects/dr-meta) and [Meta.CRO](/projects/meta-cro) on the output of [MX Studio](/projects/mx-studio), a 3D web component tool — in commercial operation at cancer centers nationwide",
      ],
    },
    {
      title: "Designing AI systems hands-on, proving them in code",
      evidence: [
        "Designed a code-generation pipeline combining rule-based modules with AI models and built its core (PoC) myself → officially launched with the team as [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official) in October 2026",
        "Designed and built [Decision Graph](/projects/decision-graph), an LLM pipeline that extracts decisions, on my own — over 80% reliability on a golden set from real projects",
      ],
    },
    {
      title: "Deciding by measurement, not gut feel",
      evidence: [
        "Model choices made against labeled test cases — rejected a switch to a lighter model that got only 17 of 24 right, and restructured the calls to cut run cost from $10.2 to $7.6",
        "Set development priorities from traffic flows and per-feature usage in Google Analytics and Amplitude",
      ],
    },
    {
      title: "Leadership sized to the team",
      evidence: [
        "Built and led teams from a 3-person dev unit to a 50-person research division; 3 group-wide awards (Maestro · Super Leader · Technology Innovation Award)",
        "Running an agile team of 4–5 AI engineers and app developers — build small, validate fast",
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
];
