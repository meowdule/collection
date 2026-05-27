<script setup lang="ts">
import { computed } from 'vue'
import type { GuideMeta, GuidePage } from '@/types/guide'
import GuidePageShell from '@/components/viewer/GuidePageShell.vue'
import GuideCover from '@/components/blocks/GuideCover.vue'
import BlockRenderer from '@/components/blocks/BlockRenderer.vue'

const props = defineProps<{
  page: GuidePage
  meta: GuideMeta
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
    :page-index="pageIndex"
    :total-pages="totalPages"
    :show-header="showHeader ?? true"
    :show-footer="showFooter ?? true"
    :cover="isCover"
  >
    <GuideCover v-if="page.type === 'cover'" :page="page" />
    <BlockRenderer v-else :blocks="page.blocks" />
  </GuidePageShell>
</template>
