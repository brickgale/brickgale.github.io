<script setup lang="ts">
import type { SvgProps } from '@/types/components'
import BaseSvg from './Svg.vue'

defineProps<SvgProps>()
</script>

<template>
  <BaseSvg v-bind="$attrs" :width="props.width" :height="props.height" v-slot="{ fill }">
    <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
    <path
      :fill="fill"
      d="m20.42 6.73-8-4.62a.82.82 0 0 0-.83 0L3.58 6.73c-.22.12-.35.36-.35.61v9.32c0 .25.13.48.35.61l8.01 4.62c.26.15.57.15.83 0l8.01-4.62c.22-.12.35-.36.35-.61V7.34c0-.25-.13-.48-.35-.61Zm-.5.98L12.19 21.1c-.05.09-.19.05-.19-.05v-8.77c0-.18-.09-.34-.25-.43L4.16 7.47c-.09-.05-.05-.19.05-.19h15.46c.22 0 .36.24.25.43"
    />
  </BaseSvg>
</template>
