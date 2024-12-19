<script setup lang="ts">
import { onMounted, ref } from 'vue'
import Landing from './Landing.vue'; 
import Navbar from './Navbar.vue';
import Footer from './Footer.vue';

const partners1 = ref([
  './src/assets/movies/movie1.png',
  './src/assets/movies/movie2.png',
  './src/assets/movies/movie3.png',
  './src/assets/movies/movie4.png',
  './src/assets/movies/movie5.png',
  './src/assets/movies/movie6.png',
  './src/assets/movies/movie7.png',
])

const partners2 = ref([
  './src/assets/movies/movie8.png',
  './src/assets/movies/movie9.png',
  './src/assets/movies/movie10.png',
  './src/assets/movies/movie11.png',
  './src/assets/movies/movie12.png',
  './src/assets/movies/movie13.png',
  './src/assets/movies/movie14.png',
])

const partners3 = ref([
  './src/assets/movies/movie2.png',
  './src/assets/movies/movie5.png',
  './src/assets/movies/movie15.png',
  './src/assets/movies/movie16.png',
  './src/assets/movies/movie11.png',
  './src/assets/movies/movie1.png',
  './src/assets/movies/movie6.png',
])

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
     <div class="partner-carousel-container w-full overflow-hidden relative z-20">
      <div class="partner-carousel-track flex">
        <div class="partner-slide flex animate-slide-right">
          <template v-for="partner in partners1" :key="partner">
            <img
              :src="partner"
              class="w-60 object-contain mx1 shrink-0"
            />
          </template>
          <template v-for="partner in partners1" :key="partner">
            <img
              :src="partner"
              class="w-60 object-contain mx1 shrink-0"
            />
          </template>
        </div>
      </div>
    </div>

    <div class="partner-carousel-container w-full overflow-hidden relative z-20">
      <div class="partner-carousel-track flex">
        <div class="partner-slide flex animate-slide-left">
          <template v-for="partner in partners2" :key="partner">
            <img
              :src="partner"
              class="w-60 object-contain mx1 shrink-0"
            />
          </template>
          <template v-for="partner in partners2" :key="partner">
            <img
              :src="partner"
              class="w-60 object-contain mx1 shrink-0"
            />
          </template>
        </div>
      </div>
    </div>

    <div class="partner-carousel-container w-full overflow-hidden relative z-20">
      <div class="partner-carousel-track flex">
        <div class="partner-slide flex animate-slide-right">
          <template v-for="partner in partners3" :key="partner">
            <img
              :src="partner"
              class="w-60 object-contain mx1 shrink-0"
            />
          </template>
          <template v-for="partner in partners2" :key="partner">
            <img
              :src="partner"
              class="w-60 object-contain mx1 shrink-0"
            />
          </template>
        </div>
      </div>
    </div>

    <div class="absolute inset-0 z-30 flex justify-center items-center">
      <div class="bg-black wfull hscreen opacity-70"></div>
    </div>
    <div class="absolute inset-0 z-30 flex w80% mxa justify-center items-center">
      <Navbar />
      <Landing class="-mt-46" />
    </div>

    <!-- Footer Section: Fixed at the bottom with py-8 -->
    <div class="absolute bottom-0 w-full    z-30 flex justify-center items-center">
      <Footer />

    </div>
    <!-- <div>
      <Sections/>
    </div> -->
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
</style>  