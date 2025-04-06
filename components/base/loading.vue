
<template>
    <div
      v-if="visible"
      class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div class="text-center">
        <!-- Spinner -->
        <div
          class="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-white mx-auto"
        />
        <!-- Loading Text -->
        <p class="mt-4 text-white text-lg font-medium">{{ text }}</p>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from "vue";
  
  // Props
  defineProps({
    visible: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
      required: false,
      default: "Loading...",
    },
  });
  </script>
  
  <style scoped>
  /* Tailwind CSS handles most of the styling */
  </style>