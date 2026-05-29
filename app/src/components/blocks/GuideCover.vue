<script setup lang="ts">
import type { CoverPageData } from '@/types/guide'
import CoverGraphic from '@/components/blocks/CoverGraphic.vue'

defineProps<{
  page: CoverPageData
}>()
</script>

<template>
  <header class="cover">
    <div class="cover-stage">
      <div class="cover-copy">
        <p class="cover-series">{{ page.brand.seriesTitle }}</p>

        <div class="cover-vol-badge">
          <span class="cover-vol-code">{{ page.brand.volCode }}</span>
        </div>

        <h1 class="cover-vol-title">{{ page.brand.volSubtitle }}</h1>

        <div class="cover-part-block">
          <span class="cover-part-num">{{ page.partNum }}</span>
          <span class="cover-part-title">{{ page.partTitle }}</span>
        </div>

        <p v-if="page.partLabel" class="cover-part-label">{{ page.partLabel }}</p>
      </div>

      <div class="cover-object" aria-hidden="true">
        <CoverGraphic :variant="page.brand.coverGraphic" />
      </div>
    </div>
  </header>
</template>
