<template>
  <div class="relative w-full max-w-[800px] m-auto">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1">
        <Card class="gap-4">
          <h3><i class="fa fa-briefcase mr-3"></i>Work History</h3>
          <ul class="timeline">
            <li v-for="job in workHistory">
              <span></span>
              <Card class="hover:ring-[var(--primary-color)/0.5]">
                <p class="leading-4 mb-2">
                  {{ job.title }}
                </p>
                <p class="text-[var(--foreground-subtle)] mb-0">{{ job.position }}</p>
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
        <Card class="gap-4">
          <h3><i class="fa fa-graduation-cap mr-3"></i>Education</h3>
          <ul class="timeline">
            <li v-for="sy in education">
              <span></span>
              <Card class="hover:ring-[var(--primary-color)/0.5]">
                <p class="leading-4 mb-2">
                  {{ sy.title }}
                </p>
                <p class="text-[var(--foreground-subtle)] mb-0">{{ sy.address }}</p>
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
