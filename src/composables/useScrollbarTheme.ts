import { computed, inject } from 'vue'
import type { ComputedRef } from 'vue'

export function useScrollbarTheme() {
  const theme = inject<ComputedRef<string>>('theme')

  const scrollbarTheme = computed(() =>
    theme?.value === 'dark' ? 'os-theme-light' : 'os-theme-dark'
  )

  return {
    scrollbarTheme,
  }
}
