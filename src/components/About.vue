<template>
  <div class="about np">
    <!-- <h1>About</h1> -->
    <div class="wrapper-con">
      <div class="graphic-header-con">
      </div>

      <div class="g-content">
        <div class="row center-xs">
          <div class="col-xs-10 col-md-6">
            <div class="g-avatar-con">
              <img class="g-avatar" src="../assets/me_avatar.jpg">
            </div>
            <div class="g-menu">

            </div>
          </div>
        </div>
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
  },
  methods: {
  
  },
  created() {

  },
  mounted() {
  },
  components: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.about {
  position: relative;
  .graphic-con {
    box-shadow: 0 6px 6px -4px rgba(0, 0, 0, 0.12);
    position: relative;
    min-height: 400px;
    @media (max-width: 500px) {
      min-height: 200px;
    }
    .big_avatar {
      position: absolute;
      max-width: 300px;
      width: 100%;
      bottom: 0;
      right: 0;
      padding-left: 130px;
    }
  }
  .wrapper-con {
    padding: 30px;
  }
  .graphic-header-con {
    position: relative;
    min-height: 200px;
    border-radius: 3px;
    overflow: hidden;
      box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.61);
    &:before {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 2;
      background: rgba(0,0,0,0.3);
      background: linear-gradient(to bottom right,#002f4b,#ffffff);
      opacity: 0.5;
    }
    &:after {
      content: ' ';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      opacity: 0.9;
      background: url('../assets/bg_codes.png') no-repeat center;
      background-repeat: no-repeat;
      background-position: 50% 0;
      -ms-background-size: cover;
      -o-background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-size: cover;
    }
  }
  .g-content {
    margin-top: -80px;
    position: relative;
    z-index: 3;
    .g-avatar-con {
      max-width: 85px;
      max-height: 85px;
      border-radius: 3px;
      display: block;
      margin: 0 auto;
      box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.61);
      position: relative;
      overflow: hidden;
      .g-avatar {

      }
    }
    .g-menu {
      min-height: 120px;
      margin-top: -50px;
      background: #fff;
      border-radius: 3px;
      box-shadow: 0px 3px 17px -6px rgba(0, 0, 0, 0.61);
    }
  }
}
</style>
