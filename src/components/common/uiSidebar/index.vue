<script setup lang="ts">
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
</script>

<template>
    <div
        class="ui-sidebar"
		:class="{ 'ui-sidebar-right': positionRight, 'ui-sidebar-left': !positionRight }"
        @keyup.esc="close" tabindex="0"
    >
        <div class="ui-sidebar-content">
            <slot name="topCon"></slot>
            <slot name="bottomCon"></slot>
        </div>
    </div>
</template>

<style lang="scss" src="./index.scss" />