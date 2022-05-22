<script setup lang="ts">
    const props = defineProps({
        menu: { 
            type: Array,
            default: () => {
                return []
            }
        }
    })
</script>

<template>
    <div class="ui-menu">
        <ul>
            <li v-for="(item, key) in menu" :key="key">
                <router-link :to="{ name: item.route }">
                    {{ item.name }}
                </router-link>
            </li>
        </ul>
    </div>
</template>