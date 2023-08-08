<template>
    <div class="about np">
        <div class="graphic-header-con layered-bg">
        </div>

        <div class="wrapper-con">
            <div class="g-content">
                <div class="row center-xs">
                    <div class="col-xs-10 col-md-6">
                        <div class="g-avatar-con">
                            <template v-for="img in imgsRef">
                                <img :src="img" @click="show" />
                            </template>
                            <vue-easy-lightbox
                                :visible="visibleRef"
                                :imgs="imgsRef"
                                :index="indexRef"
                                @hide="onHide"
                            ></vue-easy-lightbox>
                        </div> 
                        <div class="g-menu-con">
                        <ui-menu class="g-menu" :menu="menu"></ui-menu>
                        </div>
                    </div>
                </div>
            </div>

            <router-view></router-view>
        </div>
    </div>
</template>

<script setup lang="ts">
    import UiMenu from '@/components/common/uiMenu/index.vue'
    import VueEasyLightbox, { useEasyLightbox } from 'vue-easy-lightbox'

    const menu = [
        { name: 'Skills', route: 'about-skills' },
        { name: 'Profile', route: 'about' },
        { name: 'Misc', route: 'about-misc' }
    ]

    const profilePicSrc = new URL('/images/me_nck.jpg', import.meta.url).href

    const {
        show, onHide,
        visibleRef, indexRef, imgsRef
    } = useEasyLightbox({
        imgs: [
            profilePicSrc,
        ],
        initIndex: 0
    })
    
</script>

<style lang="scss" src="./index.scss" />