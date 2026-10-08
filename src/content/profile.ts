// Source: https://seukwoo.notion.site — 이석우 이력서 & 포트폴리오
// Inline links use markdown syntax `[label](url)`; see lib/rich-text.ts.
import type { About, DocumentItem, LinkItem, Profile } from "@/types/content";
import { profileImage } from "./images.generated";

export const profile: Profile = {
  name: "이석우",
  altName: "Seukwoo Lee",
  role: "10년차 개발 리더",
  position: "AI Engineering Lead",
  email: "seukwoo88@gmail.com",
  photo: profileImage,
};

export const introduction: string[] = [
  "연구·시험 단계의 기술을 실제 사용자가 쓰고 돈을 내는 제품으로 만드는",
  "10년차 개발 리더입니다.",
  "직접 설계하고 코드를 쓰며, 3명 개발 파트부터 50명 연구 본부까지 이끌었습니다.",
];

/** Each competency is a claim plus evidence; the full history lives in experiences. */
export const about: About = {
  competencies: [
    {
      title: "시험 단계의 기술을 상용 제품으로",
      evidence: [
        "연구 조직이 시험 운영하던 LLM 서비스 [Alan](/projects/alan)을 Pro 구독(2025.07)으로 전환해 첫 유료 매출(수치 비공개)을 만들고 엔터프라이즈 상품 기획까지",
        "3D 웹 컴포넌트 도구 [MX Studio](/projects/mx-studio)의 산출물로 [닥터메타](/projects/dr-meta)·[Meta.CRO](/projects/meta-cro)를 만들어 전국 암센터에서 상용 운영",
      ],
    },
    {
      title: "AI 시스템을 직접 설계하고 코드로 증명",
      evidence: [
        "룰 기반 모듈과 AI 모델을 결합한 코드 생성 파이프라인을 설계하고 코어(PoC)를 직접 개발 → 팀과 함께 2026년 10월 [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official)로 정식 출시",
        "의사결정 추출 LLM 파이프라인 [Decision Graph](/projects/decision-graph)를 1인 설계·개발 — 사람이 만든 골든셋 기준 정답 결정의 80% 이상 추출",
      ],
    },
    {
      title: "감이 아니라 측정으로 결정",
      evidence: [
        "모델 선택은 테스트로 — 경량 모델 전환안은 테스트 24건 중 17건만 통과해 기각, 호출 구조를 고쳐 호출 74%·비용 25% 절감",
        "Google Analytics·Amplitude로 트래픽 흐름과 기능별 사용률을 보고 개발 우선순위 결정",
      ],
    },
    {
      title: "팀 규모에 맞춘 리딩",
      evidence: [
        "3명 개발 파트부터 50명 R&D 본부까지 팀 빌딩·리딩 — 본부장으로 CTO 공백 1년간 기술 총괄, 그룹사 수상 3회",
        "AI 엔지니어·앱 개발자 4~5명 애자일 팀 운영 — 작게 만들고 빠르게 검증",
      ],
    },
  ],
};

/** Generated from the /resume content by `pnpm resume:pdf` — never edited by hand. */
export const resumePdf: DocumentItem = { id: "resume", label: "이석우 이력서", href: "/docs/resume.pdf" };

export const socialLinks: LinkItem[] = [
  {
    label: "리멤버 (Remember)",
    href: "https://connect.rememberapp.co.kr/profile/2472858?internal_path=rc_connect_search_list",
  },
  { label: "링크드인 (LinkedIn)", href: "http://www.linkedin.com/in/seuk-woo-lee-ko" },
];

