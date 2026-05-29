import type {
  CardItem,
  ContentPageData,
  CoverPageData,
  GuidePage,
  RoadmapItem,
  VolCoverBrand,
} from '@/types/guide'

/** p1 표지 — Vol 브랜드 공통 + Part별 식별 정보만 변경 */
export interface PartCoverInput {
  brand: VolCoverBrand
  partNum: string
  partTitle: string
  partLabel?: string
}

/** p2 목차 — 학습 목표 + 이 파트 흐름 (고정 레이아웃) */
export interface PartTocInput {
  goals: string[]
  /** 선택: 목표 아래 인용/안내 */
  quote?: string
  /** 읽는 순서 카드 4개 (1~4) */
  flowCards: CardItem[]
}

export interface RoadmapEntry {
  num: string
  label: string
}

/** 마지막 페이지 — Vol 로드맵 + CTA (고정 레이아웃) */
export interface PartClosingInput {
  /** 로드맵 섹션 라벨. 예: "Vol.1 로드맵" */
  roadmapSectionLabel: string
  /** 현재 파트 번호. 예: "1-1" — current 강조만 적용, "← 지금 여기" 문구 없음 */
  currentPartNum: string
  roadmap: RoadmapEntry[]
  ctaTitle: string
  ctaSubtitle: string
}

export interface BuildPartPagesInput {
  cover: PartCoverInput
  toc: PartTocInput
  /** p3 ~ 마지막 직전: 본문 페이지만 */
  body: ContentPageData[]
  closing: PartClosingInput
}

const FLOW_CARD_COLORS = [
  { iconBg: 'var(--sky)', iconColor: 'var(--sky-deep)' },
  { iconBg: 'var(--mint-soft)', iconColor: 'var(--mint)' },
  { iconBg: 'var(--amber-soft)', iconColor: 'var(--amber)' },
  { iconBg: 'var(--coral-soft)', iconColor: 'var(--coral)' },
] as const

/** p1 표지 */
export function buildCoverPage(input: PartCoverInput): CoverPageData {
  if (!input.partNum || !input.partTitle) {
    throw new Error('표지 partNum, partTitle은 필수입니다.')
  }
  return {
    type: 'cover',
    brand: input.brand,
    partNum: input.partNum,
    partTitle: input.partTitle,
    partLabel: input.partLabel,
  }
}

/** p2 목차 (이 자료를 읽고 나면 + 이 파트에서 다루는 흐름) */
export function buildTocPage(input: PartTocInput): ContentPageData {
  const cards: CardItem[] = input.flowCards.map((card, i) => ({
    ...card,
    icon: card.icon ?? String(i + 1),
    iconBg: card.iconBg ?? FLOW_CARD_COLORS[i]?.iconBg,
    iconColor: card.iconColor ?? FLOW_CARD_COLORS[i]?.iconColor,
  }))

  const blocks: ContentPageData['blocks'] = [
    { kind: 'section-header', label: '이번 파트', title: '이 자료를 읽고 나면' },
    { kind: 'goals', items: input.goals },
  ]

  if (input.quote) {
    blocks.push({ kind: 'quote', text: input.quote })
  }

  blocks.push(
    { kind: 'section-header', label: '읽는 순서', title: '이 파트에서 다루는 흐름' },
    { kind: 'cards-2', cards },
  )

  return { type: 'content', blocks }
}

/** 마지막 페이지 (로드맵 + CTA). nextLabel은 항상 "다음으로 이동" */
export function buildClosingPage(input: PartClosingInput): ContentPageData {
  const roadmapItems: RoadmapItem[] = input.roadmap.map((item) => ({
    num: item.num,
    label: item.label,
    current: item.num === input.currentPartNum,
  }))

  return {
    type: 'content',
    blocks: [
      {
        kind: 'section-header',
        label: input.roadmapSectionLabel,
        title: '이 자료집에서 이어지는 순서',
      },
      { kind: 'roadmap', items: roadmapItems },
      {
        kind: 'cta',
        title: input.ctaTitle,
        subtitle: input.ctaSubtitle,
        nextLabel: '다음으로 이동',
      },
    ],
  }
}

/**
 * 파트 pages 배열 조립
 * [표지, 목차(p2), ...본문, 마지막]
 */
export function buildPartPages(input: BuildPartPagesInput): GuidePage[] {
  return [
    buildCoverPage(input.cover),
    buildTocPage(input.toc),
    ...input.body,
    buildClosingPage(input.closing),
  ]
}
