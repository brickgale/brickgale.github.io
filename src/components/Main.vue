<template>
  <div class="main wrapper row">
      <div class="col-sm-4">
        <ui-burger-toggler @burger-toggled="handleToogle" ref="toggler"></ui-burger-toggler>
        <div class="profile-con">
          <img class="avatar" src="../assets/me_avatar.jpg">
        </div>
      </div>
      <div class="col-sm-8">

      </div>
    </div>
  </div>
</template>

<script>
import UiBurgerToggler from './common/UiBurgerToggler.vue'

export default {
  name: 'main',
  data () {
    return {

    }
  },
  methods: {
    handleToogle() {
      this.$parent.$refs.sidebar.toggle()
    },
    handleSidebarOpened() {
      this.$refs.toggler.open()
    },
    handleSidebarClosed() {
      this.$refs.toggler.close()
    }
  },
  created() {
    this.$parent.$refs.sidebar.$on('sidebar-opened', this.handleSidebarOpened)
    this.$parent.$refs.sidebar.$on('sidebar-closed', this.handleSidebarClosed)
  },
  mounted() {

  },
  components: {
    UiBurgerToggler
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  &.row {
    > div[class*="col-"] {
      padding: 20px;
      border-right: 1px solid rgba(0,0,0,0.1);
      &:last-child {
        border-right: 0;
      }
    }
  }
  .profile-con {
    img.avatar {
      width: 85px;
      height: 85px;
      border-radius: 50%;
      float: left;
    }
  }
}
</style>
