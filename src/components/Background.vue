<script setup lang="ts">
import { onMounted } from 'vue'
import Landing from './Landing.vue'; 
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';


onMounted(() => {
  const style = document.createElement('style')
  style.textContent = `
    @keyframes slideRight {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
    @keyframes slideLeft {
      from { transform: translateX(-50%); }
      to { transform: translateX(0); }
    }
    .animate-slide-right {
      animation: slideRight 20s linear infinite;
    }
    .animate-slide-left {
      animation: slideLeft 20s linear infinite;
    }
  `
  document.head.appendChild(style)
})
</script>

<template>
  <div class="wscreen hscreen relative bg-black">
    <div class="bg">
      <div class="partner-carousel-container w-full overflow-hidden relative z-20">
        <div class="partner-carousel-track flex">
          <div class="partner-slide flex animate-slide-right">
            <template v-for="partner in 2">
              <img
                src="../assets/movie1.png"
                class="w-60 object-contain mx1 shrink-0"
                :alt="partner.toString"
              />
              <img
                src="../assets/movie2.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie3.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie4.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie5.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie6.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie7.png"
                class="w-60 object-contain mx1 shrink-0"
              />
            </template>
          </div>
        </div>
      </div>
      <div class="partner-carousel-container w-full overflow-hidden relative z-20">
        <div class="partner-carousel-track flex">
          <div class="partner-slide flex animate-slide-left">
            <template v-for="partner in 2">
              <img
                src="../assets/movie8.png"
                class="w-60 object-contain mx1 shrink-0"
                :alt="partner.toString"
              />
              <img
                src="../assets/movie9.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie10.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie11.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie12.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie13.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie14.png"
                class="w-60 object-contain mx1 shrink-0"
              />
            </template>
          </div>
        </div>
      </div>
      <div class="partner-carousel-container w-full overflow-hidden relative z-20">
        <div class="partner-carousel-track flex">
          <div class="partner-slide flex animate-slide-right">
            <template v-for="partner in 2">
              <img
                src="../assets/movie5.png"
                class="w-60 object-contain mx1 shrink-0"
                :alt="partner.toString"
              />
              <img
                src="../assets/movie2.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie6.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie15.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie14.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie16.png"
                class="w-60 object-contain mx1 shrink-0"
              />
              <img
                src="../assets/movie4.png"
                class="w-60 object-contain mx1 shrink-0"
              />
            </template>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 z-30 flex justify-center items-center">
      <div class="bg-black wfull hscreen opacity-70"></div>
    </div>
    <div class="absolute inset-0 z-30 flex sm:w80% w90% mxa justify-center items-center">
      <Navbar />
      <Landing class="-mt-46" />
    </div>
    <div class="absolute bottom-0 w-full  z-30 flex justify-center items-center">
      <Footer />
    </div>
  </div>
</template>


<style scoped>
.partner-carousel-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.partner-carousel-track {
  display: flex;
}

.bg {
        width: 100%;
        height: 100%;
        transform: rotate(-5deg);
        transform-origin: center;
}
</style>
