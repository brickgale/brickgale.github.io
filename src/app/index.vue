<script setup lang="ts">
import { ref, provide } from 'vue';
import { Menu } from '@/components/ui/menu';
import { Sidebar } from '@/components/ui/sidebar';
import ProfileCon from '@/components/partials/profileCon/index.vue';
import SponsorMe from '@/components/partials/sponsorMe/index.vue';
import 'overlayscrollbars/overlayscrollbars.css';
import '@/app/index.css';

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
    class="main-sidebar"
    :visible="false"
    ref="sidebar"
    :m-mode="true"
    @sidebar-opened="opened"
    @sidebar-closed="closed"
  >
    <template #topCon>
      <div class="top-con layered-bg">
        <ProfileCon />
      </div>
    </template>
    <template #midCon>
      <div class="mid-con">
        <Menu class="main-header" :menu="menu" />
      </div>
    </template>
    <template #bottomCon>
      <div class="buttom-con">
        <SponsorMe />
      </div>
    </template>
  </Sidebar>
  <div class="main-container" ref="adjContainer">
    <router-view />
  </div>
</template>
