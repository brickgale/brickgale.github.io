<template>
  <div class="relative w-full">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div class="col-span-1 space-y-4">
        <Card>
          <h3><i class="fa fa-road mr-3"></i>Roadmap (Plans)</h3>
        </Card>
        <Card>
          <h3><i class="fa fa-balance-scale mr-3"></i>Priorities</h3>
        </Card>
        <Card>
          <h3><i class="fa fa-heartbeat mr-3"></i>Fitness Journey</h3>
        </Card>
      </div>
      <div class="col-span-1 space-y-4">
        <Card>
          <h3><i class="fa fa-television mr-3"></i>Anime</h3>
        </Card>
        <Card>
          <h3><i class="fa fa-gamepad mr-3"></i>Gaming</h3>
        </Card>
        <Card>
          <h3><i class="fa fa-play mr-3"></i>Content Creation</h3>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Card } from '@/components/ui/card';
</script>
