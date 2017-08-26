<template>
  <div id="app">
    <ui-sidebar class="main-sidebar" :visible="false" ref="sidebar" :m-mode="true">
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
        { name: 'About', route: 'about' },
        { name: 'Projects', route: 'projects' },
        { name: 'Blog', route: 'blog' }
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
@font-face {
  font-family: 'CircularStdBook';
  src: url('./assets/fonts/CircularStd-Book.eot');
  src: url('./assets/fonts/CircularStd-Book.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/CircularStd-Book.woff') format('woff'),
    url('./assets/fonts/CircularStd-Book.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Circular Std Bold';
  src: url('./assets/fonts/CircularStd-Bold.eot');
  src: url('./assets/fonts/CircularStd-Bold.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/CircularStd-Bold.woff') format('woff'),
    url('./assets/fonts/CircularStd-Bold.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Circular Std Black';
  src: url('./assets/fonts/CircularStd-Black.eot');
  src: url('./assets/fonts/CircularStd-Black.eot?#iefix') format('embedded-opentype'),
    url('./assets/fonts/CircularStd-Black.woff') format('woff'),
    url('./assets/fonts/CircularStd-Black.ttf') format('truetype');
  font-weight: normal;
  font-style: normal;
}


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
  font-family: 'CircularStdBook';
  display: flex;
  // font-family: 'Varela Round', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.42em;
  color: #3e3f43;
  margin: 0;
}

#app {

}

[v-cloak] {
    display: none;
}

h1, h2, h3, h4, h5 {
  font-weight: normal;
  margin: 0px;
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
  font-weight: normal;
  text-decoration: none;
}

img {
  width: 100%;
}

.hide-on-mobile {
  @media (max-width: 768px) {
    display: none;
  }
}

.main-header {
  border-top: 1px solid #474747;
  border-bottom: 1px solid #474747;
  text-align: center;
  li {
    a { 
      font-family: 'CircularStdBook';
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
  @media (max-width: 768px) {
    overflow: auto;
  }
  .wrapper {
    position: absolute;
    width: 100%;
    height: 100%;
    @media (max-width: 768px) {
      height: auto;
    }
    &.row {
      margin: 0;
      > div[class*="col-"] {
        padding: 0;
      }
    }
  }
}
</style>
