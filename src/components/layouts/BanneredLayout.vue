<script lang="ts" setup>
import { HTMLAttributes } from 'vue'
import { cn } from '@/utils/css'

interface BanneredLayoutProps {
  bannerSrc?: string
  bannerClass?: HTMLAttributes['class']
}

const props = defineProps<BanneredLayoutProps>()
const classes = 'graphic-header-con layered-bg min-h-[200px] banner-img'
</script>

<template>
  <div class="relative">
    <div
      v-if="!$slots.banner"
      :class="
        cn(classes, props.bannerClass, props.bannerSrc ? `after:!bg-[image:var(--banner-url)]` : '')
      "
      :style="props.bannerSrc ? { '--banner-url': `url(${props.bannerSrc})` } : {}"
    ></div>
    <slot name="banner" />
    <slot />
  </div>
</template>
