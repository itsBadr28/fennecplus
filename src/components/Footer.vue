<script setup lang="ts">

</script>
<template>
  <footer class="relative  sm:w80% w90% py-8 mx-auto rounded-lg bg-gradient-to-r from-[#56970B] via-[#B2FF58] to-[#56970B]">
    <!-- Text above the footer with absolute positioning -->
    <div class="absolute lg:top-[-4rem] md:top-[-3rem] top-[-2rem] left-0 right-0 text-center text-white lg:text-8xl md:text-7xl text-6xl font-vip font-bold z-999">
      وين تلقانا
    </div>

    <div class="flex flex-wrap justify-center items-center gap-4 mt-4 md:flex-wrap">
      <!-- Image 1 with link -->
      <router-link to="/link1">
        <img src="../assets/Group 119.svg" alt="Group 119" class="lg:h-20 md:h12 sm:h9 sx:h12 h8 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
      <!-- Image 2 with link -->
      <router-link to="/link2">
        <img src="../assets/Group 120.svg" alt="Group 120" class="lg:h-20 md:h12 sm:h9 sx:h12 h8 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
      <!-- Image 3 with link -->
      <router-link to="/link3">
        <img src="../assets/Group 121.svg" alt="Group 121" class="lg:h-20 md:h12 sm:h9 sx:h12 h8 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
      <!-- Image 4 with link -->
      <router-link to="/link4">
        <img src="../assets/Group 122.svg" alt="Group 122" class="lg:h-20 md:h12 sm:h9 sx:h12 h8 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
      <!-- Image 5 with link -->
      <router-link to="/link5">
        <img src="../assets/Group 123.svg" alt="Group 123" class="lg:h-20 md:h12 sm:h9 sx:h12 h8 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
/* No additional CSS needed thanks to UnoCSS */
</style>
