<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { House } from 'lucide-vue-next'
import type { GuideMeta, GuidePage } from '@/types/guide'
import GuidePageView from '@/components/viewer/GuidePageView.vue'
import { useFlipbookScale } from '@/composables/useFlipbookScale'

const props = defineProps<{
  seriesSlug?: string
  meta: GuideMeta
  pages: GuidePage[]
}>()

/** spread 0 = [blank | cover], 이후 [left | right] */
const spreadIndex = defineModel<number>('spreadIndex', { default: 0 })

const stageRef = ref<HTMLElement | null>(null)
const { scale, spreadWidth, spreadHeight, PAGE_W, PAGE_H } = useFlipbookScale(stageRef, spreadIndex)
const TURN_MS = 300
const REVEAL_DELAY_MS = 90
const LEFT_PAGE_REVEAL_DELAY_MS = 100
const isTurning = ref(false)
const turnDirection = ref<'next' | 'prev'>('next')
const turningPage = ref<GuidePage | null>(null)
const turningPageIndex = ref(0)
const hideLeftPage = ref(false)
const hideRightPage = ref(false)
const animateLeftReveal = ref(false)
const animateRightReveal = ref(false)
let turnTimer: number | null = null
let revealTimer: number | null = null
let leftRevealTimer: number | null = null
let rightRevealTimer: number | null = null
let leftRevealAnimTimer: number | null = null
let rightRevealAnimTimer: number | null = null

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

const turnSheetStyle = computed(() => ({
  width: `${PAGE_W}px`,
  height: `${PAGE_H}px`,
  left: turnDirection.value === 'next' ? `${PAGE_W}px` : '0px',
}))

function pageNumber(page: GuidePage) {
  return props.pages.indexOf(page) + 1
}

function pageIndex(page: GuidePage) {
  return props.pages.indexOf(page) + 1
}

function spreadPages(index: number) {
  const left = index === 0 ? null : (props.pages[index * 2 - 1] ?? null)
  const right = index === 0 ? (props.pages[0] ?? null) : (props.pages[index * 2] ?? null)
  return { left, right }
}

function beginTurn(dir: 'next' | 'prev', targetIndex: number) {
  const current = spreadPages(spreadIndex.value)
  const page = dir === 'next' ? current.right : current.left
  if (!page) {
    spreadIndex.value = targetIndex
    return
  }

  turnDirection.value = dir
  turningPage.value = page
  turningPageIndex.value = pageIndex(page)
  isTurning.value = true

  if (turnTimer) window.clearTimeout(turnTimer)
  if (revealTimer) window.clearTimeout(revealTimer)
  if (leftRevealTimer) window.clearTimeout(leftRevealTimer)
  if (rightRevealTimer) window.clearTimeout(rightRevealTimer)
  if (leftRevealAnimTimer) window.clearTimeout(leftRevealAnimTimer)
  if (rightRevealAnimTimer) window.clearTimeout(rightRevealAnimTimer)

  hideLeftPage.value = dir === 'next'
  hideRightPage.value = dir === 'prev'
  animateLeftReveal.value = false
  animateRightReveal.value = false

  revealTimer = window.setTimeout(() => {
    spreadIndex.value = targetIndex
    if (dir === 'next') {
      leftRevealTimer = window.setTimeout(() => {
        hideLeftPage.value = false
        animateLeftReveal.value = true
        leftRevealAnimTimer = window.setTimeout(() => {
          animateLeftReveal.value = false
          leftRevealAnimTimer = null
        }, 180)
        leftRevealTimer = null
      }, LEFT_PAGE_REVEAL_DELAY_MS)
    } else {
      rightRevealTimer = window.setTimeout(() => {
        hideRightPage.value = false
        animateRightReveal.value = true
        rightRevealAnimTimer = window.setTimeout(() => {
          animateRightReveal.value = false
          rightRevealAnimTimer = null
        }, 180)
        rightRevealTimer = null
      }, LEFT_PAGE_REVEAL_DELAY_MS)
    }
    revealTimer = null
  }, REVEAL_DELAY_MS)

  turnTimer = window.setTimeout(() => {
    isTurning.value = false
    turningPage.value = null
    turnTimer = null
  }, TURN_MS)
}

function prev() {
  if (isTurning.value) return
  if (spreadIndex.value > 0) beginTurn('prev', spreadIndex.value - 1)
}

function next() {
  if (isTurning.value) return
  if (spreadIndex.value < totalSpreads.value - 1) beginTurn('next', spreadIndex.value + 1)
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => window.addEventListener('keydown', onKeydown))
onUnmounted(() => {
  window.removeEventListener('keydown', onKeydown)
  if (turnTimer) window.clearTimeout(turnTimer)
  if (revealTimer) window.clearTimeout(revealTimer)
  if (leftRevealTimer) window.clearTimeout(leftRevealTimer)
  if (rightRevealTimer) window.clearTimeout(rightRevealTimer)
  if (leftRevealAnimTimer) window.clearTimeout(leftRevealAnimTimer)
  if (rightRevealAnimTimer) window.clearTimeout(rightRevealAnimTimer)
})
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
          <div class="flipbook-spread-stage">
            <div class="flipbook-spread">
              <div
                v-if="leftPage && !hideLeftPage"
                class="flipbook-slot"
                :class="{ 'flipbook-slot--reveal-left': animateLeftReveal }"
                :style="{ width: `${PAGE_W}px`, height: `${PAGE_H}px` }"
              >
                <GuidePageView
                  :key="`p-${pageIndex(leftPage)}`"
                  :page="leftPage"
                  :meta="meta"
                  :series-slug="seriesSlug"
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
                v-if="rightPage && !hideRightPage"
                class="flipbook-slot"
                :class="{ 'flipbook-slot--reveal-right': animateRightReveal }"
                :style="{ width: `${PAGE_W}px`, height: `${PAGE_H}px` }"
              >
                <GuidePageView
                  :key="`p-${pageIndex(rightPage)}`"
                  :page="rightPage"
                  :meta="meta"
                  :series-slug="seriesSlug"
                  :page-index="pageIndex(rightPage)"
                  :total-pages="pages.length"
                  :show-header="rightPage.type !== 'cover'"
                  :show-footer="rightPage.type !== 'cover'"
                />
              </div>
              <div
                v-else
                class="flipbook-slot flipbook-slot--blank"
                :style="{ width: `${PAGE_W}px`, height: `${PAGE_H}px` }"
                aria-hidden="true"
              />
            </div>

            <div v-if="isTurning && turningPage" class="flipbook-turn-layer" aria-hidden="true">
              <div
                class="flipbook-turn-sheet"
                :class="[
                  turnDirection === 'next' ? 'flipbook-turn-sheet--next' : 'flipbook-turn-sheet--prev',
                  'flipbook-turn-sheet--active',
                ]"
                :style="turnSheetStyle"
              >
                <div class="flipbook-turn-face flipbook-turn-face--front">
                  <div class="flipbook-turn-paper" />
                </div>
                <div class="flipbook-turn-face flipbook-turn-face--back" />
              </div>
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
