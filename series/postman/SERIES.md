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

### 📘 Vol.1 — 설치 및 시작하기

| 파트 | 제목 | 주요 흐름 |
| --- | --- | --- |
| 1-1 | Postman이 뭔가요 | 왜 쓰는지 · API 30초 이해 · 앱 vs Postman · 실무 예시 4가지 |
| 1-2 | 회원가입 & 로그인 | 웹으로 열기 · 회원가입 · 로그인 · 홈 화면 확인 |
| 1-3 | 화면 구성 살펴보기 | 각 영역 역할 · Collections·Request 위치 · 앱 설치 유도 |
| 1-4 | Workspace 만들기 | Workspace 개념 · 만들기 · 팀 공유 설정 |

### 📗 Vol.2 — 첫 번째 요청 보내기

| 파트 | 제목 | 주요 흐름 |
| --- | --- | --- |
| 2-1 | Collection 만들기 | Collection 개념 · 새 Collection 생성 · 이름·설명 설정 |
| 2-2 | 기본 GET 요청 보내기 | URL 입력 · Send · 응답 확인 (상태 코드·Body) |
| 2-3 | Query Params 포함 요청 보내기 | Params 탭 · 키-값 입력 · 결과 비교 |
| 2-4 | Body 데이터 포함 POST 요청 보내기 | Body 탭 · JSON 입력 · 응답 확인 |
| 2-5 | 요청 저장하고 다시 실행하기 | Save · Collection에 담기 · 재실행 |

> ※ Response(JSON), 상태 코드, 실패 응답 확인은  
> **각 요청 실습 내부에서 함께** 설명

### 📙 Vol.3 — 변수 & 로그인 자동화

| 파트 | 제목 | 주요 흐름 |
| --- | --- | --- |
| 3-1 | Environment 만들기 | Environment 개념 · 새 Environment 생성 |
| 3-2 | 변수 등록하기 | 변수 개념 · Key-Value 입력 · 저장 |
| 3-3 | 요청에서 변수 사용하기 | {{변수명}} 문법 · URL에 적용 · 확인 |
| 3-4 | 로그인 요청 보내기 | 로그인 API · Body 입력 · 응답 확인 |
| 3-5 | 로그인 응답에서 토큰 꺼내기 | Response JSON 읽기 · 토큰 위치 확인 |
| 3-6 | 토큰을 Environment 변수에 자동 저장하기 | Tests 탭 · pm.environment.set · 저장 확인 |
| 3-7 | 다른 요청에 토큰 자동 적용하기 | Authorization 탭 · Bearer Token · 변수 연결 |

### 📕 Vol.4 — Collection Runner로 연속 실행

| 파트 | 제목 | 주요 흐름 |
| --- | --- | --- |
| 4-1 | 여러 요청 저장하기 | 요청 순서 정리 · Collection 구성 확인 |
| 4-2 | Collection Runner 실행하기 | Runner 열기 · 실행 · 결과 화면 확인 |
| 4-3 | 로그인 → 다음 요청 자동 실행 흐름 만들기 | 토큰 저장 확인 · 순서 설정 · 연속 실행 |
| 4-4 | CSV / JSON 데이터로 반복 실행하기 | 데이터 파일 준비 · Runner에 업로드 · 반복 실행 |
| 4-5 | 실행 결과 확인하기 | 성공·실패 확인 · 결과보내기 |

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
vol.1-2 회원가입 & 로그인.pdf
vol.2-1 Collection 만들기.pdf
```

`meta.json`의 `part` 필드(`1-1 Postman이 뭔가요`)에서 자동 생성.  
수동 지정 시 `pdfTitle` 사용.

---

## 시리즈 완료 시 사용자 수준

- Postman 설치·실행 및 Workspace 사용
- Collection에 요청 만들기 · GET / Params / POST 보내기
- Environment·변수로 URL·토큰 관리
- 로그인 토큰 자동 저장·다른 요청에 적용
- Collection Runner로 연속 실행 · CSV/JSON 반복 · 결과 확인
