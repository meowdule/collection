<script setup lang="ts">
import { computed } from 'vue'
import type { GuideMeta, GuidePage } from '@/types/guide'
import GuidePageShell from '@/components/viewer/GuidePageShell.vue'
import GuideCover from '@/components/blocks/GuideCover.vue'
import BlockRenderer from '@/components/blocks/BlockRenderer.vue'

const props = defineProps<{
  page: GuidePage
  meta: GuideMeta
  seriesSlug?: string
  pageIndex: number
  totalPages: number
  showHeader?: boolean
  showFooter?: boolean
}>()

const isCover = computed(() => props.page.type === 'cover')
</script>

<template>
  <GuidePageShell
    :meta="meta"
    :series-slug="seriesSlug"
    :page-index="pageIndex"
    :total-pages="totalPages"
    :show-header="showHeader ?? true"
    :show-footer="showFooter ?? true"
    :cover="isCover"
  >
    <GuideCover v-if="page.type === 'cover'" :page="page" />
    <BlockRenderer
      v-else
      :blocks="page.blocks"
      :vol-label="meta.vol"
      :part-label="meta.part"
      :page-index="pageIndex"
      :chapter-start-pages="meta.layout?.chapterStartPages"
    />
  </GuidePageShell>
</template>
