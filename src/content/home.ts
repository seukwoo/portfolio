// Home page content: the curated "argument" of the site. Full records live on /resume.
// 🟨 marks copy that is temporary until the new introduction (feedback #6) and Decision Graph (#7) are ready.
import { routes } from "@/lib/routes";
import type { HomeHero, LatestWork, LeadershipBlock, Metric, WorkStyle } from "@/types/content";

// Same thesis as the resume introduction (content/profile.ts).
export const hero: HomeHero = {
  name: "이석우",
  nameEn: "Seukwoo Lee",
  eyebrow: "Development Team Leader · Software & AI Engineer",
  headline: ["10년차 개발 리더,", "프로젝트 초기부터 상용화까지."],
  intro:
    "안녕하세요, 이석우입니다. 연구·시험 단계의 기술을 실제 사용자가 쓰고 돈을 내는 제품으로 만들어 왔습니다. 직접 설계하고 코드를 쓰며, 3명 개발 파트부터 50명 연구 본부까지 이끌었습니다.",
  focus:
    "최근에는 직접 개발한 코어 파이프라인(PoC)을 팀과 함께 제품화해 2026년 10월 ProtoPie MCP로 정식 출시했습니다.",
  actions: [
    { label: "프로젝트 보기 →", href: routes.projects },
    { label: "이력서 보기", href: routes.resume },
  ],
};

/** Every number must be traceable to the resume content; `note` shows the source. */
export const metrics: Metric[] = [
  { value: "10", unit: "년차", label: "Software & AI Engineer", note: "2017.01 – 현재" },
  { value: "50", unit: "명", label: "최대 조직 규모", note: "연구 본부 팀 빌딩 및 리딩" },
  { value: "5", unit: "개", label: "상용화 서비스 개발", note: "ProtoPie MCP · Alan · 닥터메타 · Meta.CRO · 내눈N" },
  { value: "3", unit: "회", label: "그룹사 수상", note: "기술혁신상 · Super Leader · Maestro" },
];

// 🟨 Temporary: current main project. Swap to Decision Graph once its details are ready.
// Confidential (current employer): describe the flow only — no model names, tools or pipeline specifics.
export const latestWork: LatestWork = {
  kicker: "Recently shipped",
  title: "AI 기반 코드 생성 시스템",
  summary: "PoC부터 정식 출시까지 — [ProtoPie MCP ↗](https://www.protopie.io/blog/protopie-mcp-official) (2026.10)",
  layers: [
    { label: "01 / Data", value: "사내에 축적된 디자인 데이터" },
    { label: "02 / Model", value: "이미지·레이아웃(구조) 이해 모델 학습" },
    { label: "03 / Pipeline", value: "룰 기반 모듈 + AI 모델 단계 결합" },
    { label: "04 / Output", value: "React · Flutter · SwiftUI 등 7개 프레임워크 코드" },
  ],
  footnote: "스튜디오씨드코리아 · 2026.01 – 2026.10",
  href: routes.project("ui-code-ai"),
};

/** Which projects are featured; they're shown newest first (by period), not in this order. */
export const featuredProjectSlugs = ["decision-graph", "ui-code-ai", "alan", "mx-studio"];

export const leadership: LeadershipBlock[] = [
  {
    title: "조직 규모",
    points: [
      "소규모(3명) 개발 파트부터 대규모(50명) 연구 본부까지 팀 빌딩 및 리딩",
      "현재 4~5명 애자일 팀 운영 — 빠른 의사결정과 유연한 실행",
    ],
  },
  {
    title: "의사결정 · 작게 만들고 빠르게 검증",
    points: [
      "짧은 주기로 만들고 확인하며 방향을 조정하는 애자일 방식으로 팀 운영",
      "프로토타입과 베타 테스트로 반응을 먼저 확인한 뒤 확장 (MX Studio 외부 베타, 닥터메타 내부 베타)",
    ],
  },
  {
    title: "우선순위 · 사용자 데이터와 사업 지표로",
    points: [
      "Google Analytics · Amplitude로 트래픽 흐름과 기능별 사용률을 보고 개발 우선순위 결정",
      "무료→유료 전환 시 가격·약관·환불 정책까지 개발과 함께 설계",
    ],
  },
];

/** 🟨 Hidden until written (feedback #6, #19). Set to an object to show the section. */
export const workStyle: WorkStyle | null = null;
