<script lang="ts" setup>
import { HTMLAttributes, ref, onMounted, onBeforeUnmount } from 'vue'
import { cn } from '@/utils/css'
import { gsap } from 'gsap'
import { getInitialAnimationState, getFinalAnimationState } from '@/utils/animate'

interface CardProps {
  class?: HTMLAttributes['class']
  animateTitle?: boolean
  titleDelay?: number
}

const props = withDefaults(defineProps<CardProps>(), {
  animateTitle: true,
  titleDelay: 0.1,
})

const cardRef = ref<HTMLElement | null>(null)
let observer: IntersectionObserver | null = null

onMounted(() => {
  if (props.animateTitle && cardRef.value) {
    // Find the first h1-h6 element inside the card
    const titleElement = cardRef.value.querySelector('h1, h2, h3, h4, h5, h6')

    if (titleElement) {
      // Set initial state
      gsap.set(titleElement, getInitialAnimationState('fade-up'))

      // Create intersection observer
      observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              gsap.to(entry.target, getFinalAnimationState(0.6, props.titleDelay))
              observer?.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '50px',
        }
      )

      observer.observe(titleElement)
    }
  }
})

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect()
  }
})
</script>

<template>
  <div
    ref="cardRef"
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
