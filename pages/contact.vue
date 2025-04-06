<template>
  <section class="flex">
    <div
      class="bg-white w-full container mx-auto h-auto my-10 md:rounded-[24px] p-6 xl:p-[60px]"
    >
      <h1 class="text-3xl md:text-4xl font-bold mb-6 md:mb-10 text-center">
        Contact Us
      </h1>

      <div class="flex flex-col md:flex-row">
        <!-- Left Section -->
        <div
          class="hidden md:flex flex-col rounded-[24px] bg-[#000000] text-white md:w-1/2 p-6 xl:p-14"
        >
          <h2 class="text-2xl md:text-3xl font-bold mb-4">
            Contact Customer Support
          </h2>
          <p class="mb-6 md:mb-8">
            Do you have any concerns? Our team is here to help you make a
            decision. Send us a message now, and we will be happy to assist you.
          </p>
          <ul class="space-y-4 text-[#F8FAFC]">
            <li>
              <a href="mailto:info@tams.com.ng" class="flex items-center">
                <div
                  class="inline-flex mr-3 bg-[#3395CD] h-10 w-10 rounded-full flex justify-center items-center"
                >
                  <img src="/public/img/email.svg" alt="Email Icon for Contact Us" />
                </div>
                <span class="w-9/12">info@tams.com.ng</span>
              </a>
            </li>
            <li>
              <a href="tel:+2348112677777" class="flex items-center">
                <div
                  class="inline-flex mr-3 bg-[#3395CD] h-10 w-10 rounded-full flex justify-center items-center"
                >
                  <img src="/public/img/call.svg" alt="Phone Icon for Contact Us" />
                </div>
                <span class="w-9/12">+234 811 267 7777, +234 811 367 7777</span>

              </a>
            </li>
            <li>
                <a
                href="https://www.google.com/maps?q=Suite+75-78,+Terrace+Wing,+TBS+Complex,+Onikan+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center"
                >
                <div
                  class="inline-flex mr-3 bg-[#3395CD] h-10 w-10 rounded-full flex justify-center items-center"
                >
                  <img src="/public/img/location.svg" alt="Location Icon for Contact Us" />
                </div>
                <span class="w-9/12"
                  >Suite 75-78, Terrace Wing, TBS Complex, Onikan Lagos</span
                >
                </a>
            </li>
          </ul>
        </div>

        <!-- Right Section -->
        <div class="flex flex-col items-center w-full md:w-1/2 p-0 md:p-8">
          <form
            class="w-full md:max-w-xl space-y-6"
            @submit.prevent="handleSubmit"
          >
            <!-- Full Name -->
            <div>
              <label
                for="fullname"
                class="block text-sm font-medium text-gray-700"
                >Full Name</label
              >
              <input
                id="fullname"
                v-model="form.fullname"
                type="text"
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#001927] focus:border-[#001927]"
                placeholder="Enter your full name"
              />
              <p v-if="errors.fullname" class="text-red-500 text-sm">
                {{ errors.fullname }}
              </p>
            </div>

            <!-- Company Name and Company Email -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#001927] focus:border-[#001927]"
                  placeholder="Enter your company name"
                />
                <p v-if="errors.companyName" class="text-red-500 text-sm">
                  {{ errors.companyName }}
                </p>
              </div>
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
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#001927] focus:border-[#001927]"
                  placeholder="Enter your company email"
                />
                <p v-if="errors.companyEmail" class="text-red-500 text-sm">
                  {{ errors.companyEmail }}
                </p>
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
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#001927] focus:border-[#001927]"
                placeholder="Enter your phone number"
              />
              <p v-if="errors.phoneNumber" class="text-red-500 text-sm">
                {{ errors.phoneNumber }}
              </p>
            </div>

            <!-- Type of Enquiry -->
            <div>
              <label
                for="enquiryType"
                class="block text-sm font-medium text-gray-700"
                >Type of Enquiry</label
              >
              <select
                id="enquiryType"
                v-model="form.enquiryType"
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#001927] focus:border-[#001927]"
              >
                <option value="" disabled>Select an enquiry type</option>
                <option value="general">General</option>
                <option value="support">Support</option>
                <option value="sales">Sales</option>
                <option value="other">Other</option>
              </select>
              <p v-if="errors.enquiryType" class="text-red-500 text-sm">
                {{ errors.enquiryType }}
              </p>
            </div>

            <!-- Message -->
            <div>
              <label
                for="message"
                class="block text-sm font-medium text-gray-700"
                >Message</label
              >
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-[#001927] focus:border-[#001927]"
                placeholder="Enter your message"
              />
              <p v-if="errors.message" class="text-red-500 text-sm">
                {{ errors.message }}
              </p>
            </div>

            <!-- Submit Button -->
            <div>
              <el-button
                type="primary"
                style="background: #0564A4; height: 46px; border: none;"
                class="w-full bg-[#0564A4] hover:bg-[#001927]"
                size="large"
                :loading="loading"
                native-type="submit"
              >
                Send Message
              </el-button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { ElNotification } from "element-plus";

const form = ref({
  fullname: "",
  companyName: "",
  companyEmail: "",
  phoneNumber: "",
  enquiryType: "",
  message: "",
});

const errors = ref<{
  fullname?: string;
  companyName?: string;
  companyEmail?: string;
  phoneNumber?: string;
  enquiryType?: string;
  message?: string;
}>({});
const loading = ref(false);

function validateForm() {
  errors.value = {};
  if (!form.value.fullname) errors.value.fullname = "Full name is required.";
  if (!form.value.companyName)
    errors.value.companyName = "Company name is required.";
  if (!form.value.companyEmail)
    errors.value.companyEmail = "Company email is required.";
  if (!form.value.phoneNumber)
    errors.value.phoneNumber = "Phone number is required.";
  if (!form.value.enquiryType)
    errors.value.enquiryType = "Enquiry type is required.";
  if (!form.value.message) errors.value.message = "Message is required.";
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
    await axios.post("https://api.example.com/contact", form.value);
    ElNotification({
      title: "Success",
      message: "Your message has been sent successfully.",
      type: "success",
    });
    form.value = {
      fullname: "",
      companyName: "",
      companyEmail: "",
      phoneNumber: "",
      enquiryType: "",
      message: "",
    };
  } catch (error) {
    ElNotification({
      title: "Error",
      message: `${error || "An error occurred while sending your message."}`,
      type: "error",
    });
  } finally {
    loading.value = false;
  }
}

useHead({
  title: 'Contact Us',
  meta: [
    {
      name: 'description',
      content: 'Reach out to us with your inquiries or support requests.',
    },
  ],
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
