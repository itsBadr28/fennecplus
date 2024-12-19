<script setup lang="ts">
</script>
<template>
    <nav class="fixed top-0 left-0 w-full h-20 bg-black/60 mx-auto font-bold">
      <div class="flex justify-between items-center h-full px-8 w80% mxa">
        <!-- Logo on the left with increased size and margin -->
        <div class="">
          <router-link to="/">
            <img src="../assets/logo--fennec--plus-04.png" alt="Logo" class="md:h-18 sx:h14 h8 w-auto" /> <!-- Increased logo size -->
          </router-link>
        </div>
          
        <!-- Navigation links aligned to the right -->
        <ul class="sx:flex hidden items-center space-x-8 ml-auto list-none ">
          <li>
            <router-link to="/" class="text-white md:text-lg text-sm font-semibold font-lemon hover:underline">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white md:text-lg text-sm font-semibold font-lemon hover:underline">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-white md:text-lg text-sm font-semibold font-lemon hover:underline">Contact</router-link>
          </li>
        </ul>
        <!-- Button with brighter and shinier shadow -->
        <div class="sx:flex hidden ">
          <button
            class="bg-#96c834 ml8 border-0 font-lemon text-black md:px-6 px4 py-2 md:text-lg text-sm rounded-lg font-extrabold shadow-[0_0_15px_5px_rgb(173,255,47)] hover:shadow-[0_0_25px_10px_rgb(173,255,47)] hover:scale-110 transition-all duration-300">
            Get Now
          </button>
        </div>
      </div>
    </nav>
  </template>
  