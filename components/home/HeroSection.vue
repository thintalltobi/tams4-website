<template>
  <div class="text-white">
    <div
      class="container bg-[#16214D] px-20 pt-20 rounded-xl mx-auto text-center overflow-hidden"
    >
      <h1 class="text-4xl md:text-6xl font-bold mb-6">
        Better, Smarter Workforce Solutions for Your Organization
      </h1>
      <p class="text-lg md:text-xl mb-8 w-10/12 text-center mx-auto">
        Transform your workforce management with TAMS, a fully integrated
        platform offering Attendance, Payroll, Performance, Recruitment, and
        more. Plan better, work smarter, and optimize productivity with
        real-time data and seamless tools.
      </p>
      <div class="flex justify-center space-x-4 mb-16">
        <button class="px-6 py-3 border border-white text-white rounded-md">
          <a href="https://signup.tams.com.ng/signup" target="_blank">
            Get Started
          </a>
        </button>
        <button
          class="px-6 py-3 bg-[#0564A4] text-white rounded-md hover:bg-[#001927]"
        >
          <nuxt-link to="/contact"> Learn More </nuxt-link>
        </button>
      </div>
      <div class="relative h-[625px] overflow-hidden">
        <img
          src="/public/img/hero-image.svg"
          alt="Hero Image"
          class="absolute top-0 left-0 w-full h-auto"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
