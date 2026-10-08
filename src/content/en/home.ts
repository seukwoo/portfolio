// Home page content: the curated "argument" of the site. Full records live on /resume.
// 🟨 marks copy that is temporary until the new introduction (feedback #6) and Decision Graph (#7) are ready.
import { routes } from "@/lib/routes";
import type { HomeHero, LatestWork, LeadershipBlock, Metric, WorkStyle } from "@/types/content";

// Same thesis as the resume introduction (content/en/profile.ts).
export const hero: HomeHero = {
  name: "Seukwoo Lee",
  altName: "이석우",
  eyebrow: "AI Engineering Lead",
  headline: ["10 years in development,", "from kickoff to launch."],
  intro:
    "Hi, I'm Seukwoo Lee. I turn research- and pilot-stage technology into products people actually use and pay for. I design and write the code myself, and have led teams from a 3-person dev unit to a 50-person research division.",
  focus:
    "For the past two years I've taken on one 'turn AI into a product' mission per company and seen each through — Alan's monetization at ESTsoft (Jul 2025), and the official ProtoPie MCP launch at Studio XID (Oct 2026).",
  actions: [
    { label: "View projects →", href: routes.projects },
    { label: "View resume", href: routes.resume },
  ],
};

/** Every number must be traceable to the resume content; `note` shows the source. */
export const metrics: Metric[] = [
  { value: "10", unit: "years", label: "Years in development", note: "2017.01 – present · AI products since 2025.04" },
  { value: "50", unit: "people", label: "Largest team led", note: "R&D Division Head · TmaxAI 2020–2022" },
  { value: "5", unit: "services", label: "Commercial services built", note: "ProtoPie MCP · Alan · Dr.Meta · Meta.CRO · NaenunN" },
  { value: "3", unit: "awards", label: "Group-wide awards", note: "Technology Innovation Award · Super Leader · Maestro" },
];

// "How I build": general principles for building AI products (not tied to one project), linking to the projects.
export const latestWork: LatestWork = {
  kicker: "How I build",
  title: "How I build AI services",
  summary: "Six things I hold to when building AI products, from PoC to operations",
  layers: [
    { label: "01 / Define", value: "Problem and features from requirements, plus a tech review" },
    { label: "02 / Scope", value: "Rules where rules suffice, AI only where needed" },
    { label: "03 / Pipeline", value: "Separate stages, the right model for each stage" },
    { label: "04 / Eval", value: "Human-made ground truth first, same bar for every change" },
    { label: "05 / Verify", value: "Verification split between machine checks and human judgment" },
    { label: "06 / Operate", value: "Continuous improvement on cost, latency, and quality" },
  ],
  href: routes.projects,
};

/** Which projects are featured; they're shown newest first (by period), not in this order. */
export const featuredProjectSlugs = ["decision-graph", "ui-code-ai", "alan", "mx-studio"];

export const leadership: LeadershipBlock[] = [
  {
    title: "Team size",
    points: [
      "Built and led teams from a small 3-person dev unit to a 50-person R&D division — as division head, acted as technical lead for a year while the CTO role was vacant",
      "Currently running a 4–5 person agile team — fast decisions, flexible execution",
    ],
  },
  {
    title: "Decisions · Build small, validate fast",
    points: [
      "Run the team in short agile cycles: build, check, and adjust direction",
      "Validate response with prototypes and beta tests before scaling up (MX Studio external beta, Dr.Meta internal beta)",
    ],
  },
  {
    title: "Priorities · Driven by user data and business metrics",
    points: [
      "Set development priorities from traffic flows and per-feature usage in Google Analytics and Amplitude",
      "Designed pricing, terms, and refund policy alongside development for the free-to-paid transition",
    ],
  },
];

/** 🟨 Hidden until written (feedback #6, #19). Set to an object to show the section. */
export const workStyle: WorkStyle | null = null;
