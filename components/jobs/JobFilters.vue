<template>
  <div
    class="border border-gray-300 bg-white rounded-xl px-6 py-5 shadow-lg mb-8"
  >
    <div class="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
      <!-- Search Field -->
      <input
        v-model="filters.search"
        type="text"
        placeholder="Search by Jobs, company or skill"
        class="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      />

      <!-- Job Role -->
      <select
        v-model="filters.role"
        class="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled selected>Job Role</option>
        <option value="developer">Developer</option>
        <option value="designer">Designer</option>
        <option value="manager">Manager</option>
      </select>

      <!-- Experience -->
      <select
        v-model="filters.experience"
        class="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled selected>Experience</option>
        <option value="entry">Entry Level</option>
        <option value="mid">Mid Level</option>
        <option value="senior">Senior Level</option>
      </select>

      <!-- Location -->
      <select
        v-model="filters.location"
        class="w-full md:flex-1 px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
      >
        <option value="" disabled selected>Location</option>
        <option value="lagos">Lagos</option>
        <option value="abuja">Abuja</option>
        <option value="remote">Remote</option>
      </select>

      <!-- Search Button -->
      <button
        class="w-full md:max-w-[160px] px-8 py-3 bg-[#16214D] text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
  search: "",
  role: "",
  experience: "",
  location: "",
});

const emit = defineEmits(["apply-filters"]);

function applyFilters() {
  emit("apply-filters", filters.value);
}
</script>
