<template>
    <nav class="fixed top-0 left-0 w-full h-16 bg-black mx-auto font-mono font-bold">
      <div class="flex justify-between items-center w-full h-full px-8"> <!-- Increased padding for better spacing -->
        <!-- Logo on the left with increased margin -->
        <div class="ml-20 mr-8"> <!-- Added margin-left and margin-right for logo -->
          <router-link to="/">
            <!-- Utilisation du chemin relatif -->
            <img src="../assets/logo--fennec--plus-04.png" alt="Logo" class="h-12" />
          </router-link>
        </div>
          
        <!-- Navigation links aligned to the right -->
        <ul class="flex items-center space-x-8 ml-auto list-none"> <!-- Increased space between links -->
          <li>
            <router-link to="/" class="text-white text-lg hover:underline">Home</router-link>
          </li>
          <li>
            <router-link to="/about" class="text-white text-lg hover:underline">About</router-link>
          </li>
          <li>
            <router-link to="/contact" class="text-white text-lg hover:underline">Contact</router-link>
          </li>
        </ul>
    
        <!-- Button with increased space -->
        <div class="ml-20 mr-40"> <!-- Increased margin for more space between button and navbar -->
          <button class="bg-[rgb(173,255,47)] text-black px-6 py-2 text-lg rounded-lg font-extrabold hover:opacity-80">
            Get Now
          </button>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar',
  };
  </script>
  
  <style scoped>
  /* No additional styles needed, using UnoCSS classes */
  </style>
  