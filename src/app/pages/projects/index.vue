<script lang="ts" setup>
import { ref } from 'vue'
import { BanneredLayout } from '@/components/layouts'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import banner from '@/assets/images/banner2.jpg'

// Animation ref
const titleRef = ref<HTMLElement | null>(null)
useScrollAnimation(titleRef, { type: 'fade-in', delay: 0.1 })
</script>

<template>
  <BanneredLayout :bannerSrc="banner">
    <div
      class="flex flex-col max-w-[800px] xl:max-w-[1300px] m-auto p-4 justify-center items-center"
    >
      <h1 ref="titleRef" class="text-xl">Projects</h1>

      <router-view />
    </div>
  </BanneredLayout>
</template>

<style lang="scss">
.projects {
  .title {
    text-align: center;
    margin: 20px;
  }
}
</style>
