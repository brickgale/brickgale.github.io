<template>
  <div class="relative w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 space-y-4">
        <Card ref="roadmapCard">
          <h3><i class="fa fa-road mr-3"></i>Roadmap (Plans)</h3>
        </Card>
        <Card ref="prioritiesCard">
          <h3><i class="fa fa-balance-scale mr-3"></i>Priorities</h3>
        </Card>
        <Card ref="fitnessCard">
          <h3><i class="fa fa-heartbeat mr-3"></i>Fitness Journey</h3>
        </Card>
      </div>
      <div class="col-span-1 space-y-4">
        <Card ref="animeCard">
          <h3><i class="fa fa-television mr-3"></i>Anime</h3>
        </Card>
        <Card ref="gamingCard">
          <h3><i class="fa fa-gamepad mr-3"></i>Gaming</h3>
        </Card>
        <Card ref="contentCard">
          <h3><i class="fa fa-play mr-3"></i>Content Creation</h3>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Card } from '@/components/ui/card'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

// Animation refs
const roadmapCard = ref<HTMLElement | null>(null)
const prioritiesCard = ref<HTMLElement | null>(null)
const fitnessCard = ref<HTMLElement | null>(null)
const animeCard = ref<HTMLElement | null>(null)
const gamingCard = ref<HTMLElement | null>(null)
const contentCard = ref<HTMLElement | null>(null)

// Apply scroll animations with staggered delays
useScrollAnimation(roadmapCard, { type: 'fade-up', delay: 0.1 })
useScrollAnimation(prioritiesCard, { type: 'fade-up', delay: 0.15 })
useScrollAnimation(fitnessCard, { type: 'fade-up', delay: 0.2 })
useScrollAnimation(animeCard, { type: 'fade-up', delay: 0.25 })
useScrollAnimation(gamingCard, { type: 'fade-up', delay: 0.3 })
useScrollAnimation(contentCard, { type: 'fade-up', delay: 0.35 })
</script>
