<script setup lang="ts">
    import { ref, provide } from 'vue'
    import UiMenu from '@/components/common/uiMenu/index.vue'
    import UiSidebar from '@/components/common/uiSidebar/index.vue'
    import ProfileCon from '@/components/partials/profileCon/index.vue'
    import SponsorMe from '@/components/partials/sponsorMe/index.vue'
    import 'overlayscrollbars/overlayscrollbars.css'

    const sidebar = ref<HTMLDivElement | null>(null)
    const adjContainer = ref<HTMLDivElement | null>(null)

    provide('sidebar', sidebar)

    const opened = () => {
        adjContainer.value?.classList.add('openedSidebar')
        adjContainer.value?.classList.add('left')
    }
    const closed = () => {
        adjContainer.value?.classList.remove('openedSidebar')
    }

    const menu = [
        { name: 'About', route: 'about' },
        { name: 'Projects', route: 'projects' },
        { name: 'Blog', route: 'blog' }
    ]
</script>

<template>
    <UiSidebar class="main-sidebar" :visible="false" ref="sidebar" :m-mode="true"
        @sidebar-opened="opened" @sidebar-closed="closed">
        <template #topCon>
            <div class="top-con layered-bg">
                <div class="logo-con">
                    <img class="avatar" src="@/assets/monogram_white.png">
                </div>
                <ProfileCon />
            </div>
        </template>
        <template #midCon>
            <div class="mid-con">
                <UiMenu class="main-header" :menu="menu" />
            </div>
        </template>
        <template #bottomCon>
            <div class="buttom-con">
                <SponsorMe />
            </div>
        </template>
    </UiSidebar>
    <div class="main-container" ref="adjContainer">
        <router-view />
    </div>
</template>

<style lang="scss" src="./index.scss" />
