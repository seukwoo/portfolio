// Source: https://seukwoo.notion.site — 이석우 이력서 & 포트폴리오
// Inline links use markdown syntax `[label](url)`; see lib/rich-text.ts.
import type { About, DocumentItem, LinkItem, Profile } from "@/types/content";
import { profileImage } from "./images.generated";

export const profile: Profile = {
  nameKo: "이석우",
  nameEn: "Seukwoo Lee",
  role: "Software & AI Engineer",
  position: "Development Team Leader",
  email: "seukwoo88@gmail.com",
  photo: profileImage,
};

export const introduction: string[] = [
  "안녕하세요,",
  "10년차 Software & AI Engineer로서 개발팀을 이끌고 있는",
  "Development Team Leader입니다.",
  "딥러닝 모델 파인튜닝부터 MCP 기반 AI Agent 오케스트레이션까지,",
  "그리고 실시간 엔진·크로스 플랫폼 애플리케이션·클라우드 인프라 등",
  "폭넓은 기술 스택을 기반으로 프로젝트 초기부터 상용화까지",
  "제품 개발과 팀 리더십을 함께 수행해왔습니다.",
];

export const about: About = {
  paragraphs: [
    "10년차 Software & AI Engineer이자 Development Team Leader로서, AI 기반 서비스를 기획·개발·운영한 폭넓은 경험을 보유하고 있습니다.",
    "현재는 모바일 UI 디자인 데이터를 이용하여 크로스 플랫폼 컴포넌트 코드로 자동 변환 및 생성하는 AI 기반 코드 생성 시스템을 직접 구축했습니다. 사내 디자인 데이터 기반의 딥러닝 모델 자체 학습부터 MLOps 파이프라인 설계, AI Agent 오케스트레이션, RAG 기반 추론 품질 개선까지 AI 시스템의 전 과정을 주도적으로 수행했습니다.",
    "이전 회사에서는 LLM 기반 Agentic AI 검색엔진 서비스를 통해 자연어 처리, 사용자 행동 분석, 실시간 응답 구조를 접목한 경험을 쌓았으며, RAG 기반 검색 품질 개선과 AI 추천 로직 설계를 주도했습니다. 그 이전에는 AI 기반 3D Studio 플랫폼과 실시간 엔진/서버 개발을 이끌었습니다.",
    "클라우드 인프라(AWS, Azure) 환경에서의 AI 서비스 아키텍처 설계 및 운영 경험을 갖추고 있으며, AOS·iOS·Windows·Linux·Web 등 다양한 플랫폼에서의 크로스 플랫폼 앱 개발·배포를 통해 기술 확장성과 운영 안정성을 동시에 확보했습니다.",
    "제품 관점에서는 Google Analytics와 Amplitude를 활용해 트래픽 흐름과 기능별 사용률을 분석하며 데이터 기반 의사결정을 수행했습니다. 무료→유료 서비스 전환 과정에서 가격 정책, 약관, 환불 정책을 직접 기획하고 개발을 리드하며 비즈니스 전략 수립과 마일스톤 정의까지 담당했습니다.",
    "조직 운영 측면에서는 소규모(3명) 개발 파트부터 대규모(50명) 연구 본부까지 다양한 규모의 팀 빌딩 및 리딩 경험을 보유하고 있습니다. 현재는 4~5명의 애자일 팀을 운영하며 빠른 의사결정과 유연한 실행을 중심으로 개발 문화를 만들어가고 있습니다.",
  ],
  strengthsTitle: "강점 요약",
  strengths: [
    {
      title: "AI 시스템 설계 및 구현 역량",
      description:
        "딥러닝 모델 파인튜닝, MLOps 파이프라인, MCP 기반 AI Agent 오케스트레이션까지 AI 시스템 전 과정을 직접 설계·구현한 경험 보유",
    },
    {
      title: "전략적 사고와 실행력",
      description: "AI 기술 기반의 서비스 전략 수립부터 실제 제품 출시까지, 기획과 개발을 함께 이끄는 End-to-end 실행 경험",
    },
    {
      title: "데이터 기반 의사결정 역량",
      description: "GA, Amplitude 등 분석 도구를 활용한 사용자 행동 분석 및 기능 개선",
    },
    {
      title: "제품화 중심의 실용적 리더십",
      description: "유료 전환, 정책 설계, 마일스톤 정의 등 비즈니스 관점의 제품 운영 경험",
    },
    {
      title: "유연한 조직 리딩과 협업 능력",
      description:
        "4~5명 애자일 팀 운영부터 50명 규모 연구 본부까지, 다양한 부서와의 협업을 통해 복잡한 과제를 실행 가능한 구조로 정리",
    },
    {
      title: "기술 확장성과 안정성 확보",
      description: "크로스 플랫폼 개발, 클라우드 인프라 설계, 실시간 서버 운영 등 폭넓은 기술 기반 확보",
    },
  ],
};

export const documents: DocumentItem[] = [
  { id: "resume", label: "이석우 이력서", href: "/docs/resume.pdf" },
  { id: "portfolio", label: "포트폴리오_이석우", href: "/docs/portfolio.pdf" },
  { id: "career-presentation", label: "경력소개PT_이석우", href: "/docs/career-presentation.pdf" },
  { id: "career-description", label: "경력기술서_이석우", href: "/docs/career-description.pdf" },
  { id: "research-introduction", label: "학_석사 연구소개_이석우", href: "/docs/research-introduction.pdf" },
  { id: "masters-thesis", label: "석사논문_이석우", href: "/docs/masters-thesis.pdf" },
];

export const socialLinks: LinkItem[] = [
  {
    label: "리멤버 (Remember)",
    href: "https://connect.rememberapp.co.kr/profile/2472858?internal_path=rc_connect_search_list",
  },
  { label: "링크드인 (LinkedIn)", href: "http://www.linkedin.com/in/seuk-woo-lee-ko" },
  {
    label: "원티드 (Wanted)",
    href: "https://social.wanted.co.kr/community/profile/RyqwZkEfbfdxg4YXLHBPHD?utm_source=wanted&utm_medium=share",
  },
];

