<script lang="ts" setup>
import { BanneredLayout } from '@/components/layouts'
import banner from '@/assets/images/banner2.jpg'
</script>

<template>
  <BanneredLayout :bannerSrc="banner">
    <div
      class="flex flex-col max-w-[800px] xl:max-w-[1300px] m-auto p-4 justify-center items-center"
    >
      <h1 class="text-xl">Projects</h1>

      <router-view />
    </div>
  </BanneredLayout>
</template>

<style lang="scss">
.projects {
  .title {
    text-align: center;
    margin: 20px;
  }
}
</style>
