<script lang="ts" setup>
import { HTMLAttributes } from 'vue'
import { cn } from '@/utils/css'

interface CardProps {
  class?: HTMLAttributes['class']
}

const props = defineProps<CardProps>()
</script>

<template>
  <div
    :class="
      cn(
        'flex flex-col bg-[var(--background)] border-1 border-transparent hover:border-[var(--primary-color)] rounded-sm shadow-lg dark:shadow-[0_10px_15px_-3px_rgba(255,255,255,0.05),0_4px_6px_-4px_rgba(255,255,255,0.05)] p-6 transition-shadow hover:shadow-xl dark:hover:shadow-[0_20px_25px_-5px_rgba(255,255,255,0.06),0_8px_10px_-6px_rgba(255,255,255,0.06)] dark:border-white/10',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
