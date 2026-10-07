// Source: Notion "프로젝트 (Project)" database — row properties + each project page body.
import type { ImageAsset, Project } from "@/types/content";
import { projectImages } from "./images.generated";

const list = (s: string) => s.split(",").map((v) => v.trim());

/**
 * `images` replaces the screenshots exported from Notion (used for confidential projects).
 * `leadImages` are added in front of them (e.g. a newer cover image) and survive `pnpm assets`.
 */
const data: (Omit<Project, "images"> & { images?: ImageAsset[]; leadImages?: ImageAsset[] })[] = [
  {
    slug: "ui-code-ai",
    summary: "디자인을 크로스 플랫폼 컴포넌트 코드로 바꿔주는 AI 시스템 — 코어 파이프라인 직접 개발, 2026.10 ProtoPie MCP로 정식 출시",
    punchline: ["디자인 데이터에서", "크로스 플랫폼 코드로"],
    name: "UI 코드 자동화 AI 시스템",
    // Confidential (current employer): model names, training pipeline and screenshots are intentionally omitted.
    client: "스튜디오씨드코리아",
    duty: "Development Team Leader",
    keywords: list("Design-to-Code, AI Pipeline, Cross-platform"),
    notionDate: { start: "2026-06-01" },
    fullName:
      "AI 기반 코드 생성 시스템 (AI-assisted Design-to-Code System for Cross-platform Components)",
    domain: "스튜디오씨드코리아 / Design & Interaction data",
    period: "2026.01 -",
    tasks: [
      "디자인 데이터를 크로스 플랫폼 컴포넌트 코드로 변환·생성하는 AI 시스템 전체 설계 및 개발 리드",
      "AI 엔지니어 및 앱 개발자로 구성된 4~5명 애자일 팀 운영",
      "사내에 축적된 디자인 데이터를 학습 데이터로 정제하는 데이터·학습 파이프라인 설계",
      "룰 기반 모듈과 AI 모델 단계를 결합한 코드 생성 파이프라인 설계 (직접 주도)",
      "이미지 기반·레이아웃(구조) 기반 입력의 코드 변환을 보조하는 모델의 학습 설계, 라벨링 등 학습 데이터 구축 (학습은 AI 엔지니어 담당)",
      "AOS·iOS·Web 크로스 플랫폼 컴포넌트 코드 생성 파이프라인 구축",
      "최근 1년 내 실제 프로젝트 1건을 골든셋으로 정해 PoC 결과 검증 — 신뢰도 80% 이상 확인",
      "코어 파이프라인 직접 개발(PoC) → 팀이 UI·로그인 등을 붙여 기존 제품에 통합 → 2026년 10월 [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official)로 정식 출시",
    ],
    roles: ["Development Team Leader", "(+ Product Owner, + AI Engineer)"],
    skills: list("Python, PyTorch, Computer Vision, LLM, AI Pipeline, AWS, Git, Figma, Notion"),
    // Official launch images are from the public ProtoPie MCP announcement; the overview is our own diagram.
    images: [
      { src: "/projects/ui-code-ai/overview.svg", width: 1200, height: 675 },
      { src: "/projects/ui-code-ai/release-01.webp", width: 1920, height: 1078 },
      { src: "/projects/ui-code-ai/release-03.webp", width: 1920, height: 1202 },
      { src: "/projects/ui-code-ai/release-02.webp", width: 1920, height: 1202 },
      { src: "/projects/ui-code-ai/release-04.webp", width: 1920, height: 1202 },
    ],
    cardImage: { src: "/projects/ui-code-ai/card.svg", width: 1200, height: 750 },
    caseStudy: {
      problem:
        "범용 LLM만으로는 디자인의 구조(계층·반복 요소)를 안정적으로 읽기 어려워, 생성된 코드가 화면 단위로 평평하게 나오고 재사용하기 어려웠습니다.",
      decisions: [
        "룰 기반 모듈 사이사이에 AI 모델 단계를 배치한 코드 생성 파이프라인을 직접 설계",
        "이미지 기반 입력과 레이아웃(구조) 기반 입력을 모두 코드로 변환할 수 있도록 변환 경로를 설계",
        "이미지·레이아웃(구조)을 이해하는 보조 모델의 학습을 설계하고 라벨링 등 학습 데이터를 직접 구축, 팀원이 학습한 모델을 파이프라인에 연결해 AOS·iOS·Web 컴포넌트 코드로 출력",
      ],
      outcome: {
        label: "결과",
        text: "PoC를 개발하며 최근 1년 내 실제 진행한 프로젝트 1건을 골든셋으로 정해 생성 결과를 검증했고, 80% 이상의 신뢰도를 확인했습니다. 이 코어 파이프라인에 팀이 UI·로그인 등을 붙여 기존 제품에 통합했고, 2026년 10월 [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official)로 정식 출시했습니다. Dev View도 베타를 마치고 정식 제공됩니다. Code MCP는 ProtoPie 엔진 정보를 활용해 React·Flutter·SwiftUI 등 7개 프레임워크의 코드를 생성합니다. ([문서](https://www.protopie.io/learn/docs/mcp-getting-started))",
        note: "신뢰도 검증은 프로젝트 1건 기준이며, 여러 프로젝트로 넓힌 검증은 아직 진행하지 못했습니다. 반복되는 UI 요소를 재사용하기 쉬운 컴포넌트 단위로 묶는 효과는 내부 사례 기준의 정성적 관찰입니다.",
      },
    },
  },
  {
    slug: "alan",
    summary: "연구 조직에서 시험 운영 중이던 검색 스타일 LLM Agent 서비스를 상용화하고 수익화까지 리드",
    punchline: ["시험 운영 중이던 LLM 서비스를", "상용화·수익화까지"],
    // Slide generation feature (led from research/planning). Sidebar with personal history cropped out.
    leadImages: [{ src: "/projects/alan/cover.webp", width: 1920, height: 1145 }],
    name: "Alan LLM service",
    client: "이스트소프트",
    duty: "Product Owner",
    keywords: list("PO, PMO, System Architect, Development Leader"),
    notionDate: { start: "2025-04-22" },
    fullName: "Alan (LLM based Agentic AI Search Engine Service)",
    domain: "이스트소프트/ LLM 기반 AI 서비스",
    period: "2025.04 -",
    tasks: [
      "연구 조직에서 시험 운영 중이던 서비스를 상용화·수익화까지 리드",
      "LLM 기반의 Agentic AI 앱 서비스 개발 파트 리드하며 Product Owner 업무 수행",
      "AI 연구원 및 앱 개발자(FE, BE)로 구성된 파트 리드",
      "Dev, QA, Stage, Release 서버 분리하여 운영, 관리",
      "Azure, Fast API, React, LangGraph 구조 아키텍처링",
      "패치 노트 페이지 운영, 관리",
      "품질 테스트 및 사내 타 부서 (QA, 인증, 결제, 인프라 등) 개발/품질/인프라 팀과 협업",
      "LLM 기반 AI 앱 서비스 기능 기획, 일정, 리스크 관리",
      "이미지 서치, 유튜브 서치·요약, 보고서 생성, 슬라이드 생성 기능과 특화 에이전트 독자 개발",
      "슬라이드 생성 기능: 조사·기획 단계부터 프로젝트 주도",
      "딥리서치·슬라이드 생성 서비스 배포, Pro 구독 서비스 런칭",
      "백오피스 내부 운영 툴 개발",
      "결제 시스템 프로세스 및 상품 유료화 정책 수립",
      "상용화 운영 중 ([https://myalan.ai/](https://myalan.ai/))",
    ],
    roles: ["Product Owner", "(+ Project Manager, + Development Leader)"],
    caseStudy: {
      problem:
        "연구 조직(AI Agent Lab)에서 시험 운영 중이던 LLM 서비스를 실제 상용 서비스로 만들고 수익을 내야 했습니다. 사용자들이 검색 사이트에서 LLM 서비스로 옮겨가는 흐름 속에서, 검색에 익숙한 사용자도 자연스럽게 쓸 수 있어야 했습니다.",
      decisions: [
        "시험 운영 단계의 서비스를 Dev·QA·Stage·Release 서버 분리 운영 체계로 전환해 상용 서비스 수준으로 정비",
        "LLM Agent 서비스를 검색 스타일로 제공해 기존 검색 사용자의 진입 장벽을 낮춤",
        "이미지 서치, 유튜브 서치·요약, 보고서·슬라이드 생성 등 기능과 특화 에이전트를 독자 개발 (슬라이드 생성은 조사·기획 단계부터 주도)",
        "다양한 사용자층을 고려한 결제 프로세스와 유료화 정책 수립",
      ],
      outcome: {
        label: "결과",
        text: "연구 조직에서 시험 운영하던 서비스를 상용화하고 수익화까지 리드했습니다. 딥리서치·슬라이드 생성 서비스를 배포하고 Pro 구독을 런칭해 유료 상용 서비스로 전환했으며, 운영을 위한 백오피스 내부 툴까지 개발했습니다. ([myalan.ai](https://myalan.ai/))",
      },
    },
    skills: list("GPT, Gemini, MCP, Notion, Google Analytics, Git, Azure, Figma, MS Docs, Slashpage"),
  },
  {
    slug: "decision-graph",
    summary: "Slack·Notion에서 의사결정을 원문 근거와 함께 뽑는 LLM 파이프라인 — 비용·지연을 측정하며 최적화하고 정답 케이스 테스트로 품질 관리",
    punchline: ["흩어진 대화에서", "근거 있는 결정으로"],
    name: "Decision Graph",
    client: "스튜디오씨드코리아",
    duty: "설계·개발 (1인)",
    keywords: list("LLM Pipeline, Eval, Cost Optimization"),
    notionDate: { start: "2026-08-21" },
    fullName: "Decision Graph (Slack·Notion 의사결정 추출 LLM 파이프라인)",
    domain: "스튜디오씨드코리아 / 사내 도구 (알파)",
    period: "2026.08 -",
    tasks: [
      "Slack·Notion에서 '누가·무엇을·왜' 결정했는지 원문 인용 근거와 함께 추출하는 LLM 파이프라인 1인 설계·개발",
      "PoC로 우려되던 기술 리스크를 직접 검증·검토 (예: 신뢰도 % 대신 정답 케이스로 판단, 원문 → 결정 → 문서 단방향 기록, 재실행 중복 반영 방지)",
      "분석 단위 분할 → 1차 분류(경량 모델) → 결정 추출 → 근거 검증(코드 + 모델) → 중복·관계 분석의 다단계 파이프라인 설계",
      "2-tier 추론 구조 — 같은 데이터·같은 테스트 케이스로 모델을 비교해 1차 분류는 경량 모델, 추출·검증은 고성능 모델로 결정",
      "요청마다 지연·대기·재시도·캐시 적중·토큰·비용을 기록해 병목을 찾고 호출 구조 최적화",
      "콘텐츠 해시 캐시와 바뀐 부분만 다시 분석하는 증분 실행, 대화·스레드 단위 배치, 문장 번호 인용, 단계를 겹쳐 실행하는 스케줄러 구현",
      "정답을 정해 둔 테스트 케이스 23개로 프롬프트·모델을 바꿀 때마다 품질이 떨어지지 않았는지 확인 (평가 비용 상한 설정)",
    ],
    roles: ["설계·개발 (1인)"],
    skills: list("Node.js, React, TypeScript, OpenAI API, LLM Pipeline, Eval, Telemetry"),
    // Internal tool: no screenshots of real data — our own diagrams only.
    images: [{ src: "/projects/decision-graph/overview.svg", width: 1200, height: 675 }],
    cardImage: { src: "/projects/decision-graph/card.svg", width: 1200, height: 750 },
    caseStudy: {
      problem:
        "결정은 Slack과 Notion 곳곳에서 내려지지만, 나중에 '누가, 무엇을, 왜' 정했는지 근거와 함께 찾기 어려웠습니다. LLM으로 자동 추출하되, 지어낸 결정이나 빠진 조건 없이 믿을 수 있어야 했고 매일 돌려도 부담 없는 비용과 속도여야 했습니다.",
      decisions: [
        "발언 중 결정만 후보로 올리고, 사람이 확정하기 전에는 기록에 넣지 않도록 설계",
        "근거는 원문 문장 번호로 인용해 두 번 검증하고, 모델이 스스로 매긴 신뢰도(%)는 자동화 기준에서 제외",
        "자주 틀리는 경우(조건 누락 등)로 정답 예제 23개를 만들어, 프롬프트를 고칠 때마다 결과가 나빠지지 않았는지 확인",
        "2-tier 추론 — 잡담은 경량 모델이 먼저 거르고 결정 추출·검증만 고성능 모델이 처리 (전부 경량 모델로 바꾸는 안은 정답 예제 24개 중 17개만 맞아 기각)",
        "한 번 분석한 내용은 저장해 두고, 새로 바뀐 대화만 다시 분석",
      ],
      outcome: {
        label: "결과",
        text: "정답 예제 24개를 모두 통과하고 잘못 제외된 결정 없이 품질을 지키면서, 한 번 실행 비용을 $10.2에서 $7.6으로 줄였습니다. 새로 바뀐 대화만 다시 돌리면 $0.7입니다.",
        note: "사내 알파 단계 기준입니다.",
      },
    },
  },
  {
    slug: "mx-studio",
    summary: "3D 웹 컴포넌트 저작 도구 — 이를 기반으로 닥터메타·Meta.CRO 제품 개발 및 제품화",
    punchline: ["3D 웹 컴포넌트 도구에서", "실서비스 제품화까지"],
    // Screenshot 01 re-cropped around the car (car in the upper part, caption band darkened under the punchline).
    cardImage: { src: "/projects/mx-studio/card.webp", width: 1200, height: 750 },
    name: "MX Studio",
    client: "티맥스메타에이아이",
    duty: "Project Leader",
    keywords: list("Web, 3D, React, Spring, Cloud"),
    notionDate: { start: "2022-07-01", end: "2025-02-28" },
    fullName: "MX studio",
    domain: "티맥스메타에이아이/3D소프트웨어",
    period: "2022.07 - 2025.02",
    tasks: [
      "3D Web Component 제작 소프트웨어 'MX studio' 개발",
      "MX Studio를 기반으로 [닥터메타](/projects/dr-meta)·[Meta.CRO](/projects/meta-cro) 제품 개발 및 제품화",
      "System Engineer, Project Manager로서 설계 및 개발 업무 수행",
      "기획, 디자이너, 개발자, QA로 구성된 TF팀 리드",
      "3D 물체의 이벤트와 액션 기능 설계/개발 리드",
      "물리 엔진과 실시간 렌더링 및 후처리 기능 설계/개발 리드",
      "Node 기반의 visual code system 설계/개발 리드",
      "외부 Beta test 진행 중 ([https://www.mxstudio.store/](https://www.mxstudio.store/))",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, JavaScript, TypeScript, 3D 그래픽, Java, AWS, Notion, Figma"),
    caseStudy: {
      problem:
        "3D 웹 콘텐츠를 만들 때마다 개발자가 3D 엔진 코드를 직접 작성해야 해서 제작 비용이 크고, 비개발자는 참여하기 어려웠습니다.",
      decisions: [
        "노드 기반 노코드 인터랙션(비주얼 코드 시스템)으로 개발자 없이 3D 이벤트·액션을 제작하도록 설계",
        "물리 엔진·실시간 렌더링·후처리를 엔진 수준에서 제공하고, 3D 템플릿·데이터 연동형 모델·3D 공간 내 2D 콘텐츠 연동 지원",
        "기획·디자인·개발·QA로 구성된 TF팀 리드",
      ],
      outcome: {
        label: "결과",
        text: "MX Studio의 3D 웹 컴포넌트 산출물로 [닥터메타](/projects/dr-meta)와 [Meta.CRO](/projects/meta-cro) 웹앱을 개발했고, 외부 베타 테스트를 진행했습니다.",
      },
    },
  },
  {
    slug: "dr-meta",
    summary: "전국 암센터 의료진·환자를 위한 웹 메타 공간 — 컨퍼런스, 환자 소통, 모션 캡처 운동 게임 (상용 운영)",
    name: "닥터메타",
    client: "한국스마트헬스케어협회",
    duty: "Project Leader",
    keywords: list("Web, 3D, Healthcare, React, Spring, Cloud"),
    notionDate: { start: "2024-06-01", end: "2025-01-31" },
    fullName: "닥터메타",
    domain: "한국스마트헬스케어협회/헬스케어",
    period: "2024.06 - 2025.01",
    tasks: [
      "암센터 의료진과 환자를 위한 메타버스 플랫폼 '닥터메타' 프로젝트에 참여",
      "책임자로서 설계 및 개발 PM/PE 업무 수행",
      "기획, 디자이너, 개발자, QA로 구성된 TF팀 리드",
      "[MX Studio](/projects/mx-studio)로 제작한 3D 웹 컴포넌트 산출물을 활용해 웹앱 개발",
      "React 기반의 웹 앱과 Unity 앱 연동 설계/개발 리드",
      "Three.js 기반 웹 메타 공간 구축 — 의료진 컨퍼런스와 환자 소통",
      "웹캠 모션 캡처 기반 환자 운동 게임 제공",
      "관리자 페이지 및 권한 기능 설계/개발 리드",
      "전국 암센터에서 상용 운영 ([https://healthcare.drmeta.kr/](https://healthcare.drmeta.kr/), [https://web.drmeta.kr/](https://web.drmeta.kr/))",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, AWS, Unity"),
    caseStudy: {
      problem:
        "전국 암센터의 의료진과 환자가 교육·컨퍼런스·소통을 위해 별도 설치 없이 웹에서 함께 모일 수 있는 공간이 필요했습니다.",
      decisions: [
        "Three.js로 의료진 컨퍼런스와 환자 소통을 위한 웹 메타 공간을 구축하고, 멀티플레이 서버에는 [MVS](/projects/mvs) 연구 기술을 활용",
        "Unity 콘텐츠와 [MX Studio](/projects/mx-studio)의 3D 컴포넌트 산출물을 React 웹앱에 심리스하게 통합",
        "환자를 위한 웹캠 모션 캡처 기반 운동 게임 제공",
      ],
      outcome: { label: "결과", text: "전국 암센터에서 상용화되어 운영되었습니다. ([web.drmeta.kr](http://web.drmeta.kr/))" },
    },
  },
  {
    slug: "meta-cro",
    summary: "3D 기반 임상시험 가상 시뮬레이션 교육 플랫폼 (상용 운영)",
    name: "Meta CRO",
    client: "한국스마트헬스케어협회",
    duty: "Project Leader",
    keywords: list("Web, 3D, Healthcare, React, Spring, Cloud"),
    notionDate: { start: "2023-06-01", end: "2025-01-31" },
    fullName: "Meta.CRO",
    domain: "한국스마트헬스케어협회/헬스케어",
    period: "2023.06 - 2025.01",
    tasks: [
      "3D 기반 임상시험 가상 시뮬레이션 교육 플랫폼 'M.CRO' 프로젝트에 참여",
      "연구책임자로서 설계 및 개발 PM/PE 업무 수행",
      "개발자, QA로 구성된 TF팀 리드",
      "[MX Studio](/projects/mx-studio)로 제작한 3D 웹 컴포넌트 산출물을 활용해 웹앱 개발",
      "Unity VR 교육 콘텐츠를 WebGL로 배포해 웹앱에 통합",
      "3D render engine library 설계/배포 (private npm 환경 구성)",
      "전국 암센터에서 상용 운영 (https://www.crotraining.store/)",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, AWS"),
    caseStudy: {
      problem:
        "임상시험은 실제로 경험해 보기 전에는 절차를 익히기 어렵고, 기존 교육 자료로는 한계가 있었습니다. 3D 가상 시뮬레이션으로 실제 경험 전에 먼저 익히면 교육의 질은 높이고 비용과 시행착오는 줄일 수 있었습니다.",
      decisions: [
        "Unity로 임상시험 가상 시뮬레이션(VR) 콘텐츠를 만들고 WebGL로 배포해 웹앱에 통합",
        "[MX Studio](/projects/mx-studio)의 3D 웹 컴포넌트 산출물로 웹앱 개발",
        "3D 렌더 엔진 라이브러리를 설계해 private npm으로 배포",
      ],
      outcome: { label: "결과", text: "전국 암센터에서 상용화되어 운영되었습니다. ([crotraining.store](https://www.crotraining.store/))" },
    },
  },
  {
    slug: "nenoonn",
    summary: "규제 샌드박스 실증특례로 처음 열린 콘택트렌즈 온라인 구매·배송 서비스 — 크로스플랫폼 앱",
    name: "내눈N",
    client: "픽셀로",
    duty: "Project Leader",
    keywords: list("Mobile, Commerce, React, Spring, Cloud"),
    notionDate: { start: "2024-03-01", end: "2024-09-15" },
    fullName: "내눈N",
    domain: "픽셀로/커머스",
    period: "2024.03 - 2024.09",
    tasks: [
      "콘택트렌즈 온라인 마켓 플랫폼 '내눈N' 프로젝트에 참여",
      "책임자로서 설계 및 개발 PM/PE 업무 수행",
      "개발자, QA로 구성된 TF팀 리드",
      "React, React Native를 활용하여 core 소스 하나로 크로스플랫폼 앱 설계/개발 리드",
      "Android, iOS 심사에 맞게 빌드 및 배포 리드",
      "상용화 운영 중 (https://nenoonn.mycafe24.com/)",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, Java, AWS, Android, iOS"),
    caseStudy: {
      problem:
        "콘택트렌즈 온라인 판매는 원래 허용되지 않던 영역이라, 규제 샌드박스 실증특례를 받은 업체와 함께 국내에 없던 서비스를 처음부터 만들어야 했습니다. 사용자는 모바일을 비롯한 여러 플랫폼에서 접속하길 기대했습니다.",
      decisions: [
        "React·React Native로 core 소스 하나를 공유해 웹·Android·iOS 앱을 빠르게 제작",
        "Android·iOS 심사 기준에 맞춘 빌드·배포 리드",
      ],
      outcome: {
        label: "결과",
        text: "국내 첫 콘택트렌즈 온라인 구매·배송 서비스를 출시해 상용 운영했습니다. ([nenoonn.mycafe24.com](https://nenoonn.mycafe24.com/))",
      },
    },
  },
  {
    slug: "gis-s-dcis",
    summary: "연우테크놀러지와 공동 개발·납품한 GIS 기반 데이터센터 정보 시스템 (B2B)",
    name: "GIS S-DCIS",
    client: "삼성물산",
    duty: "Project Leader",
    keywords: list("Web, GIS, System, Massive data, React, Spring, Cloud"),
    notionDate: { start: "2023-12-01", end: "2024-08-15" },
    fullName: "GIS S-DCIS",
    domain: "삼성물산/건설",
    period: "2023.12 - 2024.08",
    tasks: [
      "GIS 기반 삼성 데이터 센터 정보 시스템 'GIS S-DCIS' 개발 프로젝트에 참여",
      "개발 TF팀 리드하며 개발 PM 업무 수행",
      "기획팀, 사업팀, 타사 연구팀과 소통 및 협업",
      "GeoServer와 PostGIS를 활용한 공간함수 서버 및 DB 구축",
      "GIS 데이터 기반의 map platform 구성을 위한 Openlayers 오픈소스 기술 연구",
      "공공 데이터 활용 및 정책 이슈 핸들링",
      "폐쇄망 소스 이관 및 On-Premise 환경 구축 시 생기는 이슈 트러블슈팅",
      "연우테크놀러지 개발 연구원들과 공동 개발 후 납품",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, Java, AWS"),
    caseStudy: {
      problem:
        "데이터센터 구축 사업의 대상지를 지도 기반으로 조사·분석할 정보 시스템이 필요했고, 폐쇄망·On-Premise 환경이라는 제약이 있었습니다.",
      decisions: [
        "건설 BIM 솔루션 기업 연우테크놀러지의 개발 연구원들과 공동 개발 체계로 진행",
        "GeoServer·PostGIS로 공간함수 서버와 DB를 구축하고 OpenLayers 기반 지도 플랫폼 구성",
        "폐쇄망 소스 이관과 On-Premise 환경 구축 이슈 해결",
      ],
      outcome: { label: "결과", text: "B2B 프로젝트로 공동 개발을 마치고 납품했습니다." },
    },
  },
  {
    slug: "mvs",
    summary: "실시간 다중 접속 싱크 서버 연구 — 닥터메타 의료진 컨퍼런스의 멀티플레이 서버로 활용",
    name: "MVS (Metaverse Server)",
    client: "티맥스메타에이아이",
    duty: "Project Leader",
    keywords: list("C++, Server Engine, Synchronization, Cloud"),
    notionDate: { start: "2023-01-02", end: "2024-09-15" },
    fullName: "MVS (Metaverse Server)",
    domain: "티맥스메타에이아이/Server engine",
    period: "2023.01 - 2024.09",
    tasks: [
      "멀티플레이를 위한 실시간 다중 접속 싱크 서버 연구",
      "R&D 팀 리드하며 C++ 기반의 서버 엔진 기술 연구 및 개발",
      "Client Library 설계 (Javascript, C#)",
      "서비스 플로우 설계",
      "연구 기술을 [닥터메타](/projects/dr-meta) 의료진 컨퍼런스의 멀티플레이 서버로 적용",
    ],
    roles: ["Project Manager"],
    skills: list("Docker, Git, C++, AWS, Javascript, C#"),
    caseStudy: {
      problem: "메타버스 서비스에서 여러 사용자가 같은 공간에 동시에 접속해 상호작용하려면 실시간 동기화 서버가 필요했습니다.",
      decisions: ["C++ 기반 서버 엔진 기술 연구·개발", "JavaScript·C# 클라이언트 라이브러리와 서비스 플로우 설계"],
      outcome: {
        label: "결과",
        text: "연구 기술이 [닥터메타](/projects/dr-meta) 의료진 컨퍼런스의 멀티플레이 서버로 시스템 내부에서 활용되었습니다.",
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
