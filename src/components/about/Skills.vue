<template>
  <div class="about-skills np">
    <div class="row">
      <div class="col-xs-12 col-md-6">
        <div class="box-con">

        </div>
      </div>
      <div class="col-xs-12 col-md-6">
        <div class="box-con">
          <div class="chart-skills ">
            <chart :options="skillRadar" ref="skills_radar" theme="macarons" auto-resize></chart>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ECharts from 'vue-echarts/components/ECharts.vue'

import 'echarts/lib/chart/radar'
import 'echarts/lib/component/title'
import 'echarts/theme/macarons'

export default {
  name: 'about-skills',
  data () {
    return {
      skillRadar: {
        tooltip: {},
        radar: {
          indicator: [
            { name: 'PHP', max: 10 },
            { name: 'JS', max: 10 },
            { name: 'CSS', max: 10 },
            { name: 'NODEJS', max: 10 },
            { name: 'SQL', max: 10 },
            { name: 'HTML', max: 10 },
          ]
        },
        series: [{
          name: 'Skills',
          type: 'radar',
          data: [
            { value: [8, 8, 8, 7, 7, 8] }
          ]
        }]
      }
    }
  },
  methods: {
  
  },
  created() {

  },
  mounted() {

  },
  components: {
    chart: ECharts
  }
}
</script>

<style lang="scss">
  .about-skills {
    padding-top: 20px;
    .box-con {
      padding: 20px;
      margin-bottom: 20px;
    }
    .chart-skills {
      width: 100%;
      .echarts {
        width: 100%;
        margin: 0 auto;
        @media (max-width: 768px) {
          width: 100%;
          height: 75vw;
        }
      }
    }
  }
</style>
