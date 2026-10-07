# 이석우 포트폴리오

https://seukwoolee.vercel.app — Next.js 16 · Tailwind CSS v4 · GSAP · Swiper, Vercel 배포.

## 명령어

```bash
pnpm install
pnpm dev         # 개발 서버 http://localhost:3000
pnpm test        # 콘텐츠 무결성 + 유틸 테스트
pnpm typecheck   # 타입 검사
pnpm lint
pnpm build       # 프로덕션 빌드
pnpm assets      # notion-export/ 원본 → public/ 이미지 재생성
pnpm resume:pdf  # 이력서 PDF(public/docs/resume.pdf)를 /resume 콘텐츠로 재생성 (로컬 Chrome 필요)
```

`main`에 push하면 Vercel이 자동으로 배포합니다. push 전에 `pnpm test && pnpm build`를 권장합니다.

## 구조

```
src/
├─ app/                  # 라우트. 콘텐츠를 섹션에 연결만 함 (로직·문구 없음)
│  ├─ page.tsx           # 홈: 섹션 조립
│  └─ work/              # /work 목록, /work/[slug] 상세 (정적 생성)
├─ content/              # ✏️ 사이트에 보이는 모든 텍스트 (원본: seukwoo.notion.site)
│  ├─ index.ts           # 진입점 — 컴포넌트는 "@/content"에서 import
│  ├─ site.ts            # 사이트 설정, 내비게이션, 섹션 제목
│  ├─ labels.ts          # 버튼·필드명 등 고정 UI 문구
│  ├─ profile.ts         # 이름, 소개, 핵심 역량, PDF, 소셜 링크
│  ├─ experience.ts      # 직무 및 이력
│  ├─ projects.ts        # 프로젝트 목록 + 상세
│  ├─ skills.ts · education.ts · activities.ts · certifications.ts
│  └─ images.generated.ts  # pnpm assets가 생성 (직접 수정 금지)
├─ components/
│  ├─ ui/                # 범용 부품: Card, Chip, Eyebrow, ButtonLink, AppLink, RichText
│  ├─ layout/            # Header, Footer, Container
│  ├─ motion/            # GSAP 애니메이션: Reveal, SplitHeadline
│  ├─ sections/          # 홈 섹션 단위 (Section 프레임 + 각 섹션)
│  └─ profile/ about/ experience/ project/ skill/ credentials/   # 도메인별 컴포넌트
├─ lib/                  # 순수 함수 (링크 판별, 리치텍스트 파서, 프로젝트 조회)
└─ types/content.ts      # 콘텐츠 타입 정의
scripts/
├─ prepare-assets.mjs           # 이미지 WebP 변환, PDF 복사
└─ notion-assets.config.json    # Notion 페이지 ↔ 프로젝트 slug, PDF 파일명 매핑
```

의존 방향: `app → sections → 도메인 컴포넌트 → ui`. 데이터는 props로 내려가고, 고정 문구만 `labels`에서 직접 읽습니다.

## 자주 하는 수정

| 하고 싶은 일 | 수정할 곳 |
| --- | --- |
| 소개·경력·수상 등 문구 수정 | `src/content/*.ts` 해당 파일 |
| 버튼·필드명 문구 수정 | `src/content/labels.ts` |
| 섹션 제목/순서 변경 | 제목: `src/content/site.ts` · 순서: `src/app/page.tsx` |
| 프로젝트 추가 | `projects.ts`에 항목 추가 → `public/projects/<slug>/01.webp…` 이미지 추가 (또는 `notion-assets.config.json`에 매핑 후 `pnpm assets`) |
| 이력서 PDF | 콘텐츠를 고친 뒤 `pnpm resume:pdf` 실행 → 생성된 `public/docs/resume.pdf`를 함께 커밋. 레이아웃은 `components/resume/ResumePrint.tsx` (`/resume/print`) |
| 색상·폰트 | `src/app/globals.css`의 `:root` 토큰 (다크 모드 포함) |
| 새 섹션 추가 | `components/sections/`에 `<Section meta=…>`로 감싼 컴포넌트 작성 → `site.ts`에 제목 추가 → `page.tsx`에 배치 |

텍스트 안의 링크는 `[표시 텍스트](https://주소)` 형식으로 쓰면 자동으로 링크가 됩니다.

## 참고

- 모바일 우선 레이아웃: 기본 1열, `sm`(640px)·`lg`(1024px)부터 다단.
- 애니메이션은 `prefers-reduced-motion` 사용자에게 꺼집니다.
- 이미지는 미리 WebP로 변환해 Vercel 이미지 최적화를 쓰지 않습니다 (무료 플랜 한도 보호).
- `notion-export/`(Notion 원본 백업)는 git에서 제외되어 있습니다.
