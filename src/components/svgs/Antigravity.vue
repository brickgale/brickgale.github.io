<script setup lang="ts">
import type { SvgProps } from '@/types/components'
import BaseSvg from './Svg.vue'

const props = defineProps<SvgProps>()
</script>

<template>
  <BaseSvg v-bind="$attrs" :width="props.width" :height="props.height" v-slot="{ fill }">
    <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
    <path
      :fill="fill"
      d="m19.94,20.59c1.09.82,2.73.27,1.23-1.23-4.5-4.36-3.55-16.36-9.14-16.36S7.39,15,2.89,19.36c-1.64,1.64.14,2.05,1.23,1.23,4.23-2.86,3.95-7.91,7.91-7.91s3.68,5.05,7.91,7.91Z"
    />
  </BaseSvg>
</template>
