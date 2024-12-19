<script setup lang="ts">
import Background from './components/Background.vue'
import Sections from './components/Sections.vue'; 
import Cards from './components/Cards.vue';
import Video from './components/Video.vue';
import Question from './components/Question.vue';
import Contact from './components/Contact.vue';
</script>

<template>
  <div class="flex justify-center items-center wscreen hscreen overflow-hidden">
    <Background />
  </div>

  <div class="w-screen h-full ">
    <Sections /> 
    <Cards />
    <Video />
    <Question />
    <Contact />
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