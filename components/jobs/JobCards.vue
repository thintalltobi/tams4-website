<template>
    <div class="border col-span-2 bg-white border-gray-300 rounded-lg p-4 overflow-y-auto h-[700px]">
      <div
        v-for="(job, index) in jobs"
        :key="index"
        :class="[
          'p-3 mb-4 border rounded-md cursor-pointer',
          selectedJob === index
            ? 'border-[#0564A4] bg-blue-50'
            : 'border-gray-300',
        ]"
        @click="$emit('select-job', index)"
      >
        <div class="flex items-center mb-5">
          <img
            :src="job.logo"
            alt="Company Logo"
            class="h-12 w-12 rounded-full mr-4"
          />
          <div>
            <h3 class="text-lg font-bold">{{ job.company }}</h3>
          </div>
        </div>
        <div>
          <p class="text-sm text-gray-500 border-b border-t py-[20px] px-[10px]">
            {{ job.role }}
          </p>
          <p class="text-sm text-gray-500 border-b py-[20px] px-[10px]">
            {{ job.location }}
          </p>
          <p class="text-sm text-gray-500 border-b py-[20px] px-[10px]">
            {{ job.type }}
          </p>
          <p class="text-sm text-gray-500 border-b py-[20px] px-[10px]">
            Hybrid
          </p>
          <p
            class="text-sm text-gray-500 py-[20px] px-[10px] flex items-center"
          >
            <img class="mr-4" src="/public/img/clock-black.svg" alt="" />
            {{ job.remaining }} days remaining
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps, defineEmits } from "vue";
  
  interface Job {
    logo: string;
    company: string;
    role: string;
    location: string;
    type: string;
    remaining: number;
  }
  
  defineProps({
    jobs: {
      type: Array as () => Job[],
      required: true,
    },
    selectedJob: {
      type: Number,
      required: false,
      default: null,
    },
  });
  
  defineEmits(["select-job"]);
  </script>