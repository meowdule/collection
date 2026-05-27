/**
 * PDF 문서 제목·파일명 생성
 * 기본 형식: "vol.1-1 Postman이 뭔가요"
 */

/**
 * @param {Record<string, string>} meta
 * @returns {string}
 */
export function buildPdfDocumentTitle(meta) {
  if (meta.pdfTitle?.trim()) return meta.pdfTitle.trim()

  const volNum = extractVolNum(meta.vol)
  const { partNum, partName } = parsePart(meta.part)

  if (volNum && partNum && partName) {
    return `vol.${volNum}-${partNum} ${partName}`
  }
  if (volNum && meta.part) {
    return `vol.${volNum} ${meta.part}`
  }
  return meta.part || meta.series || 'Guide'
}

/**
 * @param {string} title
 * @returns {string}
 */
export function sanitizePdfFilename(title) {
  return title
    .replace(/[\\/:*?"<>|]/g, '_')
    .replace(/\s+/g, ' ')
    .trim()
}

/**
 * @param {Record<string, string>} meta
 * @returns {string}
 */
export function buildPdfFilename(meta) {
  return `${sanitizePdfFilename(buildPdfDocumentTitle(meta))}.pdf`
}

/**
 * @param {string} [vol] e.g. "Vol.1 설치 및 시작하기"
 * @returns {string} e.g. "1"
 */
function extractVolNum(vol) {
  if (!vol) return ''
  const m = vol.match(/Vol\.(\d+)/i)
  return m ? m[1] : ''
}

/**
 * @param {string} [part] e.g. "1-1 Postman이 뭔가요"
 */
function parsePart(part) {
  if (!part) return { partNum: '', partName: '' }
  const m = part.match(/^(\d+-\d+)\s+(.+)$/)
  if (m) return { partNum: m[1], partName: m[2].trim() }
  return { partNum: '', partName: part.trim() }
}
