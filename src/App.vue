<template>
  <div id="app">
    <ui-sidebar class="main-sidebar">
      <div slot="bottom-con">
        <ui-menu class="main-header" :menu="menu"></ui-menu>
      </div>
    </ui-sidebar>
    <div class="main-container" ref="adj_container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import UiMenu from './components/common/UiMenu.vue'
import UiSidebar from './components/common/UiSidebar.vue'

export default {
  name: 'app',
  data () {
    return {
      menu: [
        { name: 'About', route: '/' },
        { name: 'Projects', route: '/' },
        { name: 'Blog', route: '/' }
      ]
    }
  },
  components: {
    UiMenu,
    UiSidebar
  }
}
</script>

<style lang="scss">
*:not(body),
*::before,
*::after {
    box-sizing: border-box;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
}

body {
  height: 100%;
  font-size: 12px;
  font-family: 'Varela Round', sans-serif;
  // -webkit-font-smoothing: antialiased;
  // -moz-osx-font-smoothing: grayscale;
}

body {
  height: 100%;
  font-size: 12px;
  color: #3e3f43;
  margin: 0;
}

#app {

}

[v-cloak] {
    display: none;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
  margin: 0;
}

a {
  color: #3e3f43;
  text-decoration: none;
}

img {
  width: 100%;
}

.main-header {
  text-align: center;
  background-color: #3e3f43;
  // background: #232526; /* fallback for old browsers */
  // background: -webkit-linear-gradient(to top, #232526 , #414345); 
  // background: linear-gradient(to top, #232526 , #414345); 
  li {
    a { 
      color: #fff;
      padding: 14px;
      display: inline-block;
    }
  }
}
</style>
