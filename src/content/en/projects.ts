// English version of ../projects.ts.
// Source: Notion "Project" database — row properties + each project page body.
import type { ImageAsset, Project } from "@/types/content";
import { projectImages } from "../images.generated";

const list = (s: string) => s.split(",").map((v) => v.trim());

/**
 * `images` replaces the screenshots exported from Notion (used for confidential projects).
 * `leadImages` are added in front of them (e.g. a newer cover image) and survive `pnpm assets`.
 */
const data: (Omit<Project, "images"> & { images?: ImageAsset[]; leadImages?: ImageAsset[] })[] = [
  {
    slug: "ui-code-ai",
    summary:
      "AI system that turns designs into cross-platform component code — developed the core pipeline myself; officially launched as ProtoPie MCP in 2026.10",
    punchline: ["From design data", "to cross-platform code"],
    name: "UI code automation AI system",
    // Confidential (current employer): model names, training pipeline and screenshots are intentionally omitted.
    client: "Studio XID",
    duty: "Head of Product Dev Team",
    keywords: list("Design-to-Code, ML Pipeline, Cross-platform"),
    notionDate: { start: "2026-06-01" },
    fullName: "AI-assisted Design-to-Code System for Cross-platform Components",
    domain: "Studio XID / Design & Interaction data",
    period: "2026.01 - 2026.10",
    tasks: [
      "[Hands-on] Designed a code generation pipeline combining rule-based modules with AI model stages, and developed the core pipeline (PoC)",
      "[Hands-on] Designed the training of auxiliary models that understand images and layout (structure), and built the training data",
      "[Hands-on] Designed the product integration architecture for plugging the code generation pipeline into the existing product (ProtoPie)",
      "[Hands-on] Designed the data pipeline that refines design data accumulated in-house into training data",
      "[Team lead] Ran an agile team of 4–5 AI engineers and app developers — model training by the AI engineers, integration development with the team",
      "[Team lead] Designed the MLOps pipeline from data cleaning → training → deployment",
      "[Team lead] Expanded to cross-platform component code generation for AOS, iOS and Web; official launch as [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official) in October 2026",
    ],
    roles: ["Head of Product Dev Team", "(+ Product Owner, + AI Engineer)"],
    skills: list("Python, Computer Vision, LLM, ML Pipeline, AWS, Git, Figma, Notion"),
    // Official launch images are from the public ProtoPie MCP announcement; the overview is our own diagram.
    images: [
      { src: "/projects/ui-code-ai/overview.svg", width: 1200, height: 675 },
      { src: "/projects/ui-code-ai/ecosystem.webp", width: 1602, height: 892 },
      { src: "/projects/ui-code-ai/release-02.webp", width: 1920, height: 1202 },
      { src: "/projects/ui-code-ai/release-04.webp", width: 1920, height: 1202 },
    ],
    cardImage: { src: "/projects/ui-code-ai/card.svg", width: 1200, height: 750 },
    coverInGallery: true,
    caseStudy: {
      problem:
        "General-purpose LLMs alone couldn't reliably read a design's structure (hierarchy, repeated elements), so the generated code came out flat, screen by screen, and was hard to reuse.",
      decisions: [
        "Designed a code generation pipeline that places AI model stages between rule-based modules",
        "Designed conversion paths so that both image-based and layout (structure)-based inputs can be turned into code",
        "Designed the training of auxiliary models that understand images and layout (structure) and built the training data myself; connected the models trained by teammates to the pipeline to output AOS, iOS and Web component code",
      ],
      outcome: {
        label: "Outcome",
        text: "Developed the core pipeline (PoC) myself, productized it with the team, and officially launched it as [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official) in October 2026. Dev View has also finished its beta and is now officially available. Code MCP uses ProtoPie engine information to generate code for 7 frameworks, including React, Flutter and SwiftUI. ([Docs](https://www.protopie.io/learn/docs/mcp-getting-started))",
        note: "The effect of grouping repeated UI elements into reusable components is a qualitative observation based on internal cases.",
      },
    },
  },
  {
    slug: "alan",
    summary:
      "Led a search-style LLM agent service, then in trial operation at a research org, through commercial launch and monetization",
    punchline: ["From a trial-run LLM service", "to launch and monetization"],
    // Slide generation feature (led from research/planning). Sidebar with personal history cropped out.
    leadImages: [{ src: "/projects/alan/cover.webp", width: 1920, height: 1145 }],
    name: "Alan LLM service",
    client: "ESTsoft",
    duty: "Product Owner",
    keywords: list("LLM Agent, AI Search, Monetization"),
    notionDate: { start: "2025-04-22", end: "2026-01-05" },
    fullName: "Alan (LLM based Agentic AI Search Engine Service)",
    domain: "ESTsoft / LLM-based AI service",
    period: "2025.04 - 2026.01",
    tasks: [
      "Led a service in trial operation at the research org through commercial launch and monetization",
      "Led the development team for an LLM-based agentic AI app service, working as Product Owner",
      "Led a team made up of AI researchers and app developers (FE, BE)",
      "Ran and managed separate Dev, QA, Stage and Release servers",
      "Architected the Azure, FastAPI, React and LangGraph stack",
      "Ran and managed the patch notes page",
      "Ran quality testing and worked with other in-house teams (QA, authentication, payments, infrastructure, etc.) on development, quality and infrastructure",
      "Managed feature planning, schedules and risks for the LLM-based AI app service",
      "Built image search, YouTube search & summary and report generation features, plus specialized agents, in-house",
      "Led planning of the slide generation feature — benchmarked Genspark and other services, defined user scenarios and the generation flow",
      "Designed the slide generation agent — staged orchestration (intent → scope and outline → research → template, style and fonts → HTML rendering → revision), with human-in-the-loop review of intermediate results",
      "Shipped the deep research and slide generation services",
      "Developed an internal back-office operations tool",
      "Planned the monetization of an AI service — modeled margin from inference cost per call and set the Pro plan's price and usage limits from competitor pricing and expected paid conversion",
      "Led the paid launch as PO — built plan entitlements and payment, cancellation and refund flows, revised the terms and paid-conversion notices, and launched with marketing and business teams (2025.07, [announcement](https://estsoft.ai/all/250707))",
      "In commercial operation ([https://myalan.ai/](https://myalan.ai/))",
    ],
    roles: ["Product Owner", "(+ Project Manager, + Development Leader)"],
    caseStudy: {
      problem:
        "An LLM service in trial operation at a research org (AI Agent Lab) had to become a real commercial service and earn revenue. With users moving from search sites to LLM services, it also had to feel natural to people used to search.",
      decisions: [
        "Moved the trial-stage service onto separate Dev, QA, Stage and Release servers to bring it up to commercial-service standards",
        "Offered the LLM agent service in a search style to lower the barrier for existing search users",
        "Slides in stages, not one shot — an agent orchestration split into intent, scope, research, template, rendering and revision, with a step where users check and edit intermediate results (also built image/YouTube search and report generation agents in-house)",
        "Priced on evidence — modeled margin from inference cost per call, then set the Pro plan's price and usage limits from competitor pricing and expected paid conversion",
      ],
      outcome: {
        label: "Outcome",
        text: "Led a service in trial operation at the research org through commercial launch and monetization. As PO I led the whole monetization — pricing and plan design, payment and cancellation flows, terms and notices, and the launch announcement — and launched the Pro subscription in July 2025 ([announcement](https://estsoft.ai/all/250707)), bringing in the service's first paid revenue (figures not disclosed). On that basis I planned an enterprise product, which later led to institutional contract revenue. I also shipped deep research and slide generation and built the back-office operations tool. ([myalan.ai](https://myalan.ai/))",
      },
    },
    skills: list("GPT, Gemini, MCP, Notion, Google Analytics, Git, Azure, Figma, MS Docs, Slashpage"),
  },
  {
    slug: "decision-graph",
    summary:
      "LLM pipeline that extracts decisions from Slack and Notion with evidence and visualizes them as a relation graph automatically — extracted 80%+ of the human-labeled decisions, 74% fewer calls, 25% lower cost",
    punchline: ["From scattered conversations", "to decisions with evidence"],
    name: "Decision Graph",
    client: "Studio XID",
    duty: "Design & development (solo)",
    keywords: list("LLM Pipeline, Eval, Cost Optimization"),
    notionDate: { start: "2026-08-21", end: "2026-10-02" },
    fullName: "Decision Graph (LLM pipeline for extracting decisions from Slack and Notion)",
    domain: "Studio XID / New product PoC (internal alpha)",
    period: "2026.08 - 2026.10",
    tasks: [
      "Turned PO requirements into a technical spec and validated technical feasibility with a PoC — new product exploration",
      "Designed and developed, solo, an LLM pipeline that extracts who decided what and why from Slack and Notion, with quoted source evidence",
      "Visualized extracted decisions automatically as a relation map and timeline — prerequisite, replacement and stop relations linked by the system, with each decision linking straight to its source text",
      "Validated the PoC against a golden set where people manually marked the correct decisions (and evidence) in the conversations of one real project from the past year — extracted 80%+ of the human-labeled decisions",
      "Verified and reviewed the technical risks raised during the PoC myself (e.g. judging quality against human-made ground truth, one-way recording from source → decision → document, preventing duplicate entries on re-runs)",
      "Designed a multi-stage pipeline: split into analysis units → first-pass classification (lightweight model) → decision extraction → evidence verification (code + model) → duplicate and relationship analysis",
      "Two-tier inference — compared models on the same data and the same tests, then chose a lightweight model for first-pass classification and a high-capability model for extraction and verification",
      "Logged latency, queue time, retries, cache hits, tokens and cost per request to find bottlenecks and optimize the call structure",
      "Implemented a content-hash cache, incremental runs (re-processing only what changed), batching by conversation and thread, sentence-number citations, and a scheduler that overlaps stages",
      "Used 24 test cases with known correct answers to check that quality didn't drop with every prompt or model change (with a cap on evaluation cost)",
    ],
    roles: ["Design & development (solo)"],
    skills: list("Node.js, React, TypeScript, OpenAI API, LLM Pipeline, Eval, Telemetry"),
    // Internal tool: no screenshots of real data — our own diagrams only.
    // Real screens of the tool; decision text is blurred (internal project data).
    images: [
      { src: "/projects/decision-graph/overview.svg", width: 1200, height: 675 },
      { src: "/projects/decision-graph/relations.webp", width: 2190, height: 1312, caption: "Decision relation map drawn automatically by the system — prerequisite, replacement and stop relations and statuses between extracted decisions (decision text blurred: internal data)" },
      { src: "/projects/decision-graph/timeline.webp", width: 2196, height: 1248, caption: "Decision timeline drawn automatically by the system — decision level (company, project, feature, task), timing and milestones" },
    ],
    cardImage: { src: "/projects/decision-graph/card.svg", width: 1200, height: 750 },
    coverInGallery: true,
    caseStudy: {
      problem:
        "Decisions are made all over Slack and Notion, but later it was hard to find who decided what and why, along with the evidence — and the project's overall flow of decisions was hard to see. Extraction would be automated with an LLM, but it had to be trustworthy — no invented decisions or missing conditions — and cheap and fast enough to run every day.",
      decisions: [
        "Decisions as a graph, not a list — the system links prerequisite, replacement and stop relations between decisions and references the source text, so the project's decision flow is quick to grasp",
        "Only decisions from what was said are raised as candidates, and nothing goes into the record until a person confirms it",
        "Evidence is cited by source sentence number and checked twice — by code and by a separate verification stage",
        "Checked quality on every change against a golden set with human-marked answers and 24 test cases built from common failure cases (e.g. missing conditions)",
        "Two-tier inference — a lightweight model filters out small talk first, and only decision extraction and verification go to the high-capability model (switching everything to the lightweight model was rejected after it passed only 17 of 24 test cases)",
        "Content analyzed once is stored, and only conversations that changed are analyzed again",
      ],
      outcome: {
        label: "Outcome",
        text: "Compared against a golden set where people manually marked the correct decisions (and evidence) on one real project from the past year, and confirmed it correctly extracted 80%+ of the human-labeled decisions. Extracted decisions are drawn automatically as a relation map and timeline. While keeping quality — all 24 test cases passed, with no decisions wrongly excluded — cut calls by 74% (1,289 → 336) and run cost by 25% ($10.2 → $7.6) on the same data. Re-running only the conversations that changed costs $0.7.",
        note: "As of the internal alpha stage.",
      },
    },
  },
  {
    slug: "mx-studio",
    summary: "3D web component authoring tool — used as the base to develop and productize Dr.Meta and Meta.CRO",
    punchline: ["From a 3D web component tool", "to productized live services"],
    // Screenshot 01 re-cropped around the car (car in the upper part, caption band darkened under the punchline).
    cardImage: { src: "/projects/mx-studio/card.webp", width: 1200, height: 750 },
    name: "MX Studio",
    client: "TmaxMetaAI",
    duty: "Project Leader",
    keywords: list("3D Web, No-code Editor, Real-time Engine"),
    notionDate: { start: "2022-07-01", end: "2025-02-28" },
    fullName: "MX studio",
    domain: "TmaxMetaAI / 3D software",
    period: "2022.07 - 2025.02",
    tasks: [
      "Developed 'MX studio', software for building 3D web components",
      "Developed and productized [Dr.Meta](/projects/dr-meta) and [Meta.CRO](/projects/meta-cro) on top of MX Studio",
      "Handled design and development as System Engineer and Project Manager",
      "Led a task force of planners, designers, developers and QA",
      "Led design/development of events and actions for 3D objects",
      "Led design/development of the physics engine, real-time rendering and post-processing",
      "Led design/development of a node-based visual code system",
      "Ran an external beta test",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, JavaScript, TypeScript, 3D Graphics, Java, AWS, Notion, Figma"),
    caseStudy: {
      problem:
        "Every piece of 3D web content required developers to write 3D engine code by hand, which made production costly and hard for non-developers to take part in.",
      decisions: [
        "Designed node-based no-code interaction (a visual code system) so 3D events and actions could be built without developers",
        "Provided physics, real-time rendering and post-processing at the engine level, with support for 3D templates, data-linked models and 2D content inside 3D space",
        "Led a task force of planning, design, development and QA",
      ],
      outcome: {
        label: "Outcome",
        text: "Built the [Dr.Meta](/projects/dr-meta) and [Meta.CRO](/projects/meta-cro) web apps from MX Studio's 3D web component output, and ran an external beta test.",
      },
    },
  },
  {
    slug: "dr-meta",
    summary:
      "Web meta space for medical staff and patients at cancer centers nationwide — conferences, patient communication, motion-capture exercise games (in commercial operation)",
    name: "Dr.Meta",
    client: "Korea Smart Healthcare Association",
    duty: "Project Leader",
    keywords: list("Healthcare, 3D Web, Metaverse"),
    notionDate: { start: "2024-06-01", end: "2025-01-31" },
    fullName: "Dr.Meta",
    domain: "Korea Smart Healthcare Association / Healthcare",
    period: "2024.06 - 2025.01",
    tasks: [
      "Worked on 'Dr.Meta', a metaverse platform for cancer center medical staff and patients",
      "As the lead, handled PM/PE work for design and development",
      "Led a task force of planners, designers, developers and QA",
      "Developed the web app using 3D web component output built with [MX Studio](/projects/mx-studio)",
      "Led design/development of the integration between the React web app and the Unity app",
      "Built a Three.js-based web meta space for medical staff conferences and patient communication",
      "Provided webcam motion-capture exercise games for patients",
      "Led design/development of the admin pages and permission features",
      "In commercial operation at cancer centers nationwide ([https://healthcare.drmeta.kr/](https://healthcare.drmeta.kr/), [https://web.drmeta.kr/](https://web.drmeta.kr/))",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, AWS, Unity"),
    caseStudy: {
      problem:
        "Medical staff and patients at cancer centers nationwide needed a place to gather on the web for education, conferences and communication, with nothing to install.",
      decisions: [
        "Built a web meta space with Three.js for medical staff conferences and patient communication, using [MVS](/projects/mvs) research technology for the multiplayer server",
        "Integrated Unity content and [MX Studio](/projects/mx-studio) 3D component output seamlessly into the React web app",
        "Provided webcam motion-capture exercise games for patients",
      ],
      outcome: {
        label: "Outcome",
        text: "Commercialized and operated at cancer centers nationwide. ([web.drmeta.kr](http://web.drmeta.kr/))",
      },
    },
  },
  {
    slug: "meta-cro",
    summary: "3D-based virtual simulation training platform for clinical trials (in commercial operation)",
    name: "Meta CRO",
    client: "Korea Smart Healthcare Association",
    duty: "Project Leader",
    keywords: list("Healthcare, 3D Simulation, Education"),
    notionDate: { start: "2023-06-01", end: "2025-01-31" },
    fullName: "Meta.CRO",
    domain: "Korea Smart Healthcare Association / Healthcare",
    period: "2023.06 - 2025.01",
    tasks: [
      "Worked on 'M.CRO', a 3D-based virtual simulation training platform for clinical trials",
      "As research lead, handled PM/PE work for design and development",
      "Led a task force of developers and QA",
      "Developed the web app using 3D web component output built with [MX Studio](/projects/mx-studio)",
      "Deployed Unity VR training content via WebGL and integrated it into the web app",
      "Designed and published a 3D render engine library (set up a private npm environment)",
      "In commercial operation at cancer centers nationwide",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, AWS"),
    caseStudy: {
      problem:
        "Clinical trial procedures are hard to learn before experiencing them firsthand, and existing training materials had their limits. Practicing in a 3D virtual simulation first could raise training quality while cutting cost and trial and error.",
      decisions: [
        "Built clinical trial virtual simulation (VR) content in Unity, deployed it via WebGL and integrated it into the web app",
        "Developed the web app from [MX Studio](/projects/mx-studio) 3D web component output",
        "Designed a 3D render engine library and published it via private npm",
      ],
      outcome: { label: "Outcome", text: "Commercialized and operated at cancer centers nationwide." },
    },
  },
  {
    slug: "nenoonn",
    summary:
      "The first online contact lens purchase and delivery service, opened under a regulatory sandbox exemption — cross-platform app",
    name: "NaenunN",
    client: "Pixelro",
    duty: "Project Leader",
    keywords: list("Commerce, Cross-platform App, Regulatory Sandbox"),
    notionDate: { start: "2024-03-01", end: "2024-09-15" },
    fullName: "NaenunN",
    domain: "Pixelro / Commerce",
    period: "2024.03 - 2024.09",
    tasks: [
      "Led design and development as project lead — ran a developer/QA task force and aligned requirements with the client",
      "Designed the data flow and server sequences between frontend and backend, and reviewed technical risks",
      "Shipped separate iOS and Android apps as a WebView-based cross-platform app over a React web app — led builds and releases for store review",
      "Designed integrations with external APIs, including payment and delivery",
      "Designed the operations admin — a central admin separated from per-store screens for each optician",
      "In commercial operation (https://nenoonn.mycafe24.com/)",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, Java, AWS, Android, iOS"),
    caseStudy: {
      problem:
        "Selling contact lenses online had not been allowed, so we had to build a service that didn't yet exist in Korea from scratch, together with a company granted a regulatory sandbox exemption. Users expected to access it on multiple platforms, including mobile.",
      decisions: [
        "Wrapped one web app in WebView-based apps for iOS and Android — three platforms with a small team",
        "Designed the payment/delivery API integrations and the frontend–backend data flow and sequences first, reviewing technical risks before development",
        "Split the admin into a central console and per-store screens, so headquarters and each optician manage only what they need",
      ],
      outcome: {
        label: "Outcome",
        text: "Launched Korea's first online contact lens purchase and delivery service and ran it commercially. ([nenoonn.mycafe24.com](https://nenoonn.mycafe24.com/))",
      },
    },
  },
  {
    slug: "gis-s-dcis",
    summary: "GIS-based data center information system, co-developed with Yeonwoo Technology and delivered (B2B)",
    name: "GIS S-DCIS",
    client: "Samsung C&T",
    duty: "Project Leader",
    keywords: list("GIS, Data Center, B2B"),
    notionDate: { start: "2023-12-01", end: "2024-08-15" },
    fullName: "GIS S-DCIS",
    domain: "Samsung C&T / Construction",
    period: "2023.12 - 2024.08",
    tasks: [
      "Worked on developing 'GIS S-DCIS', a GIS-based information system for Samsung data centers",
      "Led the development task force as development PM",
      "Communicated and collaborated with the planning team, business team and a partner company's research team",
      "Built a spatial function server and DB with GeoServer and PostGIS",
      "Researched OpenLayers open-source technology to build a map platform on GIS data",
      "Handled public data use and policy issues",
      "Troubleshot issues in migrating source to a closed network and setting up the on-premise environment",
      "Co-developed with Yeonwoo Technology's development researchers and delivered the system",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, Java, AWS"),
    caseStudy: {
      problem:
        "A data center construction project needed a map-based information system to survey and analyze candidate sites, under the constraints of a closed network and an on-premise environment.",
      decisions: [
        "Ran it as a joint development with researchers from Yeonwoo Technology, a construction BIM solutions company",
        "Built a spatial function server and DB with GeoServer and PostGIS, and a map platform on OpenLayers",
        "Resolved issues with migrating source to the closed network and setting up the on-premise environment",
      ],
      outcome: { label: "Outcome", text: "Completed joint development as a B2B project and delivered the system." },
    },
  },
  {
    slug: "mvs",
    summary:
      "Research on a real-time multi-user sync server — used as the multiplayer server for Dr.Meta's medical staff conferences",
    name: "MVS (Metaverse Server)",
    client: "TmaxMetaAI",
    duty: "Project Leader",
    keywords: list("Server Engine, Real-time Sync, C++"),
    notionDate: { start: "2023-01-02", end: "2024-09-15" },
    fullName: "MVS (Metaverse Server)",
    domain: "TmaxMetaAI / Server engine",
    period: "2023.01 - 2024.09",
    tasks: [
      "Researched a real-time multi-user sync server for multiplayer",
      "Led the R&D team in researching and developing C++-based server engine technology",
      "Designed client libraries (JavaScript, C#)",
      "Designed the service flow",
      "Applied the research technology as the multiplayer server for [Dr.Meta](/projects/dr-meta) medical staff conferences",
    ],
    roles: ["Project Manager"],
    skills: list("Docker, Git, C++, AWS, Javascript, C#"),
    caseStudy: {
      problem:
        "For multiple users to connect to the same metaverse space at once and interact, a real-time sync server was needed.",
      decisions: [
        "Researched and developed C++-based server engine technology",
        "Designed JavaScript and C# client libraries and the service flow",
      ],
      outcome: {
        label: "Outcome",
        text: "The research technology was used inside the system as the multiplayer server for [Dr.Meta](/projects/dr-meta) medical staff conferences.",
      },
    },
  },
];

/** "2026.08 -" → "2026.08"; string order matches date order for this format. */
const periodStart = (period: string) => period.split("-")[0].trim();

/** Newest first, by the start of `period` — the order in `data` above doesn't matter. */
export const projects: Project[] = data
  .map(({ leadImages = [], ...p }) => ({
    ...p,
    images: p.images ?? [...leadImages, ...(projectImages[p.slug] ?? [])],
  }))
  .sort((a, b) => periodStart(b.period).localeCompare(periodStart(a.period)));
