<script setup lang="ts">
    import { ref, inject, unref, watch, onMounted, toRef } from 'vue'
    import UiBurgerToggler from '@/components/common/uiBurgerToggler/index.vue'
    import SponsorMe from '@/components/partials/sponsorMe/index.vue'

    interface UiSidebarType {
        open: Function;
        close: Function;
        _visible: Boolean;
    }

    const toggler = ref<any>(null)
    const sidebar = unref( inject<UiSidebarType | null>('sidebar') )
    const opened = () => sidebar?.open()
    const closed = () => sidebar?.close()

    onMounted(() => {
        if(sidebar) {
            const visible = toRef(sidebar, '_visible')
            watch(visible, (to) => {
                if(!to) toggler.value?.close()
            })
        }
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
