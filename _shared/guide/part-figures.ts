import type { FigureSlot } from '@/types/guide'

/**
 * pages.ts 이미지 glob — Vite는 패턴·옵션 모두 리터럴이어야 함.
 *
 * const fig = createPartFigFn(
 *   import.meta.glob<string>('./images/*.{png,jpg,jpeg,webp,gif}', {
 *     eager: true,
 *     query: '?url',
 *     import: 'default',
 *   }),
 * )
 */

/** glob 결과로 fig() 생성 */
export function createPartFigure(
  partImages: Record<string, string>,
  file: string,
  caption: string,
): FigureSlot {
  const key = `./images/${file}`
  const imageSrc =
    partImages[key] ??
    Object.entries(partImages).find(([path]) =>
      path.replace(/\\/g, '/').endsWith(`/images/${file}`),
    )?.[1]

  if (!imageSrc) {
    return {
      placeholderCode: `images/${file}`,
      placeholderLabel: `이미지 없음: ${file}`,
      caption,
    }
  }
  return { imageSrc, caption }
}

export function createPartFigFn(partImages: Record<string, string>) {
  return (file: string, caption: string): FigureSlot =>
    createPartFigure(partImages, file, caption)
}
