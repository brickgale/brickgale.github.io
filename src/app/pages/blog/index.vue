<template>
  <div class="blog">
    <h1 ref="titleRef" class="title">Blog</h1>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useScrollAnimation } from '@/composables/useScrollAnimation'

// Animation ref
const titleRef = ref<HTMLElement | null>(null)
useScrollAnimation(titleRef, { type: 'fade-in', delay: 0.1 })
</script>

<style lang="scss">
.blog {
  .title {
    text-align: center;
    margin: 20px;
  }
}
</style>
