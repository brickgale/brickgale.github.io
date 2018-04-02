<template>
  <div class="sponsor-me np">
    <div class="contact-con layered-bg">
      <div class="content">
        <h3 class="title">Contact Me</h3>
        <p>Do you want a stunning website for your existing business? 
        <a href="mailto:brianmonsales@gmail.com" target="_top">Email me! </a> 🔥</p>
      </div>
    </div>
    <div class="addtional-info layered-bg">
      <div class="content">
        <h3>Stay Tuned</h3>
        <p>Cooking up something good soon. 💎</p>
      </div>
    </div>
    <div class="paypal-me">
      <h3>Help a Brotha Out</h3>
      <p>I'm not a fan of coffee but there's nothing wrong to help a brotha out, right? 🙏</p>
      <a href="https://www.paypal.me/brianmonsales/100" class="btn paypal" target="_blank">
        <i class="fa fa-paypal"></i>
        Send some love
      </a>
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
    .contact-con, .addtional-info {
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
    .paypal-me {
      padding: 20px;
      p {
        margin: 0;
        padding: 10px 0;
      }
      .btn {
        margin: 10px 0;
        text-transform: uppercase;
      }
    }
    .addtional-info {
      &.layered-bg {
        &:before {
          background: linear-gradient(to bottom right, #cf2ed2, #8e1e61);
        }
        &:after {
          background: url('../../assets/bg_codes2.jpeg') no-repeat center;
        }
      }
    }
  }
</style>
