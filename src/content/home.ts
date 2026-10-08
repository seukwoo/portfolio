// Home page content: the curated "argument" of the site. Full records live on /resume.
// 🟨 marks copy that is temporary until the new introduction (feedback #6) and Decision Graph (#7) are ready.
import { routes } from "@/lib/routes";
import type { HomeHero, LatestWork, LeadershipBlock, Metric, WorkStyle } from "@/types/content";

// Same thesis as the resume introduction (content/profile.ts).
export const hero: HomeHero = {
  name: "이석우",
  altName: "Seukwoo Lee",
  eyebrow: "AI Engineering Lead",
  headline: ["연구 단계의 AI를,", "돈을 내는 제품으로."],
  intro:
    "안녕하세요, 이석우입니다. 연구·시험 단계의 기술을 실제 사용자가 쓰고 돈을 내는 제품으로 만들어 왔습니다. 직접 설계하고 코드를 쓰며, 3명 개발 파트부터 50명 연구 본부까지 이끌었습니다.",
  focus:
    "최근 2년은 회사마다 'AI를 제품으로' 만드는 미션을 맡아 끝까지 마쳤습니다 — 이스트소프트에서 Alan 유료화(2025.07), 스튜디오씨드코리아에서 ProtoPie MCP 정식 출시(2026.10).",
  actions: [
    { label: "프로젝트 보기 →", href: routes.projects },
    { label: "이력서 보기", href: routes.resume },
  ],
};

/** Every number must be traceable to the resume content; `note` shows the source. */
export const metrics: Metric[] = [
  { value: "10", unit: "년차", label: "개발 경력", note: "2017.01 – 현재 · AI 제품 개발은 2025.04부터" },
  { value: "50", unit: "명", label: "최대 조직 규모", note: "R&D 연구본부장 · 티맥스에이아이 2020–2022" },
  { value: "5", unit: "개", label: "상용화 서비스 개발", note: "ProtoPie MCP · Alan · 닥터메타 · Meta.CRO · 내눈N" },
  { value: "3", unit: "회", label: "그룹사 수상", note: "기술혁신상 · Super Leader · Maestro" },
];

// "How I build": general principles for building AI products (not tied to one project), linking to the projects.
export const latestWork: LatestWork = {
  kicker: "How I build",
  title: "AI 서비스를 만드는 방식",
  summary: "PoC부터 운영까지, AI 제품을 만들 때 지키는 여섯 가지",
  layers: [
    { label: "01 / Define", value: "요구사항으로 문제·기능을 정의하고 기술 검토" },
    { label: "02 / Scope", value: "룰로 풀 수 있는 건 룰로, AI는 필요한 곳에만 투입" },
    { label: "03 / Pipeline", value: "단계를 나누고, 단계마다 맞는 모델 적용" },
    { label: "04 / Eval", value: "사람이 만든 정답 기준을 먼저 두고, 바꿀 때마다 같은 기준으로 평가" },
    { label: "05 / Verify", value: "기계가 확인할 것과 사람이 판단할 것을 나눠 검증" },
    { label: "06 / Operate", value: "비용·지연·품질을 측정하며 개선" },
  ],
  href: routes.projects,
};

/** Featured projects in display order: shipped results first (official launch, monetization), then the latest PoC. */
export const featuredProjectSlugs = ["ui-code-ai", "alan", "decision-graph", "mx-studio"];

export const leadership: LeadershipBlock[] = [
  {
    title: "조직 규모",
    points: [
      "소규모(3명) 개발 파트부터 대규모(50명) R&D 본부까지 팀 빌딩 및 리딩 — 본부장으로 CTO 공백 1년간 기술 총괄",
      "현재 4~5명 애자일 팀 운영 — 빠른 의사결정과 유연한 실행",
      "팀원과 리더의 평가를 직접 맡으며, 주고받은 피드백으로 '좋은 리더'의 기준과 리딩 방식을 계속 다듬어 옴",
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
      "무료→유료 전환 시 추론 원가·전환율 기반 가격 설계부터 약관·결제·출시까지 개발과 함께 리드",
    ],
  },
];

/** 🟨 Hidden until written (feedback #6, #19). Set to an object to show the section. */
export const workStyle: WorkStyle | null = null;
