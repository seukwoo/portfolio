// Shapes of everything under src/content. Components receive these as props.

export type LinkItem = { label: string; href: string };

export type ImageAsset = { src: string; width: number; height: number };

/** Heading block shown at the top of each section; `id` doubles as the in-page anchor. */
export type SectionMeta = { id: string; eyebrow: string; title: string };

export type Site = {
  url: string;
  title: string;
  greeting: string;
  lastUpdated: string;
};

/** Home hero. `headline` renders as two lines, the second in the accent color. */
export type HomeHero = {
  name: string;
  nameEn: string;
  eyebrow: string;
  headline: [string, string];
  intro: string;
  focus?: string;
  actions: LinkItem[];
};

/** A verifiable number in the proof strip; `note` says where the number comes from. */
export type Metric = { value: string; unit?: string; label: string; note?: string };

/** "What I'm building now" card next to the hero, drawn as numbered layers. */
export type LatestWork = {
  kicker: string;
  title: string;
  summary: string;
  layers: { label: string; value: string }[];
  footnote?: string;
  href: string;
};

export type LeadershipBlock = { title: string; points: string[] };

export type WorkStyle = { headline: string[]; paragraphs: string[] };

export type Profile = {
  nameKo: string;
  nameEn: string;
  role: string;
  position: string;
  email: string;
  photo: ImageAsset;
};

export type DocumentItem = { id: string; label: string; href: string };

/** A core competency: one claim, backed by concrete results from the record (may link to projects). */
export type Competency = { title: string; evidence: string[] };

export type About = { competencies: Competency[] };

export type ExperienceProject = {
  role: string;
  /** Label shown before `product`; falls back to labels.experience.defaultProductLabel */
  productLabel?: string;
  product: string;
  period?: string;
  title: string;
  subtitle: string;
  details: string[];
};

/** One company stint — or one affiliate inside a company group. */
export type ExperienceUnit = {
  role: string;
  company: string;
  department: string;
  tenure: string;
  projects: ExperienceProject[];
};

/** A company group whose affiliates are listed in order (e.g. moved between subsidiaries). */
export type ExperienceGroup = { company: string; tenure: string; units: ExperienceUnit[] };

export type Experience = ExperienceUnit | ExperienceGroup;

export type Project = {
  slug: string;
  /** 이름 */
  name: string;
  /** 발주 업체 */
  client?: string;
  /** 담당 업무 */
  duty?: string;
  /** 키워드 */
  keywords: string[];
  /** 수행일 (Notion database property, kept for reference) */
  notionDate: { start: string; end?: string };
  /** One-line description used in cards and project rows */
  summary: string;
  /** Two-line statement shown on featured cards instead of a screenshot */
  punchline?: [string, string];
  /** 1. 프로젝트 명 */
  fullName: string;
  /** 2. 고객사 / Domain */
  domain: string;
  /** 3. 수행기간 */
  period: string;
  /** 4. 업무 내용 */
  tasks: string[];
  /** 5. 담당 역할 */
  roles: string[];
  /** 6. 보유 / 활용 Skill */
  skills: string[];
  images: ImageAsset[];
  /** Cover used only on featured cards (falls back to images[0]); keep its bottom free of text for the punchline. */
  cardImage?: ImageAsset;
  caseStudy?: CaseStudy;
  /** Also show the card cover (with its punchline) as a gallery slide — for drawn covers that are not screenshots. */
  coverInGallery?: boolean;
};

/** Case-study summary shown at the top of a featured project page. */
export type CaseStudy = {
  problem: string;
  decisions: string[];
  /** `label` lets an unverified result read as an observation rather than a measured outcome. */
  outcome: { label: string; text: string; note?: string };
};

export type SkillGroup = { type: string; items: string[] };

export type Degree = {
  school: string;
  degree: string;
  gpa: string;
  focus: string;
  period: string;
};

/** Groups on the resume, shown in this order. */
export type ActivityKind = "award" | "paper" | "activity";

export type Activity = {
  kind: ActivityKind;
  /** From student years: folded on the web, left out of the PDF. */
  student?: boolean;
  title: string;
  date: string;
  lines: string[];
  bullets?: string[];
  footer?: string;
};

export type Certification = {
  title: string;
  date: string;
  detail?: string;
  id: string;
  issuer: string;
};
