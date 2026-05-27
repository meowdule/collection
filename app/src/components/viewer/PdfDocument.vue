<script setup lang="ts">
import type { GuideMeta, GuidePage } from '@/types/guide'
import GuidePageView from '@/components/viewer/GuidePageView.vue'

defineProps<{
  meta: GuideMeta
  pages: GuidePage[]
}>()
</script>

<template>
  <div class="pdf-document">
    <GuidePageView
      v-for="(page, index) in pages"
      :key="index"
      :page="page"
      :meta="meta"
      :page-index="index + 1"
      :total-pages="pages.length"
      :show-header="page.type !== 'cover'"
      :show-footer="false"
    />
  </div>
</template>
