<template>
  <div class="about np">
    <div class="graphic-header-con layered-bg"></div>

    <div class="wrapper-con">
      <div class="g-content">
        <div class="row center-xs">
          <div class="col-xs-10 col-md-6">
            <div class="g-avatar-con">
              <template v-for="(src, index) in imgsRef" :key="index">
                <img :src="src" @click="show" />
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

const profilePicSrc = new URL('/images/updated_prof_pic.jpg', import.meta.url).href;

const { show, onHide, visibleRef, indexRef, imgsRef } = useEasyLightbox({
  imgs: [profilePicSrc],
  initIndex: 0,
});
</script>

<style lang="scss" src="./index.scss" />
