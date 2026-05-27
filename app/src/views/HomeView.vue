<script setup lang="ts">
import { listGuideTree } from '@/lib/guide-registry'

const tree = listGuideTree()
</script>

<template>
  <main class="home-view">
    <h1>Guide 자료집</h1>
    <p>Vue + 페이지 모델 + Flipbook — v0.2</p>

    <div class="guide-tree">
      <details v-for="series in tree" :key="series.seriesSlug" class="guide-tree__series" open>
        <summary class="guide-tree__series-summary">{{ series.seriesLabel }}</summary>
        <div class="guide-tree__series-body">
          <details v-for="vol in series.vols" :key="vol.volSlug" class="guide-tree__vol" open>
            <summary class="guide-tree__vol-summary">{{ vol.volLabel }}</summary>
            <ul class="part-list part-list--nested">
              <li v-for="{ path, entry } in vol.parts" :key="path">
                <router-link :to="`/view/${path}`">
                  <strong>{{ entry.meta.part }}</strong>
                  <span>{{ entry.pages.length }}페이지</span>
                </router-link>
              </li>
            </ul>
          </details>
        </div>
      </details>
    </div>
  </main>
</template>
