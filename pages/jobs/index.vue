<template>
  <div class="bg-white">
    <div
      v-if="pageIndex === 1"
      class="container mx-auto px-4 sm:px-6 lg:px-8 py-8"
    >
      <!-- Filter Section -->
      <JobFilters @apply-filters="applyFilters" />

      <h1 class="mt-10 text-xl font-semibold">
        {{ jobsTotal || 0 }} Job Openings
      </h1>

      <!-- Main Section -->
      <div class="grid grid-cols-1 lg:grid-cols-7 gap-8 mt-4">
        <!-- Left Section (Job Openings) -->
        <div class="lg:col-span-2">
          <JobCards
            :jobs="jobs"
            :selected-job="selectedJob"
            :total="jobsTotal"
            @select-job="selectJob"
            @page-changed="
              (page) => {
                filters.page = page;
                fetchJobs();
              }
            "
          />
        </div>

        <!-- Right Section (Job Details) -->
        <div class="lg:col-span-5 hidden lg:block">
          <JobDetails
            :jobs="jobs"
            :selected-job="selectedJob"
            @page-index="changePageIndex"
          />
        </div>
      </div>

      <!-- Show Job Details below on mobile -->
      <div class="lg:hidden mt-6">
        <JobDetails
          :jobs="jobs"
          :selected-job="selectedJob"
          @page-index="changePageIndex"
        />
      </div>
    </div>
    <Loading :visible="showLoading" text="Getting all Jobs..." />
    <div v-if="pageIndex === 2">
      <JobApply
        :jobs="jobs"
        :selected-job="selectedJob"
        @page-index="changePageIndex"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
import { ref } from "vue";
import axios from "axios";
import JobFilters from "../../components/jobs/JobFilters.vue";
import JobCards from "../../components/jobs/JobCards.vue";
import JobDetails from "../../components/jobs/JobDetails.vue";
import JobApply from "../../components/jobs/JobApply.vue";
import Loading from "../../components/base/loading.vue";

const showLoading = ref(false);
const jobs = ref<[]>([]);
const jobsTotal = ref(0);
const pageIndex = ref(1);
const selectedJob = ref<number | null>(null);

// Filters
const filters = ref({
  page: 1,
  per_page: 10,
  type: "",
  work_mode: "",
  search_query: "",
});

function changePageIndex(value: number) {
  pageIndex.value = value;
}

async function fetchJobs() {
  try {
    showLoading.value = true;
    const { type, work_mode, search_query, page, per_page } = filters.value;

    const response = await axios.get(
      "https://staging-api.tams.com.ng/api/v1/jobs",
      {
        params: {
          page: page,
          per_page: per_page,
          type: type || undefined,
          work_mode: work_mode || undefined,
          search_query: search_query || undefined,
        },
      }
    );

    jobs.value = response.data?.data.results || [];
    jobsTotal.value = response.data?.data.total || 0;

    console.log(jobs.value);
  } catch (error) {
    console.error("Error fetching jobs:", error);
  } finally {
    showLoading.value = false;
  }
}

// Triggered when JobFilters emits new filters
function applyFilters(newFilters: typeof filters.value) {
  filters.value = { ...newFilters, page: 1, per_page: 10 };
  fetchJobs();
}

// Select a job card
function selectJob(index: number) {
  selectedJob.value = index;
}

// Fetch on initial load
fetchJobs();

useHead({
  title: "Jobs",
  meta: [
    {
      name: "description",
      content:
        "Find your dream job with TAMS. Explore job openings, apply directly, and manage your applications seamlessly.",
    },
  ],
});
</script>
