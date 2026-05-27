import { onMounted, onUnmounted, ref, watch, type Ref } from 'vue'

const PAGE_W = 794
const PAGE_H = 1123
const NAV_RESERVE = 120
const STAGE_PAD = 32

export function useFlipbookScale(
  stageRef: Ref<HTMLElement | null>,
  spreadIndex: Ref<number>,
) {
  const scale = ref(1)
  const spreadWidth = ref(PAGE_W * 2)
  const spreadHeight = ref(PAGE_H)

  function updateScale() {
    const stage = stageRef.value
    if (!stage) return

    const contentW = PAGE_W * 2
    const contentH = PAGE_H

    spreadWidth.value = contentW
    spreadHeight.value = contentH

    const availW = stage.clientWidth - NAV_RESERVE
    const availH = stage.clientHeight - STAGE_PAD

    scale.value = Math.min(1, availW / contentW, availH / contentH)
  }

  let observer: ResizeObserver | undefined

  onMounted(() => {
    updateScale()
    observer = new ResizeObserver(updateScale)
    if (stageRef.value) observer.observe(stageRef.value)
    window.addEventListener('resize', updateScale)
  })

  onUnmounted(() => {
    observer?.disconnect()
    window.removeEventListener('resize', updateScale)
  })

  watch(spreadIndex, updateScale)

  return { scale, spreadWidth, spreadHeight, PAGE_W, PAGE_H }
}
