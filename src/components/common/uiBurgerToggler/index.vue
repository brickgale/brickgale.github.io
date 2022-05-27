<script setup lang="ts">
    import { ref, onMounted } from 'vue'

    const props = defineProps({
        opened: { 
            type: Boolean,
            default: false
        }
    })
    
    const emit = defineEmits([ 'burger-toggled', 'burger-opened', 'burger-closed' ])

    const el = ref<HTMLDivElement | null>(null)
    const _opened = ref(false)
    onMounted(() => _opened.value = props.opened)
    const toggle = () => {
        if( !_opened.value ) {
            open()
        } else {
            close()
        }
        emit('burger-toggled')
    }

    const open = () => {
        el.value?.classList.add('open')
        _opened.value = true
        emit('burger-opened')
    }

    const close = () => {
        el?.value?.classList.remove('open')
        _opened.value = false
        emit('burger-closed')
    }
</script>

<template>
    <div class="ui-burger-toggler white" ref="el" @click="toggle">
        <span></span><span></span><span></span>
        <span></span><span></span><span></span>
    </div>
</template>

<style lang="scss" src="./index.scss" />