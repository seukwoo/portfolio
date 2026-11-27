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
      "[Lead] Ran an agile team of 4–5 AI engineers and app developers — model training by the AI engineers, integration development with the team",
      "[Lead] Designed the MLOps pipeline from data cleaning → training → deployment",
      "[Lead] Expanded to cross-platform component code generation for AOS, iOS and Web; official launch as [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official) in October 2026",
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
      "[Lead] As PO, led a service in trial operation at the research org through commercial launch and monetization",
      "[Lead] Ran the AI researcher and app developer (FE, BE) team — feature planning, schedules and risk management",
      "[Lead] Architected the Azure, FastAPI, React and LangGraph stack; ran separate Dev, QA, Stage and Release servers",
      "[Lead] Built image search, YouTube search & summary and report generation features, plus specialized agents, in-house",
      "[Hands-on] Planned the slide generation feature — benchmarked Genspark and other services, defined user scenarios and the generation flow",
      "[Hands-on] Designed the slide generation agent — staged orchestration (intent → scope and outline → research → template, style and fonts → HTML rendering → revision), with human-in-the-loop review of intermediate results",
      "[Hands-on] Planned the monetization of an AI service — modeled margin from inference cost per call and set the Pro plan's price and usage limits from competitor pricing and expected paid conversion",
      "[Lead] Paid launch — plan entitlements, payment, cancellation and refund flows, revised terms and paid-conversion notices (2025.07, [announcement](https://estsoft.ai/all/250707))",
      "[Collab] Ran quality testing with in-house QA, auth, payments and infra teams; prepared the launch announcement with marketing and business",
      "[Lead] Shipped the deep research and slide generation services; patch notes and back-office operations tool",
      "In commercial operation ([myalan.ai](https://myalan.ai/))",
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
      "[Hands-on] Turned PO requirements into a technical spec and validated technical feasibility with a PoC — new product exploration",
      "[Hands-on] Designed and developed, solo, an LLM pipeline that extracts who decided what and why from Slack and Notion, with quoted source evidence",
      "[Hands-on] Visualized extracted decisions automatically as a relation map and timeline — prerequisite, replacement and stop relations linked by the system, with each decision linking straight to its source text",
      "[Hands-on] Validated the PoC against a golden set where people manually marked the correct decisions (and evidence) in the conversations of one real project from the past year — extracted 80%+ of the human-labeled decisions",
      "[Hands-on] Verified and reviewed the technical risks raised during the PoC myself (e.g. judging quality against human-made ground truth, one-way recording from source → decision → document, preventing duplicate entries on re-runs)",
      "[Hands-on] Designed a multi-stage pipeline: split into analysis units → first-pass classification (lightweight model) → decision extraction → evidence verification (code + model) → duplicate and relationship analysis",
      "[Hands-on] Two-tier inference — compared models on the same data and the same tests, then chose a lightweight model for first-pass classification and a high-capability model for extraction and verification",
      "[Hands-on] Logged latency, queue time, retries, cache hits, tokens and cost per request to find bottlenecks and optimize the call structure",
      "[Hands-on] Implemented a content-hash cache, incremental runs (re-processing only what changed), batching by conversation and thread, sentence-number citations, and a scheduler that overlaps stages",
      "[Hands-on] Used 24 test cases with known correct answers to check that quality didn't drop with every prompt or model change (with a cap on evaluation cost)",
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
    slug: "harmonyos-player",
    summary: "Built and launched a new HarmonyOS app from the existing Android app — a PO plus one developer in two months, rewriting the engine, renderer and UI with spec-driven development and AI agents",
    name: "ProtoPie Player (HarmonyOS)",
    client: "Studio XID",
    duty: "Product Owner",
    keywords: list("Mobile App, Platform Porting, Spec-Driven Development"),
    notionDate: { start: "2026-06-01", end: "2026-08-05" },
    fullName: "ProtoPie Player for HarmonyOS (Huawei AppGallery)",
    domain: "Studio XID / Prototype player app",
    period: "2026.06 - 2026.08",
    tasks: [
      "[Lead] Led a new-platform launch as PO — a two-person team with one developer; I owned everything but coding: spec, planning, verification, scope and release",
      "[Hands-on] Judged the port feasible: the existing Android app has the same functional spec, so it could be rebuilt in a different language",
      "[Hands-on] Spec-driven development — wrote the Android app's behavior as specs and acceptance criteria for the engine, renderer and UI (all three rewritten in the new language)",
      "[Lead] AI agent workflow — Claude Code for planning and verification, Codex for coding, agent teams running parallel development and verification in loops",
      "[Lead] Traced HarmonyOS APIs the models knew poorly via search; where official docs or libraries were wrong, tested directly and built fixes",
      "[Hands-on] Scope call — shipped every MVP feature and deferred optional native features such as USB connection to launch on schedule",
      "Launched on Huawei AppGallery in August 2026 ([announcement](https://www.protopie.io/blog/protopie-player-harmonyos-appgallery))",
    ],
    roles: ["Product Owner"],
    skills: list("HarmonyOS, ArkTS, Claude Code, Codex, Spec-Driven Development"),
    images: [
      { src: "/projects/harmonyos-player/overview-en.webp", width: 1600, height: 900, caption: "Overview — port the spec, not the code: the PO sets the spec, acceptance and scope, and AI agents rewrite the engine, renderer and UI for HarmonyOS (ArkTS). Two people, two months, every MVP feature shipped" },
      { src: "/projects/harmonyos-player/launch.webp", width: 1920, height: 1077 },
      { src: "/projects/harmonyos-player/store-01.webp", width: 900, height: 1600 },
      { src: "/projects/harmonyos-player/store-02.webp", width: 900, height: 1600 },
    ],
    caseStudy: {
      problem:
        "ProtoPie Player was only on iOS and Android, so prototypes could not run on Huawei (HarmonyOS) devices. HarmonyOS uses a different language and UI framework, so the engine, renderer and UI all had to be rewritten — with just me as PO and one developer.",
      decisions: [
        "Port the spec, not the code — wrote the Android app's behavior as specs and acceptance criteria, and had the implementation follow them",
        "Split the work: Claude Code for planning and verification, Codex for coding, and agent teams running parallel development and verification in loops",
        "Traced HarmonyOS APIs the models knew poorly via search; where official docs or libraries were wrong, tested directly and built fixes",
        "Shipped every MVP feature and deferred optional features that depend on native libraries, such as USB connection, to launch on schedule",
      ],
      outcome: {
        label: "Outcome",
        text: "Launched ProtoPie Player 1.0 for HarmonyOS on Huawei AppGallery in two months (2026.08). It supports complex gestures, animations and interaction logic, plus device sensors such as the gyroscope and haptics. ([announcement](https://www.protopie.io/blog/protopie-player-harmonyos-appgallery))",
      },
    },
  },
  {
    slug: "bite-engine",
    punchline: ["One engine that draws", "the same on web and phones"],
    summary: "A general-purpose Rust game engine, independent of any app — wgpu gives the same result on web (WebGPU, WebGL2), Android (Vulkan) and macOS (Metal), with a 3D frame in 3.6 ms on a phone (personal project)",
    name: "Bite engine (Rust)",
    client: "Personal project",
    duty: "Design & development",
    keywords: list("Game Engine, Rust, Renderer"),
    notionDate: { start: "2026-10-16" },
    fullName: "Bite — Rust runtime, layout and renderer (wgpu)",
    domain: "Personal project / General-purpose game engine (independent of apps and content)",
    period: "2026.10 -",
    tasks: [
      "[Hands-on] Engine architecture — runtime, layout and renderer in Rust as a standalone engine; apps connect only through a host API, with no dependency on app or content code",
      "[Hands-on] Cross-platform — one wgpu layer for web (WASM: WebGPU, WebGL2), Android native (Vulkan, GLES as fallback), macOS native (Metal), and iPhone via Safari WebGL2",
      "[Hands-on] Renderer — wgpu on the GPU, a WebGL2 path for browsers without compute shaders (like KakaoTalk's in-app browser), and a 2D renderer (Vello-based vs glyphon) chosen by drawing the same scenes side by side",
      "[Hands-on] 3D, ballistics, particles, motion, text and SVG as separate crates, so the default web build stays under 600 KB",
      "[Hands-on] Determinism checks — the same input gives the same frame and shot hashes across versions, with a playground and baseline images against the previous JS engine",
      "[Hands-on] Performance — reusing GPU pipelines across holes cut shader compiles from 20–50 per hole to 0; reusing shadows while aiming cut driver re-renders from 100 to 1",
      "[Hands-on] Measured on phones — a 3D golf scene takes 3.6 ms per frame on a Galaxy S24 Ultra (about 1/5 of the 16.7 ms budget at 60 fps), 0 frames over 25 ms, first screen in about 0.7 s",
      "First user: [PlaySnack](https://playsnack.app)'s [golf game](https://playsnack.app/games/golf/) runs on it in production (latest v2.24)",
    ],
    roles: ["Design & development"],
    skills: list("Rust, wgpu, WebGPU, WebGL2, Vulkan, Metal, WebAssembly"),
    images: [
      { src: "/projects/bite-engine/overview-en.webp", width: 1600, height: 900, caption: "Engine stack — from graphics APIs (WebGPU, WebGL2, Vulkan, Metal) through wgpu, the Rust core and the host API up to apps. The engine knows no app; a 3D frame takes 3.6 ms on a phone; the default web build is 600 KB" },
      { src: "/projects/bite-engine/diorama.webp", width: 640, height: 480, caption: "3D rendering — models on terrain with shadows and a water surface (WebGPU)" },
      { src: "/projects/bite-engine/glass.webp", width: 640, height: 480, caption: "Materials — overlapping translucent glass blending and shadows (WebGPU)" },
      { src: "/projects/bite-engine/course.webp", width: 900, height: 600, caption: "Terrain surfaces — fairway mowing, bunkers, water and rough drawn per surface and used in how the ball rolls and bounces" },
      { src: "/projects/bite-engine/ballflight.webp", width: 640, height: 480, caption: "Ball flight — flight and landing with wind and spin" },
      { src: "/projects/bite-engine/camera-avoid.webp", width: 872, height: 900, caption: "Camera occlusion avoidance — before (left): a tree trunk hides the ball / after (right): the camera moves aside early and the ball stays visible" },
      { src: "/projects/bite-engine/rust-vs-legacy.webp", width: 1470, height: 780, caption: "Same screen as the old JS engine — the same app drawn by the Rust and the old engine, checked to land on the same device pixels (iOS simulator)" },
    ],
    cardImage: { src: "/projects/bite-engine/card.webp", width: 1200, height: 750 },
    caseStudy: {
      problem:
        "Web game engines struggle with heavy 3D on phones and in-app browsers, and native engines are heavy on the web. The goal was an engine tied to no app that gives the same result, lightly, on the web and on phones.",
      decisions: [
        "Independent of apps — the engine knows nothing about apps or content; apps use it only through a public host API",
        "One engine, many platforms — a Rust core built for web, Android and macOS; wgpu on the GPU with a WebGL2 path",
        "Choose by the same picture, not by feel — 2D renderer candidates drew the same scenes side by side",
        "Deterministic runs — the same input gives the same frames and shot results; hashes catch regressions between versions",
        "Features as modules — 3D, ballistics, particles and more only when needed, with a size gate on the default web build",
      ],
      outcome: {
        label: "Outcome",
        text: "A 3D frame takes 3.6 ms on a real phone, about 1/5 of the 60 fps budget, and the first user, PlaySnack's golf game, runs on the engine in production. Shader compiles on hole changes went to 0 and re-renders while aiming from 100 to 1. The engine is at v2.24. ([golf game](https://playsnack.app/games/golf/))",
        note: "Private repository.",
      },
    },
  },
  {
    slug: "playsnack",
    summary: "Party games where an AI chat opens the room over MCP and everyone joins by link or QR, with a paid pass for event hosts — the main game is 3D golf, and an iPhone camera measures a real swing so that shot plays the round — the Real Swing mode is in closed beta (personal project)",
    name: "PlaySnack",
    client: "Personal project",
    duty: "Planning, design & development",
    keywords: list("MCP, Multiplayer, Social Games"),
    notionDate: { start: "2026-10-07" },
    fullName: "PlaySnack · play a round with friends, right now",
    domain: "Personal project / Social game service",
    period: "2026.10 -",
    tasks: [
      "[Hands-on] Service planning and development — games, quizzes, polls and brackets as JSON app documents, played live by everyone who opens the link ([playsnack.app](https://playsnack.app))",
      "[Hands-on] AI-native — a PlaySnack MCP server (four tools: recommend, list, rules, open a friend room) lets Claude or ChatGPT open a room from one sentence and returns one link and a QR page. No login or personal data; the server opens polls and wheels only after the user approves",
      "[Hands-on] Join by QR or link — no install or sign-up, each phone in its browser, the first to open becomes host (friend rooms up to 10)",
      "[Hands-on] Event host features — an event such as a year-end party or workshop holds up to 200 people in one room, the host manages the room (PIN and more), and the event pass (US$49 a day, for as many days as needed) went live for payment in Nov 2026",
      "[Hands-on] Host-run multiplayer — the host's device runs the game and tallies, and the server only relays messages, so more rooms add little server load and a failure stays small",
      "[Hands-on] A format that defines games as JSON documents — running them and 3D rendering are handled by my own [Bite engine](/projects/bite-engine)",
      "[Hands-on] [3D golf game](https://playsnack.app/games/golf/) — two golf clubs and up to 18 holes, wind, slopes and per-club ball flight, and a mode to play together",
      "[Hands-on] Real-swing measuring app Snack Golf (iOS) — an iPhone behind the ball films at 240 fps and 1/2000 s exposure, measuring ball speed, launch angle, direction and carry with no launch monitor",
      "[Hands-on] Measurement core (Rust) — tracks the ball from behind the addressing club through flicker and dim flight; instead of estimating a 3D position per frame, fits a ball-flight model with gravity, drag and lift to every frame's 2D observation (ball center and motion-streak width), with the impact sound pinning the moment of contact",
      "[Hands-on] The same video gives the same shot on the phone and on a Mac; implausible values are dropped, with a quiet retry when the club head covers the ball",
      "[Hands-on] Real Swing mode (closed beta) — pairs the phone with the game by QR, receives game state over WebSocket (SSE as fallback) to show each turn's recommended club and target, sends the measured shot (with a club code) into the game so a real swing plays the round, and reads the result aloud 2–3 s later",
      "[Hands-on] Moved motion onto [nudg](/projects/nudg) — 49% → 89% in one pull request",
      "[Hands-on] Built with AI agents, verified by automated gates — scenario tests, multi-client simulation and checks on real phones",
    ],
    roles: ["Planning, design & development"],
    skills: list("TypeScript, Rust, Swift, Cloudflare, WebSocket"),
    images: [
      { src: "/projects/playsnack/overview-en.webp", width: 1600, height: 900, caption: "AI-native design — an AI chat opens a room through MCP tools and gets one link and a QR; everyone joins in their phone browser. The host phone runs the game; the server only relays" },
      { src: "/projects/playsnack/ai-connect.webp", width: 780, height: 1688, caption: "Open games with AI — add one address (playsnack.app/mcp) to Claude or ChatGPT; no login or key" },
      { src: "/projects/playsnack/qr-join.webp", width: 780, height: 1688, caption: "The QR page of a room opened over MCP — people in the same place scan it and join" },
      { src: "/projects/playsnack/room-lobby.webp", width: 780, height: 1688, caption: "A friend room gathered from one link — the first to open is host, up to 10, the host starts" },
      { src: "/projects/playsnack/horse-in.webp", width: 780, height: 1688, caption: "Horse race together — a live race that speeds up as you tap, run by the host phone" },
      { src: "/projects/playsnack/golf-3d.webp", width: 780, height: 1688, caption: "The main game, 3D golf — rendered by the Bite engine, wind, slopes and per-club flight, Real Swing mode in closed beta" },
      { src: "/projects/playsnack/pricing.webp", width: 780, height: 1688, caption: "An event pass for hosts — US$49 a day, up to 200 people in one room" },
      { src: "/projects/playsnack/home.webp", width: 780, height: 1688, caption: "Home — quizzes with fresh questions on a timer, and party games" },
    ],
    caseStudy: {
      problem:
        "Games to play together at a gathering or event usually need an install or sign-up, and event hosts needed a way to bring tens to hundreds of people in at once. Golf games tied to a real swing also need expensive measuring gear.",
      decisions: [
        "One link, together — no install or sign-up; everyone who opens the link plays live, and a host opens and runs an event",
        "A thin server — the host's device runs the game; the server only relays",
        "Games as documents — apps are JSON documents, easy for AI to make and edit",
        "An iPhone instead of a launch monitor — fit a ball-flight model to the whole 240 fps video, link it to the game live, and let that shot play the round",
      ],
      outcome: {
        label: "Status",
        text: "Live at playsnack.app, selling an event pass to event hosts; the main game is 3D golf. The Real Swing mode, which links the Snack Golf measuring app so a real swing plays the round, is in closed beta. ([playsnack.app](https://playsnack.app))",
      },
    },
  },
  {
    slug: "nudg",
    summary: "A UI interaction format AI coding tools can edit — motion, sound, haptics and particles in one JSON file, played the same on web, iOS and Android. Published on npm and listed on the official MCP Registry (MIT open source)",
    punchline: ["An interaction format", "your AI can edit"],
    name: "nudg",
    client: "Personal project",
    duty: "Design & development (solo)",
    keywords: list("Interaction Format, AI-native Tooling, Cross-platform Runtime"),
    notionDate: { start: "2026-10-13" },
    fullName: "nudg — The interaction format your AI can nudge",
    domain: "Personal project / Open source (MIT)",
    period: "2026.10 -",
    tasks: [
      "[Hands-on] Format design — states, events and motion in plain JSON, so \"a little bouncier\" becomes a one-field diff (bounce 0.25 → 0.6)",
      "[Hands-on] Spec-first, multi-platform runtimes — the TypeScript reference and Swift (SwiftUI) and Kotlin (Jetpack Compose) runtimes play the same file the same way, passing a language-neutral conformance suite 32/32",
      "[Hands-on] Grew what it can express — springs and tweens, plus sound and haptic cues, particles, shadow and blur, and gestures (format now at 1.9)",
      "[Hands-on] Migration tools — from-css moves a CSS animation into a nudg file and writes it only when both agree within 0.5 px at 60 points; audit reports how much of an app's motion is on nudg and what replaces the rest",
      "[Hands-on] Tools for an AI to check its own work — a CLI and MCP server for validation, values over time, motion graphs, real frames and before/after comparison (nudg_compare)",
      "[Hands-on] React, Vite and React Native integration; SwiftUI and Material 3 motion shipped as libraries in the same format",
      "[Hands-on] Case study — [PlaySnack](https://playsnack.app) (a party-game web app) moved its motion in one pull request: 49% → 89% on nudg, 36 of 42 CSS keyframes converted with proof, all 1,410 app tests passing",
      "Shipped — npm [@nudg/core](https://www.npmjs.com/package/@nudg/core) 1.15.0 (37 versions since going public), listed on the [official MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.seukwoo/nudg) as io.github.seukwoo/nudg and picked up by a third-party MCP catalog (The Gilde), [live demo](https://seukwoo.github.io/nudg/demo/) with 53 examples",
    ],
    roles: ["Design & development (solo)"],
    skills: list("TypeScript, Swift, Kotlin, React, JSON Schema, MCP, Claude Code"),
    images: [
      { src: "/projects/nudg/teaser-poster.webp", video: "/projects/nudg/teaser.mp4", width: 1280, height: 720, caption: "Teaser (1 min) — \"bouncier\" changes one value, before and after side by side, and it running in a real app (PlaySnack)" },
      { src: "/projects/nudg/live-demo.webp", width: 1440, height: 1000, caption: "The live demo — 53 examples, each one JSON file. Web, React, SwiftUI and Jetpack Compose read the same file and pass a shared conformance suite, 32/32" },
      { src: "/projects/nudg/plot.webp", width: 1520, height: 748, caption: "A motion graph from nudg plot — people and multimodal models check the motion on the same graph" },
      { src: "/projects/nudg/frames.webp", width: 1264, height: 266, caption: "Real frames from nudg render — the like heart popping and settling back" },
      { src: "/projects/nudg/validator.webp", width: 1048, height: 690, caption: "A typo gets its location and a fix hint — so an AI corrects itself" },
    ],
    cardImage: { src: "/projects/nudg/card.webp", width: 1200, height: 750 },
    caseStudy: {
      problem:
        "Interactive animations usually live in binary files made in dedicated tools, so AI coding tools can't read or edit them, and there's no code review or readable history. Each platform implements them separately, so motion drifts between web, iOS and Android.",
      decisions: [
        "One plain JSON file — every platform already parses it, JSON Schema describes it, and LLMs write it reliably",
        "The spec decides, not an implementation — TypeScript, Swift and Kotlin runtimes must all pass a conformance suite whose expected values are derived independently",
        "The core never draws — a deterministic core takes events and returns property values; drawing is the platform adapter's job",
        "The AI checks, a person judges — validation, simulation and frame rendering let the AI fix its edits, and before/after side by side lets a person pick",
        "Move with proof — existing CSS is converted only when the same motion is proven, and refused with a reason otherwise",
      ],
      outcome: {
        label: "Outcome",
        text: "In about six weeks since going public it has shipped 37 versions, now v1.15.0, and is listed on the official MCP Registry, so AI tools like Claude Code can connect to it directly. PlaySnack raised the share of its app motion on nudg from 49% to 89% in one pull request. ([GitHub](https://github.com/seukwoo/nudg) · [npm](https://www.npmjs.com/package/@nudg/core) · [demo](https://seukwoo.github.io/nudg/demo/))",
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
      "[Hands-on] Engine/renderer design — physics engine, real-time rendering & post-processing, 3D object events/actions, node-based visual code system",
      "[Lead] Led the MX studio engine team and a task force (planning, design, development, QA)",
      "[Lead] Built what productization needed — frontend UI/UX, backend server, auth, etc.",
      "[Lead] Developed and productized [Dr.Meta](/projects/dr-meta) and [Meta.CRO](/projects/meta-cro) on top of MX Studio",
      "[Lead] Ran an external beta test",
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
    duty: "Tech Lead (Development Division)",
    keywords: list("Healthcare, 3D Web, Metaverse"),
    notionDate: { start: "2024-06-01", end: "2025-01-31" },
    fullName: "Dr.Meta",
    domain: "Korea Smart Healthcare Association / Healthcare",
    period: "2024.06 - 2025.01",
    tasks: [
      "[Lead] Joined as Tech Lead from the development division — technical review and design, staffing and schedule estimation, development management (a separate PM ran the project)",
      "[Lead] Developed the web app using 3D web component output built with [MX Studio](/projects/mx-studio)",
      "[Lead] Designed and developed the integration between the React web app and the Unity app",
      "[Lead] Built a Three.js-based web meta space for medical staff conferences and patient communication",
      "[Lead] Provided webcam motion-capture exercise games for patients",
      "[Lead] Designed and developed the admin pages and permission features",
      "In commercial operation at cancer centers nationwide ([https://healthcare.drmeta.kr/](https://healthcare.drmeta.kr/), [https://web.drmeta.kr/](https://web.drmeta.kr/))",
    ],
    roles: ["Tech Lead", "(technical review, design, staffing/schedule estimation, development management)"],
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
        note: "Joined as Tech Lead from the development division (a separate PM ran the project).",
      },
    },
  },
  {
    slug: "meta-cro",
    summary: "3D-based virtual simulation training platform for clinical trials (in commercial operation)",
    name: "Meta CRO",
    client: "Korea Smart Healthcare Association",
    duty: "Tech Lead (Development Division)",
    keywords: list("Healthcare, 3D Simulation, Education"),
    notionDate: { start: "2023-06-01", end: "2025-01-31" },
    fullName: "Meta.CRO",
    domain: "Korea Smart Healthcare Association / Healthcare",
    period: "2023.06 - 2025.01",
    tasks: [
      "[Lead] Joined as Tech Lead from the development division — technical review and design, staffing and schedule estimation, development management (a separate PM ran the project)",
      "[Lead] Designed the web app architecture on 3D web component output built with [MX Studio](/projects/mx-studio)",
      "[Lead] Deployed Unity VR training content via WebGL and integrated it into the web app",
      "[Lead] Designed and published a 3D render engine library (set up a private npm environment)",
      "In commercial operation at cancer centers nationwide",
    ],
    roles: ["Tech Lead", "(technical review, design, staffing/schedule estimation, development management)"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, AWS"),
    caseStudy: {
      problem:
        "Clinical trial procedures are hard to learn before experiencing them firsthand, and existing training materials had their limits. Practicing in a 3D virtual simulation first could raise training quality while cutting cost and trial and error.",
      decisions: [
        "Built clinical trial virtual simulation (VR) content in Unity, deployed it via WebGL and integrated it into the web app",
        "Developed the web app from [MX Studio](/projects/mx-studio) 3D web component output",
        "Designed a 3D render engine library and published it via private npm",
      ],
      outcome: {
        label: "Outcome",
        text: "Commercialized and operated at cancer centers nationwide.",
        note: "Joined as Tech Lead from the development division (a separate PM managed the project).",
      },
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
      "[Lead] Led design and development as project lead — ran a developer/QA task force and aligned requirements with the client",
      "[Hands-on] Designed the data flow and server sequences between frontend and backend (with the team), and reviewed technical risks",
      "[Hands-on] Designed integrations with external APIs, including payment and delivery",
      "[Hands-on] Designed the operations admin — a central admin separated from per-store screens for each optician",
      "[Lead] Shipped separate iOS and Android apps as a WebView-based cross-platform app over a React web app — builds and releases for store review",
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
      "[Lead] Led the development task force as development PM",
      "[Lead] Built a spatial function server and DB with GeoServer and PostGIS",
      "[Lead] Researched OpenLayers open-source technology to build a map platform on GIS data",
      "[Lead] Handled public data use and policy issues; troubleshot the closed-network source migration and on-premise setup",
      "[Collab] Worked with the planning, business and a partner company's research teams; co-developed and delivered with Yeonwoo Technology's researchers",
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
    duty: "Tech Lead (Development Division)",
    keywords: list("Server Engine, Real-time Sync, C++"),
    notionDate: { start: "2023-01-02", end: "2024-09-15" },
    fullName: "MVS (Metaverse Server)",
    domain: "TmaxMetaAI / Server engine",
    period: "2023.01 - 2024.09",
    tasks: [
      "[Lead] Joined the real-time multi-user sync server research as Tech Lead from the development division — technical review and design, staffing and schedule estimation, development management",
      "[Lead] Technical review and design of the C++-based server engine",
      "[Lead] Designed the client libraries (JavaScript, C#) and the service flow",
      "Applied the research technology as the multiplayer server for [Dr.Meta](/projects/dr-meta) medical staff conferences",
    ],
    roles: ["Tech Lead", "(technical review, design, staffing/schedule estimation, development management)"],
    skills: list("Docker, Git, C++, AWS, Javascript, C#"),
    caseStudy: {
      problem:
        "For multiple users to connect to the same metaverse space at once and interact, a real-time sync server was needed.",
      decisions: [
        "C++ server engine technical review and design",
        "Designed JavaScript and C# client libraries and the service flow",
      ],
      outcome: {
        label: "Outcome",
        text: "The research technology was used inside the system as the multiplayer server for [Dr.Meta](/projects/dr-meta) medical staff conferences.",
        note: "Joined as Tech Lead from the development division.",
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
