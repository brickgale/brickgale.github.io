<script setup lang="ts">
import { ref, provide, computed } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import { Menu } from '@/components/ui/menu'
import { Button } from '@/components/ui/button'
import { Sidebar } from '@/components/ui/sidebar'
import { Profile } from '@/components/partials/profile'
import { Sun, Moon } from '@/components/svgs'
import SponsorMe from '@/components/partials/sponsorMe/index.vue'
import 'overlayscrollbars/overlayscrollbars.css'

const isDark = useDark({
  selector: 'body', // applies .dark to <body>
  valueDark: 'dark',
  valueLight: 'light',
})
const toggleTheme = useToggle(isDark)

provide(
  'theme',
  computed(() => (isDark.value ? 'dark' : 'light'))
)
provide('toggleTheme', toggleTheme)

const sidebar = ref<HTMLDivElement | null>(null)
const adjContainer = ref<HTMLDivElement | null>(null)

provide('sidebar', sidebar)

const opened = () => {
  adjContainer.value?.classList.add('openedSidebar')
  adjContainer.value?.classList.add('left')
}
const closed = () => {
  adjContainer.value?.classList.remove('openedSidebar')
}

const menu = [
  { name: 'About', route: 'about' },
  { name: 'Projects', route: 'projects' },
  { name: 'Blog', route: 'blog' },
]
</script>

<template>
  <Sidebar
    :visible="false"
    ref="sidebar"
    :m-mode="true"
    @sidebar-opened="opened"
    @sidebar-closed="closed"
  >
    <Profile />
    <div class="flex flex-col flex-grow">
      <Menu
        class="text-center [&>ul>li]:block [&>ul>li>a]:block [&>ul>li>a]:border-r-4 [&>ul>li>a]:p-3 [&>ul>li]:border-b-1 [&>ul>li]:border-b-[var(--foreground-subtle)]/30 [&>ul>li>a.router-link-active]:border-r-4 [&>ul>li>a.router-link-active]:border-r-[var(--secondary-color)] [&>ul>li>a.router-link-active]:text-[var(--secondary-color)] [&>ul>li>a:not(.router-link-active)]:border-r-transparent"
        :menu="menu"
      />
    </div>
    <SponsorMe />
  </Sidebar>
  <div class="main-container" ref="adjContainer">
    <Button
      @click="toggleTheme()"
      type="ghost"
      class="absolute top-0 right-0 w-[50px] h-[48px] p-0 text-white hover:text-white hover:opacity-70 wst z-19 text-lg"
    >
      <Sun v-if="!isDark" :width="18" :height="18" />
      <Moon v-else :width="18" :height="18" />
    </Button>
    <router-view />
  </div>
</template>
