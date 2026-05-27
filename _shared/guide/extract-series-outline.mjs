/**
 * 배포 레포용 SERIES.md — 「시리즈 구성」 섹션만 추출
 */

const OUTLINE_START = '## 시리즈 구성'
const OUTLINE_END = '## 이미지 가이드'

const PUBLISH_HEADER = `# Postman 실무 가이드 시리즈

따라하기형 실무 자료집입니다. Vol·Part별 PDF와 함께 **시리즈 전체 구성**만 안내합니다.

---

`

/**
 * @param {string} fullText
 * @returns {string}
 */
export function extractSeriesOutlineForPublish(fullText) {
  const start = fullText.indexOf(OUTLINE_START)
  if (start === -1) {
    throw new Error(`SERIES.md에 "${OUTLINE_START}" 섹션이 없습니다.`)
  }

  const end = fullText.indexOf(OUTLINE_END, start)
  const outline = end === -1 ? fullText.slice(start) : fullText.slice(start, end).trimEnd()

  return `${PUBLISH_HEADER}${outline}\n`
}
