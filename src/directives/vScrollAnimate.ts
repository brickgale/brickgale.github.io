import { type Directive } from 'vue'
import { gsap } from 'gsap'
import { getInitialAnimationState, getFinalAnimationState } from '@/utils/animate'
import type { AnimationOptions } from '@/types/animate'

const observerMap = new WeakMap<Element, IntersectionObserver>()
const animatedElements = new WeakSet<Element>()

export const vScrollAnimate: Directive<HTMLElement, AnimationOptions> = {
  mounted(el, binding) {
    const { type = 'fade-up', duration = 0.6, delay = 0, threshold = 0.1 } = binding.value || {}

    // Set initial state
    gsap.set(el, getInitialAnimationState(type))

    // Check if element is initially visible (above fold)
    const rect = el.getBoundingClientRect()
    const isInitiallyVisible = rect.top < window.innerHeight && rect.bottom >= 0

    // Create intersection observer
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !animatedElements.has(entry.target as Element)) {
            animatedElements.add(entry.target as Element)

            // If element is below fold (needs scrolling), cap delay at 0.05s max
            // This prevents long accumulated delays for items far down the page
            const adjustedDelay = isInitiallyVisible ? delay : Math.min(delay, 0.05)

            gsap.to(entry.target, getFinalAnimationState(duration, adjustedDelay))
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold,
        rootMargin: '50px', // Trigger 50px before element enters viewport
      }
    )

    observerMap.set(el, observer)
    observer.observe(el)
  },

  unmounted(el) {
    const observer = observerMap.get(el)
    if (observer) {
      observer.disconnect()
      observerMap.delete(el)
    }
    animatedElements.delete(el)
  },
}
