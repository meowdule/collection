# Postman 실무 가이드 — 전체 시리즈 로드맵

## 시리즈 설계 원칙

- 메인 라인은 비개발자도 끊기지 않고 완주할 수 있어야 한다
- 심화 사이드 시리즈는 선수 조건이 아닌 "더 알고 싶다면" 온도로 연결한다
- 코드·터미널이 필요한 내용은 메인 라인에 넣지 않는다
- **Vol.1 · Vol.2에서는 Mock Server를 사용하지 않는다** — Vol.S1 전용

---

## 실습 API 정책

| Vol | 목표 | 실습 API | 비고 |
|-----|------|----------|------|
| Vol.1 | Postman 기본 사용법 | Postman Echo | 로그인 없음 · 조작 익숙화 |
| Vol.2 | 자동화 | DummyJSON | 로그인 · 토큰 · Bearer |
| Vol.S1 | Mock Server | (자체 Mock) | Example · Mock URL · Variables |

---

## 메인 라인 (비개발자 완주 가능)

```text
Vol.1 입문 → Vol.2 자동화 → Vol.3 Flow 활용 → Vol.4 Monitor
```

### Vol.1 — Postman 입문
대상: Postman을 처음 쓰는 모든 사람  
완주 후: Postman Echo로 요청을 보내고, Environment·변수로 URL을 관리할 수 있다

| 파트 | 제목 | 주요 흐름 |
|---|---|---|
| 1-1 | Postman이 뭔가요 | 개요 · 앱 설치 |
| 1-2 | Postman 시작하기 | 회원가입 · 로그인 · 화면 구성 |
| 1-3 | Workspace 만들기 | Workspace 개념 · 생성 · 기본 세팅 |
| 1-4 | 실습 Collection 가져오기 | Collection JSON 다운로드 · Import · Echo 연결 확인 |
| 1-5 | Collection 만들기 | Collection 개념 · 생성 · 이름 설정 |
| 1-6 | 기본 GET 요청 보내기 | `GET postman-echo.com/get` · Send · 응답 확인 · 저장 |
| 1-7 | Query Params 포함 요청 보내기 | Params · `?name=kim` · 결과 비교 · 저장 |
| 1-8 | Body 데이터 포함 POST 요청 보내기 | Body · `POST postman-echo.com/post` · 응답 확인 · 저장 |
| 1-9 | Environment 만들기 · 변수 등록하기 | Environment 개념 · 생성 · Key-Value · 저장 |
| 1-10 | 요청에서 변수 사용하기 | `{{변수명}}` · URL 적용 · 확인 |

※ Environment·변수는 1-9 이전 파트에서 다루지 않음.

### Vol.2 — Postman 자동화
대상: 반복 테스트를 자동화하고 싶은 분  
선수 조건: Vol.1 완주  
실습 API: **DummyJSON** (`https://dummyjson.com`)  
완주 후: 로그인 토큰 자동 저장부터 Runner 반복 실행까지 자동화 흐름을 직접 구성할 수 있다

| 파트 | 제목 | 주요 흐름 |
|---|---|---|
| 2-1 | 로그인하고 토큰 꺼내기 | `POST dummyjson.com/auth/login` · Body · 토큰 확인 |
| 2-2 | 토큰을 변수에 자동 저장하기 | Tests · `pm.environment.set` · 저장 확인 |
| 2-3 | 다른 요청에 토큰 자동 적용하기 | Bearer Token · `GET dummyjson.com/auth/me` |
| 2-4 | 여러 요청 순서대로 저장하기 | 요청 순서 정리 · Collection 구성 확인 |
| 2-5 | Collection Runner 실행하기 | Runner · DummyJSON 요청 반복 실행 · 결과 확인 |
| 2-6 | 로그인 → 다음 요청 자동 실행 흐름 만들기 | 토큰 저장 · 순서 설정 · 연속 실행 |
| 2-7 | CSV · JSON 데이터로 반복 실행하기 | 데이터 파일 · Runner 업로드 · 반복 실행 |
| 2-8 | 실행 결과 확인하기 | 성공·실패 확인 · 결과보내기 |

※ Newman(CLI 실행)은 메인 라인에서 제외.  
  2-8 마지막에 "더 나아가기: Newman으로 터미널에서 실행하고 싶다면 → Vol.S3" 한 줄 언급.

### Vol.3 — Postman Flow 활용
대상: 요청 흐름을 시각적으로 구성하고 싶은 분
선수 조건: Vol.2 완주
완주 후: 조건 분기와 순서 연결이 포함된 Flow를 직접 만들 수 있다

※ 파트 구성은 추후 작성

### Vol.4 — Monitor & 알림
대상: API 상태를 주기적으로 자동 확인하고 싶은 분
선수 조건: Vol.2 완주
완주 후: Monitor를 설정하고 실행 결과를 확인할 수 있다

※ Webhook · 외부 알림 연동은 메인 라인에서 제외. Vol.S5로 분리.  
※ 파트 구성은 추후 작성

---

## 심화 사이드 시리즈 (선택)

메인 라인과 독립적으로 존재. 선수 조건이 아닌 "더 탐구하고 싶다면" 온도로 연결.

| 시리즈 | 제목 | 유입 포인트 | 다루는 내용 |
|---|---|---|---|
| Vol.S1 | Mock Server 만들기 | Vol.1 완주 후 "가짜 서버가 궁금하다면" | Example Response · Mock URL · Collection Variables · Mock 생성 · Export |
| Vol.S2 | OpenAPI 활용 | Vol.2 또는 Vol.3 완주 후 | YAML 명세 Import · 자동 Collection 생성 |
| Vol.S3 | Newman & CI 연동 | 2-8 "터미널에서 실행하고 싶다면" | CLI · CI/CD 파이프라인 |
| Vol.S4 | Scripting 심화 | Vol.2 완주 후 | JavaScript · 동적 자동화 |
| Vol.S5 | Webhook & 외부 알림 | Vol.4 완주 후 | Monitor · Slack 등 외부 연동 |

---

## 최종 목표 요약

### Vol.1 (Postman Echo)

```text
Workspace → Collection → GET → Query Params → POST → Environment → Variables
```

### Vol.2 (DummyJSON)

```text
Login → Token → Authorization → Runner → 자동화
```

### Vol.S1 (Mock Server)

```text
Example → Mock URL → Mock Collection
```

---

## 전체 흐름 요약

```text
[메인 라인]
Vol.1 입문 → Vol.2 자동화 → Vol.3 Flow 활용 → Vol.4 Monitor

[심화 사이드 — 언제든 선택]
Vol.1 완주   ──→ Vol.S1 Mock Server
2-8 완료     ──→ Vol.S3 Newman & CI
Vol.2 완주   ──→ Vol.S4 Scripting 심화
Vol.2/3 완주 ──→ Vol.S2 OpenAPI 활용
Vol.4 완주   ──→ Vol.S5 Webhook & 외부 알림
```
