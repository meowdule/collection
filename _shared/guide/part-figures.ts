import type { FigureSlot } from '@/types/guide'

/** pages.ts — import.meta.glob('./images/*.{png,...}') 결과로 fig() 생성 */
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
