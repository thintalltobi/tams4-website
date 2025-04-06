<template>
  <div v-if="selectedJob !== null" class="bg-white">
    <!-- Header Section -->
    <div class="border-b">
      <div
        class="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 pb-2 mb-6"
      >
        <div class="flex items-center gap-4">
          <img
            :src="jobs[selectedJob].logo || '/img/logo-blue.svg'"
            alt="Company Logo"
            class="h-10 w-10 rounded-full"
          />
          <h2 class="text-lg sm:text-xl font-bold text-[#0564A4]">
            {{ jobs[selectedJob].company || "No Company Name" }}
          </h2>
        </div>
        <button
          class="px-6 py-2 text-[#0564A4] border border-[#0564A4] rounded-md hover:bg-[#0564A4] hover:text-white transition"
          @click="handleApply"
        >
          Go Back
        </button>
      </div>
    </div>

    <!-- Main Section -->
    <div class="container mx-auto px-4 sm:px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
        <!-- Left: Job Details -->
        <div class="md:col-span-3 bg-white rounded-lg px-4 sm:px-6 py-6">
          <div v-if="selectedJob !== null">
            <!-- Job Role and Apply Button -->
            <div
              class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 space-y-3 sm:space-y-0"
            >
              <h3 class="text-lg sm:text-xl font-semibold">
                {{ jobs[selectedJob].role || "No Role" }}
              </h3>
            </div>

            <!-- Job Meta Information -->
            <div
              class="flex flex-wrap text-sm sm:text-base text-gray-600 gap-6 sm:gap-6 mb-6"
            >
              <p>
                {{ jobs[selectedJob].job_location_country_id || "No Location" }}
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
        </div>

        <!-- Right: Form -->
        <div
          class="md:col-span-2 bg-white border border-gray-300 rounded-lg p-4 sm:p-6"
        >
          <form class="space-y-6" @submit.prevent="handleSubmit">
            <!-- Name Fields -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="firstName"
                  class="block text-sm font-medium text-gray-700"
                  >First Name</label
                >
                <input
                  id="firstName"
                  v-model="form.firstName"
                  type="text"
                  class="mt-1 w-full px-4 py-3 border rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label
                  for="lastName"
                  class="block text-sm font-medium text-gray-700"
                  >Last Name</label
                >
                <input
                  id="lastName"
                  v-model="form.lastName"
                  type="text"
                  class="mt-1 w-full px-4 py-3 border rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <!-- Email and Experience -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="mt-1 w-full px-4 py-3 border rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label
                  for="experience"
                  class="block text-sm font-medium text-gray-700"
                  >Years of Experience</label
                >
                <select
                  id="experience"
                  v-model="form.experience"
                  class="mt-1 w-full px-4 py-3 border rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
                >
                  <option value="" disabled selected>Select experience</option>
                  <option value="0">0 Years</option>
                  <option value="1">1 Year</option>
                  <option value="2">2 Years</option>
                  <option value="3">3 Years</option>
                  <option value="4">4 Years</option>
                  <option value="5">5 Years</option>
                  <option value="6">6 Years</option>
                  <option value="7">7 Years</option>
                  <option value="8">8 Years</option>
                  <option value="9">9 Years</option>
                  <option value="10">10 Years</option>
                </select>
              </div>
            </div>

            <!-- Phone Number -->
            <div>
              <label
                for="phoneNumber"
                class="block text-sm font-medium text-gray-700"
                >Phone Number</label
              >
              <input
                id="phoneNumber"
                v-model="form.phoneNumber"
                type="tel"
                class="mt-1 w-full px-4 py-3 border rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
                placeholder="Enter your phone number"
              />
            </div>

            <div
              v-if="
                jobs[selectedJob].custom_fields &&
                jobs[selectedJob].custom_fields.length
              "
              class="space-y-4"
            >
              <div
                v-for="(field, index) in JSON.parse(
                  jobs[selectedJob].custom_fields
                )"
                :key="index"
              >
                <label
                  :for="`custom-${index}`"
                  class="block text-sm font-medium text-gray-700"
                >
                  {{ field }}
                </label>
                <input
                  :id="`custom-${index}`"
                  v-model="custom_answers[index]"
                  type="text"
                  class="mt-1 w-full px-4 py-3 border rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
                  :placeholder="`Answer for: ${field}`"
                />
              </div>
            </div>

            <!-- Upload Resume -->
            <div>
              <label
                for="resume"
                class="block text-sm font-medium text-gray-700"
                >Upload Resume</label
              >
              <input
                id="resume"
                type="file"
                class="mt-1 w-full px-4 py-3 border rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
                @change="(e: any) => form.resumeFile = e.target.files[0]"
              />
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                {{ loading ? "Submitting..." : "Submit" }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from "vue";
import axios from "axios";
import { ElNotification } from "element-plus";

interface Job {
  logo: string;
  id: number;
  uuid: string;
  company: string;
  role: string;
  work_mode: string;
  location: string;
  type: string;
  description: string;
  custom_fields: string[];
  updated_at: string;
  job_location_country_id: number;
}

const custom_answers = ref<string[]>([]);
const loading = ref(false);

// Form State
const form = reactive({
  firstName: "",
  lastName: "",
  email: "",
  experience: "",
  phoneNumber: "",
  resumeFile: null as File | null,
});

// Emits and Props
const emit = defineEmits<{
  (e: "pageIndex", payload: number): void;
}>();

const props = defineProps<{
  jobs: Job[];
  selectedJob: number | null;
}>();

// Format Date
function formatDate(dateStr: string): string {
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

// Handle back button
function handleApply() {
  emit("pageIndex", 1);
}

// Validate the form
function validateForm() {
  if (
    !form.firstName ||
    !form.lastName ||
    !form.email ||
    !form.experience ||
    !form.phoneNumber ||
    !form.resumeFile
  ) {
    ElNotification({
      title: "Validation Error",
      message: "Please fill all required fields.",
      type: "warning",
    });
    return false;
  }
  return true;
}

// Submit handler
async function handleSubmit() {
  if (!validateForm()) return;
  if (props.selectedJob === null) return;

  loading.value = true;

  try {
    // const resumeURL = await getBase64(form.resumeFile);

    const payload = {
      uuid: props.jobs[props.selectedJob].uuid,
      name: `${form.firstName} ${form.lastName}`,
      email: form.email,
      phone_number: form.phoneNumber,
      resume_url: 'https://tams.com.ng/_nuxt/img/tams-logo.9079316.svg',
      years_of_experience: Number(form.experience),
      custom_answers: custom_answers.value,
    };

    await axios.post(
      "https://staging-api.tams.com.ng/api/v1/job-application",
      payload
    );

    ElNotification({
      title: "Success",
      message: "Application submitted successfully!",
      type: "success",
    });

    // Optionally reset form
    Object.assign(form, {
      firstName: "",
      lastName: "",
      email: "",
      experience: "",
      phoneNumber: "",
      resumeFile: null,
    });

    custom_answers.value = [];

    handleApply()
  } catch (error: unknown) {
    if (error instanceof Error) {
      ElNotification({
        title: "Error",
        message: error.message,
        type: "error",
      });
    } else {
      ElNotification({
        title: "Error",
        message: "An unknown error occurred",
        type: "error",
      });
    }
  } finally {
    loading.value = false;
  }
}

// Helper to convert file to Base64 string (simulate upload)
// function getBase64(file: File): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = (error) => reject(error);
//   });
// }
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
