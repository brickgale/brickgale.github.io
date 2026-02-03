<template>
  <div class="relative">
    <div :class="graphicbgClass"></div>
    <div class="flex flex-col max-w-[800px] m-auto p-4 justify-center items-center">
      <Card class="max-w-[300px] w-full mb-8 p-4 relative justify-center items-center -mt-15 z-10">
        <div class="max-w-[80px] relative -mt-15 mb-6 cursor-pointer z-20">
          <template v-for="(img, index) in imgsRef" :key="index">
            <img :src="typeof img === 'string' ? img : img?.src" @click="show" class="rounded-md shadow-md hover:scale-105 wst" />
          </template>
        </div>
        <vue-easy-lightbox
          :visible="visibleRef"
          :imgs="imgsRef"
          :index="indexRef"
          @hide="onHide"
        ></vue-easy-lightbox>
        <div class="g-menu-con">
          <Menu class="g-menu" :menu="menu"></Menu>
        </div>
      </Card>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card';
import { Menu } from '@/components/ui/menu';
import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox';

const menu = [
  { name: 'Skills', route: 'about-skills' },
  { name: 'Profile', route: 'about' },
  { name: 'Misc', route: 'about-misc' },
];

const graphicbgClass = "graphic-header-con layered-bg min-h-[200px] banner-img";

const profilePicSrc = '/images/updated_prof_pic.jpg';

const { show, onHide, visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: [profilePicSrc],
  initIndex: 0,
});
</script>

<style lang="scss" src="./index.scss" />
