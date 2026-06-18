import type { FigureSlot } from '@/types/guide'

/**
 * 파트별 images/ 스크린샷 — 모든 pages.ts 동일 패턴
 *
 * const fig = createPartFigFn(
 *   import.meta.glob<string>('./images/*.{png,jpg,jpeg,webp,gif}', {
 *     eager: true,
 *     query: '?url',
 *     import: 'default',
 *   }),
 * )
 *
 * glob은 pages.ts에 리터럴로 두고, 파일명은 fig('01-slug.png', '캡션')만 맞추면 됩니다.
 */

function resolveAssetUrl(value: unknown): string | undefined {
  if (typeof value === 'string' && value.length > 0) return value
  if (value && typeof value === 'object' && 'default' in value) {
    const nested = (value as { default: unknown }).default
    if (typeof nested === 'string' && nested.length > 0) return nested
  }
  return undefined
}

/** glob 결과 → 파일명(basename) 맵 (Windows 경로·키 형식 차이 흡수) */
export function createPartImageMap(partImages: Record<string, unknown>): Map<string, string> {
  const byFile = new Map<string, string>()
  for (const [globPath, value] of Object.entries(partImages)) {
    const url = resolveAssetUrl(value)
    if (!url) continue
    const name = globPath.replace(/\\/g, '/').split('/').pop()
    if (name) byFile.set(name, url)
  }
  return byFile
}

/** glob 결과로 fig() 생성 */
export function createPartFigure(
  partImages: Record<string, unknown>,
  file: string,
  caption: string,
): FigureSlot {
  const byFile = createPartImageMap(partImages)
  const imageSrc = byFile.get(file)

  if (!imageSrc) {
    return {
      placeholderCode: `images/${file}`,
      placeholderLabel: `이미지 없음: ${file}`,
      caption,
    }
  }
  return { imageSrc, caption }
}

export function createPartFigFn(partImages: Record<string, unknown>) {
  const byFile = createPartImageMap(partImages)
  return (file: string, caption: string): FigureSlot => {
    const imageSrc = byFile.get(file)
    if (!imageSrc) {
      return {
        placeholderCode: `images/${file}`,
        placeholderLabel: `이미지 없음: ${file}`,
        caption,
      }
    }
    return { imageSrc, caption }
  }
}
