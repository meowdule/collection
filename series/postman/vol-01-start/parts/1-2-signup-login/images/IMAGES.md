# 1-2 Postman 시작하기 — 스크린샷

`pages.ts`에서 참조하는 파일만 `images/`에 두면 됩니다.

| 파일 | 용도 | 본문 위치 | 상태 |
| --- | --- | --- | --- |
| `01-start-signin.png` | Sign Up — 이름·이메일·비밀번호 입력 | Sign Up STEP 1 | 사용 |
| `03-verify-email-1.png` | 받은 편지함 — Postman 인증 메일 | 이메일 인증 STEP 1 | 사용 |
| `03-verify-email-2.png` | Postman — Verify email 화면 | 이메일 인증 STEP 2 | 사용 |
| `04-Initial setup-1.png` | Initial setup — 사용 목적·역할 선택 | 첫 설정 STEP 1 | 사용 |
| `04-Initial setup-2.png` | Initial setup — 추가 설정 | 첫 설정 STEP 2 | 사용 |
| `05-home-after-login.png` | 로그인·설정 완료 후 워크스페이스 | 화면 구성 | 사용 |

## 폴더에 있으나 미사용

| 파일 | 비고 |
| --- | --- |
| `00-start-postman.png` | 1-1(접속·설치)로 이동 — 삭제 또는 1-1으로 옮기기 권장 |
| `04-Initial pending.png` | 캡처 보류·대체 — 삭제 검토 |
| `06-start-signin.png` | `01-start-signin.png`와 중복 — 삭제 검토 |

> `import.meta.glob('./images/*')`는 폴더 내 PNG 전체를 번들에 포함합니다. 미사용 파일은 빌드 용량만 키웁니다.
