<template>
  <div id="app">
    <ui-sidebar class="main-sidebar" :visible="false" ref="sidebar">
      <div slot="top-con">
        <div class="logo-con">
          <img class="avatar" src="./assets/monogram_white.png">
        </div>
      </div>
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
// @font-face {
//   font-family: 'Circular Std Book';
//   src: url('assets/fonts/CircularStd-Book.eot');
//   src: url('assets/fonts/CircularStd-Book.eot?#iefix') format('embedded-opentype'),
//     url('assets/fonts/CircularStd-Book.woff') format('woff'),
//     url('assets/fonts/CircularStd-Book.ttf') format('truetype');
//   font-weight: normal;
//   font-style: normal;
// }


*:not(body),
*::before,
*::after {
    box-sizing: border-box;
    transition: all .4s cubic-bezier(.25,.8,.25,1);
}

html {
    font-size: 100%;
}

body {
  height: 100%;
  font-size: 12px;
  // font-family: 'Circular Std Book';
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
  li {
    a { 
      color: #fff;
      padding: 14px;
      display: inline-block;
    }
  }
}

.main-sidebar {
  .ui-sidebar-content {
    background: linear-gradient(to bottom, #252424, #565150);
    .logo-con {
      text-align: center;
      padding: 30px;
      img.avatar {
        width: 90px;
      }
    }
  }
}

.main-container {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    &.row {
      margin: 0;
      > div[class*="col-"] {
        padding: 0;
      }
    }
  }
}
</style>
