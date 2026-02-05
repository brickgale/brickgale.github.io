<script setup lang="ts">
import { Button } from '@/components/ui/button';
</script>

<template>
  <div class="sponsor-me np">
    <div class="addtional-info layered-bg relative overflow-hidden z-0">
      <div class="p-4 tracking-wide relative z-10">
        <h3 class="text-white">Stay Tuned</h3>
        <p class="text-white text-sm py-2.5">Cooking up something exciting. 💎</p>
      </div>
    </div>
    <div class="bg-gradient-to-br from-white to-[#aae2ff]">
      <div class="p-4 tracking-wide">
        <h3 class="text-[#3e3f43]">Buy me a Cup of Coffee</h3>
        <p class="text-[#3e3f43] text-sm m-0 py-2.5">
          Help a brotha out by buying a cup of coffee. Cheers! 🙏
        </p>
        <Button href="https://www.paypal.me/brianmonsales/100" class="btn my-2.5 uppercase rounded-full w-full" target="_blank">
          <i class="fa fa-paypal mr-3"></i>
          Send some love
        </Button>
      </div>
    </div>
    <div class="contact-con layered-bg relative overflow-hidden z-0">
      <div class="p-4 tracking-wide relative z-10">
        <h3 class="text-white">Contact Me</h3>
        <p class="text-white text-sm py-2.5">
          Do you want a stunning website for your existing business?
          <a href="mailto:brianmonsales@gmail.com" class="text-gray-300" target="_top">Email me! </a>
          🔥
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.sponsor-me .contact-con.layered-bg::before {
  background: linear-gradient(to bottom right, #8e84d8, #5f45a3);
}

.sponsor-me .contact-con.layered-bg::after {
  background: url('@/assets/me_avatar.jpg') no-repeat center;
  background-position: 65% 20%;
}

.sponsor-me .addtional-info.layered-bg::before {
  background: linear-gradient(to bottom right, #cf2ed2, #8e1e61);
}

.sponsor-me .addtional-info.layered-bg::after {
  background: url('@/assets/bg_codes2.jpeg') no-repeat center;
}
</style>
