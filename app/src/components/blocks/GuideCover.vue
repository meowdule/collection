<script setup lang="ts">
import type { CoverPageData } from '@/types/guide'

defineProps<{
  page: CoverPageData
}>()
</script>

<template>
  <header class="cover">
    <div class="cover-badges">
      <span v-for="badge in page.badges" :key="badge" class="badge">{{ badge }}</span>
      <span v-if="page.warmBadge" class="badge badge-warm">{{ page.warmBadge }}</span>
    </div>
    <p class="cover-part">{{ page.partLabel }}</p>
    <h1>
      <template v-for="(line, i) in page.titleLines" :key="i">
        {{ line }}<br v-if="i < page.titleLines.length - 1" />
      </template>
    </h1>
    <p class="cover-lead">
      <template v-for="(line, i) in page.leadLines" :key="i">
        {{ line }}<br v-if="i < page.leadLines.length - 1" />
      </template>
    </p>
  </header>
</template>
