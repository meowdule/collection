import type { Component } from 'vue'
import {
  Building2,
  Download,
  FolderOpen,
  Globe,
  LayoutTemplate,
  Monitor,
  PenLine,
  UserCircle,
} from 'lucide-vue-next'

/** pages.ts 카드·패널에서 쓰는 Lucide 아이콘 키 */
export const GUIDE_LUCIDE_ICONS: Record<string, Component> = {
  'folder-open': FolderOpen,
  'pen-line': PenLine,
  'building-2': Building2,
  'user-circle': UserCircle,
  'layout-template': LayoutTemplate,
  globe: Globe,
  monitor: Monitor,
  download: Download,
}

export function getGuideLucideIcon(name?: string): Component | null {
  if (!name) return null
  return GUIDE_LUCIDE_ICONS[name] ?? null
}
