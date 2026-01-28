<template>
  <div class="main wrapper row">
    <BurgerToggler @burger-opened="opened" @burger-closed="closed" ref="toggler" />
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
      <router-view></router-view>
    </OverlayScrollbarsComponent>
  </div>
</template>

<script setup lang="ts">
import { ref, inject, unref, watch, onMounted, toRef } from 'vue';
import { BurgerToggler } from '@/components/ui/burger-toggler';
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue';

interface UiSidebarType {
  open: Function;
  close: Function;
  _visible: Boolean;
}

const toggler = ref<any>(null);
const sidebar = unref(inject<UiSidebarType | null>('sidebar'));
const opened = () => sidebar?.open();
const closed = () => sidebar?.close();

onMounted(() => {
  if (sidebar) {
    const visible = toRef(sidebar, '_visible');
    watch(visible, (to) => {
      if (!to) toggler.value?.close();
    });
  }
});
</script>

<style lang="scss" src="./index.scss" />
