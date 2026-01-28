<template>
  <div class="profile-con h-[200px]">
    <div class="pair-avatar">
      <img class="avatar wst" src="@/assets/monogram.png" />
      <img class="avatar pair wst" src="@/assets/me_avatar.jpg" />
    </div>
    <div class="name">Brian Monsales</div>
    <div class="job-desc">Fullstack Web Developer</div>
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
