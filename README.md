# Guide 자료집 v0.2

Vue + **페이지 모델** + **Flipbook** 뷰어로 자료집을 구성하고 PDF로 배포합니다.

## 문서

| 문서 | 내용 |
|------|------|
| [`series/postman/SERIES.md`](series/postman/SERIES.md) | 시리즈 기획 · Vol/Part 구성 · 문체·이미지 가이드 |
| [`_shared/guide/AUTHORING.md`](_shared/guide/AUTHORING.md) | Part 작성 · `buildPartPages` · PDF 출력 |

## 구조

```
app/          Vue 앱 (뷰어·블록·PDF 레이아웃)
_shared/      공통 템플릿 · pdf-title
series/       Postman 시리즈 · parts · meta.json
scripts/      PDF export (Puppeteer)
```

## 시작

```bash
cd app
npm install
npm run dev
```

http://localhost:5273

## GitHub Pages (A 레포 뷰어)

- URL: https://meowdule.github.io/collection/
- 워크플로: `.github/workflows/deploy-pages.yml`
- 레포 Settings → Pages → Source: **GitHub Actions** 선택 필요

## PDF 출력

```bash
cd scripts
node export-guide-pdf.mjs postman/vol-01-start/1-1-postman-intro
```

파일명 예: `vol.1-1 Postman이 뭔가요.pdf`

## GitHub Actions 미러 배포 (A -> B)

소스 레포(A: `meowdule/collection`)에서 산출물을 만들어 배포 레포(B: `TBELLai/collection`)로 미러링합니다.

- 워크플로: `.github/workflows/deploy-postman-mirror.yml`
- 산출물 생성: `scripts/build-postman-publish.mjs`
- 미러 대상 파트: `series/postman/vol-01-start/publish-parts.json` (없으면 `parts/` 전체)
- B 레포 구조:
  - `postman/SERIES.md` — 소스 `SERIES.md`의 **「시리즈 구성」 섹션만** (제작 가이드 제외)
  - `postman/vol-01-start/*.pdf`
  - (옵션) `postman/vol-01-start/**/*.json`

필수 GitHub Secret (A 레포에 설정):

- `TBELLAI_COLLECTION_TOKEN`
  - 권한: 대상 B 레포 `contents: write`

미러 모드이므로 삭제도 반영됩니다.
