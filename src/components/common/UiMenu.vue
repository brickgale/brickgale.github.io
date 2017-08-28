<template>
  <div class="ui-menu">
    <ul>
      <li v-for="item in menu">
        <router-link :to="{ name: item.route }">
          {{ item.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'ui-menu',
  data () {
    return {

    }
  },
  props: {
    menu: {
      type: Array,
      default: () => {
        return []
      }
    }
  }
}
</script>

