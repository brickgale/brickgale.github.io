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
        cn(classes, props.bannerClass, {
          'after:!bg-[image:var(--banner-url)]': props.bannerSrc,
        })
      "
      :style="props.bannerSrc ? { '--banner-url': `url(${props.bannerSrc})` } : {}"
    >
      <slot name="banner-child" />
    </div>
    <slot name="banner" />

    <!-- Radial gradient drop shadow -->
    <div
      class="absolute left-1/2 -translate-x-1/2 w-4/5 h-20 -mt-10 pointer-events-none -z-1"
      style="
        background: radial-gradient(
          ellipse at center,
          color-mix(in srgb, var(--primary-color) 30%, transparent) 0%,
          color-mix(in srgb, var(--primary-color) 15%, transparent) 50%,
          transparent 70%
        );
      "
    ></div>

    <!-- Linear gradient drop shadow -->
    <div
      class="absolute left-0 right-0 h-12 -mt-8 pointer-events-none -z-1"
      style="
        background: linear-gradient(
          to bottom,
          color-mix(in srgb, var(--primary-color) 80%, transparent) 0%,
          transparent 100%
        );
      "
    ></div>

    <slot />
  </div>
</template>
