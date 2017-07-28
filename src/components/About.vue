<template>
  <div class="about">
    <h1>About</h1>
    <div class="graphic-con">
      <img class="big_avatar" src="../assets/me_avatar_no_bg_grayscale.png">
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
}
</style>
