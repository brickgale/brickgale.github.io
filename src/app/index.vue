<script setup lang="ts">
    import { ref, provide } from 'vue'
    import UiMenu from '@/components/common/uiMenu/index.vue'
    import UiSidebar from '@/components/common/uiSidebar/index.vue'

    const sidebar = ref<HTMLDivElement | null>(null)
    const adjContainer = ref<HTMLDivElement | null>(null)

    provide('sidebar', sidebar)
    provide('adjContainer', adjContainer)

    const menu = [
        { name: 'About', route: 'about' },
        { name: 'Projects', route: 'projects' },
        { name: 'Blog', route: 'blog' }
    ]
</script>

<template>
    <UiSidebar class="main-sidebar" :visible="false" ref="sidebar" :m-mode="true">
        <template #topCon>
            <div class="top-con">
                <div class="logo-con">
                    <img class="avatar" src="@/assets/monogram_white.png">
                </div>
            </div>
        </template>
        <template #bottomCon>
            <div class="buttom-con">
                <UiMenu class="main-header" :menu="menu" />
            </div>
        </template>
    </UiSidebar>
    <div class="main-container" ref="adjContainer">
        <router-view />
    </div>
</template>

<style lang="scss" src="./index.scss" />
