<template>
  <footer class="relative  w-[80%] py-8 mx-auto rounded-lg bg-gradient-to-r from-[#56970B] via-[#B2FF58] to-[#56970B]">
    <!-- Text above the footer with absolute positioning -->
    <div class="absolute top-[-4rem] left-0 right-0 text-center text-white text-8xl font-vip font-bold z-999">
      وين تلقانا
    </div>

    <div class="flex justify-center items-center gap-8 mt-4 flex-wrap">
      <!-- Image 1 with link -->
      <router-link to="/link1">
        <img src="../assets/Group 119.svg" alt="Group 119" class="h-20 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
      <!-- Image 2 with link -->
      <router-link to="/link2">
        <img src="../assets/Group 120.svg" alt="Group 120" class="h-20 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
      <!-- Image 3 with link -->
      <router-link to="/link3">
        <img src="../assets/Group 121.svg" alt="Group 121" class="h-20 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
      <!-- Image 4 with link -->
      <router-link to="/link4">
        <img src="../assets/Group 122.svg" alt="Group 122" class="h-20 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
      </router-link>
      <!-- Image 5 with link -->
      <router-link to="/link5">
        <img src="../assets/Group 123.svg" alt="Group 123" class="h-20 w-auto shadow-[rgba(17,_17,_26,_0.1)_0px_4px_16px,_rgba(17,_17,_26,_0.1)_0px_8px_24px,_rgba(17,_17,_26,_0.1)_0px_16px_56px] hover:scale-110 transition-all duration-300" />
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
