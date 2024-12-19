<script setup lang="ts">
import Background from './components/Background.vue'
</script>

<template>
  <div class="flex justify-center items-center wscreen hscreen overflow-hidden">
    <Background />
  </div>

  <div class="w-full h-full bg-accent">
    <!-- Ton contenu ici -->
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
