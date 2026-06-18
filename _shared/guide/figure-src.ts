/**
 * fig.imageSrc → img src (dev/prod · GitHub Pages base path 정규화)
 */
export function resolveFigureSrc(src?: string): string | undefined {
  if (!src) return undefined

  const base = import.meta.env.BASE_URL || '/'
  const basePath = base.endsWith('/') ? base.slice(0, -1) : base

  // subpath 배포(/collection/): /assets/* → /collection/assets/*
  if (src.startsWith('/assets/') && basePath && basePath !== '/') {
    return `${basePath}${src}`
  }

  // 로컬 dev(base /): 남아 있는 /collection 접두사 제거
  if (!basePath || basePath === '/') {
    if (src.startsWith('/collection/')) {
      return src.slice('/collection'.length) || '/'
    }
  }

  return src
}
