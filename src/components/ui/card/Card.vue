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
        'flex flex-col bg-[var(--background)] border-1 border-transparent hover:border-[var(--primary-color)] rounded-sm shadow-lg p-6 transition-shadow hover:shadow-xl',
        props.class
      )
    "
  >
    <slot />
  </div>
</template>
