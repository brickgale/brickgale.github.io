<template>
  <div class="sponsor-me np">
    <div class="contact-con layered-bg">
      <div class="content">
        <h3 class="title">Contact Me</h3>
        <p>Do you want a stunning website for your existing business? 
        <a href="mailto:brianmonsales@gmail.com" target="_top">Email me! </a> 🔥</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'sponsor-me',
  data () {
    return {

    }
  },
  props: {
    
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
<style lang="scss">
  .sponsor-me {
    .contact-con {
      &.layered-bg {
        &:before {
          background: linear-gradient(to bottom right, #00abff, #99d6f5);
        }
        &:after {
          background: url('../../assets/me_avatar.jpg') no-repeat center;
          background-position: 65% 20%;
        }
      }
      .content {
        color: #fff;
        padding: 20px;
        a {
          color: #fff;
        }
      }
    }
  }
</style>
