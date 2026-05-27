# 자료집 작성 가이드

시리즈 기획·Vol 구성: [`series/postman/SERIES.md`](../../series/postman/SERIES.md)

Vue + 페이지 모델로 파트(1-1, 1-2 …)를 만들 때 **아래 3페이지는 반드시 포함**합니다.  
본문(p3 ~ 마지막 직전)만 파트마다 작성하면 됩니다.

## 고정 3페이지

| 순서 | 역할 | 함수 | 작성자가 정하는 것 |
|------|------|------|-------------------|
| **p1** | 표지 | `buildCoverPage` | **제목(titleLines) 필수**, 배지, partLabel, lead |
| **p2** | 목차 | `buildTocPage` | 학습 목표(goals), 선택 quote, 흐름 카드 4개 |
| **마지막** | 로드맵 + CTA | `buildClosingPage` | Vol 로드맵, 현재 파트 번호, CTA 문구 |

레이아웃·섹션 제목·CTA 버튼 문구(`다음으로 이동`)는 **템플릿 고정**입니다.

### 마지막 페이지 규칙

- 로드맵에서 현재 파트는 `currentPartNum`으로 **강조만** (하이라이트)
- ~~`← 지금 여기`~~ 문구 **사용하지 않음**
- CTA 버튼: **「다음으로 이동」** 고정 (`nextLabel` 직접 쓰지 않음)

---

## 새 파트 만들기

### 1. 폴더

```
series/<series>/<vol>/parts/<part-id>/
  meta.json
  pages.ts
```

### 2. meta.json

```json
{
  "series": "Postman 사용법 자료집",
  "vol": "Vol.1 설치 및 시작하기",
  "part": "1-2 회원가입 & 로그인",
  "pdfTitle": "vol.1-2 회원가입 & 로그인"
}
```

- `part`는 `"1-2 설치하기"`처럼 **번호 + 공백 + 제목**
- `pdfTitle`은 생략 가능 → `vol.1-2 설치하기` 형식으로 자동 생성
- PDF 파일명: `vol.1-2 회원가입 & 로그인.pdf` (기본 `index.pdf` 대신)

### 3. pages.ts — `buildPartPages` 사용

```ts
import type { ContentPageData } from '@/types/guide'
import { buildPartPages } from '@shared/guide/page-templates'
import meta from './meta.json'

export const partId = '1-2-signup-login'
export { meta }

const body: ContentPageData[] = [
  // p3부터 본문만 작성 (A4 1 pages[] 항목 = 1장)
  { type: 'content', blocks: [ /* ... */ ] },
]

export const pages = buildPartPages({
  cover: {
    badges: ['Postman 사용법 자료집', 'Vol.1 설치 및 시작하기'],
    warmBadge: '1-2',
    partLabel: 'PART 02 · 계정 연결하기',
    titleLines: ['회원가입 &', '로그인'],
    leadLines: ['Postman 계정을 만들고 로그인해요.'],
  },
  toc: {
    goals: [
      'Postman에서 계정을 만들거나 로그인할 수 있어요.',
      '로그인 후 홈 화면이 정상적으로 보여요.',
    ],
    quote: '선택: 파트 시작 안내 한 줄',
    flowCards: [
      { title: '로그인 필요성', body: '저장·동기화·팀 공유' },
      { title: 'STEP 1 · 가입', body: '이메일 Sign up' },
      { title: 'STEP 2 · 로그인', body: 'Email / Google' },
      { title: '확인', body: '홈 화면 점검' },
    ],
  },
  body,
  closing: {
    roadmapSectionLabel: 'Vol.1 로드맵',
    currentPartNum: '1-2',
    roadmap: [
      { num: '1-1', label: 'Postman이 뭔가요' },
      { num: '1-2', label: '회원가입 & 로그인' },
      { num: '1-3', label: '웹 실행 및 앱 설치' },
      { num: '1-4', label: '화면 보기 및 Workspace 생성' },
    ],
    ctaTitle: '계정 연결 완료! 다음은 Postman 실행',
    ctaSubtitle: '1-3에서 웹 또는 Windows 앱으로 Postman을 실행해 볼 거예요.',
  },
})
```

### 4. 레지스트리 등록

`app/src/lib/guide-registry.ts`에 경로 추가.

---

## 본문 작성 팁

- **`pages[]` 1항목 = A4 1장** — Flipbook·PDF 동일
- 한 장에 넣을 내용이 많으면 `body`에 `{ type: 'content', blocks: [...] }`를 **여러 개** 두기
- PDF 미리보기: `#/pdf/<series>/<vol>/<part-id>`
- PDF 출력: `node scripts/export-guide-pdf.mjs <series>/<vol>/<part-id>`

---

## 새 채팅에서 AI에게 줄 지시 (복사용)

아래를 그대로 붙여 넣고, **볼드 부분만** 바꾸면 됩니다.

```
guide_repo_v0.2에서 Postman 자료집 파트를 만들어줘.

- 레포: c:\devlop\Guide\guide_repo_v0.2
- 작성 가이드: _shared/guide/AUTHORING.md 반드시 따르기
- 고정 3페이지: buildPartPages({ cover, toc, body, closing }) — 표지·목차(p2)·마지막(로드맵+CTA)는 템플릿 필수
- 본문만 작성: body[] (pages[] 1항목 = A4 1장)
- 참고 원문: c:\devlop\Guide\guide_repo_v0.1\series\postman\vol-01-start\<폴더>\index.html

이번 작업:
- 파트: **1-2-signup-login** (Vol.1 회원가입 & 로그인)
- meta.part: **1-2 회원가입 & 로그인**
- v0.1 HTML 내용을 pages.ts로 옮기기
- guide-registry.ts 등록
- PDF: node scripts/export-guide-pdf.mjs postman/vol-01-start/1-2-signup-login
```

---

## 블록 종류 (본문용)

| kind | 용도 |
|------|------|
| `section-header` | 섹션 제목 |
| `goals` | 체크리스트 (p2는 템플릿 사용) |
| `quote` | 인용 박스 |
| `cards-2` / `cards-3` | 카드 그리드 (`body`는 HTML 허용, `v-html`) |
| `key-box` | 핵심 한 줄 |
| `split-2` | 2단 비교 |
| `flow` | 3단 흐름 |
| `pain-rows` | 불편함 목록 |
| `term-grid` | 용어 정리 |
| `steps` | 따라하기 단계 (+ 스크린샷 슬롯) |
| `figure` | 단독 이미지 슬롯 |
| `tip-box` / `warn-box` | Tip·주의 (html) |
| `check-done` | 완료 체크리스트 (`items` HTML 허용, `v-html`) |
| `os-tabs` | Windows / Mac 탭 표시 |
| `roadmap` / `cta` | **마지막 페이지만 템플릿 사용** |

---

## 참고 구현

- 템플릿: `_shared/guide/page-templates.ts`
- PDF 제목: `_shared/guide/pdf-title.mjs`
- 샘플: `series/postman/vol-01-start/parts/1-1-postman-intro/pages.ts`
- 회원가입·따라하기 샘플: `parts/1-2-signup-login/pages.ts`, `parts/1-3-web-install/pages.ts`
