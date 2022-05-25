<script setup lang="ts">
    import { ref } from 'vue'
    import UiBurgerToggler from '@/components/common/uiBurgerToggler/index.vue'
    import SponsorMe from '@/components/partials/sponsorMe/index.vue'

    const toggler = ref(null)

    const toggle = () => {
        // toggle logic 
    }
</script>

<template>
    <div class="main wrapper row">
        <div class="side-con">
            <div class="top-con layered-bg">
                <UiBurgerToggler @burger-toggled="toggle" ref="toggler" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss" />
