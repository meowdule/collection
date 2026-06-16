/**
 * Vol.1 실습 Collection — TBELL-ref/collection 미러 배포
 *
 * Vol.1은 Postman Echo만 사용합니다. Mock Server·Collection Variables는 Vol.S1 전용.
 * JSON 파일: publish-assets/ → deploy-postman-mirror.yml → TBELL-ref/collection
 */
export const VOL01_PRACTICE_ECHO_BASE = 'https://postman-echo.com'

/** 배포 레포 (GitHub Pages) — 학습자 JSON 다운로드 */
export const VOL01_PRACTICE_MIRROR = {
  repo: 'TBELL-ref/collection',
  pagesBase: 'https://tbell-ref.github.io/collection',
} as const

export const VOL01_PRACTICE_COLLECTION = {
  name: 'Vol.1 실습 Collection',
  fileName: 'vol1-practice.postman_collection.json',
  downloadUrl: `${VOL01_PRACTICE_MIRROR.pagesBase}/postman/vol-01-start/vol1-practice.postman_collection.json`,
} as const

/** Vol.1 실습 Collection 폴더 구조 (제작·검수용) */
export const VOL01_PRACTICE_COLLECTION_TREE = `Vol.1 실습 Collection
├ 연결 테스트
│ └ GET Echo 테스트
├ GET 요청 실습
│ └ GET 기본 요청
├ Query Params 실습
│ └ GET Query Params 요청
└ POST 요청 실습
  └ POST Body 요청`
