<template>
  <section class="relative">
    <!-- Background Image -->
    <div class="absolute inset-0">
      <img
        src="/public/img/contact-us.jpeg"
        alt="Request Demo Background"
        class="w-full h-full object-cover"
      />
      <!-- Overlay -->
      <div class="absolute inset-0 bg-[#0564A485]" />
    </div>

    <!-- Content -->
    <div
      class="relative container mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-2 gap-8 h-auto"
    >
      <!-- Left Section -->
      <div class="text-white space-y-6">
        <h1 class="text-4xl font-bold">Request a Demo</h1>
        <p class="text-lg w-4/5">
          Discover how TAMS can transform your workforce management. Fill out
          the form to schedule a personalized demo.
        </p>
      </div>

      <!-- Right Section (Form) -->
      <div class="bg-white rounded-[20px] shadow-lg p-5 lg:p-10">
        <form
          class="grid grid-cols-1 md:grid-cols-2 gap-6"
          @submit.prevent="handleSubmit"
        >
          <!-- Company Name -->
          <div>
            <label
              for="company_name"
              class="block text-sm font-medium text-gray-700"
              >Company Name</label
            >
            <input
              id="company_name"
              v-model="form.company_name"
              type="text"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your company name"
            />
            <p v-if="errors.company_name" class="text-red-500 text-sm">
              {{ errors.company_name }}
            </p>
          </div>

          <!-- Company Email -->
          <div>
            <label
              for="company_email"
              class="block text-sm font-medium text-gray-700"
              >Company Email</label
            >
            <input
              id="company_email"
              v-model="form.company_email"
              type="email"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your company email"
            />
            <p v-if="errors.company_email" class="text-red-500 text-sm">
              {{ errors.company_email }}
            </p>
          </div>

          <!-- Contact Name -->
          <div>
            <label
              for="contact_name"
              class="block text-sm font-medium text-gray-700"
              >Contact Name</label
            >
            <input
              id="contact_name"
              v-model="form.contact_name"
              type="text"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your name"
            />
            <p v-if="errors.contact_name" class="text-red-500 text-sm">
              {{ errors.contact_name }}
            </p>
          </div>

          <!-- Contact Phone Number -->
          <div>
            <label
              for="contact_phone_number"
              class="block text-sm font-medium text-gray-700"
              >Contact Phone Number</label
            >
            <input
              id="contact_phone_number"
              v-model="form.contact_phone_number"
              type="tel"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your phone number"
            />
            <p v-if="errors.contact_phone_number" class="text-red-500 text-sm">
              {{ errors.contact_phone_number }}
            </p>
          </div>

          <!-- Industry -->
          <div>
            <label
              for="industry"
              class="block text-sm font-medium text-gray-700"
              >Industry</label
            >
            <select
              id="industry"
              v-model="form.industry"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
            >
              <option value="" disabled>Select your industry</option>
              <option
                v-for="option in industryList"
                :key="option.id"
                :value="option.industry_type"
              >
                {{ option.industry_type }}
              </option>
            </select>
            <p v-if="errors.industry" class="text-red-500 text-sm">
              {{ errors.industry }}
            </p>
          </div>

          <!-- Location -->
          <div>
            <label
              for="location"
              class="block text-sm font-medium text-gray-700"
              >Location</label
            >
            <input
              id="location"
              v-model="form.location"
              type="text"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your location"
            />
            <p v-if="errors.location" class="text-red-500 text-sm">
              {{ errors.location }}
            </p>
          </div>

          <!-- Interested in Bio-metric Device -->
          <div>
            <label
              for="interested_in_biometric"
              class="block text-sm font-medium text-gray-700"
              >Interested in Bio-metric Device?</label
            >
            <select
              id="interested_in_biometric"
              v-model="form.interested_in_biometric"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <p
              v-if="errors.interested_in_biometric"
              class="text-red-500 text-sm"
            >
              {{ errors.interested_in_biometric }}
            </p>
          </div>

          <!-- Employee Headcount -->
          <div>
            <label
              for="employee_head_count"
              class="block text-sm font-medium text-gray-700"
              >Employee Headcount</label
            >
            <input
              id="employee_head_count"
              v-model="form.employee_head_count"
              type="number"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter the number of employees"
            />
            <p v-if="errors.employee_head_count" class="text-red-500 text-sm">
              {{ errors.employee_head_count }}
            </p>
          </div>

          <!-- Date and Time -->
          <div class="md:col-span-2">
            <label
              for="date_time"
              class="block text-sm font-medium text-gray-700"
              >Date and Time</label
            >
            <input
              id="date_time"
              v-model="form.date_time"
              type="datetime-local"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
            />
            <p v-if="errors.date_time" class="text-red-500 text-sm">
              {{ errors.date_time }}
            </p>
          </div>

          <!-- Additional Note -->
          <div class="md:col-span-2">
            <label
              for="additional_note"
              class="block text-sm font-medium text-gray-700"
              >Additional Note</label
            >
            <textarea
              id="additional_note"
              v-model="form.additional_note"
              rows="4"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter any additional notes"
            />
            <p v-if="errors.additional_note" class="text-red-500 text-sm">
              {{ errors.additional_note }}
            </p>
          </div>

          <!-- Submit Button -->
          <div class="md:col-span-2">
            <el-button
              type="primary"
              style="background: #0564a4; height: 46px; border: none"
              class="w-full bg-[#0564A4] hover:bg-[#001927]"
              size="large"
              :loading="loading"
              native-type="submit"
            >
              Request Demo
            </el-button>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { useRuntimeConfig, useHead } from "nuxt/app";
import { ElNotification } from "element-plus";

const config = useRuntimeConfig();

const form = ref({
  company_name: "",
  company_email: "",
  contact_name: "",
  contact_phone_number: "",
  industry: "",
  location: "",
  interested_in_biometric: "",
  employee_head_count: "",
  date_time: "",
  additional_note: "",
});

const errors = ref<{
  company_name?: string;
  company_email?: string;
  contact_name?: string;
  contact_phone_number?: string;
  industry?: string;
  location?: string;
  interested_in_biometric?: string;
  employee_head_count?: string;
  date_time?: string;
  additional_note?: string;
}>({});

type Industry = {
  id: number;
  industry_type: string;
};

const loading = ref(false);
const industryList = ref<Industry[]>([]);

function validateForm() {
  errors.value = {};
  if (!form.value.company_name)
    errors.value.company_name = "Company name is required.";
  if (!form.value.company_email)
    errors.value.company_email = "Company email is required.";
  if (!form.value.contact_name)
    errors.value.contact_name = "Contact name is required.";
  if (!form.value.contact_phone_number)
    errors.value.contact_phone_number = "Contact phone is required.";
  if (!form.value.industry) errors.value.industry = "Industry is required.";
  if (!form.value.location) errors.value.location = "Location is required.";
  if (!form.value.interested_in_biometric)
    errors.value.interested_in_biometric = "Please select an option.";
  if (!form.value.employee_head_count)
    errors.value.employee_head_count = "Employee headcount is required.";
  if (!form.value.date_time)
    errors.value.date_time = "Date and time are required.";
  if (!form.value.additional_note)
    errors.value.additional_note = "Additional note is required.";
  return Object.keys(errors.value).length === 0;
}

getIndustries();

async function getIndustries() {
  const response = await axios.get(`${config.public.apiUrl}/industries`);
  if (response.status) {
    industryList.value = response.data.data;
  } else {
    ElNotification({
      title: "Error",
      message: "Failed to fetch industries.",
      type: "error",
    });
  }
}

async function handleSubmit() {
  if (!validateForm()) {
    ElNotification({
      title: "Error",
      message: "Please fill in all required fields.",
      type: "error",
    });
    return;
  }

  loading.value = true;

  try {
    await axios.post(`${config.public.apiUrl}/demo-request`, form.value);
    ElNotification({
      title: "Success",
      message: "Thank you for contacting us, we will get back to you soon.",
      type: "success",
    });
    form.value = {
      company_name: "",
      company_email: "",
      contact_name: "",
      contact_phone_number: "",
      industry: "",
      location: "",
      interested_in_biometric: "",
      employee_head_count: "",
      date_time: "",
      additional_note: "",
    };
  } catch (error) {
    ElNotification({
      title: "Error",
      message: `${error || "An error occurred while submitting your request."}`,
      type: "error",
    });
  } finally {
    loading.value = false;
  }
}

useHead({
  title: "Request a Demo",
  meta: [
    {
      name: "description",
      content:
        "Schedule a personalized demo to discover how TAMS can transform your workforce management.",
    },
  ],
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
