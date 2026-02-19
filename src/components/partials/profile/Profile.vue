<template>
  <div
    class="layered-bg relative z-10 h-[200px] justify-between flex flex-col items-center p-4 text-center text-white"
  >
    <div class="flex flex-row -mr-1">
      <img :class="cn(imgProfileClass, '-rotate-15 z-18')" src="@/assets/monogram.png" />
      <img :class="cn(imgProfileClass, 'rotate-15 z-19')" src="@/assets/me_avatar.jpg" />
    </div>
    <div class="space-y-2">
      <p class="tracking-wide text-white">{{ profile.fullName }}</p>
      <p class="leading-relaxed tracking-widest text-sm opacity-80 mb-0">{{ profile.title }}</p>
    </div>
    <div class="[&>a]:text-white [&>a]:mr-3 [&>a:last-child]:mr-0">
      <a
        v-for="item in socialIcons"
        :href="item.link"
        :key="item.id"
        target="_blank"
        class="text-[16px]"
      >
        <i :class="item.class" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import profile from '@/data/profile.json'
import socialIcons from '@/data/socials.json'
import { cn } from '@/utils/css'

const imgProfileClass = 'w-[50px] h-[50px] shadow-sm wst hover:scale-110 hover:z-21'
</script>
