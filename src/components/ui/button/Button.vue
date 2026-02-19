<script setup lang="ts">
import { computed } from 'vue'
import { cn } from '@/utils/css'

type ButtonProps = {
  type: 'ghost' | 'default'
  class?: string
  href?: string
}

const props = defineProps<ButtonProps>()

const baseClass =
  'px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer flex items-center justify-center'

const typeClass = computed(() =>
  props.type === 'ghost'
    ? cn(
        baseClass,
        'bg-transparent hover:bg-transparent text-[var(--foreground)] hover:text-[var(--primary-color)] border-0'
      )
    : baseClass
)

const buttonClass = computed(() => cn(typeClass.value, props.class))
</script>

<template>
  <button v-if="!props.href" :class="buttonClass">
    <slot />
  </button>
  <a v-else :href="props.href" :class="buttonClass" target="_blank" rel="noopener noreferrer">
    <slot />
  </a>
</template>
