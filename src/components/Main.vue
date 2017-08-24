<template>
  <div class="main wrapper row">
      <div class="side-con">
        <div class="top-con">
          <ui-burger-toggler @burger-toggled="handleToogle" ref="toggler"></ui-burger-toggler>
          <div class="profile-con">
            <div class="pair-avatar">
              <img class="avatar" src="../assets/monogram.png">
              <img class="avatar pair" src="../assets/me_avatar.jpg">
            </div>
            <div class="name">Brian Monsales</div>
            <div class="position">Fullstack Web Engineer</div>
            <div class="social-icons">
              <a v-for="item in socialIcons" :href="item.link" target="_blank">
                <i :class="item.class" aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="main-con">
        <router-view></router-view>
        <!-- <div class="chart-skills">
          <chart :options="skillRadar" ref="skills_radar" auto-resize></chart>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import UiBurgerToggler from './common/UiBurgerToggler.vue'
import ECharts from 'vue-echarts/components/ECharts.vue'

import 'echarts/lib/chart/radar'
import 'echarts/lib/component/title'

export default {
  name: 'main',
  data () {
    return {
      socialIcons: [
        { 
          link: 'https://github.com/brickgale',
          class: 'fa fa-github'
        },
        { 
          link: 'https://www.facebook.com/brian.monsales',
          class: 'fa fa-facebook'
        },
        { 
          link: 'https://www.linkedin.com/in/brianmonsales',
          class: 'fa fa-linkedin'
        },
        { 
          link: 'https://www.behance.net/brickgale',
          class: 'fa fa-behance'
        },
        { 
          link: 'https://dribbble.com/brickgale',
          class: 'fa fa-dribbble'
        },
      ],
      skillRadar: {
        title: {
          text: 'Skills'
        },
        tooltip: {},
        radar: {
          indicator: [
            { name: 'PHP', max: 10 },
            { name: 'Javascript', max: 10 },
            { name: 'HTML', max: 10 },
            { name: 'CSS', max: 10 },
            { name: 'PHP', max: 10 },
            { name: 'PHP', max: 10 }
          ]
        },
        series: [{
          name: 'Skills',
          type: 'radar',
          data: [
            { value: [10, 9, 8, 7, 8, 9] }
          ]
        }]
      }
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
    UiBurgerToggler,
    chart: ECharts
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.main {
  flex-wrap: nowrap;
  align-items: flex-start;
  @media (max-width: 500px) {
    flex-wrap: wrap;
  }
  &.row {
    > div[class*="col-"] {
      padding: 15px;
      &.no-pad {
        padding: 0px;
      }
    }
  }
  .side-con {
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.2), 0 2px 2px rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.12);
    width: 260px;
    flex: 0 0 260px;
    height: 100%;
    overflow: auto;
    @media (max-width: 500px) {
      width: 100%;
      flex-basis: 100%;
      flex: 0 0 auto;
      height: auto;
    }
  }
  .main-con {
    position: relative;
    width: 100%;
    height: 100%;
    overflow: auto;
    > div {
      padding: 30px;
      width: 100%;
      min-height: 100%;
      &.np {
        padding: 0px;
        max-width: 800px;
        margin: 0 auto;
      }
    }
    @media (max-width: 500px) {
      width: 100%;
      flex-basis: 100%;
      flex: 0 0 auto;
      height: 100%;
    }
  }
  .top-con {
    padding: 15px;
    // min-height: 100%;
    min-height: 250px;
    position: relative;
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
      background: url('../assets/bg_setup.png') no-repeat center;
      background-repeat: no-repeat;
      background-position: 50% 0;
      -ms-background-size: cover;
      -o-background-size: cover;
      -moz-background-size: cover;
      -webkit-background-size: cover;
      background-size: cover;
    }
  }
  .profile-con {
    padding: 10px 0px;
    z-index: 10;
    position: relative;
    color: #fff;
    font-size: 13px;
    letter-spacing: 1px;
    text-align: center;
    img.avatar {
      width: 50px;
      height: 50px;
      // border-radius: 50%;
      // float: left;
      box-shadow: 0 0 2px rgba(255,255,255, 0.12), 0 2px 10px rgba(255,255,255, 0.2);
      &.pair {
        z-index: 20;
        margin-left: -20px;
      }
    }
    .pair-avatar {
      text-align: center;
      &:hover {
        .pair {
          margin-left: -3px;
        }
      }
    }
    .name {
      line-height: 3.5em;
    }
    .position {
      text-transform: uppercase;
      font-size: 10px;
    }
    .social-icons {
      padding: 20px;
      a {
        color: #fff;
        margin-right: 10px;
        .fa {
          font-size: 16px;
        }
        &:last-child {
          margin-right: 0px;
        }
      }
    }
  }
  .chart-skills {
    width: 100%;
    .echarts {
      width: 100%;
      margin: 0 auto;
      @media (max-width: 500px) {
        width: 100%;
        height: 75vw;
      }
    }
  }
}
</style>
