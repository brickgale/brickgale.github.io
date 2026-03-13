import { onMounted, onBeforeUnmount, type Ref } from 'vue'
import { gsap } from 'gsap'
import { getInitialAnimationState, getFinalAnimationState } from '@/utils/animate'
import type { AnimationOptions } from '@/types/animate'

export interface ScrollAnimationOptions extends AnimationOptions {
  once?: boolean
}

export function useScrollAnimation(
  elementRef: Ref<HTMLElement | null>,
  options: ScrollAnimationOptions = {}
) {
  const { type = 'fade-up', duration = 0.6, delay = 0, threshold = 0.1, once = true } = options

  let observer: IntersectionObserver | null = null
  let hasAnimated = false

  onMounted(() => {
    if (!elementRef.value) return

    // Get the actual DOM element (handle both elements and component instances)
    const element = (elementRef.value as any).$el || elementRef.value

    if (!(element instanceof Element)) {
      console.warn('useScrollAnimation: Invalid element reference')
      return
    }

    // Set initial state
    gsap.set(element, getInitialAnimationState(type))

    // Create intersection observer
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && (!once || !hasAnimated)) {
            hasAnimated = true
            gsap.to(entry.target, getFinalAnimationState(duration, delay))

            // If once is true, stop observing after animation
            if (once) {
              observer?.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold,
        rootMargin: '50px', // Trigger 50px before element enters viewport
      }
    )

    observer.observe(element)
  })

  onBeforeUnmount(() => {
    if (observer && elementRef.value) {
      const element = (elementRef.value as any).$el || elementRef.value
      if (element instanceof Element) {
        observer.unobserve(element)
      }
      observer.disconnect()
    }
  })

  return {
    hasAnimated,
  }
}
