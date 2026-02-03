<template>
  <div class="about-profile np">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1">
        <Card>
          <h3><i class="fa fa-briefcase"></i>Work History</h3>
          <ul class="timeline">
            <li v-for="job in workHistory">
              <span></span>
              <Card class="bg-[var(--background-surface)]">
                <p class="main">
                  {{ job.title }}
                </p>
                <p class="sub">{{ job.position }}</p>
              </Card>
              <span class="timestamp">
                <span>{{ job.to }}</span>
                <span>{{ job.from }}</span>
              </span>
            </li>
          </ul>
        </Card>
      </div>
      <div class="col-span-1">
        <Card>
          <h3><i class="fa fa-graduation-cap"></i>Eduation</h3>
          <ul class="timeline">
            <li v-for="sy in education">
              <span></span>
              <Card class="bg-[var(--background-surface)]">
                <p class="main">
                  {{ sy.title }}
                </p>
                <p class="sub">{{ sy.address }}</p>
              </Card>
              <span class="timestamp">
                <span>{{ sy.to }}</span>
                <span>{{ sy.from }}</span>
              </span>
            </li>
          </ul>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import profile from '@/data/profile.json';
import { Card } from '@/components/ui/card';

const { education, workHistory } = profile;

//somehow if put on v-for it will reset on switching pages
workHistory.reverse();
education.reverse();
</script>

<style lang="scss" src="./index.scss" />
