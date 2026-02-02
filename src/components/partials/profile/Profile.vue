<template>
  <div class="relative z-10 h-[200px] justify-between flex flex-col items-center p-4 text-center text-white">
    <div class="flex flex-row -mr-1">
      <img :class="cn(imgProfileClass, 'hover:-ml-2 z-19')" src="@/assets/monogram.png" />
      <img :class="cn(imgProfileClass, 'hover:mr-2 z-20')" src="@/assets/me_avatar.jpg" />
    </div>
    <div>
      <p class="tracking-wide text-sm text-white">{{ profile.fullName }}</p>
      <p class="leading-relaxed tracking-wide text-white text-xs mb-0">{{ profile.title }}</p>
    </div>
    <div class="[&>a]:text-white [&>a]:mr-2">
      <a v-for="item in socialIcons" :href="item.link" :key="item.id" target="_blank">
        <i :class="cn(item.class, 'text-lg')" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import profile from '@/data/profile.json';
import socialIcons from '@/data/socials.json';
import { cn } from '@/utils/css';

const imgProfileClass = 'w-[50px] h-[50px] shadow-sm wst -rotate-15 hover:rotate-15';
</script>

