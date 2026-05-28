import type { RoadmapEntry } from '../../_shared/guide/page-templates'

/** Vol별 마지막 페이지 로드맵 (Part closing 공통) */
export interface VolRoadmapConfig {
  sectionLabel: string
  items: RoadmapEntry[]
}

/** Postman 시리즈 — Vol.1 */
export const VOL01_ROADMAP: RoadmapEntry[] = [
  { num: '1-1', label: 'Postman이 뭔가요' },
  { num: '1-2', label: 'Postman 시작하기' },
  { num: '1-3', label: 'Workspace 만들기' },
  { num: '1-4', label: '실습 파일 사용법' },
]

export const VOL01_ROADMAP_SECTION_LABEL = 'Vol.1 로드맵'

/** vol 폴더 slug → 로드맵 (Vol.2~ 추가 시 여기만 확장) */
export const POSTMAN_VOL_ROADMAPS: Record<string, VolRoadmapConfig> = {
  'vol-01-start': {
    sectionLabel: VOL01_ROADMAP_SECTION_LABEL,
    items: VOL01_ROADMAP,
  },
}

export function getPostmanVolRoadmap(volId: string): VolRoadmapConfig {
  const config = POSTMAN_VOL_ROADMAPS[volId]
  if (!config) {
    throw new Error(`Unknown Postman vol roadmap: ${volId}`)
  }
  return config
}
