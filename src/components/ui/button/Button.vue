
<script setup lang="ts">
import { computed } from 'vue';
import { cn } from '@/utils/css';

type ButtonProps = {
  type: 'ghost' | 'default';
  class?: string;
}

const props = defineProps<ButtonProps>();

const baseClass = computed(() =>
  props.type === 'ghost'
    ? 'px-4 py-2 bg-transparent text-[var(--foreground)] hover:text-[var(--primary-color)] border-0 rounded transition-colors duration-300 cursor-pointer'
    : 'px-4 py-2 bg-[var(--primary-color)] text-white rounded hover:bg-[var(--secondary-color)] transition-colors duration-300 cursor-pointer'
);

const buttonClass = computed(() => cn(baseClass.value, props.class));
</script>

<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>