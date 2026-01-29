<template>
  <div class="relative z-10 h-[200px] justify-between flex flex-col items-center p-4 text-center text-white">
    <div class="pair-avatar">
      <img class="avatar wst" src="@/assets/monogram.png" />
      <img class="avatar pair wst" src="@/assets/me_avatar.jpg" />
    </div>
    <div>
      <p class="leading-3 text-white">Brian Monsales</p>
      <p class="leading-3 text-white">Fullstack Web Developer</p>
    </div>
    <div class="social-icons">
      <a v-for="item in socialIcons" :href="item.link" target="_blank">
        <i :class="item.class" aria-hidden="true"></i>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import socialIcons from '@/data/socials.json';
</script>

<style lang="scss" src="./index.scss" />
