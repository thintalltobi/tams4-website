<template>
  <div class="col-span-5 bg-white rounded-lg p-4 sm:p-6">
    <div v-if="selectedJob !== null">
      <!-- Logo and Company Name -->
      <div class="flex items-center mb-4 sm:mb-6">
        <img
          :src="jobs[selectedJob].logo"
          alt="Company Logo"
          class="h-10 w-10 rounded-full mr-3 sm:mr-4"
        />
        <h2 class="text-lg sm:text-xl font-bold text-[#0564A4]">
          {{ jobs[selectedJob].company }}
        </h2>
      </div>

      <!-- Job Role and Apply Button -->
      <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-3 sm:space-y-0">
        <h3 class="text-lg sm:text-xl font-semibold">
          {{ jobs[selectedJob].role }}
        </h3>
        <nuxt-link
          :to="`/jobs/${jobs[selectedJob].remaining}`"
          class="inline-block text-center px-6 py-2 border border-[#0564A4] text-blue-500 rounded-md hover:bg-[#0564A4] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0564A4]"
        >
          Apply Now
        </nuxt-link>
      </div>

      <!-- Job Meta Information -->
      <div class="flex flex-wrap text-sm sm:text-base text-gray-600 gap-3 sm:gap-6 mb-6">
        <p>{{ jobs[selectedJob].location }}</p>
        <p>{{ jobs[selectedJob].posted }}</p>
        <p>{{ jobs[selectedJob].applicants }} Applicants</p>
        <p>{{ jobs[selectedJob].type }}</p>
        <p>{{ jobs[selectedJob].workType }}</p>
      </div>

      <!-- Job Description -->
      <div class="mb-6">
        <h4 class="text-lg sm:text-xl font-bold mb-2">Job Description</h4>
        <p class="text-gray-700">{{ jobs[selectedJob].description }}</p>
      </div>

      <!-- Qualification -->
      <div class="mb-6">
        <h4 class="text-lg sm:text-xl font-bold mb-2">Qualification</h4>
        <p class="text-gray-700">{{ jobs[selectedJob].qualification }}</p>
      </div>

      <!-- Additional Information -->
      <div>
        <h4 class="text-lg sm:text-xl font-bold mb-2">Additional Information</h4>
        <p class="text-gray-700">{{ jobs[selectedJob].additionalInfo }}</p>
      </div>
    </div>

    <div v-else>
      <p class="text-gray-500 text-center py-4">Select a job to view details.</p>
    </div>
  </div>
</template>


<script setup lang="ts">
import { defineProps } from "vue";

interface Job {
  logo: string;
  company: string;
  role: string;
  location: string;
  posted: string;
  applicants: number;
  type: string;
  workType: string;
  description: string;
  qualification: string;
  additionalInfo: string;
  remaining: string;
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
</script>
