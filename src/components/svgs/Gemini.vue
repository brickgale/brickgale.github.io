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
      d="M12 2c-.78 5.16-4.84 9.22-10 10 5.16.78 9.22 4.84 10 10 .78-5.16 4.84-9.22 10-10-5.16-.78-9.22-4.84-10-10"
    />
  </BaseSvg>
</template>
