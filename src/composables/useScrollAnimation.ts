import { onMounted, onBeforeUnmount, type Ref } from 'vue'
import { gsap } from 'gsap'

export type AnimationType =
  | 'fade-up'
  | 'fade-down'
  | 'fade-left'
  | 'fade-right'
  | 'fade-in'
  | 'scale-in'

export interface ScrollAnimationOptions {
  type?: AnimationType
  duration?: number
  delay?: number
  threshold?: number
  once?: boolean
}

export function useScrollAnimation(
  elementRef: Ref<HTMLElement | null>,
  options: ScrollAnimationOptions = {}
) {
  const { type = 'fade-up', duration = 0.6, delay = 0, threshold = 0.1, once = true } = options

  let observer: IntersectionObserver | null = null
  let hasAnimated = false

  const getInitialState = (animationType: AnimationType) => {
    switch (animationType) {
      case 'fade-up':
        return { opacity: 0, y: 30 }
      case 'fade-down':
        return { opacity: 0, y: -30 }
      case 'fade-left':
        return { opacity: 0, x: 30 }
      case 'fade-right':
        return { opacity: 0, x: -30 }
      case 'scale-in':
        return { opacity: 0, scale: 0.9 }
      case 'fade-in':
      default:
        return { opacity: 0 }
    }
  }

  const getFinalState = () => {
    return {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      duration,
      delay,
      ease: 'power2.out',
    }
  }

  onMounted(() => {
    if (!elementRef.value) return

    // Get the actual DOM element (handle both elements and component instances)
    const element = (elementRef.value as any).$el || elementRef.value

    if (!(element instanceof Element)) {
      console.warn('useScrollAnimation: Invalid element reference')
      return
    }

    // Set initial state
    gsap.set(element, getInitialState(type))

    // Create intersection observer
    observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting && (!once || !hasAnimated)) {
            hasAnimated = true
            gsap.to(entry.target, getFinalState())

            // If once is true, stop observing after animation
            if (once) {
              observer?.unobserve(entry.target)
            }
          }
        })
      },
      {
        threshold,
        rootMargin: '0px',
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
