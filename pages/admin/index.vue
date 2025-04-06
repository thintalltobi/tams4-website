<template>
  <div class="bg-gray-50 min-h-screen">
    <!-- Title and Create Job Button -->
    <div class="container mx-auto py-8 px-5">
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-3xl font-bold text-gray-800">Job</h1>
        <button class="px-6 py-3 bg-[#0564A4] text-white rounded-md">
          <nuxt-link to="/admin/create-job">
            Create Job
          </nuxt-link>
        </button>
      </div>

      <!-- Metrics Cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <!-- Total Job Postings -->
        <div class="bg-white rounded-2xl p-10 shadow">
          <h2 class="text-xl font-bold text-gray-800 mb-8">
            Total Job Postings
          </h2>
          <p class="text-3xl font-semibold text-[#0564A4]">120</p>
        </div>

        <!-- Total Applicants -->
        <div class="bg-white rounded-2xl p-10 shadow">
          <h2 class="text-xl font-bold text-gray-800 mb-8">Total Applicants</h2>
          <p class="text-3xl font-semibold text-[#0564A4]">0</p>
        </div>
      </div>

      <div class="mt-[64px]">
        <div class="border-b mb-6">
          <button
            v-for="tab in tabs"
            :key="tab"
            :class="[
              'px-8 py-4 rounded-t-lg mr-2 font-semibold',
              activeTab === tab
                ? 'bg-white text-[#0564A4]'
                : 'text-[#454D71] bg-[#DCDCDCDC]',
            ]"
            @click="activeTab = tab"
          >
            {{ tab }}
          </button>

          <div>
            <JobPostTable v-if="activeTab === 'Jobs Post'" class="rounded-b-xl" />
            <CandidatesTable v-if="activeTab === 'Candidates'" class="rounded-b-xl"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import JobPostTable from "~/components/admin/JobPostTable.vue";
import CandidatesTable from "@/components/admin/CandidatesTable.vue";

definePageMeta({
  layout: "admin",
});

const tabs = ["Jobs Post", "Candidates"];
const activeTab = ref("Jobs Post");
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
