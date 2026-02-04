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

provide(
  'theme',
  computed(() => (isDark.value ? 'dark' : 'light'))
);
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
      <Menu class="text-center [&>ul>li]:block [&>ul>li>a]:block [&>ul>li>a]:p-4" :menu="menu" />
    </div>
    <div class="buttom-con">
      <SponsorMe />
    </div>
  </Sidebar>
  <div class="main-container" ref="adjContainer">
    <Button
      @click="toggleTheme()"
      type="ghost"
      class="fixed top-0 right-0 w-[50px] h-[48px] p-0 text-white hover:text-white hover:opacity-70 wst z-19 text-lg"
    >
      <i v-if="!isDark" class="fa fa-moon-o" aria-hidden="true"></i>
      <i v-else class="fa fa-sun-o" aria-hidden="true"></i>
    </Button>
    <router-view />
  </div>
</template>
