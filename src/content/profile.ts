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
  "룰 기반 모듈과 AI 모델을 결합한 AI 파이프라인 설계부터,",
  "그리고 실시간 엔진·크로스 플랫폼 애플리케이션·클라우드 인프라 등",
  "폭넓은 기술 스택을 기반으로 프로젝트 초기부터 상용화까지",
  "제품 개발과 팀 리더십을 함께 수행해왔습니다.",
];

export const about: About = {
  paragraphs: [
    "연구·시험 단계의 기술을 실제 사용자가 쓰고 돈을 내는 제품으로 만드는 일을 10년째 하고 있습니다. 직접 설계하고 코드를 쓰는 엔지니어이자, 3명 개발 파트부터 50명 연구 본부까지 이끌어 본 개발 리더입니다.",
    "최근에는 Slack·Notion에 흩어진 대화에서 의사결정을 원문 근거와 함께 뽑아내는 LLM 파이프라인 Decision Graph를 만들었습니다. 실제 프로젝트 1건을 골든셋으로 80% 이상의 신뢰도를 확인했고, 한 번 실행에 드는 비용을 $10.2에서 $7.6으로 줄였습니다.",
    "그에 앞서 스튜디오씨드코리아에서는 디자인 데이터를 React·Flutter·SwiftUI 등 크로스 플랫폼 컴포넌트 코드로 바꾸는 AI 코드 생성 시스템을 만들었습니다. 룰 기반 모듈과 AI 모델 단계를 결합한 파이프라인을 설계하고 코어(PoC)를 직접 개발했고, 보조 모델의 학습 설계와 라벨링 등 학습 데이터 구축, MLOps 파이프라인까지 팀과 함께 완성해 2026년 10월 ProtoPie MCP로 정식 출시했습니다.",
    "이스트소프트에서는 연구 조직이 시험 운영하던 LLM Agent 검색 서비스 Alan의 PO로서 상용화를 이끌었습니다. RAG 기반 검색 품질 개선과 추천 로직 설계를 주도했고, 딥리서치·슬라이드 생성 기능 배포와 Pro 구독 런칭으로 유료 서비스 전환을 완성했습니다. 가격·약관·환불 정책 기획과 운영 백오피스 개발까지 직접 챙겼습니다.",
    "티맥스 그룹에서는 3D 웹 컴포넌트 저작 도구 MX Studio와 실시간 엔진·서버 개발을 이끌었고, 그 산출물로 만든 닥터메타·Meta.CRO를 전국 암센터에서 상용 운영했습니다. 국내 첫 콘택트렌즈 온라인 구매·배송 서비스 내눈N도 이때 출시했습니다.",
    "AWS·Azure 위의 AI 서비스 아키텍처부터 AOS·iOS·Windows·Linux·Web 배포까지 직접 다룰 수 있어, 기술 선택을 일정·비용·운영 관점에서 함께 판단합니다. 우선순위는 Google Analytics·Amplitude로 본 사용자 데이터와 사업 지표로 정하고, 지금은 4~5명 애자일 팀에서 작게 만들고 빠르게 검증하는 방식으로 일합니다.",
  ],
  strengthsTitle: "강점 요약",
  strengths: [
    {
      title: "AI 시스템 설계 및 구현 역량",
      description:
        "룰 기반 모듈과 AI 모델을 결합한 파이프라인 설계를 중심으로, 데이터·모델 학습·MLOps까지 AI 시스템 전 과정을 팀과 함께 구축한 경험 보유",
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

/** Generated from the /resume content by `pnpm resume:pdf` — never edited by hand. */
export const resumePdf: DocumentItem = { id: "resume", label: "이석우 이력서", href: "/docs/resume.pdf" };

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

