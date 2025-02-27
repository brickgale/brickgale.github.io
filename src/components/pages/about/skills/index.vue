<template>
    <div class="about-skills np">
        <div class="row">
            <div class="col-xs-12 col-md-6">
                <div class="box-con">
                <h3><i class="fa fa-laptop"></i>Familiar Tech</h3>
                <div class="tags">
                    <span v-for="tech in techs">{{ tech }}</span>
                </div>
                </div>
            </div>
            <div class="col-xs-12 col-md-6">
                <div class="box-con">
                    <h3><i class="fa fa-code"></i>Main Skill Chart</h3>
                    <div class="chart-skills">
                        <v-chart :option="options" auto-resize />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { use } from "echarts/core";
    import { CanvasRenderer } from "echarts/renderers";
    import { RadarChart } from "echarts/charts";
    import {
        PolarComponent,
        TitleComponent,
        TooltipComponent
    } from "echarts/components";
    import VChart, { THEME_KEY } from "vue-echarts";
    import { ref, provide } from "vue";

    provide(THEME_KEY, "light");

    const techs = [
        'Laravel', 'Vuejs', 'Angularjs', 'Reactjs', 'Tailwind', 'Typescript',
        'Vite', 'Webpack', 'Docker', 'Gridsome', 'SkwayJs', 'd3js', 'Nodejs', 
        'AWS', 'MongoDB', 'Shopify', 'Magento', 'Heroku', 'Gulp',
        'jQuery', 'Wordpress', 'Vagrant', 'GIT', 'SCSS', 'HTML', 'CSS', 'PHP', 
        'JS', 'WebRTC', 'SQL', 'Adobe Premier', 'Adobe Photoshop', 'Adobe Illustrator',
        'Shell Scripting',
    ]

    use([
        CanvasRenderer,
        RadarChart,
        PolarComponent,
        TitleComponent,
        TooltipComponent
    ]);

    const options = ref({
        tooltip: {},
        color: ['#8e84d8'],
        radar: {
            indicator: [
                { name: 'PHP', max: 10 },
                { name: 'JS', max: 10 },
                { name: 'CSS', max: 10 },
                { name: 'NODEJS', max: 10 },
                { name: 'SQL', max: 10 },
                { name: 'HTML', max: 10 },
            ],
        },
        series: [{
            name: 'Skills',
            type: 'radar',
            data: [
                { value: [8, 8, 8, 7, 7, 8] }
            ]
        }]
    })

</script>

<style lang="scss" src="./index.scss" />