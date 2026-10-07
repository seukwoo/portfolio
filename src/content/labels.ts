// Fixed UI copy (buttons, field names, alt text). Components read from here instead of inlining strings.

export const labels = {
  nav: {
    home: "Home",
    openMenu: "메뉴 열기",
    closeMenu: "메뉴 닫기",
    main: "주 메뉴",
  },
  profile: {
    contact: "연락처",
    documents: "PDF",
    lastUpdated: "Last updated",
    photoAlt: (name: string) => `${name} 프로필 사진`,
  },
  resume: {
    toc: "목차",
  },
  experience: {
    department: "부서 직책",
    tenure: "재직 날짜",
    defaultProductLabel: "제품명",
    details: "세부 내용",
  },
  projects: {
    featured: "대표 프로젝트",
    more: "그 밖의 프로젝트",
    viewAll: "전체 프로젝트 보기 →",
    readCase: "자세히 보기 →",
    backToList: "← 프로젝트 목록",
    prev: "← 이전 프로젝트",
    next: "다음 프로젝트 →",
    pagerLabel: "다른 프로젝트",
    total: (count: number) => `총 ${count}개 프로젝트`,
    imageCount: (count: number) => `${count} images`,
    coverAlt: (name: string) => `${name} 대표 이미지`,
    screenshotAlt: (name: string, index: number, total: number) => `${name} 스크린샷 ${index}/${total}`,
    caseStudy: {
      title: "요약",
      problem: "문제",
      decisions: "핵심 결정",
    },
    detailsTitle: "상세",
    fields: {
      fullName: "1. 프로젝트 명",
      domain: "2. 고객사 / Domain",
      period: "3. 수행기간",
      tasks: "4. 업무 내용",
      roles: "5. 담당 역할",
      skills: "6. 보유 / 활용 Skill",
    },
  },
  home: {
    metricsLabel: "주요 지표",
    latestWorkCta: "프로젝트 보기 ↗",
  },
  contact: {
    eyebrow: "Contact",
    title: "함께 이야기 나눠요",
    description: "개발 조직 리딩, AI 제품 개발에 관한 이야기는 이메일로 편하게 연락 주세요.",
    emailButton: "이메일 보내기",
  },
  footer: {
    notion: "Notion",
    backToTop: "맨 위로 ↑",
  },
  notFound: {
    code: "404",
    title: "페이지를 찾을 수 없어요",
    home: "홈으로 돌아가기 →",
  },
};
