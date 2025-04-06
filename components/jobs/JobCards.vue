<template>
  <div
    class="border col-span-2 bg-white border-gray-300 rounded-lg p-4 overflow-y-auto h-[700px] flex flex-col"
  >
    <div class="flex-1 overflow-y-auto">
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
            :src="job.logo || '/img/logo-blue.svg'"
            alt="Company Logo"
            class="h-12 w-12 rounded-full mr-4"
          />
          <h3 class="text-lg font-bold">
            {{ job.company || "No Company Name" }}
          </h3>
        </div>

        <div class="text-sm text-gray-500 px-2">
          <p class="border-b pb-4 px-2">{{ job.role || "No Role" }}</p>
          <p class="border-b py-4 px-2">{{ job.job_location_country_id || "No Location" }}</p>
          <p class="border-b py-4 px-2">
            {{
              job.work_mode === "remote"
                ? "Remote"
                : job.work_mode === "hybrid"
                ? "Hybrid"
                : "Onsite"
            }}
          </p>
          <p class="border-b py-4 px-2">
            {{
              job.type === "fulltime"
                ? "Full Time"
                : job.type === "parttime"
                ? "Part Time"
                : job.type === "contract"
                ? "Contract"
                : job.type
            }}
          </p>
          <p class="py-4 px-2 flex items-center">
            <img class="mr-2 w-4 h-4" src="/img/clock-black.svg" alt="Clock" />
            {{ formatDate(job.updated_at) }}
          </p>
        </div>
      </div>
    </div>

    <!-- Pagination Controls -->
    <div class="mt-4 flex justify-between items-center">
      <button
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        :disabled="currentPage === 1"
        @click="goToPrevious"
      >
        Previous
      </button>
      <span class="text-sm">Page {{ currentPage }} of {{ totalPages }}</span>
      <button
        class="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
        :disabled="currentPage === totalPages"
        @click="goToNext"
      >
        Next
      </button>
    </div>
  </div>
</template>


<script setup lang="ts">
import { defineProps, defineEmits, ref, computed } from "vue";

interface Job {
  logo: string;
  company: string;
  role: string;
  work_mode: string;
  location: string;
  type: string;
  remaining: number;
  updated_at: string;
  job_location_country_id: number;
}

const props = defineProps<{
  jobs: Job[];
  total: number;
  selectedJob?: number | null;
}>();

const emit = defineEmits<{
  (e: "select-job" | "page-changed", payload: number): void;
}>();

const perPage = 10;
const currentPage = ref(1);

const totalPages = computed(() => Math.ceil(props.total / perPage));

function goToNext() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
    emit("page-changed", currentPage.value);
  }
}

function goToPrevious() {
  if (currentPage.value > 1) {
    currentPage.value--;
    emit("page-changed", currentPage.value);
  }
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

defineExpose({ currentPage });
</script>


