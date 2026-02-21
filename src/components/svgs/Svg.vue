<script setup lang="ts">
import type { SvgProps } from '@/types/components'
import { computed } from 'vue'

const props = withDefaults(defineProps<SvgProps>(), {
  width: 24,
  height: 24,
})

const fill = computed(() => props.color ?? 'currentColor')
// const viewBox = computed(() => `${`0 0 ${props.width} ${props.height}`}`)
</script>

<template>
  <svg
    :width="props.width"
    :height="props.height"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <slot :fill="fill" />
  </svg>
</template>
