<script setup lang="ts">
import { computed } from 'vue'
import postmanVol01Graphic from '@series/postman/vol-01-start/cover-graphic.png'

const props = defineProps<{
  variant: string
}>()

const coverImages: Record<string, string> = {
  'postman-vol-01': postmanVol01Graphic,
}

const imageSrc = computed(() => coverImages[props.variant])
</script>

<template>
  <img v-if="imageSrc" class="cover-graphic-img" :src="imageSrc" alt="" />
</template>
