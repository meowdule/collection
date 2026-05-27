# publish-assets

GitHub Actions 미러 배포 시 PDF 외 추가 산출물(JSON 등)을 함께 보내고 싶을 때 이 폴더를 사용합니다.

- 배포 워크플로: `.github/workflows/deploy-postman-mirror.yml`
- 수집 스크립트: `scripts/build-postman-publish.mjs`
- 포함 조건: 워크플로 입력 `include_json = true` (기본 true)

현재 규칙:

- 이 폴더 아래의 `*.json` 파일만 재귀적으로 수집
- 배포 대상(B 레포): `postman/vol-01-start/` 아래로 동일 상대 경로 복사

예시:

- `series/postman/vol-01-start/publish-assets/runner-data/users.json`
  -> `postman/vol-01-start/runner-data/users.json`
