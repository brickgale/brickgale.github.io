<script setup lang="ts">
    import { onMounted, ref, unref } from 'vue'
    import UiBackDrop from '@/components/common/uiBackDrop/index.vue'
    import { OverlayScrollbarsComponent } from "overlayscrollbars-vue"

    const el = ref<HTMLDivElement | null>(null)
    const emit = defineEmits(['sidebar-opened', 'sidebar-closed'])

    const props = defineProps({
        visible: {
            type: Boolean,
            default: true
        },
        positionRight: {
            type: Boolean,
            default: false
        },
		mMode: {
			type: Boolean,
			default: false
		}
    })

    const _visible = ref(true)
    const fullWidth = ref(document.documentElement.clientWidth)

    function open() {
        _visible.value = true
        el.value?.classList.add('opened')
        if(props.mMode) el.value?.classList.add('m-mode')
        emit('sidebar-opened')
    }

    function close() {
        _visible.value = false
        el.value?.classList.remove('opened')
        if(props.mMode) el.value?.classList.remove('m-mode')
        emit('sidebar-closed')
    }

    function handleResize() {
        fullWidth.value = document.documentElement.clientWidth
        if(unref(fullWidth) <= 1024 && _visible) {
            close()
        }
        if(unref(fullWidth) > 1024 && !_visible && props.visible) {
            open()
        }
    }

    onMounted(() => {
        _visible.value = props.visible
        window.addEventListener('resize', handleResize)
        if(props.visible) open()
        handleResize()
    })

    defineExpose({
        open, close,
        _visible
    })

</script>

<template>
    <div
        class="ui-sidebar"
		:class="{ 'ui-sidebar-right': positionRight, 'ui-sidebar-left': !positionRight }"
        @keyup.esc="close" tabindex="0" ref="el"
    >
        <div class="ui-sidebar-content">
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
            <div class="wrapper-flex">
                <slot name="topCon"></slot>
                <slot name="midCon"></slot>
                <slot name="bottomCon"></slot>
            </div>
            </OverlayScrollbarsComponent>
        </div>
        <UiBackDrop class="ui-sidebar-backdrop" @close="close" />
    </div>
</template>

<style lang="scss" src="./index.scss" />