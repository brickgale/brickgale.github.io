<template>
  <BanneredLayout :bannerSrc="banner">
    <div
      class="flex flex-col max-w-[800px] xl:max-w-[1300px] m-auto p-4 justify-center items-center"
    >
      <Card
        ref="profileCard"
        class="max-w-[300px] w-full mb-4 p-4 relative justify-center items-center -mt-15 z-10"
      >
        <div class="w-[80px] h-[80px] relative -mt-15 mb-6 cursor-pointer z-17">
          <template v-for="(img, index) in imgsRef" :key="index">
            <img
              :src="typeof img === 'string' ? img : img?.src"
              @click="show"
              class="rounded-md shadow-md dark:shadow-[0_4px_6px_-1px_rgba(255,255,255,0.05),0_2px_4px_-2px_rgba(255,255,255,0.05)] hover:scale-105 wst"
            />
          </template>
        </div>
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgsRef"
          :index="indexRef"
          @hide="onHide"
        ></vue-easy-lightbox>
        <div>
          <Menu class="g-menu" :menu="menu"></Menu>
        </div>
      </Card>
      <router-view />
    </div>
  </BanneredLayout>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'
import { BanneredLayout } from '@/components/layouts'
import { Card } from '@/components/ui/card'
import { Menu } from '@/components/ui/menu'
import { cn } from '@/utils/css'
import { useScrollAnimation } from '@/composables/useScrollAnimation'
import banner from '@/assets/images/banner.jpg'

const linkClasses =
  'p-2.5 text-sm border-[var(--foreground-subtle)]/30 hover:border-t-[var(--primary-color)] [&.router-link-exact-active]:border-t-[var(--primary-color)] [&.router-link-exact-active]:border-t-2 hover:text-[var(--secondary-color)] transition-colors duration-300 hover:border-t-2 '

const menu = [
  { name: 'Skills', route: 'about-skills', linkClasses: cn(linkClasses, 'border-t border-r') },
  { name: 'Profile', route: 'about', linkClasses: cn(linkClasses, 'border-t') },
  { name: 'Misc', route: 'about-misc', linkClasses: cn(linkClasses, 'border-t border-l') },
]

const profilePicSrc = '/images/updated_prof_pic.jpg'

const { show, onHide, visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: [profilePicSrc],
  initIndex: 0,
})

// Animation ref
const profileCard = ref<HTMLElement | null>(null)
useScrollAnimation(profileCard, { type: 'scale-in', delay: 0.1 })
</script>
