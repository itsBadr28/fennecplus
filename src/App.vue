<script setup lang="ts">
import Background from './components/Background.vue'
import Sections from './components/Sections.vue'; 
import Cards from './components/Cards.vue';
import Video from './components/Video.vue';
</script>

<template>
  <div class="flex justify-center items-center wscreen hscreen overflow-hidden">
    <Background />
  </div>

  <div class="w-full h-full bg-accent">
    
  </div>
  <div >
      <Sections />
    </div>
    <div>
      <Cards />
    </div>
    <div>
      <Video />
    </div>
</template>

<style>

.full-screen-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>  