<template>
  <div class="col-span-5 bg-white rounded-lg p-4 sm:p-6">
    <div v-if="selectedJob !== null">
      <!-- Logo and Company Name -->
      <div class="flex items-center mb-4 sm:mb-6">
        <img
          :src="jobs[selectedJob].company.company_logo || '/img/logo-blue.svg'"
          alt="Company Logo"
          class="h-10 w-10 rounded-full mr-3 sm:mr-4"
        />
        <h2 class="text-lg sm:text-xl font-bold text-[#0564A4]">
          {{ jobs[selectedJob].company.company_name || "No Company Name" }}
        </h2>
      </div>

      <!-- Job Role and Apply Button -->
      <div
        class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-3 sm:space-y-0"
      >
        <h3 class="text-lg sm:text-xl font-semibold">
          {{ jobs[selectedJob].role || "No Role" }}
        </h3>

        <button
          class="inline-block text-center px-6 py-2 border border-[#0564A4] text-blue-500 rounded-md hover:bg-[#0564A4] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#0564A4]"
          @click="handleApply(jobs[selectedJob].uuid)"
        >
          Apply Now
        </button>
      </div>

      <!-- Job Meta Information -->
      <div
        class="flex flex-wrap text-sm sm:text-base text-gray-600 gap-6 sm:gap-6 mb-6"
      >
      <p class="">
            {{
              jobs[selectedJob].country?.name && jobs[selectedJob].state?.name
                ? `${jobs[selectedJob].country.name}, ${jobs[selectedJob].state.name}`
                : jobs[selectedJob].country?.name || jobs[selectedJob].state?.name || "-"
            }}
          </p>
        <p>
          {{
            jobs[selectedJob].work_mode === "remote"
              ? "Remote"
              : jobs[selectedJob].work_mode === "hybrid"
              ? "Hybrid"
              : "Onsite"
          }}
        </p>
        <p>
          {{
            jobs[selectedJob].type === "fulltime"
              ? "Full Time"
              : jobs[selectedJob].type === "parttime"
              ? "Part Time"
              : "Contract"
          }}
        </p>
        <p>{{ formatDate(jobs[selectedJob].updated_at) }}</p>
      </div>

      <!-- Job Description -->
      <div class="mb-6">
        <h4 class="text-lg sm:text-xl font-bold mb-2">Job Description</h4>
        <p class="text-gray-700" v-html="jobs[selectedJob].description" />
      </div>
    </div>

    <div v-else>
      <p class="text-gray-500 text-center py-4">
        Select a job to view details.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import { defineProps } from "vue";
const router = useRouter();

interface Job {
  logo: string;
  id: number;
  company: {
    company_name: string;
    company_logo: string;
  };
  role: string;
  work_mode: string;
  location: string;
  type: string;
  posted: string;
  uuid: string;
  remaining: string;
  workType: string;
  description: string;
  qualification: string;
  additional_info: string;
  applicants: number;
  created_at: string;
  updated_at: string;
  job_location_country_id: number;
  country: {
    id: number;
    name: string;
  };
  state: {
    id: number;
    name: string;
  };
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

defineProps<{
  jobs: Job[];
  selectedJob: number | null;
}>();

function handleApply(uuid: string) {
  router.push(`/jobs/${uuid}`)
}
</script>
