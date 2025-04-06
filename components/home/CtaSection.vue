<template>
    <section class="bg-white py-20">
      <div class="container mx-auto">
        <!-- Centered Div -->
        <div class="bg-[#001927] text-white rounded-[20px] mx-auto py-20 px-8 md:px-16 max-w-6xl">
          <!-- Title -->
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
            Start Managing Your Business Like a Pro
          </h2>
          <!-- Subtitle -->
          <p class="text-xl text-center text-gray-300 mb-8">
            Join thousands of companies transforming the way they manage business. It’s your turn to make it simple
          </p>
          <!-- Buttons -->
          <div class="flex justify-center space-x-4">
            <button class="px-6 py-3 border border-white text-white rounded-md hover:bg-[#001927]">
              
              <nuxt-link to="/auth/signup">
                Create Free Account
              </nuxt-link>
            </button>
            <button class="px-6 py-3 bg-[#0564A4] text-white rounded-md hover:bg-[#001927]">
              <nuxt-link to="/demo">
                Request Demo
              </nuxt-link>
            </button>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  // No additional logic needed for now
  </script>
  
  <style scoped>
  /* Tailwind CSS handles most of the styling */
  </style>