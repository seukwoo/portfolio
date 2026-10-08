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
        "Owned the monetization of [Alan](/projects/alan), an LLM service piloted by a research team, as PO — pricing, terms, payment/refund flows and the launch announcement — launching the Pro subscription (2025.07) and its first paid revenue (figures not disclosed)",
        "Built [Dr.Meta](/projects/dr-meta) and [Meta.CRO](/projects/meta-cro) on the output of [MX Studio](/projects/mx-studio), a 3D web component tool — in commercial operation at cancer centers nationwide",
      ],
    },
    {
      title: "Designing AI systems hands-on, proving them in code",
      evidence: [
        "Designed a code-generation pipeline combining rule-based modules with AI models and built its core (PoC) myself → officially launched with the team as [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official) in October 2026",
        "Designed and built [Decision Graph](/projects/decision-graph), an LLM pipeline that extracts decisions, on my own — extracted 80%+ of the human-labeled decisions in a golden set",
      ],
    },
    {
      title: "Deciding by measurement, not gut feel",
      evidence: [
        "Model choices made by testing — rejected a switch to a lighter model that passed only 17 of 24 test cases, and restructured the calls for 74% fewer calls and 25% lower cost",
        "Set development priorities from traffic flows and per-feature usage in Google Analytics and Amplitude",
      ],
    },
    {
      title: "Leadership sized to the team",
      evidence: [
        "Built and led teams from a 3-person dev unit to a 50-person R&D division — as division head, acted as technical lead for a year while the CTO role was vacant; 3 group-wide awards",
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
