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
        <form class="grid grid-cols-1 md:grid-cols-2 gap-6" @submit.prevent="handleSubmit">
          <!-- Company Name -->
          <div>
            <label
              for="companyName"
              class="block text-sm font-medium text-gray-700"
              >Company Name</label
            >
            <input
              id="companyName"
              v-model="form.companyName"
              type="text"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your company name"
            />
            <p v-if="errors.companyName" class="text-red-500 text-sm">
              {{ errors.companyName }}
            </p>
          </div>

          <!-- Company Email -->
          <div>
            <label
              for="companyEmail"
              class="block text-sm font-medium text-gray-700"
              >Company Email</label
            >
            <input
              id="companyEmail"
              v-model="form.companyEmail"
              type="email"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your company email"
            />
            <p v-if="errors.companyEmail" class="text-red-500 text-sm">
              {{ errors.companyEmail }}
            </p>
          </div>

          <!-- Contact Name -->
          <div>
            <label
              for="contactName"
              class="block text-sm font-medium text-gray-700"
              >Contact Name</label
            >
            <input
              id="contactName"
              v-model="form.contactName"
              type="text"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your name"
            />
            <p v-if="errors.contactName" class="text-red-500 text-sm">
              {{ errors.contactName }}
            </p>
          </div>

          <!-- Contact Phone Number -->
          <div>
            <label
              for="contactPhone"
              class="block text-sm font-medium text-gray-700"
              >Contact Phone Number</label
            >
            <input
              id="contactPhone"
              v-model="form.contactPhone"
              type="tel"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter your phone number"
            />
            <p v-if="errors.contactPhone" class="text-red-500 text-sm">
              {{ errors.contactPhone }}
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
              <option value="technology">Technology</option>
              <option value="healthcare">Healthcare</option>
              <option value="finance">Finance</option>
              <option value="education">Education</option>
              <option value="other">Other</option>
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
              for="biometricDevice"
              class="block text-sm font-medium text-gray-700"
              >Interested in Bio-metric Device?</label
            >
            <select
              id="biometricDevice"
              v-model="form.biometricDevice"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
            >
              <option value="" disabled>Select an option</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <p v-if="errors.biometricDevice" class="text-red-500 text-sm">
              {{ errors.biometricDevice }}
            </p>
          </div>

          <!-- Employee Headcount -->
          <div>
            <label
              for="employeeHeadcount"
              class="block text-sm font-medium text-gray-700"
              >Employee Headcount</label
            >
            <input
              id="employeeHeadcount"
              v-model="form.employeeHeadcount"
              type="number"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter the number of employees"
            />
            <p v-if="errors.employeeHeadcount" class="text-red-500 text-sm">
              {{ errors.employeeHeadcount }}
            </p>
          </div>

          <!-- Date and Time -->
          <div class="md:col-span-2">
            <label
              for="dateTime"
              class="block text-sm font-medium text-gray-700"
              >Date and Time</label
            >
            <input
              id="dateTime"
              v-model="form.dateTime"
              type="datetime-local"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
            />
            <p v-if="errors.dateTime" class="text-red-500 text-sm">
              {{ errors.dateTime }}
            </p>
          </div>

          <!-- Additional Note -->
          <div class="md:col-span-2">
            <label
              for="additionalNote"
              class="block text-sm font-medium text-gray-700"
              >Additional Note</label
            >
            <textarea
              id="additionalNote"
              v-model="form.additionalNote"
              rows="4"
              class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#0564A4] focus:border-[#0564A4]"
              placeholder="Enter any additional notes"
            />
            <p v-if="errors.additionalNote" class="text-red-500 text-sm">
              {{ errors.additionalNote }}
            </p>
          </div>

          <!-- Submit Button -->
          <div class="md:col-span-2">
            <el-button
              type="primary"
              style="background: #0564A4; height: 46px; border: none;"
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
import { ElNotification } from "element-plus";

const form = ref({
  companyName: "",
  companyEmail: "",
  contactName: "",
  contactPhone: "",
  industry: "",
  location: "",
  biometricDevice: "",
  employeeHeadcount: "",
  dateTime: "",
  additionalNote: "",
});

const errors = ref<{
  companyName?: string;
  companyEmail?: string;
  contactName?: string;
  contactPhone?: string;
  industry?: string;
  location?: string;
  biometricDevice?: string;
  employeeHeadcount?: string;
  dateTime?: string;
  additionalNote?: string;
}>({});
const loading = ref(false);

function validateForm() {
  errors.value = {};
  if (!form.value.companyName) errors.value.companyName = "Company name is required.";
  if (!form.value.companyEmail) errors.value.companyEmail = "Company email is required.";
  if (!form.value.contactName) errors.value.contactName = "Contact name is required.";
  if (!form.value.contactPhone) errors.value.contactPhone = "Contact phone is required.";
  if (!form.value.industry) errors.value.industry = "Industry is required.";
  if (!form.value.location) errors.value.location = "Location is required.";
  if (!form.value.biometricDevice) errors.value.biometricDevice = "Please select an option.";
  if (!form.value.employeeHeadcount) errors.value.employeeHeadcount = "Employee headcount is required.";
  if (!form.value.dateTime) errors.value.dateTime = "Date and time are required.";
  if (!form.value.additionalNote) errors.value.additionalNote = "Additional note is required.";
  return Object.keys(errors.value).length === 0;
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
    await axios.post("https://api.example.com/demo", form.value);
    ElNotification({
      title: "Success",
      message: "Your demo request has been submitted successfully.",
      type: "success",
    });
    form.value = {
      companyName: "",
      companyEmail: "",
      contactName: "",
      contactPhone: "",
      industry: "",
      location: "",
      biometricDevice: "",
      employeeHeadcount: "",
      dateTime: "",
      additionalNote: "",
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
      content: "Schedule a personalized demo to discover how TAMS can transform your workforce management.",
    },
  ],
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>