<script setup lang="ts">
import type { GuideMeta } from '@/types/guide'

defineProps<{
  meta?: GuideMeta
  pageIndex?: number
  totalPages?: number
  showHeader?: boolean
  showFooter?: boolean
  cover?: boolean
}>()
</script>

<template>
  <article class="guide-page" :class="{ 'guide-page--cover': cover }">
    <header v-if="showHeader && meta && !cover" class="page-strip">
      <span>{{ meta.series }} · {{ meta.vol }}</span>
      <strong>{{ meta.part }}</strong>
    </header>

    <div v-if="!cover" class="page-inner">
      <slot />
    </div>
    <slot v-else />

    <footer v-if="showFooter && pageIndex && totalPages && !cover" class="page-foot">
      <span>{{ meta?.part }}</span>
      <span>{{ pageIndex }} / {{ totalPages }}</span>
    </footer>
  </article>
</template>
