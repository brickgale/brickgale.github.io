<template>
  <div class="about np">
    <!-- <h1>About</h1> -->
    <div class="wrapper-con">
      <div class="graphic-header-con">
        <div class="g-content">

        </div>
      </div>
    </div>
    <!-- <div class="graphic-con">
      <img class="big_avatar" src="../assets/me_avatar_no_bg_grayscale.png">
    </div> -->
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
}
</style>
