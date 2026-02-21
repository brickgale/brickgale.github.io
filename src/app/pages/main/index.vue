<template>
  <main class="main wrapper row">
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
      <router-view />
    </OverlayScrollbarsComponent>
  </main>
</template>

<script setup lang="ts">
import { ref, inject, watch } from 'vue'
import type { Ref } from 'vue'
import { BurgerToggler } from '@/components/ui/burger-toggler'
import { OverlayScrollbarsComponent } from 'overlayscrollbars-vue'

interface UiSidebarType {
  open: () => void
  close: () => void
  isVisible: boolean
}

const toggler = ref<any>(null)
const sidebar = inject<Ref<UiSidebarType | null>>('sidebar', ref(null))
const opened = () => sidebar.value?.open()
const closed = () => sidebar.value?.close()

watch(
  () => sidebar.value?.isVisible,
  to => {
    if (to === false) toggler.value?.close()
  }
)
</script>

<style lang="scss" src="./index.scss" />
