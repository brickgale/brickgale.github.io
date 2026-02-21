<script setup lang="ts">
import type { SvgProps } from '@/types/components'
import BaseSvg from './Svg.vue'

const props = defineProps<SvgProps>()
</script>

<template>
  <BaseSvg v-bind="$attrs" :width="props.width" :height="props.height" v-slot="{ fill }">
    <!--Boxicons v3.0.8 https://boxicons.com | License  https://docs.boxicons.com/free-->
    <path d="m12 12.765 5.592-9.437h-3.276L12 7.33v.002L9.688 3.328h-3.28z"></path
    ><path d="M18.461 3.332 12 14.235 5.539 3.332H1.992L12 20.672l10.008-17.34z"></path>
  </BaseSvg>
</template>
