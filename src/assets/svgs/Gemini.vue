<script setup lang="ts">
import { computed } from 'vue'
import type { SvgProps } from '@/types/components'

const props = withDefaults(defineProps<SvgProps>(), {
  size: 24,
  viewBox: '0 0 24 24',
})

const widthValue = computed(() => props.width ?? props.size)
const heightValue = computed(() => props.height ?? props.size)
const fillColor = computed(() => props.color ?? 'currentColor')
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="widthValue"
    :height="heightValue"
    :fill="fillColor"
    :viewBox="props.viewBox"
  >
    <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
    <path
      d="M12 2c-.78 5.16-4.84 9.22-10 10 5.16.78 9.22 4.84 10 10 .78-5.16 4.84-9.22 10-10-5.16-.78-9.22-4.84-10-10"
    />
  </svg>
</template>
