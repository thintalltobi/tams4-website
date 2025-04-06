<template>
  <div class="bg-white">
    <!-- Header Section -->
    <div class="border-b">
      <div
        class="container mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 pb-2 mb-6"
      >
        <div class="flex items-center gap-4">
          <img
            src="/public/img/user-1.png"
            alt="Company Logo"
            class="h-10 w-10 rounded-full"
          />
          <h2 class="text-lg sm:text-xl font-bold text-[#0564A4]">
            Cavista Technologies, Lagos, Nigeria
          </h2>
        </div>
        <nuxt-link
          :to="`/jobs`"
          class="px-6 py-2 text-[#0564A4] border border-[#0564A4] rounded-md hover:bg-[#0564A4] hover:text-white transition"
        >
          Apply Now
        </nuxt-link>
      </div>
    </div>

    <!-- Main Section -->
    <div class="container mx-auto px-4 sm:px-6 py-8">
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
        <!-- Left: Job Details -->
        <div class="md:col-span-3 bg-white rounded-lg px-4 sm:px-6 py-6">
          <div class="mb-6">
            <h4 class="text-lg sm:text-xl font-bold mb-2">Job Description</h4>
            <p class="text-gray-700">
              A UI Designer who will be responsible for creating compelling,
              consistent, and highly usable experiences...
            </p>
          </div>

          <div class="mb-6">
            <h4 class="text-lg sm:text-xl font-bold mb-2">Qualification</h4>
            <p class="text-gray-700">
              Bachelor's degree in Computer Science or related field.
            </p>
          </div>

          <div>
            <h4 class="text-lg sm:text-xl font-bold mb-2">
              Additional Information
            </h4>
            <p class="text-gray-700">Experience with Vue.js is a plus.</p>
          </div>
        </div>

        <!-- Right: Form -->
        <div
          class="md:col-span-2 bg-white border border-gray-300 rounded-lg p-4 sm:p-6"
        >
          <form class="space-y-6">
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
                  type="text"
                  class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                  type="text"
                  class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                  type="email"
                  class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
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
                  class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled selected>Select experience</option>
                  <option value="0-1">0-1 Years</option>
                  <option value="2-3">2-3 Years</option>
                  <option value="4-5">4-5 Years</option>
                  <option value="5+">5+ Years</option>
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
                type="tel"
                class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
              />
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
                class="mt-1 w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <!-- Submit Button -->
            <div>
              <button
                type="submit"
                class="w-full px-6 py-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";

useHead({
  title: "Cavista Technologies, Lagos, Nigeria",
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
