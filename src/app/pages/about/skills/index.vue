<template>
  <div class="about-skills np">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 space-y-4">
        <Card>
          <h3><i class="fa fa-code-fork"></i>Familiar Tech Stack (Web)</h3>
          <div class="content tech-stack">
            <h4>For Web Apps:</h4>
            <ul class="normal-list">
              <li>LAMP / LEMP <br />- Linux, Apache / Nginx, Mysql, PHP</li>
              <li>MERN / MEVN <br />- MogoDB, Express, React / Vue, NodeJS</li>
            </ul>
            <h4>For Landing Pages:</h4>
            <ul class="normal-list">
              <li>Wordpress</li>
              <li>VuePress / VitePress</li>
              <li>Gridsome</li>
            </ul>
          </div>
        </Card>
        <Card>
          <h3><i class="fa fa-laptop"></i>Familiar Tech</h3>
          <div class="tags">
            <span v-for="tech in techs">{{ tech }}</span>
          </div>
        </Card>
      </div>
      <div class="col-span-1 space-y-4">
        <Card>
          <h3><i class="fa fa-code"></i>Main Skill Chart</h3>
          <div class="chart-skills">
            <v-chart :option="options" auto-resize />
          </div>
        </Card>
        <Card>
          <h3><i class="fa fa-laptop"></i>Familiar AI Tools</h3>
          <div class="content tech-stack">
            <ul class="normal-list">
              <li>Cursor</li>
              <li>Antigravity</li>
              <li>GitHub Copilot</li>
              <li>ChatGPT</li>
              <li>Gemini</li>
            </ul>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { use } from 'echarts/core';
import { Card } from '@/components/ui/card';
import { CanvasRenderer } from 'echarts/renderers';
import { RadarChart } from 'echarts/charts';
import { PolarComponent, TitleComponent, TooltipComponent } from 'echarts/components';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';

provide(THEME_KEY, 'light');

const techs = [
  'Laravel',
  'Nextjs',
  'Vuejs',
  'Angularjs',
  'Reactjs',
  'TailwindCSS',
  'Typescript',
  'Express',
  'Prisma',
  'Vite',
  'Webpack',
  'Docker',
  'Gridsome',
  'SkwayJs',
  'd3js',
  'Nodejs',
  'AWS',
  'MongoDB',
  'Shopify',
  'Magento',
  'Heroku',
  'Gulp',
  'PostgreSQL',
  'MySQL',
  'jQuery',
  'Wordpress',
  'Vagrant',
  'GIT',
  'SCSS',
  'HTML',
  'CSS',
  'PHP',
  'JS',
  'WebRTC',
  'Shell Scripting',
  'Adobe Premier',
  'Adobe Photoshop',
  'Adobe Illustrator',
];

use([CanvasRenderer, RadarChart, PolarComponent, TitleComponent, TooltipComponent]);

const options = ref({
  tooltip: {},
  color: ['#8e84d8'],
  radar: {
    indicator: [
      { name: 'JS', max: 10 },
      { name: 'HTML', max: 10 },
      { name: 'CSS', max: 10 },
      { name: 'NODEJS', max: 10 },
      { name: 'SQL', max: 10 },
      { name: 'PHP', max: 10 },
    ],
  },
  series: [
    {
      name: 'Skills',
      type: 'radar',
      data: [{ value: [9, 10, 10, 7, 8, 8] }],
    },
  ],
});
</script>

<style lang="scss" src="./index.scss" />
