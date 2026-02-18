<script setup lang="ts">
import { onMounted, ref, unref } from 'vue';
import { Backdrop } from '@/components/ui/backdrop';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';

const el = ref<HTMLDivElement | null>(null);
const emit = defineEmits(['sidebar-opened', 'sidebar-closed']);

const props = defineProps({
  visible: {
    type: Boolean,
    default: true,
  },
  positionRight: {
    type: Boolean,
    default: false,
  },
  mMode: {
    type: Boolean,
    default: false,
  },
});

const _visible = ref(true);
const fullWidth = ref(0);
const isClient = typeof window !== 'undefined';

const getClientWidth = () => (isClient ? document.documentElement.clientWidth : 0);

function open() {
  _visible.value = true;
  el.value?.classList.add('opened');
  if (props.mMode) el.value?.classList.add('m-mode');
  emit('sidebar-opened');
}

function close() {
  _visible.value = false;
  el.value?.classList.remove('opened');
  if (props.mMode) el.value?.classList.remove('m-mode');
  emit('sidebar-closed');
}

function handleResize() {
  if (!isClient) return;
  fullWidth.value = getClientWidth();
  if (unref(fullWidth) <= 1024 && _visible) {
    close();
  }
  if (unref(fullWidth) > 1024 && !_visible && props.visible) {
    open();
  }
}

onMounted(() => {
  if (!isClient) return;
  _visible.value = props.visible;
  window.addEventListener('resize', handleResize);
  if (props.visible) open();
  handleResize();
});

defineExpose({
  open,
  close,
  _visible,
});
</script>

<template>
  <aside
    class="ui-sidebar bg-gradient-to-b from-black to-neutral-700"
    :class="{ 'ui-sidebar-right': positionRight, 'ui-sidebar-left': !positionRight }"
    @keyup.esc="close"
    tabindex="0"
    ref="el"
  >
    <div class="ui-sidebar-content">
      <OverlayScrollbarsComponent
        element="span"
        class="main-con"
        :options="{
          scrollbars: {
            theme: 'os-theme-dark',
          },
        }"
        defer
      >
        <div class="flex flex-col justify-between h-screen">
          <slot></slot>
        </div>
      </OverlayScrollbarsComponent>
    </div>
    <Backdrop class="ui-sidebar-backdrop" @close="close" />
  </aside>
</template>

<style lang="scss" src="./index.scss" />
