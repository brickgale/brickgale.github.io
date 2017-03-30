<template>
  <div class="main row">
      <div class="col-sm-6">
        <div class="profile-con">
          <img src="../assets/me_avatar.jpg">
        </div>
      </div>
      <div class="col-sm-6">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  &.row {
    margin: 0;
    > div[class*="col-"] {
      padding: 0;
    }
  }
}
</style>
