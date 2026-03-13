import { INITIAL_ANIMATION_STATES } from '@/utils/animate'

export type AnimationType = keyof typeof INITIAL_ANIMATION_STATES

export interface AnimationOptions {
  type?: AnimationType
  duration?: number
  delay?: number
  threshold?: number
}
export interface AnimationState {
  opacity?: number
  x?: number
  y?: number
  scale?: number
}
