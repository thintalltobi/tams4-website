<!-- filepath: /Users/chineduohagwu/Documents/Tams/tams-website/components/base/accordion.vue -->
<template>
  <div :class="`rounded-lg`">
    <button
      :class="`w-full text-left rounded-lg py-4 px-6 flex justify-between items-center focus:outline-none ${theme.background}`"
      @click="toggle"
    >
      <span class="text-lg font-medium">{{ question }}</span>
      <span
        class="text-2xl font-bold transform transition-transform w-10 h-10 flex justify-center items-center rounded-lg"
        :class="{
          'rotate-180': isOpen,
          [theme.buttonBackground]: true,
          'text-white': theme.buttonBackground !== 'bg-white',
        }"
      >
        {{ isOpen ? "-" : "+" }}
      </span>
    </button>
    <div v-if="isOpen" class="border rounded-b-lg px-6 py-4 text-gray-600">
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

defineProps({
  question: {
    type: String,
    required: true,
  },
  answer: {
    type: String,
    required: true,
  },
  theme: {
    type: Object,
    default: () => ({
      background: "bg-white",
      buttonBackground: "bg-white",
    }),
  },
});

const isOpen = ref(false);

function toggle() {
  isOpen.value = !isOpen.value;
}
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
