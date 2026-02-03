<script setup lang="ts">
import { ref, provide, computed } from 'vue';
import { useDark, useToggle } from '@vueuse/core';
import { Menu } from '@/components/ui/menu';
import { Button } from '@/components/ui/button';
import { Sidebar } from '@/components/ui/sidebar';
import { Profile } from '@/components/partials/profile';
import SponsorMe from '@/components/partials/sponsorMe/index.vue';
import 'overlayscrollbars/overlayscrollbars.css';

const isDark = useDark({
  selector: 'body', // applies .dark to <body>
  valueDark: 'dark',
  valueLight: 'light',
});
const toggleTheme = useToggle(isDark);

provide('theme', computed(() => (isDark.value ? 'dark' : 'light')));
provide('toggleTheme', toggleTheme);

const sidebar = ref<HTMLDivElement | null>(null);
const adjContainer = ref<HTMLDivElement | null>(null);

provide('sidebar', sidebar);

const opened = () => {
  adjContainer.value?.classList.add('openedSidebar');
  adjContainer.value?.classList.add('left');
};
const closed = () => {
  adjContainer.value?.classList.remove('openedSidebar');
};

const menu = [
  { name: 'About', route: 'about' },
  { name: 'Projects', route: 'projects' },
  { name: 'Blog', route: 'blog' },
];
</script>

<template>
  <Sidebar
    :visible="false"
    ref="sidebar"
    :m-mode="true"
    @sidebar-opened="opened"
    @sidebar-closed="closed"
  >
    <div class="top-con layered-bg">
      <Profile />
    </div>
    <div class="mid-con">
      <Button @click="toggleTheme()" class="theme-toggle-btn">
        <i v-if="!isDark" class="fa fa-moon-o" aria-hidden="true"></i>
        <i v-else class="fa fa-sun-o" aria-hidden="true"></i>
      </Button>
      <Menu class="main-header" :menu="menu" />
    </div>
    <div class="buttom-con">
      <SponsorMe />
    </div>
  </Sidebar>
  <div class="main-container" ref="adjContainer">
    <router-view />
  </div>
</template>
