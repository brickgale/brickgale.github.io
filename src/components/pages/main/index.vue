<script setup lang="ts">
    import { ref, inject, unref } from 'vue'
    import UiBurgerToggler from '@/components/common/uiBurgerToggler/index.vue'
    import SponsorMe from '@/components/partials/sponsorMe/index.vue'

    const toggler = ref(null)
    const sidebar = inject<typeof ref | null>('sidebar')
    const adjContainer = inject<typeof ref | null>('adjContainer')

    const opened = () => {
        sidebar.value.open()
        adjContainer.value.classList.add('openedSidebar')
        adjContainer.value.classList.add('left')
    }

    const closed = () => {
        // toggle logic 
        sidebar.value.close()
        adjContainer.value.classList.remove('openedSidebar')
    }
</script>

<template>
    <div class="main wrapper row">
        <div class="side-con">
            <div class="top-con layered-bg">
                <UiBurgerToggler @burger-opened="opened" @burger-closed="closed" ref="toggler" />
            </div>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss" />
