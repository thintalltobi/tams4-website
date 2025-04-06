<template>
  <div
    class="border border-gray-300 bg-white rounded-xl px-6 py-5 shadow-lg mb-8"
  >
    <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <!-- Search Field -->
      <input
        v-model="filters.search_query"
        type="text"
        placeholder="Search by Jobs, company or skill"
        class="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
      />

      <!-- Job Role -->
      <select
        v-model="filters.type"
        class="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled selected>Job Type</option>
        <option value="contract">Contract</option>
        <option value="fulltime">Full Time</option>
        <option value="parttime">Part Time</option>
      </select>

      <!-- Experience -->
      <select
        v-model="filters.work_mode"
        class="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled selected>Work Mode</option>
        <option value="remote">Remote</option>
        <option value="hybrid">Hybrid</option>
        <option value="onsite">On-site</option>
      </select>

      <!-- Location -->
      <!-- <select
        v-model="filters.location"
        class="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled selected>Location</option>
        <option value="lagos">Lagos</option>
        <option value="abuja">Abuja</option>
        <option value="remote">Remote</option>
      </select> -->

      <!-- Search Button -->
      <button
        class="w-full md:max-w-[160px] px-8 py-3 bg-[#16214D] text-white rounded-md hover:bg-[#0564A4] focus:outline-none focus:ring-2 focus:ring-blue-500"
        @click="applyFilters"
      >
        Search
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from "vue";

const filters = ref({
  search_query: "",
  type: "",
  work_mode: "",
  // location: "",
});

const emit = defineEmits(["apply-filters"]);

function applyFilters() {
  emit("apply-filters", filters.value);
}
</script>
