<template>
  <div class="main row">
      <div class="col-sm-3">
        <div class="profile-con">
          <img class="avatar" src="../assets/me_avatar.jpg">
        </div>
      </div>
      <div class="col-sm-3">

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
    padding: 20px;
    > div[class*="col-"] {
      padding: 0;
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
