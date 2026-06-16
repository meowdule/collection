# publish-assets

Vol.1 실습 Collection JSON을 **TBELL-ref/collection** GitHub Pages에 배포합니다.

## 학습자 흐름 (1-4)

1. `https://tbell-ref.github.io/collection/postman/vol-01-start/vol1-practice.postman_collection.json` 다운로드
2. Postman **Import** → Upload Files
3. **GET Echo 테스트** Send → 200 OK 확인

## 파일

| 파일 | 용도 |
| --- | --- |
| `vol1-practice.postman_collection.json` | Vol.1 Echo 전용 실습 Collection |

## Vol.1 실습 Collection 구조

모든 요청은 **Postman Echo** (`https://postman-echo.com`) 기반입니다. Mock Server 없음.

```text
Vol.1 실습 Collection
├ 연결 테스트
│ └ GET Echo 테스트
├ GET 요청 실습
│ └ GET 기본 요청
├ Query Params 실습
│ └ GET Query Params 요청
└ POST 요청 실습
  └ POST Body 요청
```

설정 값: [`../practice-collection.ts`](../practice-collection.ts)

## 미러 배포

- 워크플로: `.github/workflows/deploy-postman-mirror.yml`
- 대상 레포: `TBELL-ref/collection`
- 이 폴더 `*.json` → `postman/vol-01-start/` (workflow_dispatch 시 `--include-json`)

## 제작 시 주의

- Mock Server · Collection Variables · Example 은 넣지 않음 (Vol.S1 전용)
- JSON 수정 후 미러 배포를 돌려야 학습자 다운로드 URL이 갱신됨
