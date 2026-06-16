# Postman 실무 가이드 시리즈

리드·실습용 **따라하기형** 자료집. Vol·Part별 PDF로 배포한다.

---

## 목적

Postman을 처음 쓰는 사람이:

- 복잡한 이론 없이
- 실제로 요청을 내보고
- 실무 흐름을 빠르게 경험하게 만드는 것

을 목표로 한다.

---

## 자료집 제작 가이드

- 한 자료집 = **한 행동 흐름** 기준으로 구성
- 설명보다 **따라하기** 중심
- 실무에서 실제 사용하는 흐름 기준으로 작성
- 개념 설명은 최소화하고 실습 안에서 자연스럽게 설명
- 상태 코드 / Response(JSON) / Headers 등은 **별도 자료집으로 분리하지 않음**
- 페이지 수는 **본문 3~6페이지** 내 권장 (표지·목차·마지막 제외)
- 읽는 시간은 **3~5분** 내 목표
- 이미지도 “설명용”이 아니라 **“행동 유도용”** 기준으로 최소 사용

### 좋은 예

- 기본 GET 요청 보내기
- Query Params 포함 요청 보내기
- 로그인 요청 보내기
- Token 자동 저장하기

### 피해야 하는 구성

- 상태 코드 이해하기
- Response(JSON) 읽는 법
- REST API 개념 설명
- HTTP 이론 설명

→ 이런 내용은 **요청 실습 안에서 자연스럽게** 포함

---

## 공통 문서 구성

모든 Part는 아래 **고정 3페이지** + 본문으로 만든다.  
→ [`../../_shared/guide/AUTHORING.md`](../../_shared/guide/AUTHORING.md)

| 순서 | 역할 |
|------|------|
| p1 | 표지 (제목 필수) |
| p2 | 목차 — 「이 자료를 읽고 나면」+ 「이 파트에서 다루는 흐름」 |
| 마지막 | Vol 로드맵 + CTA (버튼: **다음으로 이동**) |
| p3~ | 본문 (행동 따라하기) |

---

## 시리즈 구성

이 README는 전체 시리즈 중 메인 라인 첫 번째 시리즈(Vol.1)에 해당한다.
전체 로드맵은 SERIES_ROADMAP.md 참고.

### 변경 배경
- 기존 단일 Vol.1~4 구성을 메인 라인(Vol.1~4)과 심화 사이드(Vol.S1~S5)로 전면 재편
- 이 README가 커버하는 범위: Vol.1(입문) — Postman 조작 익숙화부터 Environment·변수까지
- **Vol.1 · Vol.2에서는 Mock Server를 사용하지 않음** — Vol.S1 전용
- 로그인 자동화 · Runner는 Vol.2(자동화)로 분리

### 실습 API 정책

| Vol | 목적 | 실습 API | 기본 URL |
|-----|------|----------|----------|
| Vol.1 | Postman 조작 익숙화 | Postman Echo | `https://postman-echo.com` |
| Vol.2 | 로그인 · 토큰 · 자동화 | DummyJSON | `https://dummyjson.com` |
| Vol.S1 | Mock Server 심화 | (자체 Mock) | Vol.S1에서 다룸 |

Vol.1에서는 API를 배우기보다 **요청 보내기 · Params · Body · 저장**에 집중한다.  
Environment·변수는 **1-9 · 1-10**에서 처음 등장한다 (1-4 이전에 다루지 않음).

### 📘 Vol.1 — Postman 입문

| 파트 | 제목 | 주요 흐름 |
|---|---|---|
| 1-1 | Postman이 뭔가요 | 개요 · 앱 설치 |
| 1-2 | Postman 시작하기 | 회원가입 · 로그인 · 화면 구성 |
| 1-3 | Workspace 만들기 | Workspace 개념 · 생성 · 기본 세팅 |
| 1-4 | 실습 Collection 가져오기 | Collection JSON 다운로드 · Import · Echo 연결 확인 |
| 1-5 | Collection 만들기 | Collection 개념 · 생성 · 이름 설정 |
| 1-6 | 기본 GET 요청 보내기 | `GET postman-echo.com/get` · Send · 응답 확인 · 저장 |
| 1-7 | Query Params 포함 요청 보내기 | Params 탭 · `?name=kim` · 결과 비교 · 저장 |
| 1-8 | Body 데이터 포함 POST 요청 보내기 | Body 탭 · `POST postman-echo.com/post` · 응답 확인 · 저장 |
| 1-9 | Environment 만들기 · 변수 등록하기 | Environment 개념 · 생성 · Key-Value 입력 · 저장 |
| 1-10 | 요청에서 변수 사용하기 | `{{변수명}}` 문법 · URL에 적용 · 확인 |

> ※ Response(JSON), 상태 코드, 실패 응답 확인은  
>   각 요청 실습 내부에서 함께 설명

---

## 이미지 가이드

이미지는 **설명용이 아니라 행동 유도용**이다.

**꼭 필요한 화면만**

- Send 버튼
- Params 입력 위치
- Body 탭
- Authorization 위치
- Environment / Variables
- Tests 탭
- Runner 실행 버튼

**불필요한 캡처 금지**

- 전체 화면 반복
- 장식용 이미지
- 의미 없는 UI 소개

---

## 문체 가이드

**좋은 예**

- URL을 입력하고 Send를 눌러보세요.
- 401 응답은 로그인 정보가 없는 상태입니다.

**나쁜 예**

- HTTP Request를 Endpoint로 전송합니다.
- RESTful API 아키텍처란…

---

## PDF 파일명

Part별 PDF 제목·파일명 형식:

```text
vol.1-1 Postman이 뭔가요.pdf
vol.1-2 Postman 시작하기.pdf
vol.1-3 Workspace 만들기.pdf
vol.1-4 실습 Collection 가져오기.pdf
vol.1-5 Collection 만들기.pdf
vol.1-6 기본 GET 요청 보내기.pdf
vol.1-7 Query Params 포함 요청 보내기.pdf
vol.1-8 Body 데이터 포함 POST 요청 보내기.pdf
vol.1-9 Environment 만들기 · 변수 등록하기.pdf
vol.1-10 요청에서 변수 사용하기.pdf
```

`meta.json`의 `part` 필드(`1-1 Postman이 뭔가요`)에서 자동 생성.  
수동 지정 시 `pdfTitle` 사용.

---

## 시리즈 완료 시 사용자 수준

- Postman 설치·실행 및 Workspace · Collection 사용
- Postman Echo로 GET · Query Params · POST 요청 보내기 (저장 포함)
- Environment · 변수로 URL 관리 (1-9 · 1-10)
- 다음 단계: DummyJSON 로그인 · 토큰 자동화 · Runner는 Vol.2(자동화)에서 이어서 진행
- Mock Server가 궁금하면 Vol.S1(심화)에서 선택 학습
