<template>
  <div class="relative">
    <div :class="graphicbgClass"></div>
    <div class="flex flex-col max-w-[800px] m-auto p-8 justify-center items-center">
      <div class="flex flex-col justify-center items-center w-full max-w-[300px] ">
        <div class="max-w-[85px] rounded-md relative -mt-32 mb-8 z-10">
          <template v-for="(img, index) in imgsRef" :key="index">
            <img :src="typeof img === 'string' ? img : img?.src" @click="show" />
          </template>
          <vue-easy-lightbox
            :visible="visibleRef"
            :imgs="imgsRef"
            :index="indexRef"
            @hide="onHide"
          ></vue-easy-lightbox>
        </div>
        <div class="g-menu-con">
          <Menu class="g-menu" :menu="menu"></Menu>
        </div>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
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
