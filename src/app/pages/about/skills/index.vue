<script setup lang="ts">
import VChart from 'vue-echarts'
import { computed, inject, onMounted, ref } from 'vue'
import type { ComputedRef, Component } from 'vue'
import { use } from 'echarts/core'
import { Card } from '@/components/ui/card'
import { CanvasRenderer } from 'echarts/renderers'
import { RadarChart } from 'echarts/charts'
import { PolarComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import { Antigravity, Cursor, Gemini, GithubCopilot, OpenAI } from '@/components/svgs'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import { useScrollbarTheme } from '@/composables/useScrollbarTheme'
import { vScrollAnimate } from '@/directives/vScrollAnimate'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'
import skills from '@/data/skills.json'

const { tech, webappTechStack, landingPageTechStack, aiTools } = skills

const chartReady = ref(false)
onMounted(() => {
  chartReady.value = true
})

// Animation refs - Cards
const aiToolsCard = ref<HTMLElement | null>(null)
const techStackCard = ref<HTMLElement | null>(null)
const mainSkillCard = ref<HTMLElement | null>(null)
const familiarTechCard = ref<HTMLElement | null>(null)
const githubCard = ref<HTMLElement | null>(null)

// Animation refs - Content (for containers that don't have individual item animations)
const mainSkillContent = ref<HTMLElement | null>(null)
const githubContent = ref<HTMLElement | null>(null)

// Apply scroll animations with staggered delays
// Cards - subtle background entrance
useScrollAnimation(aiToolsCard, { type: 'fade-up', delay: 0.1 })
useScrollAnimation(techStackCard, { type: 'fade-up', delay: 0.15 })
useScrollAnimation(mainSkillCard, { type: 'fade-up', delay: 0.2 })
useScrollAnimation(familiarTechCard, { type: 'fade-up', delay: 0.25 })
useScrollAnimation(githubCard, { type: 'fade-up', delay: 0.3 })

// Content - fade up with additional delay for layered effect (only for non-list items)
useScrollAnimation(mainSkillContent, { type: 'fade-up', delay: 0.4 })
useScrollAnimation(githubContent, { type: 'fade-up', delay: 0.5 })

const { scrollbarTheme } = useScrollbarTheme()
const theme = inject<ComputedRef<string>>('theme')

const contributionGraphSrc = computed(() => {
  const isDark = theme?.value === 'dark'
  // Using GitHub Chart API - more reliable alternative
  const color = isDark ? 'purple' : '8e84d8'
  return `https://ghchart.rshah.org/${color}/brickgale`
})

const aiToolIconMap: Record<string, Component> = {
  Cursor,
  Antigravity,
  Copilot: GithubCopilot,
  OpenAI,
  Gemini,
}

const aiToolEntries = aiTools.map(name => ({
  name,
  Icon: aiToolIconMap[name] ?? null,
}))

use([CanvasRenderer, RadarChart, PolarComponent, TitleComponent, TooltipComponent])

const options = ref({
  tooltip: {},
  color: ['#8e84d8'],
  radar: {
    indicator: [
      { name: 'JS', max: 10 },
      { name: 'HTML', max: 10 },
      { name: 'CSS', max: 10 },
      { name: 'NODEJS', max: 10 },
      { name: 'SQL', max: 10 },
      { name: 'PHP', max: 10 },
    ],
  },
  series: [
    {
      name: 'Skills',
      type: 'radar',
      data: [{ value: [9, 10, 10, 7, 8, 8] }],
    },
  ],
})
</script>

<template>
  <div class="relative w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div class="col-span-1 space-y-4">
        <Card ref="aiToolsCard" :titleDelay="0.2">
          <h3 class="mb-3"><i class="fa fa-sitemap mr-3"></i>Familiar AI Tools</h3>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div
              v-for="(item, index) in aiToolEntries"
              :key="item.name"
              v-scroll-animate="{ type: 'fade-up', duration: 0.5, delay: 0.35 + index * 0.08 }"
              class="flex flex-col items-center text-center text-sm"
            >
              <component v-if="item.Icon" :is="item.Icon" :size="28" />
              <span class="mt-1">{{ item.name }}</span>
            </div>
          </div>
        </Card>
        <Card ref="techStackCard" :titleDelay="0.25">
          <h3 class="mb-3"><i class="fa fa-code-fork mr-3"></i>Familiar Tech Stack (Web)</h3>
          <div
            class="px-5 space-y-2"
            v-scroll-animate="{ type: 'fade-up', duration: 0.5, delay: 0.4 }"
          >
            <h4>For Web Apps:</h4>
            <ul class="list-[circle] pl-4 [&>li]:list-item">
              <li v-for="(item, index) in webappTechStack" :key="item.name">
                {{ item.name }} <br />- {{ item.description }}
              </li>
            </ul>
            <h4>For Landing Pages:</h4>
            <ul class="list-[circle] pl-4 [&>li]:list-item">
              <li v-for="(item, index) in landingPageTechStack" :key="item.name">
                {{ item.name }} <br />- {{ item.description }}
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <div class="col-span-1 xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-4 justify-self-end">
        <div class="col-span-1">
          <Card ref="mainSkillCard" :titleDelay="0.3">
            <h3 class="mb-3"><i class="fa fa-code mr-3"></i>Main Skill Chart</h3>
            <div ref="mainSkillContent" class="w-full h-[360px]">
              <v-chart
                v-if="chartReady"
                :option="options"
                auto-resize
                class="w-full mx-auto max-w-[320px] h-[320px]"
              />
            </div>
          </Card>
        </div>
        <div class="col-span-1 gap-4 space-y-4">
          <Card ref="familiarTechCard" :titleDelay="0.35">
            <h3 class="mb-3"><i class="fa fa-laptop mr-3"></i>Familiar Tech</h3>
            <div class="flex flex-wrap p-0">
              <span
                v-for="(item, index) in tech"
                :key="item"
                v-scroll-animate="{ type: 'fade-up', duration: 0.4, delay: 0.5 }"
                class="px-2.5 py-0.5 rounded-[14px] bg-gradient-to-br from-[var(--secondary-color)] to-[var(--primary-color)] dark:from-[var(--primary-color)] dark:to-[var(--secondary-color)] text-white text-sm mr-1.5 mb-1.5"
              >
                {{ item }}
              </span>
            </div>
          </Card>
          <Card ref="githubCard" :titleDelay="0.4">
            <h3 class="mb-3"><i class="fa fa-github mr-3"></i>GitHub Contributions</h3>
            <OverlayScrollbarsComponent
              ref="githubContent"
              element="div"
              class="w-full"
              :options="{
                overflow: {
                  x: 'scroll',
                  y: 'hidden',
                },
                scrollbars: {
                  theme: scrollbarTheme,
                },
              }"
              defer
            >
              <img
                :src="contributionGraphSrc"
                alt="GitHub Contribution Graph"
                class="max-w-[600px] h-[100px]"
              />
            </OverlayScrollbarsComponent>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>
