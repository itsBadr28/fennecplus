<template>
    <div class="flex items-center justify-center w-full h-screen p-4">
      <div class="card w-full max-w-6xl mt-0"> <!-- Increased max-width moderately -->
        <!-- Première grande div avec 3 divs horizontaux -->
        <div class="flex flex-row gap-12 w-full">
          <!-- Premier div horizontal -->
          <div class="flex flex-col items-center w-full section">
            <div class="text-4xl font-bold">+700</div> <!-- Slightly bigger font -->
            <div class="text-xl">قناة</div> <!-- Slightly bigger font -->
          </div>
          <!-- Deuxième div horizontal -->
          <div class="flex flex-col items-center w-full section">
            <div class="text-4xl font-bold">+4000</div> <!-- Slightly bigger font -->
            <div class="text-xl">مسلسل</div> <!-- Slightly bigger font -->
          </div>
          <!-- Troisième div horizontal -->
          <div class="flex flex-col items-center w-full section">
            <div class="text-4xl font-bold">+15000</div> <!-- Slightly bigger font -->
            <div class="text-xl">أفلام</div> <!-- Slightly bigger font -->
          </div>
        </div>
      
        <!-- Deuxième grande div avec 2 divs horizontaux -->
        <div class="flex gap-12 mt-10 w-full">
          <!-- Premier div horizontal à gauche -->
          <div class="flex flex-col items-center w-full section">
            <div class="text-4xl font-bold">WEB PLAYER</div> <!-- Slightly bigger font -->
          </div>
          <!-- Deuxième div horizontal à droite -->
          <div class="flex flex-col items-center w-full section">
            <div class="text-4xl font-bold">التفعيل عن بعد</div> <!-- Slightly bigger font -->
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Sections',
  };
  </script>
  
  <style scoped>
  /* Custom CSS for the card border color */
  .card {
    border: 8px solid #56970B; /* Thicker green border for the card */
    padding: 48px; /* Increased padding inside the card */
    border-radius: 20px; /* Rounded corners for the card */
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1); /* Optional: adds shadow to the card */
    width: 100%;
    height: auto; /* Automatically adjust the height based on content */
  }
  
  /* Optional: you can color the borders inside each section separately */
  .section {
    position: relative;
    text-align: center; /* Ensures the text is centered */
  }
  
  .section::after {
    content: '';
    position: absolute;
    bottom: -12px; /* Adjusts the vertical positioning */
    left: 50%;
    transform: translateX(-50%); /* Centers the line horizontally */
    width: 60%; /* Adjusts the width to match the text length */
    height: 8px; /* Thicker green line */
    background-color: #56970B; /* Green color */
    border-radius: 12px; /* Rounded corners for the line */
  }
  
  /* Optional: Adjust margins and padding */
  .section .text-lg {
    margin-bottom: 12px; /* Space between the text and the border */
  }
  </style>
  