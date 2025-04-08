<!-- filepath: /Users/chineduohagwu/Documents/Tams/tams-website/components/home/Faq.vue -->
<template>
  <section class="bg-white py-20">
    <div class="container mx-auto px-4">
      <!-- FAQ Title -->
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-5">
        Frequently Asked Questions
      </h2>
      <!-- FAQ Subtitle -->
      <p class="text-lg text-center text-gray-600 mb-12">
        Find answers to the most common questions about our platform.
      </p>
      <!-- Accordion Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FaqAccordion
          v-for="(faq, index) in faqs"
          :key="index"
          :theme="{
            background: 'bg-[#F8FAFF]',
            buttonBackground: 'bg-[#0564A4]',
          }"
          :question="faq.question"
          :answer="faq.answer"
        />
      </div>

      <div class="flex justify-center">
        <button
          class=" mt-10 border border-[#0564A4] bg-white text-[#0564A4] font-semibold py-2 px-4 rounded"
        >
          <nuxt-link to="/faqs" class="flex items-center justify-center space-x-2 "><span>See More</span>
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 0V2H11.59L0 13.59L1.41 15L13 3.41V10H15V0H5Z"
              fill="#0564A4"
            />
          </svg></nuxt-link>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FaqAccordion from "../../components/base/accordion.vue";

const faqs = [
  {
    question: "Does TAMS require an attendance device?",
    answer:
      "No. The attendance module only requires device or the use of the mobile app. However, other modules such as HRM and Payroll does not require.",
  },
  {
    question: "Is my record on the device safe in case of device damage",
    answer:
      "Yes, records are safe as all transactions are pulled from the device to the TAMS application. All records pulled from the device are automatically saved in the cloud (server) which can be retrieved when the device is repaired or when you get a new one.",
  },
  {
    question: "Can I adjust the number of users on TAMS?",
    answer: "TAMS can accommodate as many users as possible on the platform.",
  },
  {
    question: "What is included in the free trial?",
    answer:
      "Yes, the free trial includes full access to all Premium Plan features for three months, allowing you to experience the full capabilities of TAMS.",
  },
  {
    question: "Is TAMS mainly a time attendance solution?",
    answer:
      "No. TAMS is a complete human resource management tool with a bouquet of services and modules that enhance employee performance and engagement. Among others, TAMS has the following: Verification and Identity Management, Leave and Exemption Management, Payroll Management, Shift Management, Appraisal Management, KPI Management, Employee Training Tracking, Automated Alert System, TAMS Mobile App, intuitive Reports & Statistics",
  },
];
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
