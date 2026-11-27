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
    duty: "Head of Product Dev Team",
    keywords: list("Design-to-Code, ML Pipeline, Cross-platform"),
    notionDate: { start: "2026-06-01" },
    fullName:
      "AI 기반 코드 생성 시스템 (AI-assisted Design-to-Code System for Cross-platform Components)",
    domain: "스튜디오씨드코리아 / Design & Interaction data",
    period: "2026.01 - 2026.10",
    tasks: [
      "[직접] 룰 기반 모듈과 AI 모델 단계를 결합한 코드 생성 파이프라인 설계, 코어 파이프라인(PoC) 개발",
      "[직접] 이미지·레이아웃(구조) 이해 보조 모델의 학습 설계, 학습 데이터 구축",
      "[직접] 코드 생성 파이프라인을 기존 제품(ProtoPie)에 붙이는 제품 통합 구조 설계",
      "[직접] 사내에 축적된 디자인 데이터를 학습 데이터로 정제하는 데이터 파이프라인 설계",
      "[리드] AI 엔지니어·앱 개발자 4~5명 애자일 팀 운영 — 모델 학습은 AI 엔지니어, 제품 통합 개발은 팀과 함께",
      "[리드] 데이터 정제 → 학습 → 배포로 이어지는 MLOps 파이프라인 설계",
      "[리드] AOS·iOS·Web 크로스 플랫폼 컴포넌트 코드 생성으로 확장, 2026년 10월 [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official)로 정식 출시",
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
        "범용 LLM만으로는 디자인의 구조(계층·반복 요소)를 안정적으로 읽기 어려워, 생성된 코드가 화면 단위로 평평하게 나오고 재사용하기 어려웠습니다.",
      decisions: [
        "룰 기반 모듈 사이사이에 AI 모델 단계를 배치한 코드 생성 파이프라인을 직접 설계",
        "이미지 기반 입력과 레이아웃(구조) 기반 입력을 모두 코드로 변환할 수 있도록 변환 경로를 설계",
        "이미지·레이아웃(구조)을 이해하는 보조 모델의 학습을 설계하고 학습 데이터를 직접 구축, 팀원이 학습한 모델을 파이프라인에 연결해 AOS·iOS·Web 컴포넌트 코드로 출력",
      ],
      outcome: {
        label: "결과",
        text: "코어 파이프라인(PoC)을 직접 개발했고, 팀과 함께 제품화해 2026년 10월 [ProtoPie MCP](https://www.protopie.io/blog/protopie-mcp-official)로 정식 출시했습니다. Dev View도 베타를 마치고 정식 제공됩니다. Code MCP는 ProtoPie 엔진 정보를 활용해 React·Flutter·SwiftUI 등 7개 프레임워크의 코드를 생성합니다. ([문서](https://www.protopie.io/learn/docs/mcp-getting-started))",
        note: "반복되는 UI 요소를 재사용하기 쉬운 컴포넌트 단위로 묶는 효과는 내부 사례 기준의 정성적 관찰입니다.",
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
    keywords: list("LLM Agent, AI Search, Monetization"),
    notionDate: { start: "2025-04-22", end: "2026-01-05" },
    fullName: "Alan (LLM based Agentic AI Search Engine Service)",
    domain: "이스트소프트/ LLM 기반 AI 서비스",
    period: "2025.04 - 2026.01",
    tasks: [
      "[리드] 연구 조직에서 시험 운영 중이던 서비스를 상용화·수익화까지 리드 (PO)",
      "[리드] AI 연구원·앱 개발자(FE, BE) 개발 팀 운영 — 기능 기획, 일정, 리스크 관리",
      "[리드] Azure·FastAPI·React·LangGraph 구조 설계, Dev·QA·Stage·Release 서버 분리 운영",
      "[리드] 이미지 서치, 유튜브 서치·요약, 보고서 생성 등 기능과 특화 에이전트 자체 개발",
      "[직접] 슬라이드 생성 기능 기획 — Genspark 등 경쟁 서비스 벤치마킹, 사용자 시나리오·생성 플로우 정의",
      "[직접] 슬라이드 생성 에이전트 구조 설계 — 의도 파악 → 범위·구성 → 정보 검색 → 템플릿·스타일·폰트 → HTML 렌더링 → 수정의 단계별 오케스트레이션, 중간 결과를 사용자가 확인·수정하는 human-in-the-loop",
      "[직접] AI 서비스 유료화 기획 — 콜당 추론 원가로 마진을 계산하고 경쟁사 가격·유료 전환율을 근거로 Pro 플랜의 가격과 사용 한도 설계",
      "[리드] 유료화 개발·출시 — 플랜별 권한·결제·해지/환불 흐름, 약관 개정·유료 전환 고지 (2025.07, [공식 발표](https://estsoft.ai/all/250707))",
      "[협업] 사내 QA·인증·결제·인프라 팀과 품질 테스트, 마케팅·사업부와 출시 발표 준비",
      "[리드] 딥리서치·슬라이드 생성 서비스 배포, 패치 노트·백오피스 운영 툴",
      "상용화 운영 중 ([myalan.ai](https://myalan.ai/))",
    ],
    roles: ["Product Owner", "(+ Project Manager, + Development Leader)"],
    caseStudy: {
      problem:
        "연구 조직(AI Agent Lab)에서 시험 운영 중이던 LLM 서비스를 실제 상용 서비스로 만들고 수익을 내야 했습니다. 사용자들이 검색 사이트에서 LLM 서비스로 옮겨가는 흐름 속에서, 검색에 익숙한 사용자도 자연스럽게 쓸 수 있어야 했습니다.",
      decisions: [
        "시험 운영 단계의 서비스를 Dev·QA·Stage·Release 서버 분리 운영 체계로 전환해 상용 서비스 수준으로 정비",
        "LLM Agent 서비스를 검색 스타일로 제공해 기존 검색 사용자의 진입 장벽을 낮춤",
        "슬라이드 생성은 한 번에 만들지 않고 단계로 — 의도 파악·범위·검색·템플릿·렌더링·수정을 나눈 에이전트 오케스트레이션에, 사용자가 중간 결과를 확인·수정하는 단계를 둠 (이미지·유튜브 검색, 보고서 생성 등 특화 에이전트도 자체 개발)",
        "가격은 근거로 — 콜당 추론 원가로 마진을 계산하고, 경쟁사 가격과 유료 전환율 가정을 더해 Pro 플랜의 가격과 사용 한도를 설계",
      ],
      outcome: {
        label: "결과",
        text: "연구 조직에서 시험 운영하던 서비스를 상용화하고 수익화까지 리드했습니다. PO로서 가격·플랜 설계부터 결제·해지 흐름 개발, 약관·고지, 출시 발표까지 유료화 전 과정을 리드해 2025년 7월 Pro 구독을 런칭해([공식 발표](https://estsoft.ai/all/250707)) 서비스의 첫 유료 매출(수치 비공개)을 만들었습니다. 이를 바탕으로 엔터프라이즈 상품을 기획했고, 이 기반은 이후 기관 계약 매출로 이어졌습니다. 딥리서치·슬라이드 생성 기능 배포와 운영 백오피스 개발도 함께 진행했습니다. ([myalan.ai](https://myalan.ai/))",
      },
    },
    skills: list("GPT, Gemini, MCP, Notion, Google Analytics, Git, Azure, Figma, MS Docs, Slashpage"),
  },
  {
    slug: "decision-graph",
    summary: "Slack·Notion에서 의사결정을 근거와 함께 뽑아 관계 그래프로 자동 시각화하는 LLM 파이프라인 — 사람이 표시한 정답 결정의 80% 이상 추출, 호출 74%·비용 25% 절감",
    punchline: ["흩어진 대화에서", "근거 있는 결정으로"],
    name: "Decision Graph",
    client: "스튜디오씨드코리아",
    duty: "설계·개발 (1인)",
    keywords: list("LLM Pipeline, Eval, Cost Optimization"),
    notionDate: { start: "2026-08-21", end: "2026-10-02" },
    fullName: "Decision Graph (Slack·Notion 의사결정 추출 LLM 파이프라인)",
    domain: "스튜디오씨드코리아 / 신규 제품 PoC (사내 알파)",
    period: "2026.08 - 2026.10",
    tasks: [
      "[직접] PO 요구사항을 기술 명세서로 정리하고 PoC로 기술 타당성 검증 — 신규 제품 검토",
      "[직접] Slack·Notion에서 '누가·무엇을·왜' 결정했는지 원문 인용 근거와 함께 추출하는 LLM 파이프라인 1인 설계·개발",
      "[직접] 추출된 결정을 관계도·타임라인으로 자동 시각화 — 결정 간 전제·대체·중단 관계를 자동으로 잇고, 각 결정에서 근거 원문으로 바로 이동",
      "[직접] 최근 1년 내 실제 프로젝트 1건의 대화에 사람이 직접 정답(결정·근거)을 표시한 골든셋으로 PoC 결과 검증 — 정답 결정의 80% 이상을 맞게 추출",
      "[직접] PoC로 우려되던 기술 리스크를 직접 검증·검토 (예: 사람이 만든 정답 기준으로 품질 판단, 원문 → 결정 → 문서 단방향 기록, 재실행 중복 반영 방지)",
      "[직접] 분석 단위 분할 → 1차 분류(경량 모델) → 결정 추출 → 근거 검증(코드 + 모델) → 중복·관계 분석의 다단계 파이프라인 설계",
      "[직접] 2-tier 추론 구조 — 같은 데이터·같은 테스트로 모델을 비교해 1차 분류는 경량 모델, 추출·검증은 고성능 모델로 결정",
      "[직접] 요청마다 지연·대기·재시도·캐시 적중·토큰·비용을 기록해 병목을 찾고 호출 구조 최적화",
      "[직접] 콘텐츠 해시 캐시와 바뀐 부분만 다시 분석하는 증분 실행, 대화·스레드 단위 배치, 문장 번호 인용, 단계를 겹쳐 실행하는 스케줄러 구현",
      "[직접] 정답을 정해 둔 테스트 24건으로 프롬프트·모델을 바꿀 때마다 품질이 떨어지지 않았는지 확인 (평가 비용 상한 설정)",
    ],
    roles: ["설계·개발 (1인)"],
    skills: list("Node.js, React, TypeScript, OpenAI API, LLM Pipeline, Eval, Telemetry"),
    // Internal tool: no screenshots of real data — our own diagrams only.
    // Real screens of the tool; decision text is blurred (internal project data).
    images: [
      { src: "/projects/decision-graph/overview.svg", width: 1200, height: 675 },
      { src: "/projects/decision-graph/relations.webp", width: 2190, height: 1312, caption: "시스템이 자동으로 그린 결정 관계도 — 추출된 결정 사이의 전제·대체·중단 관계와 상태를 자동으로 연결 (결정 내용은 사내 정보라 흐리게 처리)" },
      { src: "/projects/decision-graph/timeline.webp", width: 2196, height: 1248, caption: "시스템이 자동으로 그린 결정 타임라인 — 결정 수준(전사·프로젝트·기능·실무)과 시점, 마일스톤으로 프로젝트의 결정 흐름 표시" },
    ],
    cardImage: { src: "/projects/decision-graph/card.svg", width: 1200, height: 750 },
    coverInGallery: true,
    caseStudy: {
      problem:
        "결정은 Slack과 Notion 곳곳에서 내려지지만, 나중에 '누가, 무엇을, 왜' 정했는지 근거와 함께 찾기 어렵고, 프로젝트 전체의 결정 흐름도 한눈에 보이지 않았습니다. LLM으로 자동 추출하되, 지어낸 결정이나 빠진 조건 없이 믿을 수 있어야 했고 매일 돌려도 부담 없는 비용과 속도여야 했습니다.",
      decisions: [
        "결정은 목록이 아니라 그래프로 — 시스템이 결정 사이의 전제·대체·중단 관계를 자동으로 잇고 근거 원문을 참조로 연결해, 프로젝트의 결정 흐름을 빠르게 파악",
        "발언 중 결정만 후보로 올리고, 사람이 확정하기 전에는 기록에 넣지 않도록 설계",
        "근거는 원문 문장 번호로 인용하고, 코드와 별도 검증 단계가 두 번 확인",
        "사람이 정답을 표시한 골든셋과, 자주 틀리는 경우(조건 누락 등)로 만든 테스트 24건으로 고칠 때마다 품질 확인",
        "2-tier 추론 — 잡담은 경량 모델이 먼저 거르고 결정 추출·검증만 고성능 모델이 처리 (전부 경량 모델로 바꾸는 안은 테스트 24건 중 17건만 통과해 기각)",
        "한 번 분석한 내용은 저장해 두고, 새로 바뀐 대화만 다시 분석",
      ],
      outcome: {
        label: "결과",
        text: "최근 1년 내 실제 프로젝트 1건에 사람이 직접 정답(결정·근거)을 표시한 골든셋과 비교해, 정답 결정의 80% 이상을 맞게 추출하는 것을 확인했습니다. 추출된 결정은 관계도와 타임라인으로 자동으로 그려집니다. 테스트 24건을 모두 통과하고 잘못 제외된 결정 없이 품질을 지키면서, 같은 데이터 기준 호출 수 74%(1,289 → 336회), 실행 비용 25%($10.2 → $7.6)를 줄였습니다. 새로 바뀐 대화만 다시 돌리면 $0.7입니다.",
        note: "사내 알파 단계 기준입니다.",
      },
    },
  },
  {
    slug: "harmonyos-player",
    summary: "기존 Android 앱을 바탕으로 HarmonyOS 앱을 새로 만들어 출시 — PO와 개발자 1명, 2개월, 스펙 주도 개발과 AI 에이전트로 엔진·렌더러·UI를 모두 다시 작성",
    name: "ProtoPie Player (HarmonyOS)",
    client: "스튜디오씨드코리아",
    duty: "Product Owner",
    keywords: list("Mobile App, Platform Porting, Spec-Driven Development"),
    notionDate: { start: "2026-06-01", end: "2026-08-05" },
    fullName: "ProtoPie Player for HarmonyOS (Huawei AppGallery)",
    domain: "스튜디오씨드코리아 / 프로토타입 실행 앱",
    period: "2026.06 - 2026.08",
    tasks: [
      "[리드] PO로 신규 플랫폼 앱 출시 리드 — 개발자 1명과 2인 체제, 개발 외 스펙·계획·검증·범위 결정·출시를 맡음",
      "[직접] 포팅 가능성 판단 — 기능 스펙이 같은 기존 Android 앱을 기준으로 삼으면 언어가 달라도 다시 만들 수 있다고 보고 진행",
      "[직접] 스펙 주도 개발 — Android 앱의 동작을 엔진·렌더러·UI 단위의 스펙과 검증 기준으로 정리 (언어가 달라 세 계층 코드는 모두 새로 작성)",
      "[리드] AI 에이전트 개발 체계 — Claude Code로 계획·검증, Codex로 코딩, 병렬로 가능한 개발·검증은 에이전트 팀이 반복 루프로 진행",
      "[리드] AI 학습이 부족한 HarmonyOS API는 검색으로 추적하고, 공식 문서·일부 라이브러리가 틀린 곳은 직접 테스트해 보완 개발",
      "[직접] 범위 결정 — MVP 기능은 모두 개발하고 USB 연결 등 선택적 네이티브 기능은 보류해 일정 안에 출시",
      "2026년 8월 Huawei AppGallery 출시 ([공식 발표](https://www.protopie.io/blog/protopie-player-harmonyos-appgallery))",
    ],
    roles: ["Product Owner"],
    skills: list("HarmonyOS, ArkTS, Claude Code, Codex, Spec-Driven Development"),
    images: [
      { src: "/projects/harmonyos-player/launch.webp", width: 1920, height: 1077 },
      { src: "/projects/harmonyos-player/store-01.webp", width: 900, height: 1600 },
      { src: "/projects/harmonyos-player/store-02.webp", width: 900, height: 1600 },
    ],
    caseStudy: {
      problem:
        "ProtoPie Player는 iOS·Android로만 제공돼, Huawei(HarmonyOS) 기기에서는 프로토타입을 실행해 볼 수 없었습니다. HarmonyOS는 언어와 UI 프레임워크가 달라 엔진·렌더러·UI 코드를 모두 새로 써야 했고, 인원은 PO인 저와 개발자 1명이었습니다.",
      decisions: [
        "코드를 옮기는 대신 스펙을 옮김 — 기능 스펙이 같은 Android 앱의 동작을 스펙과 검증 기준으로 정리하고, 구현은 그 스펙을 따르게 함",
        "계획·검증은 Claude Code, 코딩은 Codex로 나누고, 병렬로 가능한 개발·검증은 에이전트 팀이 반복 루프로 진행",
        "AI 학습이 부족한 HarmonyOS API는 검색으로 추적하고, 공식 문서·라이브러리가 틀린 곳은 직접 테스트해 보완 개발",
        "MVP 기능은 모두 개발하고, USB 연결처럼 네이티브 라이브러리에 의존하는 선택적 기능은 보류해 일정 안에 출시",
      ],
      outcome: {
        label: "결과",
        text: "2개월 만에 HarmonyOS용 ProtoPie Player 1.0을 Huawei AppGallery에 출시했습니다(2026.08). 복잡한 제스처·애니메이션·인터랙션 로직과 자이로스코프·햅틱 같은 기기 센서를 지원합니다. ([공식 발표](https://www.protopie.io/blog/protopie-player-harmonyos-appgallery))",
      },
    },
  },
  {
    slug: "bite-engine",
    summary: "웹·iOS·Android에서 같은 엔진으로 도는 Rust 게임 엔진 — wgpu 렌더러, 2D·3D·탄도·파티클, PlaySnack 골프 게임을 실제로 구동 (개인 프로젝트)",
    name: "Bite 엔진 (Rust)",
    client: "개인 프로젝트",
    duty: "설계·개발",
    keywords: list("Game Engine, Rust, Renderer"),
    notionDate: { start: "2026-10-16" },
    fullName: "Bite — Rust 런타임·레이아웃·렌더러 (wgpu)",
    domain: "개인 프로젝트 / PlaySnack 앱 엔진",
    period: "2026.10 -",
    tasks: [
      "[직접] 엔진 구조 설계 — 런타임·레이아웃·렌더러를 Rust로 만들고 웹(WASM)·iOS·Android에서 같은 엔진을 사용",
      "[직접] 렌더러 — GPU는 wgpu, 카카오톡 인앱 브라우저처럼 컴퓨트 셰이더가 없는 환경을 위한 WebGL2 경로, 2D 렌더러(Vello 계열·glyphon)를 같은 화면으로 비교해 선택",
      "[직접] 3D·탄도·파티클·모션·텍스트·SVG를 기능별 모듈(crate)로 나누고, 필요한 기능만 넣어 웹 기본 빌드를 600KB 안에 유지",
      "[직접] 결정성 검증 — 같은 입력이면 버전이 바뀌어도 프레임·샷 결과 해시가 같도록, 기존 JS 엔진 화면과 나란히 비교하는 플레이그라운드와 기준 이미지 테스트",
      "[직접] 성능 개선 — 홀을 바꿀 때 GPU 파이프라인을 재사용해 홀당 셰이더 컴파일 20~50회 → 0회, 조준 중 그림자 재사용으로 드라이버 다시 그리기 100회 → 1회",
      "[직접] [PlaySnack](https://playsnack.app)의 [골프 게임](https://playsnack.app/games/golf/)을 실제 서비스에서 구동 (엔진 v2.20 적용, 최신 v2.24)",
    ],
    roles: ["설계·개발"],
    skills: list("Rust, wgpu, WebGL2, WebAssembly, iOS, Android"),
    images: [
      { src: "/projects/bite-engine/golf-3d.webp", width: 780, height: 1688, caption: "Bite 엔진이 그린 PlaySnack 골프 게임 — 3D 코스, 탄도, 그림자, 미니맵 (playsnack.app 실제 화면)" },
    ],
    caseStudy: {
      problem:
        "PlaySnack의 게임은 JS 엔진으로 돌았는데, 3D 골프처럼 무거운 게임과 폰·인앱 브라우저 성능을 함께 감당하기 어려웠습니다. 웹·iOS·Android에서 같은 결과가 나와야 했고, 웹 첫 화면은 가벼워야 했습니다.",
      decisions: [
        "한 엔진, 세 플랫폼 — Rust 코어를 WASM·iOS·Android로 빌드하고, GPU는 wgpu에 WebGL2 경로를 둠",
        "느낌이 아니라 같은 화면으로 고름 — 2D 렌더러 후보를 같은 장면으로 나란히 그려 비교",
        "결정적 실행 — 같은 입력이면 같은 프레임·샷 결과, 해시로 버전 간 회귀를 잡음",
        "기능은 모듈로 — 3D·탄도·파티클 등은 필요할 때만 넣고, 웹 기본 빌드 크기를 게이트로 지킴",
      ],
      outcome: {
        label: "결과",
        text: "PlaySnack 골프 게임이 Bite 엔진으로 실제 서비스 중입니다. 홀 전환 셰이더 컴파일을 0회로, 조준 중 다시 그리기를 100회에서 1회로 줄였습니다. 엔진은 v2.24까지 나왔습니다. ([골프 게임](https://playsnack.app/games/golf/))",
        note: "비공개 저장소입니다.",
      },
    },
  },
  {
    slug: "playsnack",
    summary: "링크 하나로 친구와 바로 같이 하는 게임 서비스 — 메인은 3D 골프 게임, 아이폰 카메라로 실제 스윙을 측정해 그 샷으로 라운드 (측정 앱 클로즈드 베타, 개인 프로젝트)",
    name: "PlaySnack",
    client: "개인 프로젝트",
    duty: "기획·설계·개발",
    keywords: list("Social Games, Multiplayer, Golf"),
    notionDate: { start: "2026-10-07" },
    fullName: "PlaySnack · 친구랑 바로 한 판",
    domain: "개인 프로젝트 / 소셜 게임 서비스",
    period: "2026.10 -",
    tasks: [
      "[직접] 서비스 기획·개발 — 게임·퀴즈·투표·월드컵을 JSON 앱 문서로 만들고, 링크를 연 사람끼리 실시간으로 같이 플레이 ([playsnack.app](https://playsnack.app))",
      "[직접] 앱 엔진 Bite 설계 — 앱을 JSON 문서로 정의하는 포맷과 런타임, 3D 골프 같은 무거운 게임은 Rust 엔진([Bite 엔진](/projects/bite-engine))으로",
      "[직접] [3D 골프 게임](https://playsnack.app/games/golf/) — 골프장 2곳·최대 18홀, 바람·경사·클럽별 탄도, 여럿이 함께 치는 모드",
      "[직접] 실제 스윙 측정 앱 Snack Golf (iOS, 클로즈드 베타) — 아이폰을 공 뒤에 세워 240fps·노출 1/2000초로 촬영, 측정 장비 없이 볼 스피드·발사각·방향·비거리 계산",
      "[직접] 측정 코어(Rust) — 클럽에 가려진 공부터 깜빡임·흐린 비행 구간까지 추적, 프레임마다 3D 위치를 추정하지 않고 중력·항력·양력을 넣은 탄도 모델을 모든 프레임의 2D 관측(공 중심·움직임 줄무늬 폭)에 직접 맞춤, 임팩트 소리로 타격 시각을 고정해 정확도 보완",
      "[직접] 폰과 맥에서 같은 영상이면 같은 샷이 나오도록 계산을 맞추고, 비정상 값은 버리고 클럽 헤드가 공을 가리면 조용히 재시도",
      "[직접] 게임 연동 — QR로 폰과 게임을 짝짓고 WebSocket(끊기면 SSE)으로 게임 상태를 받아 턴마다 추천 클럽·목표를 앱에 표시, 측정한 샷(클럽 코드 포함)을 게임으로 보내 실제 스윙으로 라운드, 결과는 음성으로 2~3초 뒤 안내",
      "[직접] 모션은 [nudg](/projects/nudg)로 이전 — PR 1건으로 nudg 비율 49% → 89%",
      "[직접] AI 에이전트로 개발하되 검증은 자동 게이트로 — 시나리오 테스트, 다중 접속 시뮬레이션, 실제 폰 확인",
    ],
    roles: ["기획·설계·개발"],
    skills: list("TypeScript, Rust, Swift, Cloudflare, WebSocket"),
    images: [
      { src: "/projects/playsnack/golf-3d.webp", width: 780, height: 1688, caption: "3D 골프 게임 — 당겼다 놓으면 스윙, 바람·경사·클럽별 탄도" },
      { src: "/projects/playsnack/home.webp", width: 780, height: 1688, caption: "PlaySnack 홈 — 주기적으로 새 질문이 나오는 퀴즈와 모임 게임 (playsnack.app 실제 화면)" },
      { src: "/projects/playsnack/golf-courses.webp", width: 780, height: 1688, caption: "골프 코스 선택 — 2개 골프장, 9홀·18홀 코스" },
    ],
    caseStudy: {
      problem:
        "모임에서 바로 같이 할 수 있는 가벼운 게임은 설치나 가입이 번거롭고, 골프처럼 실제 운동과 이어지는 게임은 비싼 측정 장비가 필요했습니다.",
      decisions: [
        "링크 하나로 같이 — 설치·가입 없이 링크를 연 사람끼리 실시간으로 플레이",
        "게임은 문서로 — 앱을 JSON 문서로 정의해 AI가 만들고 고치기 쉽게",
        "무거운 게임은 엔진부터 — 3D 골프를 위해 Rust 엔진을 직접 만들어 웹·폰에서 같은 결과",
        "측정 장비 대신 아이폰 — 240fps 카메라 영상 전체에 탄도 모델을 맞춰 샷을 재고, 게임과 실시간으로 이어 그 샷으로 라운드",
      ],
      outcome: {
        label: "현재",
        text: "playsnack.app에서 서비스 중이며, 메인 게임인 3D 골프는 Rust 엔진으로 돌아갑니다. 실제 스윙을 재서 게임으로 보내는 아이폰 앱 Snack Golf는 클로즈드 베타입니다. ([playsnack.app](https://playsnack.app))",
      },
    },
  },
  {
    slug: "nudg",
    summary: "AI 코딩 도구가 직접 고치는 UI 인터랙션 포맷 — 모션·소리·햅틱·파티클을 JSON 한 파일로, 웹·iOS·Android에서 같게 재생. npm 최근 30일 4,050회 다운로드, 공식 MCP Registry 등록 (MIT 오픈소스)",
    punchline: ["AI가 고치는", "인터랙션 포맷"],
    name: "nudg",
    client: "개인 프로젝트",
    duty: "설계·개발 (1인)",
    keywords: list("Interaction Format, AI-native Tooling, Cross-platform Runtime"),
    notionDate: { start: "2026-10-13" },
    fullName: "nudg — The interaction format your AI can nudge",
    domain: "개인 프로젝트 / 오픈소스 (MIT)",
    period: "2026.10 -",
    tasks: [
      "[직접] 포맷 설계 — 상태·이벤트·모션을 평범한 JSON으로 정의해, \"조금 더 통통 튀게\" 같은 요청이 필드 하나를 고치는 diff가 되게 함 (bounce 0.25 → 0.6)",
      "[직접] 스펙이 기준인 멀티 플랫폼 런타임 — TypeScript 레퍼런스와 Swift(SwiftUI)·Kotlin(Jetpack Compose) 런타임이 같은 파일을 같게 재생, 언어 중립 적합성 테스트 32/32 통과",
      "[직접] 표현 범위 확장 — 스프링·트윈 모션에 소리·햅틱 신호, 파티클, 그림자·블러, 제스처까지 (현재 포맷 1.9)",
      "[직접] 기존 앱 이전 도구 — from-css는 CSS 애니메이션을 nudg 파일로 옮기고 60개 지점에서 0.5px 이내로 같게 움직일 때만 저장, audit는 앱 모션 중 nudg 비율과 대체 방법을 보고",
      "[직접] AI가 스스로 확인하는 도구 — CLI·MCP 서버로 검증, 시간별 값, 모션 그래프, 실제 프레임, 변경 전후 비교(nudg_compare)를 에이전트가 직접 호출",
      "[직접] React·Vite·React Native 연결, SwiftUI·Material 3 모션을 같은 포맷의 라이브러리로 제공",
      "[직접] 적용 사례 — [PlaySnack](https://playsnack.app)(파티 게임 웹앱)의 모션을 PR 1건으로 이전, nudg 비율 49% → 89%, CSS 키프레임 42개 중 36개를 검증과 함께 변환, 앱 테스트 1,410건 모두 통과",
      "배포 — npm [@nudg/core](https://www.npmjs.com/package/@nudg/core) 1.15.0(최근 30일 4,050회 다운로드), [공식 MCP Registry](https://registry.modelcontextprotocol.io/v0/servers?search=io.github.seukwoo/nudg)에 io.github.seukwoo/nudg로 등록, 외부 MCP 카탈로그(The Gilde)에도 수록, [라이브 데모](https://seukwoo.github.io/nudg/demo/) 예제 53개",
    ],
    roles: ["설계·개발 (1인)"],
    skills: list("TypeScript, Swift, Kotlin, React, JSON Schema, MCP, Claude Code"),
    images: [
      { src: "/projects/nudg/live-demo.webp", width: 1440, height: 1000, caption: "라이브 데모 — 예제 53개가 모두 JSON 파일 하나씩으로 동작. 웹·React·SwiftUI·Jetpack Compose가 같은 파일을 읽고, 공통 적합성 테스트 32/32 통과" },
      { src: "/projects/nudg/plot.webp", width: 1520, height: 748, caption: "nudg plot이 그린 모션 그래프 — 사람과 멀티모달 모델이 같은 그래프로 움직임을 확인" },
      { src: "/projects/nudg/frames.webp", width: 1264, height: 266, caption: "nudg render가 그린 실제 프레임 — 좋아요 하트가 커졌다가 제자리로 돌아오는 순간들" },
      { src: "/projects/nudg/validator.webp", width: 1048, height: 690, caption: "오타를 내면 검증기가 위치와 고치는 방법을 알려 줌 — AI가 이 힌트로 스스로 고침" },
    ],
    cardImage: { src: "/projects/nudg/card.webp", width: 1200, height: 750 },
    caseStudy: {
      problem:
        "인터랙션 애니메이션은 보통 전용 도구에서 만드는 바이너리 파일이라, AI 코딩 도구가 읽거나 고칠 수 없고 코드 리뷰와 변경 이력도 남지 않습니다. 플랫폼마다 따로 구현해야 해서 웹·iOS·Android의 움직임이 조금씩 달라지기도 했습니다.",
      decisions: [
        "평범한 JSON 한 파일 — 모든 플랫폼이 이미 읽고, JSON Schema로 기술되고, LLM이 안정적으로 씀",
        "구현이 아니라 스펙이 기준 — 기대값을 런타임과 독립적으로 계산한 적합성 테스트를 TypeScript·Swift·Kotlin 런타임이 모두 통과해야 함",
        "코어는 그리지 않음 — 이벤트 입력과 속성 값 출력만 하는 결정적 코어, 그리기는 플랫폼 어댑터 몫",
        "AI가 스스로 확인하고, 판단은 사람이 — 검증·시뮬레이션·프레임 렌더링으로 AI가 고치고, 변경 전후를 나란히 보여 줘 사람이 고름",
        "옮길 때는 증명과 함께 — 기존 CSS를 옮길 때 같은 움직임이 증명될 때만 파일을 쓰고, 못 하는 것은 이유와 함께 거절",
      ],
      outcome: {
        label: "결과",
        text: "공개 약 6주 만에 v1.15.0까지 배포했습니다. npm에서 최근 30일 4,050회 다운로드됐고, 공식 MCP Registry에 등록돼 Claude Code 같은 AI 도구에서 바로 연결해 쓸 수 있습니다. PlaySnack은 PR 1건으로 앱 모션의 nudg 비율을 49%에서 89%로 올렸습니다. ([GitHub](https://github.com/seukwoo/nudg) · [npm](https://www.npmjs.com/package/@nudg/core) · [데모](https://seukwoo.github.io/nudg/demo/))",
        note: "다운로드 수는 npm 공개 통계 기준(2026.10.27–11.25)입니다.",
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
    keywords: list("3D Web, No-code Editor, Real-time Engine"),
    notionDate: { start: "2022-07-01", end: "2025-02-28" },
    fullName: "MX studio",
    domain: "티맥스메타에이아이/3D소프트웨어",
    period: "2022.07 - 2025.02",
    tasks: [
      "[직접] 엔진·렌더러 설계 — 물리 엔진, 실시간 렌더링·후처리, 3D 물체 이벤트·액션, 노드 기반 비주얼 코드 시스템",
      "[리드] MX studio 엔진팀과 TF팀(기획·디자인·개발·QA) 리드",
      "[리드] 제품화에 필요한 프론트엔드 UI/UX, 백엔드 서버, 인증 등 개발",
      "[리드] MX Studio를 기반으로 [닥터메타](/projects/dr-meta)·[Meta.CRO](/projects/meta-cro) 제품 개발 및 제품화",
      "[리드] 외부 베타 테스트 진행",
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
    duty: "Tech Lead (개발 본부)",
    keywords: list("Healthcare, 3D Web, Metaverse"),
    notionDate: { start: "2024-06-01", end: "2025-01-31" },
    fullName: "닥터메타",
    domain: "한국스마트헬스케어협회/헬스케어",
    period: "2024.06 - 2025.01",
    tasks: [
      "[리드] 개발 본부 테크 리드로 참여 — 기술 검토·설계, 인력·일정 산출, 개발 관리 (프로젝트 관리는 별도 PM)",
      "[리드] [MX Studio](/projects/mx-studio)로 제작한 3D 웹 컴포넌트 산출물을 활용해 웹앱 개발",
      "[리드] React 기반 웹앱과 Unity 앱 연동 설계·개발",
      "[리드] Three.js 기반 웹 메타 공간 구축 — 의료진 컨퍼런스와 환자 소통",
      "[리드] 웹캠 모션 캡처 기반 환자 운동 게임 제공",
      "[리드] 관리자 페이지 및 권한 기능 설계·개발",
      "전국 암센터에서 상용 운영 ([https://healthcare.drmeta.kr/](https://healthcare.drmeta.kr/), [https://web.drmeta.kr/](https://web.drmeta.kr/))",
    ],
    roles: ["Tech Lead", "(기술 검토·설계·인력/일정 산출·개발 관리)"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, AWS, Unity"),
    caseStudy: {
      problem:
        "전국 암센터의 의료진과 환자가 교육·컨퍼런스·소통을 위해 별도 설치 없이 웹에서 함께 모일 수 있는 공간이 필요했습니다.",
      decisions: [
        "Three.js로 의료진 컨퍼런스와 환자 소통을 위한 웹 메타 공간을 구축하고, 멀티플레이 서버에는 [MVS](/projects/mvs) 연구 기술을 활용",
        "Unity 콘텐츠와 [MX Studio](/projects/mx-studio)의 3D 컴포넌트 산출물을 React 웹앱에 심리스하게 통합",
        "환자를 위한 웹캠 모션 캡처 기반 운동 게임 제공",
      ],
      outcome: {
        label: "결과",
        text: "전국 암센터에서 상용화되어 운영되었습니다. ([web.drmeta.kr](http://web.drmeta.kr/))",
        note: "개발 본부 테크 리드로 참여했습니다 (프로젝트 관리는 별도 PM).",
      },
    },
  },
  {
    slug: "meta-cro",
    summary: "3D 기반 임상시험 가상 시뮬레이션 교육 플랫폼 (상용 운영)",
    name: "Meta CRO",
    client: "한국스마트헬스케어협회",
    duty: "Tech Lead (개발 본부)",
    keywords: list("Healthcare, 3D Simulation, Education"),
    notionDate: { start: "2023-06-01", end: "2025-01-31" },
    fullName: "Meta.CRO",
    domain: "한국스마트헬스케어협회/헬스케어",
    period: "2023.06 - 2025.01",
    tasks: [
      "[리드] 개발 본부 테크 리드로 참여 — 기술 검토·설계, 인력·일정 산출, 개발 관리 (프로젝트 관리는 별도 PM)",
      "[리드] [MX Studio](/projects/mx-studio)로 만든 3D 웹 컴포넌트 산출물을 활용한 웹앱 구조 설계",
      "[리드] Unity VR 교육 콘텐츠를 WebGL로 배포해 웹앱에 통합",
      "[리드] 3D render engine library 설계·배포 (private npm 환경 구성)",
      "전국 암센터에서 상용 운영",
    ],
    roles: ["Tech Lead", "(기술 검토·설계·인력/일정 산출·개발 관리)"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, AWS"),
    caseStudy: {
      problem:
        "임상시험은 실제로 경험해 보기 전에는 절차를 익히기 어렵고, 기존 교육 자료로는 한계가 있었습니다. 3D 가상 시뮬레이션으로 실제 경험 전에 먼저 익히면 교육의 질은 높이고 비용과 시행착오는 줄일 수 있었습니다.",
      decisions: [
        "Unity로 임상시험 가상 시뮬레이션(VR) 콘텐츠를 만들고 WebGL로 배포해 웹앱에 통합",
        "[MX Studio](/projects/mx-studio)의 3D 웹 컴포넌트 산출물로 웹앱 개발",
        "3D 렌더 엔진 라이브러리를 설계해 private npm으로 배포",
      ],
      outcome: { label: "결과", text: "전국 암센터에서 상용화되어 운영되었습니다.", note: "개발 본부 테크 리드로 참여했습니다 (프로젝트 관리는 별도 PM)." },
    },
  },
  {
    slug: "nenoonn",
    summary: "규제 샌드박스 실증특례로 처음 열린 콘택트렌즈 온라인 구매·배송 서비스 — 크로스플랫폼 앱",
    name: "내눈N",
    client: "픽셀로",
    duty: "Project Leader",
    keywords: list("Commerce, Cross-platform App, Regulatory Sandbox"),
    notionDate: { start: "2024-03-01", end: "2024-09-15" },
    fullName: "내눈N",
    domain: "픽셀로/커머스",
    period: "2024.03 - 2024.09",
    tasks: [
      "[리드] 책임자(PL)로 설계·개발 리드 — 개발자·QA TF팀 운영, 고객사와 요구사항 조율",
      "[직접] 프론트엔드·백엔드 간 데이터 흐름과 서버 시퀀스 설계(팀과 함께), 기술 리스크 검토",
      "[직접] 결제·배송 등 외부 API 연동 설계",
      "[직접] 운영 관리자 페이지 설계 — 통합 관리자와 안경점별 관리 화면 분리",
      "[리드] React 웹 + 웹뷰 기반 크로스플랫폼 앱으로 iOS·Android 각각 출시 — 스토어 심사 기준에 맞춘 빌드·배포",
      "상용화 운영 중 (https://nenoonn.mycafe24.com/)",
    ],
    roles: ["System Engineer, Project Manager"],
    skills: list("Docker, Git, HTML, JavaScript, TypeScript, Java, AWS, Android, iOS"),
    caseStudy: {
      problem:
        "콘택트렌즈 온라인 판매는 원래 허용되지 않던 영역이라, 규제 샌드박스 실증특례를 받은 업체와 함께 국내에 없던 서비스를 처음부터 만들어야 했습니다. 사용자는 모바일을 비롯한 여러 플랫폼에서 접속하길 기대했습니다.",
      decisions: [
        "웹 하나를 웹뷰 기반 앱으로 감싸 iOS·Android에 각각 출시 — 작은 팀으로 세 플랫폼 대응",
        "결제·배송 외부 API와 프론트·백엔드 간 데이터 흐름·시퀀스를 먼저 설계하고 기술 리스크를 검토한 뒤 개발",
        "운영 관리자를 통합 관리자와 안경점별 화면으로 나눠, 본사와 각 매장이 각자 필요한 범위만 관리",
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
    keywords: list("GIS, Data Center, B2B"),
    notionDate: { start: "2023-12-01", end: "2024-08-15" },
    fullName: "GIS S-DCIS",
    domain: "삼성물산/건설",
    period: "2023.12 - 2024.08",
    tasks: [
      "[리드] 개발 TF팀 리드하며 개발 PM 업무 수행",
      "[리드] GeoServer와 PostGIS를 활용한 공간함수 서버 및 DB 구축",
      "[리드] GIS 데이터 기반 map platform 구성을 위한 OpenLayers 오픈소스 기술 연구",
      "[리드] 공공 데이터 활용 및 정책 이슈 핸들링, 폐쇄망 소스 이관·온프레미스 구축 트러블슈팅",
      "[협업] 기획팀·사업팀·타사 연구팀과 소통, 연우테크놀러지 개발 연구원들과 공동 개발 후 납품",
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
    duty: "Tech Lead (개발 본부)",
    keywords: list("Server Engine, Real-time Sync, C++"),
    notionDate: { start: "2023-01-02", end: "2024-09-15" },
    fullName: "MVS (Metaverse Server)",
    domain: "티맥스메타에이아이/Server engine",
    period: "2023.01 - 2024.09",
    tasks: [
      "[리드] 개발 본부 테크 리드로 실시간 다중 접속 싱크 서버 연구 참여 — 기술 검토·설계, 인력·일정 산출, 개발 관리",
      "[리드] C++ 기반 서버 엔진 기술 검토·설계",
      "[리드] Client Library(JavaScript, C#)와 서비스 플로우 설계",
      "연구 기술을 [닥터메타](/projects/dr-meta) 의료진 컨퍼런스의 멀티플레이 서버로 적용",
    ],
    roles: ["Tech Lead", "(기술 검토·설계·인력/일정 산출·개발 관리)"],
    skills: list("Docker, Git, C++, AWS, Javascript, C#"),
    caseStudy: {
      problem: "메타버스 서비스에서 여러 사용자가 같은 공간에 동시에 접속해 상호작용하려면 실시간 동기화 서버가 필요했습니다.",
      decisions: ["C++ 기반 서버 엔진 기술 검토·설계", "JavaScript·C# 클라이언트 라이브러리와 서비스 플로우 설계"],
      outcome: {
        label: "결과",
        text: "연구 기술이 [닥터메타](/projects/dr-meta) 의료진 컨퍼런스의 멀티플레이 서버로 시스템 내부에서 활용되었습니다.",
        note: "개발 본부 테크 리드로 참여했습니다.",
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
