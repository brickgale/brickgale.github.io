import type { AnimationState } from '@/types/animate'
import { AnimationType } from '@/types/animate'

export const INITIAL_ANIMATION_STATES = {
  'fade-up': { opacity: 0, y: 30 },
  'fade-down': { opacity: 0, y: -30 },
  'fade-left': { opacity: 0, x: 30 },
  'fade-right': { opacity: 0, x: -60 },
  'scale-in': { opacity: 0, scale: 0.9 },
  'fade-in': { opacity: 0 },
} as const

export function getInitialAnimationState(animationType: AnimationType): AnimationState {
  return INITIAL_ANIMATION_STATES[animationType]
}

export function getFinalAnimationState(duration: number, delay: number) {
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
