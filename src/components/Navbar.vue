<script setup lang="ts">
</script>
<template>

    <nav class="fixed top-0 left-0 w-full h-20 bg-black/60 mx-auto font-bold">
      <div class="flex justify-between items-center h-full px-8 w80% mxa">
        <!-- Logo on the left with increased size and margin -->
        <div class="">
          <router-link to="/">
            <img src="../assets/logo--fennec--plus-04.png" alt="Logo" class="h-18 w-auto" /> <!-- Increased logo size -->
          </router-link>
        </div>
          
        <!-- Navigation links aligned to the right -->
        <ul class="flex items-center space-x-8 ml-auto list-none">
          <li>
            <router-link to="/" class="text-white text-lg font-semibold font-lemon hover:underline">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white text-lg font-semibold font-lemon hover:underline">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-white text-lg font-semibold font-lemon hover:underline">Contact</router-link>
          </li>
        </ul>
      
        <!-- Button with brighter and shinier shadow -->
        <div class="">
          <button
            class="bg-#96c834 ml8 border-0 font-lemon text-black px-6 py-2 text-lg rounded-lg font-extrabold shadow-[0_0_15px_5px_rgb(173,255,47)] hover:shadow-[0_0_25px_10px_rgb(173,255,47)] hover:scale-110 transition-all duration-300">
            Get Now
          </button>
        </div>
      </div>
    </nav>
  </template>
  