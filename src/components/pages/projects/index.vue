<template>
    <div class="projects">
        <h1 class="title">Projects</h1>
        <GradientBg />
    </div>
</template>

<script setup lang="ts">
    import GradientBg from '@/components/partials/gradientBg/index.vue'
</script>

<style lang="scss">
    .projects {
        .title {
            color: #fff;
            text-align: center;
            margin: 20px;
        }
        .gradient-bg {
            width: 100vw;
            height: 100vh;
        }
    }
</style>