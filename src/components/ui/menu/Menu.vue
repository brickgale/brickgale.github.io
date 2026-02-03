<script setup lang="ts">
import { PropType } from 'vue';

interface Menu {
  route: string;
  name: string;
  linkClasses?: string;
}

const props = defineProps({
  menu: Array as PropType<Array<Menu>>,
});
</script>

<template>
  <nav class="ui-menu">
    <ul>
      <li v-for="(item, key) in menu" :key="key">
        <router-link :to="{ name: item.route }" :class="item.linkClasses">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
