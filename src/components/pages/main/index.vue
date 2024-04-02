<template>
    <div class="main wrapper row">
        <div class="side-con">
            <div class="top-con layered-bg">
                <UiBurgerToggler @burger-opened="opened" @burger-closed="closed" ref="toggler" />
                <div class="profile-con">
                    <div class="pair-avatar">
                        <img class="avatar" src="@/assets/monogram.png">
                        <img class="avatar pair" src="@/assets/me_avatar.jpg">
                    </div>
                        <div class="name hide-on-mobile">Brian Monsales</div>
                        <div class="position hide-on-mobile">Fullstack Web Engineer</div>
                        <div class="social-icons hide-on-mobile">
                        <a v-for="item in socialIcons" :href="item.link" target="_blank">
                            <i :class="item.class" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
            <div class="mid-con">
                
            </div>
            <div class="bottom-con hide-on-mobile">
                <SponsorMe />
            </div>
        </div>
        <OverlayScrollbarsComponent
            element="span"
            class="main-con"
            :options="{
                scrollbars: {
                    theme: 'os-theme-dark',
                },
            }"
            defer
        >
            <router-view></router-view>
        </OverlayScrollbarsComponent>
        <div class="bottom-con show-on-mobile">
            <SponsorMe />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, inject, unref, watch, onMounted, toRef } from 'vue'
    import UiBurgerToggler from '@/components/common/uiBurgerToggler/index.vue'
    import SponsorMe from '@/components/partials/sponsorMe/index.vue'
    import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"

    interface UiSidebarType {
        open: Function;
        close: Function;
        _visible: Boolean;
    }

    const toggler = ref<any>(null)
    const sidebar = unref( inject<UiSidebarType | null>('sidebar') )
    const opened = () => sidebar?.open()
    const closed = () => sidebar?.close()

    const socialIcons = [
        { 
          link: 'https://github.com/brickgale',
          class: 'fa fa-github'
        },
        { 
          link: 'https://www.facebook.com/brian.monsales',
          class: 'fa fa-facebook'
        },
        { 
          link: 'https://www.instagram.com/borntobeatroll',
          class: 'fa fa-instagram'
        },
        { 
          link: 'https://www.linkedin.com/in/brianmonsales',
          class: 'fa fa-linkedin'
        },
        { 
          link: 'https://dribbble.com/brickgale',
          class: 'fa fa-dribbble'
        },
    ]

    onMounted(() => {
        if(sidebar) {
            const visible = toRef(sidebar, '_visible')
            watch(visible, (to) => {
                if(!to) toggler.value?.close()
            })
        }
    })
</script>

<style lang="scss" src="./index.scss" />
