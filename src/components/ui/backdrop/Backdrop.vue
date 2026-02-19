<script setup lang="ts">
const emit = defineEmits(['close'])
function close() {
  emit('close')
}
</script>

<template>
  <div class="ui-backdrop" @click="close" @keyup.esc="close"></div>
</template>

<style lang="scss">
.ui-backdrop {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 99;
  pointer-events: none;
  background-color: rgba(#000, 0.54);
  transform: translate3d(0, 0, 0);
  opacity: 0;
  -webkit-overflow-scrolling: touch;
  transition: all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1);
  transition-property: transform;
  will-change: transform;

  &.ui-active {
    opacity: 1;
    pointer-events: auto;
  }

  &.ui-transparent {
    background: rgba(#000, 0.005);
  }
}
</style>
