<script setup lang="ts">
import { computed } from 'vue'
import { getGuideLucideIcon } from '@/lib/guide-lucide-icons'

const props = withDefaults(
  defineProps<{
    name: string
    size?: number
    strokeWidth?: number
  }>(),
  {
    size: 18,
    strokeWidth: 2,
  },
)

const Icon = computed(() => getGuideLucideIcon(props.name))
</script>

<template>
  <component
    v-if="Icon"
    :is="Icon"
    class="guide-lucide-icon"
    :size="size"
    :stroke-width="strokeWidth"
    aria-hidden="true"
  />
</template>
