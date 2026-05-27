<script setup lang="ts">
import type { ContentBlock } from '@/types/guide'

defineProps<{
  blocks: ContentBlock[]
}>()
</script>

<template>
  <div class="page-blocks">
    <div v-for="(block, index) in blocks" :key="index" class="block">
      <section v-if="block.kind === 'section-header'" class="sec">
        <span class="sec-label">{{ block.label }}</span>
        <h2>{{ block.title }}</h2>
        <p v-if="block.lead" class="sec-lead" v-html="block.lead" />
      </section>

      <ul v-else-if="block.kind === 'goals'" class="goals">
        <li v-for="(item, i) in block.items" :key="i" v-html="item" />
      </ul>

      <div v-else-if="block.kind === 'quote'" class="quote-bubble" v-html="block.text" />

      <p v-else-if="block.kind === 'text'" class="text-block" v-html="block.text" />

      <div v-else-if="block.kind === 'cards-2'" class="card-grid-2">
        <div v-for="(card, i) in block.cards" :key="i" class="card">
          <div
            v-if="card.icon"
            class="card-icon"
            :style="{ background: card.iconBg, color: card.iconColor }"
          >
            {{ card.icon }}
          </div>
          <h4>{{ card.title }}</h4>
          <p v-html="card.body" />
        </div>
      </div>

      <div v-else-if="block.kind === 'cards-3'" class="card-grid-3">
        <div v-for="(card, i) in block.cards" :key="i" class="card">
          <div
            v-if="card.icon"
            class="card-icon"
            :style="{ background: card.iconBg, color: card.iconColor }"
          >
            {{ card.icon }}
          </div>
          <h4>{{ card.title }}</h4>
          <p v-html="card.body" />
        </div>
      </div>

      <div v-else-if="block.kind === 'key-box'" class="key-box">
        <p class="key-line">{{ block.headline }}</p>
        <p v-html="block.body" />
      </div>

      <div v-else-if="block.kind === 'code-block'" class="code-block">
        <p class="code-caption">{{ block.caption }}</p>
        <pre><code>{{ block.code }}</code></pre>
      </div>

      <template v-else-if="block.kind === 'split-2'">
        <div class="split-2">
          <div class="panel" :class="block.left.variant === 'post' ? 'panel-post' : 'panel-app'">
            <h3>{{ block.left.title }}</h3>
            <p v-if="block.left.body" v-html="block.left.body" />
            <ul v-if="block.left.items">
              <li v-for="(item, i) in block.left.items" :key="i" v-html="item" />
            </ul>
          </div>
          <div class="panel" :class="block.right.variant === 'post' ? 'panel-post' : 'panel-app'">
            <h3>{{ block.right.title }}</h3>
            <p v-if="block.right.body" v-html="block.right.body" />
            <ul v-if="block.right.items">
              <li v-for="(item, i) in block.right.items" :key="i" v-html="item" />
            </ul>
          </div>
        </div>
        <p v-if="block.footnote" class="split-footnote" v-html="block.footnote" />
      </template>

      <div v-else-if="block.kind === 'flow'" class="flow">
        <template v-for="(step, i) in block.steps" :key="i">
          <div class="flow-step">
            <div class="ico" :class="step.iconClass">{{ step.icon }}</div>
            <strong>{{ step.title }}</strong>
            <span>{{ step.subtitle }}</span>
          </div>
          <span v-if="i < block.steps.length - 1" class="flow-arrow">→</span>
        </template>
      </div>

      <template v-else-if="block.kind === 'pain-rows'">
        <div v-for="(item, i) in block.items" :key="i" class="pain-row">
          <span class="pain-num">{{ i + 1 }}</span>
          <div>
            <h4 v-html="item.title" />
            <p v-html="item.body" />
          </div>
        </div>
      </template>

      <dl v-else-if="block.kind === 'term-grid'" class="term-grid">
        <div v-for="(term, i) in block.terms" :key="i" class="term">
          <dt>{{ term.term }}</dt>
          <dd>{{ term.definition }}</dd>
        </div>
      </dl>

      <div v-else-if="block.kind === 'roadmap'" class="roadmap">
        <div
          v-for="(item, i) in block.items"
          :key="i"
          class="road-item"
          :class="{ current: item.current }"
        >
          <span class="num">{{ item.num }}</span>
          {{ item.label }}
        </div>
      </div>

      <div v-else-if="block.kind === 'cta'" class="cta-bar">
        <div>
          <h3>{{ block.title }}</h3>
          <p>{{ block.subtitle }}</p>
        </div>
        <span class="cta-next">{{ block.nextLabel }}</span>
      </div>

      <div v-else-if="block.kind === 'tip-box'" class="tip-box" v-html="block.html" />

      <div v-else-if="block.kind === 'warn-box'" class="warn-box" v-html="block.html" />

      <ul v-else-if="block.kind === 'check-done'" class="check-done">
        <li v-for="(item, i) in block.items" :key="i" v-html="item" />
      </ul>

      <div v-else-if="block.kind === 'os-tabs'" class="os-tabs">
        <span
          v-for="(tab, i) in block.tabs"
          :key="i"
          class="os-tab"
          :class="{ active: tab.active }"
        >
          {{ tab.label }}
        </span>
      </div>

      <div v-else-if="block.kind === 'steps'" class="steps">
        <div v-for="(step, i) in block.steps" :key="i" class="step">
          <span class="step-badge">{{ i + 1 }}</span>
          <div class="step-body">
            <h4>{{ step.title }}</h4>
            <p v-html="step.body" />
            <figure v-if="step.figure" class="figure-slot">
              <img v-if="step.figure.imageSrc" :src="step.figure.imageSrc" :alt="step.figure.caption" />
              <div v-else class="figure-placeholder">
                <span class="fig-icon">🖼</span>
                <span v-if="step.figure.placeholderLabel" class="fig-label">{{ step.figure.placeholderLabel }}</span>
                <code v-if="step.figure.placeholderCode">{{ step.figure.placeholderCode }}</code>
              </div>
              <figcaption>{{ step.figure.caption }}</figcaption>
            </figure>
          </div>
        </div>
      </div>

      <figure v-else-if="block.kind === 'figure'" class="figure-slot">
        <img v-if="block.figure.imageSrc" :src="block.figure.imageSrc" :alt="block.figure.caption" />
        <div v-else class="figure-placeholder">
          <span class="fig-icon">🖼</span>
          <span v-if="block.figure.placeholderLabel" class="fig-label">{{ block.figure.placeholderLabel }}</span>
          <code v-if="block.figure.placeholderCode">{{ block.figure.placeholderCode }}</code>
        </div>
        <figcaption>{{ block.figure.caption }}</figcaption>
      </figure>
    </div>
  </div>
</template>
