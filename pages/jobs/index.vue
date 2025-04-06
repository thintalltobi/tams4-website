<template>
  <div class="bg-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <!-- Filter Section -->
      <JobFilters @apply-filters="applyFilters" />

      <h1 class="mt-10 text-xl font-semibold">40 Job Openings</h1>

      <!-- Main Section -->
      <div class="grid grid-cols-1 lg:grid-cols-7 gap-8 mt-4">
        <!-- Left Section (Job Openings) -->
        <div class="lg:col-span-2">
          <JobCards
            :jobs="jobs"
            :selected-job="selectedJob"
            @select-job="selectJob"
          />
        </div>

        <!-- Right Section (Job Details) -->
        <div class="lg:col-span-5 hidden lg:block">
          <JobDetails :jobs="jobs" :selected-job="selectedJob" />
        </div>
      </div>

      <!-- Show Job Details below on mobile -->
      <div class="lg:hidden mt-6">
        <JobDetails :jobs="jobs" :selected-job="selectedJob" />
      </div>

      <Loading :visible="showLoading" text="Getting all Jobs..." />
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from "vue";
import JobFilters from "../../components/jobs/JobFilters.vue";
import JobCards from "../../components/jobs/JobCards.vue";
import JobDetails from "../../components/jobs/JobDetails.vue";
import Loading from "../../components/base/loading.vue";

const showLoading = ref(false);

const jobs = ref([
  {
    logo: "/img/seamless.svg",
    company: "TechCorp",
    role: "Frontend Developer",
    location: "Lagos, Nigeria",
    type: "Fulltime",
    workType: "Hybrid",
    remaining: 20,
    posted: "4 Days Ago",
    applicants: "Over 100",
    description:
      "Develop and maintain user-facing features for our web applications.",
    qualification: "Bachelor's degree in Computer Science or related field.",
    additionalInfo: "Experience with Vue.js is a plus.",
  },
  {
    logo: "/img/seamless.svg",
    company: "DesignPro",
    role: "UI/UX Designer",
    location: "Abuja, Nigeria",
    type: "Contract",
    workType: "Remote",
    remaining: 15,
    posted: "2 Days Ago",
    applicants: "50+",
    description:
      "Design user-friendly interfaces for our mobile and web applications.",
    qualification: "Proven experience in UI/UX design.",
    additionalInfo: "Proficiency in Figma or Adobe XD is required.",
  },
]);

const selectedJob = ref<number | null>(null);

function selectJob(index: number) {
  selectedJob.value = index;
}

function applyFilters(filters: string) {
  console.log("Filters applied:", filters);
}

useHead({
    title: 'Jobs',
    meta: [
      {
        name: 'description',
        content: 'Find your dream job with TAMS. Explore job openings, apply directly, and manage your applications seamlessly.',
      },
    ],
  });
</script>