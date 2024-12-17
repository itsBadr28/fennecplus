<script setup lang="ts">
import Background from './components/Background.vue'
</script>

<template>
  <div class="full-screen-container">
    <Background />
  </div>
  <div class=" wfull h100 bg-accent">

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
