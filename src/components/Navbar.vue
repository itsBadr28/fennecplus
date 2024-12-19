<template>
    <nav class="fixed top-0 left-0 w-full h-25 bg-black bg-opacity-50 mx-auto font-mono font-bold">
      <div class="flex justify-between items-center w-full h-full px-8">
        
       
        <div class="ml-20 mr-8">
          <router-link to="/">
            <img src="../assets/logo--fennec--plus-04.png" alt="Logo" class="h-18 w-auto" />
          </router-link>
        </div>
          
        
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
      
        
        <div class="ml-20 mr-40">
          <button
            class="bg-[rgb(173,255,47)] text-black px-6 py-2 text-lg rounded-lg font-lemon shadow-[0_0_15px_5px_rgb(173,255,47)] hover:shadow-[0_0_25px_10px_rgb(173,255,47)] hover:scale-110 transition-all duration-300">
            Get Now
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  </script>
  