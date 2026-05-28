<script setup lang="ts">
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { resolveGuidePart } from '@/lib/guide-registry'
import FlipbookViewer from '@/components/viewer/FlipbookViewer.vue'

const route = useRoute()
const spreadIndex = ref(0)

const guidePath = computed(() => {
  const { series, vol, part } = route.params
  return `${series}/${vol}/${part}`
})

const entry = computed(() => resolveGuidePart(guidePath.value))
</script>

<template>
  <div v-if="!entry" class="home-view">
    <h1>자료집을 찾을 수 없어요</h1>
    <p>{{ guidePath }}</p>
  </div>
  <FlipbookViewer
    v-else
    v-model:spread-index="spreadIndex"
    :series-slug="entry.meta.themeKey ?? 'default'"
    :meta="entry.meta"
    :pages="entry.pages"
  />
</template>
