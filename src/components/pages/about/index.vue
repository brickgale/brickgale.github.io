<script setup lang="ts">
    import UiMenu from '@/components/common/uiMenu/index.vue'

    const menu = [
        { name: 'Skills', route: 'about-skills' },
        { name: 'Profile', route: 'about' },
        { name: 'Misc', route: 'about-misc' }
    ]
</script>

<template>
    <div class="about np">
        <div class="graphic-header-con layered-bg">
        </div>

        <div class="wrapper-con">
            <div class="g-content">
                <div class="row center-xs">
                    <div class="col-xs-10 col-md-6">
                        <div class="g-avatar-con">
                        <!-- <lightbox
                            thumbnail="/src/assets/me_nck.jpg"
                            :images="['/src/assets/me_nck.jpg']"
                        ></lightbox> -->
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

<style lang="scss" src="./index.scss" />