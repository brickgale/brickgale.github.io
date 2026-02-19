<template>
  <div class="relative w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <div class="col-span-1 space-y-4">
        <Card>
          <h3 class="mb-3"><i class="fa fa-sitemap mr-3"></i>Familiar AI Tools</h3>
          <div class="grid grid-cols-2 sm:grid-cols-5 gap-3">
            <div
              v-for="item in aiToolEntries"
              :key="item.name"
              class="flex flex-col items-center text-center text-sm"
            >
              <component v-if="item.Icon" :is="item.Icon" :size="28" />
              <span class="mt-1">{{ item.name }}</span>
            </div>
          </div>
        </Card>
        <Card>
          <h3 class="mb-3"><i class="fa fa-code-fork mr-3"></i>Familiar Tech Stack (Web)</h3>
          <div class="px-5 space-y-2">
            <h4>For Web Apps:</h4>
            <ul class="list-[circle] pl-4 [&>li]:list-item">
              <li v-for="item in webappTechStack" :key="item.name">
                {{ item.name }} <br />- {{ item.description }}
              </li>
            </ul>
            <h4>For Landing Pages:</h4>
            <ul class="list-[circle] pl-4 [&>li]:list-item">
              <li v-for="item in landingPageTechStack" :key="item.name">
                {{ item.name }} <br />- {{ item.description }}
              </li>
            </ul>
          </div>
        </Card>
      </div>
      <div class="col-span-1 xl:col-span-2 grid grid-cols-1 xl:grid-cols-2 gap-4 justify-self-end">
        <div class="col-span-1">
          <Card>
            <h3 class="mb-3"><i class="fa fa-code mr-3"></i>Main Skill Chart</h3>
            <div class="w-full h-[360px]">
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
          <Card>
            <h3 class="mb-3"><i class="fa fa-laptop mr-3"></i>Familiar Tech</h3>
            <div class="flex flex-wrap p-0">
              <span
                v-for="item in tech"
                class="px-2.5 py-0.5 rounded-[14px] bg-gradient-to-br from-[var(--primary-color)] to-[var(--secondary-color)] text-white text-sm mr-1.5 mb-1.5"
              >
                {{ item }}
              </span>
            </div>
          </Card>
          <Card>
            <h3 class="mb-3"><i class="fa fa-github mr-3"></i>GitHub Contributions</h3>
            <div class="w-full overflow-x-auto overflow-y-hidden">
              <img
                :src="contributionGraphSrc"
                alt="GitHub Contribution Graph"
                class="max-w-[600px] h-[100px] -m-2"
              />
            </div>
          </Card>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import VChart from 'vue-echarts'
import { computed, inject, onMounted, ref } from 'vue'
import type { ComputedRef } from 'vue'
import type { Component } from 'vue'
import { use } from 'echarts/core'
import { Card } from '@/components/ui/card'
import { CanvasRenderer } from 'echarts/renderers'
import { RadarChart } from 'echarts/charts'
import { PolarComponent, TitleComponent, TooltipComponent } from 'echarts/components'
import { Antigravity, Cursor, Gemini, GithubCopilot, OpenAI } from '@/components/svgs'
import skills from '@/data/skills.json'

const { tech, webappTechStack, landingPageTechStack, aiTools } = skills

const chartReady = ref(false)
onMounted(() => {
  chartReady.value = true
})

const theme = inject<ComputedRef<string>>('theme')
const contributionGraphSrc = computed(() => {
  const isDark = theme?.value === 'dark'
  const params = new URLSearchParams({
    chart: 'calendar',
    format: 'svg',
    weeks: '50',
    theme: 'purple',
    widget_size: 'small',
  })

  if (isDark) params.set('dark', 'true')

  return `https://contribution.oooo.so/_/brickgale?${params.toString()}`
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
