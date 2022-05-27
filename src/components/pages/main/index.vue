<script setup lang="ts">
    import { ref, inject, unref, watch, onMounted, toRef } from 'vue'
    import UiBurgerToggler from '@/components/common/uiBurgerToggler/index.vue'
    import SponsorMe from '@/components/partials/sponsorMe/index.vue'

    const toggler = ref(null)
    const sidebar = inject<typeof ref | null>('sidebar')

    const opened = () => {
        sidebar.value.open()
    }

    const closed = () => {
        sidebar.value.close()
    }

    onMounted(() => {
        const visible = toRef(sidebar.value, '_visible')
        watch(visible, (to) => {
            if(!to) toggler.value?.close()
        })
    })
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
