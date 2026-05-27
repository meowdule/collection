<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { resolveGuidePart } from '@/lib/guide-registry'
import PdfDocument from '@/components/viewer/PdfDocument.vue'

const route = useRoute()

const guidePath = computed(() => {
  const { series, vol, part } = route.params
  return `${series}/${vol}/${part}`
})

const entry = computed(() => resolveGuidePart(guidePath.value))
</script>

<template>
  <div v-if="!entry" class="home-view">
    <h1>PDF용 문서를 찾을 수 없어요</h1>
    <p>{{ guidePath }}</p>
  </div>
  <PdfDocument v-else :meta="entry.meta" :pages="entry.pages" />
</template>
