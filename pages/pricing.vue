<template>
  <section class="bg-gray-50">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <h1 class="text-4xl font-bold text-center pt-20 mb-12">
        Choose a Plan That Grows With Your Business
      </h1>

      <!-- Plans Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <!-- Premium Plan -->
        <div
          class="bg-white rounded-[12px] p-5 lg:p-12"
          style="border: 0.5px solid #d6d6d6"
        >
          <div class="space-y-3">
            <div class="lg:flex justify-between items-center">
              <h2 class="text-xl text-[#0564A4] font-bold text-center">
                {{ pricingData.premiumPlan.title }}
              </h2>
              <p
                class="text-center mt-5 md:mt-0 border rounded-full text-gray-600 px-10 py-3"
              >
                {{ pricingData.premiumPlan.price }}
              </p>
            </div>
            <p class="text-black text-3xl font-bold">₦ {{ totalAmount }}</p>
            <div class="flex justify-between items-center">
              <h3 class="text-lg">Number of Employee</h3>
              <div class="flex items-center space-x-6 border rounded-md">
                <button
                  class="px-6 py-3 bg-gray-200 hover:bg-gray-300"
                  @click="decreaseEmployees"
                >
                  -
                </button>
                <span class="text-lg font-semibold">{{
                  numberOfEmployees
                }}</span>
                <button
                  class="px-6 py-3 bg-gray-200 hover:bg-gray-300"
                  @click="increaseEmployees"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          <hr class="my-6" />

          <ul class="mb-6 space-y-4">
            <h4>Features you can access</h4>
            <li
              v-for="(feature, index) in pricingData.premiumPlan.features"
              :key="index"
              class="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <button
            style="border: 1px solid #d6d6d6"
            class="w-full px-6 py-3 mt-10 text-[#D6D6D6] rounded-full hover:bg-[#0564A4] hover:text-white"
          >
            Create Free Account
          </button>
        </div>

        <!-- Enterprise Plan -->
        <div
          class="bg-white rounded-[12px] p-5 lg:p-12"
          style="border: 0.5px solid #d6d6d6"
        >
          <div class="space-y-3">
            <div class="md:flex justify-between items-center">
              <h2 class="text-xl text-[#0564A4] font-bold text-center">
                Enterprise Plan
              </h2>
              <p
                class="text-center mt-5 md:mt-0 border bg-[#CCE5F3] text-[#0564A4] rounded-full px-10 py-3"
              >
                {{ pricingData.premiumPlan.price }}
              </p>
            </div>
          </div>

          <hr class="my-6" />

          <ul class="mb-6 space-y-4">
            <h4>Features you can access</h4>
            <li
              v-for="(feature, index) in pricingData.enterprisePlan.features"
              :key="index"
              class="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5 text-green-500 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {{ feature }}
            </li>
          </ul>

          <button
            class="w-full px-6 py-3 mt-10 bg-[#0564A4] text-white rounded-full"
          >
            <a href="/contact">
              Contact Us
            </a>
          </button>
        </div>
      </div>
    </div>

    <div class="bg-white py-12">
      <div class="container mx-auto px-4">
        <!-- Title -->
        <h1 class="text-4xl font-bold text-center mb-10">Compare Features</h1>

        <!-- Compare Features Section -->
        <div class="bg-white rounded-lg">
          <table class="w-full border-collapse ">
            <thead>
              <tr>
                <th class="border-b text-left border-gray-300 px-4 py-4">
                  {{ pricingData.compareFeatures.columns.feature }}
                </th>
                <th class="border-b text-left border-gray-300 px-4 py-4">
                  {{ pricingData.compareFeatures.columns.premium }}
                </th>
                <th class="border-b text-left border-gray-300 px-4 py-4">
                  {{ pricingData.compareFeatures.columns.enterprise }}
                </th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(feature, index) in pricingData.compareFeatures.rows"
                :key="index"
              >
                <td class="border-b border-gray-300 px-4 py-4 ">
                  {{ feature.name }}
                </td>
                <td class="border-b border-gray-300 px-4 py-4">
                  <img
                    v-if="feature.premium"
                    src="/public/img/check-circle.svg"
                    alt="Check"
                    class="h-5 w-5"
                  />
                  <img
                    v-else
                    src="/public/img/check-small.svg"
                    alt="Cross"
                    class="h-5 w-5"
                  />
                </td>
                <td class="border-b border-gray-300 px-4 py-4">
                  <img
                    v-if="feature.enterprise"
                    src="/public/img/check-circle.svg"
                    alt="Check"
                    class="h-5 w-5"
                  />
                  <img
                    v-else
                    src="/public/img/check-small.svg"
                    alt="Cross"
                    class="h-5 w-5"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Text data
const pricingData = {
  premiumPlan: {
    title: "Premium Plan",
    price: "₦400/Month/Employee",
    features: [
      "3 Months free trial",
      "Online support",
      "Up to 5 Employee",
      "Biometric Device option",
      "Employee training management",
      "Shift schedule",
      "Attendance Management",
      "Payroll Management",
      "Performance Management",
      "Recruitment Management",
    ],
  },
  enterprisePlan: {
    title: "Enterprise Plan",
    price: "Custom Pricing",
    features: [
      "3 Months free trial",
      "Online support",
      "Up to 5 Employee",
      "Biometric Device option",
      "Employee training management",
      "Shift schedule",
      "Attendance Management",
      "Payroll Management",
      "Performance Management",
      "Recruitment Management",
      "Api Integration",
      "Personalized server preference",
    ],
  },
  compareFeatures: {
    title: "Compare Features",
    columns: {
      feature: "Feature",
      premium: "Premium",
      enterprise: "Enterprise",
    },
    rows: [
      { name: "3 Months free trial", premium: true, enterprise: true },
      { name: "Online support", premium: true, enterprise: true },
      { name: "Up to 5 Employee", premium: true, enterprise: true },
      { name: "Biometric Device option", premium: true, enterprise: true },
      { name: "Employee training management", premium: true, enterprise: true },
      { name: "Shift schedule", premium: true, enterprise: true },
      { name: "Attendance Management", premium: true, enterprise: true },
      { name: "Payroll Management", premium: true, enterprise: true },
      { name: "Performance Management", premium: true, enterprise: true },
      { name: "Recruitment Management", premium: true, enterprise: true },
      { name: "Api Integration", premium: false, enterprise: true },
      { name: "Personalized server preference", premium: false, enterprise: true },
    ],
  },
};

// State for the number of employees
const numberOfEmployees = ref(1);
const pricePerEmployee = 400;

const totalAmount = computed(() => numberOfEmployees.value * pricePerEmployee);

function increaseEmployees() {
  numberOfEmployees.value++;
}

function decreaseEmployees() {
  if (numberOfEmployees.value > 1) {
    numberOfEmployees.value--;
  }
}

useHead({
    title: 'Pricing',
    meta: [
      {
        name: 'description',
        content: 'Pricing plans for TAMS, a workforce management solution.',
      },
    ],
  });
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
