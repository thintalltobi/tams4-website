<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <!-- Title -->
      <h1 class="text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h1>

      <!-- Search Field -->
      <div class="flex justify-center mb-12">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search for a question..."
          class="px-4 py-4 w-[675px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0564A4]"
        />
      </div>

      <div class="bg-white p-5 rounded-lg">
        <!-- FAQ Sections -->
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <!-- Left Sidebar (Sections) -->
          <div class="md:col-span-1 border rounded-lg p-[10px]">
            <ul class="space-y-2">
              <li
                v-for="(section, index) in faqSections"
                :key="index"
                :class="[
                  'cursor-pointer p-5',
                  selectedSection === index
                    ? 'bg-[#16214D] text-white rounded-lg'
                    : 'text-gray-700 border-[#E9E9E9] border-b-2 hover:bg-gray-100',
                ]"
                @click="selectSection(index)"
              >
                {{ section.title }}
              </li>
            </ul>
          </div>

          <!-- Right Content (FAQs) -->
          <div class="md:col-span-3">
            <!-- Selected Section Title -->
            <h2 class="text-xl font-bold mb-3 text-[#16214D]">
              {{ faqSections[selectedSection].title }}
            </h2>

            <!-- FAQs -->
            <div v-for="(faq, index) in filteredFaqs" :key="index" class="mb-5">
              <div
                class="border border-dashed border-gray-500 rounded-md overflow-hidden"
                @click="toggleFaq(index)"
              >
                <div
                  class="px-4 py-3 flex justify-between items-center cursor-pointer"
                >
                  <h3 class="text-lg text-[#0564A4] font-medium">
                    {{ faq.question }}
                  </h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5 transform transition-transform"
                    :class="{ 'rotate-180': openFaq === index }"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </div>
                <div v-if="openFaq === index" class="px-4 mt-2 py-3 bg-white">
                  <p class="text-gray-600">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// FAQ Sections Data
const faqSections = [
  {
    title: "General Questions",
    faqs: [
      {
        question: "What is TAMS?",
        answer:
          "TAMS is a workforce management solution designed to enhance productivity and align employee performance with organizational goals.",
      },
      {
        question: "Is TAMS mainly a time attendance solution?",
        answer:
          "No. TAMS is a complete human resource management tool with a bouquet of services and modules that enhance employee performance and engagement. Among others, TAMS has the following: Verification and Identity Management, Leave and Exemption Management, Payroll Management, Shift Management, Appraisal Management, KPI Management, Employee Training Tracking, Automated Alert System, TAMS Mobile App, intuitive Reports & Statistics",
      },
      {
        question: "Does TAMS have limitations to number of users ",
        answer:
          "TAMS can accommodate as many users as possible on the platform.",
      },
      {
        question:
          "Is it required that attendance monitoring device is purchased before TAMS can be used ",
        answer:
          "No. The attendance module only requires device or the use of the mobile app. However, other modules such as HRM and Payroll does not require .",
      },
      {
        question: "How does the device connect to TAMS application ",
        answer:
          "Connectivity between the device and TAMS is powered by GPRS or a client’s in-house internet (LAN) provision.",
      },
    ],
  },
  {
    title: "Free Trial",
    faqs: [
      {
        question: "What is included in the free trial?",
        answer:
          "Yes, the free trial includes full access to all Premium Plan features for three months, allowing you to experience the full capabilities of TAMS.",
      },
      {
        question: "What happens after the free trial ends?",
        answer:
          "After the free trial ends, you can choose to subscribe to one of our plans to continue using TAMS with all its features.",
      },
    ],
  },
  {
    title: "Tams Integration",
    faqs: [
      {
        question:
          "Can I integrate TAMS with third-party tools in the free trial?",
        answer:
          "Yes, it can. Providers of the third party solution need to be contacted by client to enable a seamless integration.",
      },
    ],
  },
  {
    title: "Subscription",
    faqs: [
      {
        question: "What are the subscription plans?",
        answer:
          "Users can subscribe for the modules/package they need. TAMS has categorised it modules as follows: HRM, Attendance, Payroll. Each category is modularised in order to get value for the preferred package.",
      },
      {
        question: "What is the Payment Plan for my preferred package",
        answer:
          "Payment plan for each package is per annum, however when you subscribe for more than one package, you get a graduating discount.",
      },
    ],
  },
  {
    title: "Security",
    faqs: [
      {
        question: "Is my record on the device safe in case of device damage",
        answer:
          "Yes, records are safe as all transactions are pulled from the device to the TAMS application. All records pulled from the device are automatically saved in the cloud (server) which can be retrieved when the device is repaired or when you get a new one.",
      },
      {
        question: "Is my record safe from hackers?",
        answer:
          "Yes it is. TAMS is hacker-proof and is certified by comodo, the global leader in cyber security solutions.",
      },
    ],
  },
  {
    title: "Shift Schedule",
    faqs: [
      {
        question: "How does TAMS handle shift schedules?",
        answer:
          "TAMS allows flexible shift scheduling to meet organizational needs.",
      },
    ],
  },
  {
    title: "Job Post",
    faqs: [
      {
        question: "How do I create a profile?",
        answer:
          "Fill in your details, and upload your CV. Your profile will help recruiters discover you.",
      },
      {
        question: "Can I apply for jobs directly on the platform?",
        answer:
          "Yes, click on any job listing and follow the application steps.",
      },
      {
        question: "How do I post a job?",
        answer:
          "Sign up on TAMS application, click Post a Job on the website, and fill in the job details or post a job directly from the TAMS application.",
      },
      {
        question: "How do I track applications?",
        answer:
          "Log in to your dashboard to view and manage all applications in one place.",
      },
    ],
  },
];

// State
const selectedSection = ref(0);
const openFaq = ref<number | null>(null);
const searchQuery = ref("");

// Computed: Filter FAQs based on selected section and search query
const filteredFaqs = computed(() => {
  const faqs = faqSections[selectedSection.value].faqs;
  if (!searchQuery.value) return faqs;
  return faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

// Methods
function selectSection(index: number) {
  selectedSection.value = index;
  openFaq.value = null; // Close any open FAQ when switching sections
}

function toggleFaq(index: number) {
  openFaq.value = openFaq.value === index ? null : index;
}

useHead({
  title: 'FAQs',
  meta: [
    {
      name: 'description',
      content: 'Frequently Asked Questions about TAMS, a workforce management solution.',
    },
  ],
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
