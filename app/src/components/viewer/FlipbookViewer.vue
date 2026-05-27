<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { House } from 'lucide-vue-next'
import type { GuideMeta, GuidePage } from '@/types/guide'
import GuidePageView from '@/components/viewer/GuidePageView.vue'
import { useFlipbookScale } from '@/composables/useFlipbookScale'

const props = defineProps<{
  meta: GuideMeta
  pages: GuidePage[]
}>()

/** spread 0 = [blank | cover], 이후 [left | right] */
const spreadIndex = defineModel<number>('spreadIndex', { default: 0 })

const stageRef = ref<HTMLElement | null>(null)
const { scale, spreadWidth, spreadHeight, PAGE_W, PAGE_H } = useFlipbookScale(stageRef, spreadIndex)

const totalSpreads = computed(() => {
  const n = props.pages.length
  if (n <= 1) return 1
  return 1 + Math.ceil((n - 1) / 2)
})

const leftPage = computed(() => {
  if (spreadIndex.value === 0) return null
  const idx = spreadIndex.value * 2 - 1
  return props.pages[idx] ?? null
})

const rightPage = computed(() => {
  if (spreadIndex.value === 0) return props.pages[0] ?? null
  const idx = spreadIndex.value * 2
  return props.pages[idx] ?? null
})

const statusLabel = computed(() => {
  const left = leftPage.value ? pageNumber(leftPage.value) : null
  const right = rightPage.value ? pageNumber(rightPage.value) : null
  if (left && right) return `${left} – ${right} / ${props.pages.length}페이지`
  if (right) return `${right} / ${props.pages.length}페이지`
  return `표지 / ${props.pages.length}페이지`
})

const scaleWrapStyle = computed(() => ({
  width: `${spreadWidth.value * scale.value}px`,
  height: `${spreadHeight.value * scale.value}px`,
}))

const scaleInnerStyle = computed(() => ({
  width: `${spreadWidth.value}px`,
  height: `${spreadHeight.value}px`,
  transform: `scale(${scale.value})`,
}))

function pageNumber(page: GuidePage) {
  return props.pages.indexOf(page) + 1
}

function pageIndex(page: GuidePage) {
  return props.pages.indexOf(page) + 1
}

function prev() {
  if (spreadIndex.value > 0) spreadIndex.value -= 1
}

function next() {
  if (spreadIndex.value < totalSpreads.value - 1) spreadIndex.value += 1
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => window.removeEventListener('keydown', onKeydown))
</script>

<template>
  <div class="flipbook-app">
    <div class="flipbook-toolbar">
      <div class="flipbook-toolbar-start">
        <router-link class="flipbook-toolbar-home" to="/" title="메인으로" aria-label="메인으로">
          <House :size="16" :stroke-width="2" />
        </router-link>
        <div class="flipbook-toolbar-titles">
          <h1>{{ meta.part }}</h1>
          <p>{{ meta.series }} · {{ meta.vol }}</p>
        </div>
      </div>
      <div class="flipbook-status">{{ statusLabel }}</div>
    </div>

    <div ref="stageRef" class="flipbook-stage">
      <button
        type="button"
        class="flipbook-nav"
        aria-label="이전"
        :disabled="spreadIndex === 0"
        @click="prev"
      >
        ‹
      </button>

      <div class="flipbook-scale-wrap" :style="scaleWrapStyle">
        <div class="flipbook-scale-inner" :style="scaleInnerStyle">
          <div class="flipbook-spread">
            <div
              v-if="leftPage"
              class="flipbook-slot"
              :style="{ width: `${PAGE_W}px`, height: `${PAGE_H}px` }"
            >
              <GuidePageView
                :key="`p-${pageIndex(leftPage)}`"
                :page="leftPage"
                :meta="meta"
                :page-index="pageIndex(leftPage)"
                :total-pages="pages.length"
              />
            </div>
            <div
              v-else
              class="flipbook-slot flipbook-slot--blank"
              :style="{ width: `${PAGE_W}px`, height: `${PAGE_H}px` }"
              aria-hidden="true"
            />

            <div
              v-if="rightPage"
              class="flipbook-slot"
              :style="{ width: `${PAGE_W}px`, height: `${PAGE_H}px` }"
            >
              <GuidePageView
                :key="`p-${pageIndex(rightPage)}`"
                :page="rightPage"
                :meta="meta"
                :page-index="pageIndex(rightPage)"
                :total-pages="pages.length"
                :show-header="rightPage.type !== 'cover'"
                :show-footer="rightPage.type !== 'cover'"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="flipbook-nav"
        aria-label="다음"
        :disabled="spreadIndex >= totalSpreads - 1"
        @click="next"
      >
        ›
      </button>
    </div>

    <p class="flipbook-status">
      ← → 키 또는 버튼 · {{ Math.round(scale * 100) }}% · 표지는 좌측 빈 페이지 · 우측 표지
    </p>
  </div>
</template>
