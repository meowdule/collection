export interface GuideMeta {
  series: string
  vol: string
  part: string
  /** PDF 뷰어/파일 제목. 없으면 "vol.1-1 Postman이 뭔가요" 형식으로 자동 생성 */
  pdfTitle?: string
  /** 시리즈별 Accent Theme 키 (브랜드 공통 + 시리즈 포인트 컬러) */
  themeKey?: string
  /** 레이아웃 메타 규칙 */
  layout?: {
    /** 챕터 시작으로 취급할 페이지 번호(1-base) */
    chapterStartPages?: number[]
  }
}

export interface CardItem {
  /** Lucide 아이콘 키 — `app/src/lib/guide-lucide-icons.ts` 참고 */
  lucide?: string
  /** @deprecated lucide 사용 권장 */
  icon?: string
  iconBg?: string
  iconColor?: string
  title: string
  body: string
}

export interface PanelBlock {
  title: string
  body?: string
  items?: string[]
  variant?: 'app' | 'post'
  lucide?: string
}

export interface FlowStep {
  icon: string
  iconClass: 'ico-you' | 'ico-pm' | 'ico-sv'
  title: string
  subtitle: string
}

export interface PainItem {
  title: string
  body: string
}

export interface TermItem {
  term: string
  definition: string
}

export interface RoadmapItem {
  num: string
  label: string
  current?: boolean
}

export interface FigureSlot {
  /** public 또는 part 폴더 기준 이미지 경로 */
  imageSrc?: string
  placeholderCode?: string
  placeholderLabel?: string
  caption: string
}

export interface GuideStep {
  title: string
  body: string
  figure?: FigureSlot
}

export type ContentBlock =
  | { kind: 'section-header'; label: string; title: string; lead?: string }
  | { kind: 'goals'; items: string[] }
  | { kind: 'quote'; text: string }
  | { kind: 'text'; text: string }
  | { kind: 'cards-2'; cards: CardItem[] }
  | { kind: 'cards-3'; cards: CardItem[] }
  | { kind: 'key-box'; headline: string; body: string; href?: string }
  | { kind: 'link-list'; links: { label: string; url: string; hint?: string }[] }
  | { kind: 'code-block'; caption: string; code: string }
  | { kind: 'split-2'; left: PanelBlock; right: PanelBlock; footnote?: string }
  | { kind: 'flow'; steps: FlowStep[] }
  | { kind: 'pain-rows'; items: PainItem[] }
  | { kind: 'term-grid'; terms: TermItem[] }
  | { kind: 'roadmap'; items: RoadmapItem[] }
  | { kind: 'cta'; title: string; subtitle: string; nextLabel: string }
  | { kind: 'tip-box'; html: string }
  | { kind: 'warn-box'; html: string }
  | { kind: 'check-done'; items: string[] }
  | { kind: 'steps'; steps: GuideStep[]; startAt?: number }
  | { kind: 'figure'; figure: FigureSlot }
  | { kind: 'os-tabs'; tabs: { label: string; active?: boolean }[] }

export interface CoverPageData {
  type: 'cover'
  badges: string[]
  warmBadge?: string
  partLabel: string
  titleLines: string[]
  leadLines: string[]
}

export interface ContentPageData {
  type: 'content'
  blocks: ContentBlock[]
}

export type GuidePage = CoverPageData | ContentPageData

export interface GuidePart {
  id: string
  meta: GuideMeta
  pages: GuidePage[]
}
