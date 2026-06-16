import type { GuideMeta, GuidePage } from '@/types/guide'
import * as part11 from '@series/postman/vol-01-start/parts/1-1-postman-intro/pages'
import * as part12 from '@series/postman/vol-01-start/parts/1-2-signup-login/pages'
import * as part13 from '@series/postman/vol-01-start/parts/1-3-web-install/pages'
import * as part14 from '@series/postman/vol-01-start/parts/1-4-practice-files/pages'
import * as part15 from '@series/postman/vol-01-start/parts/1-5-collection-create/pages'
import * as part16 from '@series/postman/vol-01-start/parts/1-6-basic-get/pages'

export interface GuidePartEntry {
  series: string
  vol: string
  part: string
  meta: GuideMeta
  pages: GuidePage[]
}

const registry: Record<string, GuidePartEntry> = {
  'postman/vol-01-start/1-1-postman-intro': {
    series: 'postman',
    vol: 'vol-01-start',
    part: part11.partId,
    meta: part11.meta,
    pages: part11.pages,
  },
  'postman/vol-01-start/1-2-signup-login': {
    series: 'postman',
    vol: 'vol-01-start',
    part: part12.partId,
    meta: part12.meta,
    pages: part12.pages,
  },
  'postman/vol-01-start/1-3-web-install': {
    series: 'postman',
    vol: 'vol-01-start',
    part: part13.partId,
    meta: part13.meta,
    pages: part13.pages,
  },
  'postman/vol-01-start/1-4-practice-files': {
    series: 'postman',
    vol: 'vol-01-start',
    part: part14.partId,
    meta: part14.meta,
    pages: part14.pages,
  },
  'postman/vol-01-start/1-5-collection-create': {
    series: 'postman',
    vol: 'vol-01-start',
    part: part15.partId,
    meta: part15.meta,
    pages: part15.pages,
  },
  'postman/vol-01-start/1-6-basic-get': {
    series: 'postman',
    vol: 'vol-01-start',
    part: part16.partId,
    meta: part16.meta,
    pages: part16.pages,
  },
}

export function resolveGuidePart(path: string): GuidePartEntry | undefined {
  return registry[path]
}

export function listGuideParts(): string[] {
  return Object.keys(registry)
}

/** 홈 목록용: 시리즈 → Vol → Part */
export interface GuideTreePartItem {
  path: string
  entry: GuidePartEntry
}

export interface GuideTreeVol {
  volSlug: string
  volLabel: string
  parts: GuideTreePartItem[]
}

export interface GuideTreeSeries {
  seriesSlug: string
  seriesLabel: string
  vols: GuideTreeVol[]
}

export function listGuideTree(): GuideTreeSeries[] {
  const seriesOrder: string[] = []
  const seriesMap = new Map<
    string,
    { seriesLabel: string; volOrder: string[]; vols: Map<string, GuideTreeVol> }
  >()

  for (const path of listGuideParts()) {
    const entry = registry[path]
    if (!entry) continue
    const segments = path.split('/')
    const seriesSlug = segments[0]
    const volSlug = segments[1]
    if (!seriesSlug || !volSlug) continue

    if (!seriesMap.has(seriesSlug)) {
      seriesMap.set(seriesSlug, {
        seriesLabel: entry.meta.series,
        volOrder: [],
        vols: new Map(),
      })
      seriesOrder.push(seriesSlug)
    }
    const s = seriesMap.get(seriesSlug)!
    s.seriesLabel = entry.meta.series

    if (!s.vols.has(volSlug)) {
      s.vols.set(volSlug, {
        volSlug,
        volLabel: entry.meta.vol,
        parts: [],
      })
      s.volOrder.push(volSlug)
    }
    const vol = s.vols.get(volSlug)!
    vol.volLabel = entry.meta.vol
    vol.parts.push({ path, entry })
  }

  return seriesOrder.map((slug) => {
    const s = seriesMap.get(slug)!
    return {
      seriesSlug: slug,
      seriesLabel: s.seriesLabel,
      vols: s.volOrder.map((vs) => s.vols.get(vs)!),
    }
  })
}
