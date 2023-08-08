<script setup lang="ts">
import { PropType } from 'vue';

    interface Menu {
        route: string,
        name: string
    }
    const props = defineProps({
        menu: Array as PropType<Array<Menu>>,
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