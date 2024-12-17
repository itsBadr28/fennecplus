<script setup lang="ts">
import Background from './components/Background.vue'
import Footer from './components/Footer.vue'
import Sections from './components/Sections.vue'; 

</script>

<template>
  <div class="full-screen-container">
    <Background />
  </div>

  <div class="w-full h-full bg-accent">
    <!-- Ton contenu ici -->
  </div>
  <div >
      <Sections />
    </div>
</template>

<style>
/* Full-screen container that ensures the background fits the screen */
.full-screen-container {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden; /* Prevent scrolling */
}
</style>
