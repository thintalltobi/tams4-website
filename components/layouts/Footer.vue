<template>
  <footer class="bg-[#001927] py-10">
    <div class="container mx-auto px-4">
      <!-- Logo -->
      <div class="mb-8 text-center md:text-left">
        <img src="/img/logo-blue.svg" alt="Logo" class="h-16 mx-auto md:mx-0" />
      </div>

      <!-- Links Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
        <div>
          <h3 class="text-xl font-semibold text-[#3395CD] mb-5">Company</h3>
          <ul class="space-y-4 text-[#F8FAFC]">
            <li><a href="/demo">Request Demo</a></li>
            <li><a href="https://signup.tams.com.ng/signup" target="_blank">Create free account</a></li>
            <li><a href="/terms-and-conditions">Terms and Conditions</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-[#3395CD] mb-5">Resources</h3>
          <ul class="space-y-4 text-[#F8FAFC]">
            <li><a href="/blog">Blog</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="/jobs">Jobs</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-[#3395CD] mb-5">
            Product Features
          </h3>
          <ul class="space-y-4 text-[#F8FAFC]">
            <li><a href="/#features">Payroll Management</a></li>
            <li><a href="/#features">Attendance Management</a></li>
            <li>
              <a href="/#features">Performance Management</a>
            </li>
            <li><a href="/#features">Recruitment</a></li>
            <li><a href="/#features">Time Management</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-[#3395CD] mb-5">Support</h3>
          <ul class="space-y-4 text-[#F8FAFC]">
            <li><a href="/contact">Contact us</a></li>
            <li><a href="/faqs">FAQ</a></li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-[#3395CD] mb-5">Contact us</h3>
          <ul class="space-y-4 text-[#F8FAFC]">
            <li>
              <a href="mailto:info@tams.com.ng" class="flex items-center">
                <div
                  class="inline-flex mr-3 bg-[#3395CD] h-10 w-10 rounded-full flex justify-center items-center"
                >
                  <img src="/public/img/email.svg" alt="" />
                </div>
                <span class="w-9/12">info@tams-ng.com</span>
              </a>
            </li>
            <li>
              <a href="tel:+2348112677777" class="flex items-center">
                <div
                  class="inline-flex mr-3 bg-[#3395CD] h-10 w-10 rounded-full flex justify-center items-center"
                >
                  <img src="/public/img/call.svg" alt="" />
                </div>
                <span class="w-9/12">+234 811 267 7777, +234 811 367 7777</span>
              </a>
            </li>
            <li>
              <a
                href="https://www.google.com/maps?q=39/40b,+TBS+Complex,+Onikan+Lagos"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center"
              >
                <div
                  class="inline-flex mr-3 bg-[#3395CD] h-10 w-10 rounded-full flex justify-center items-center"
                >
                  <img src="/public/img/location.svg" alt="" />
                </div>
                <span class="w-9/12"
                  >39/40b, TBS Complex, Onikan Lagos</span
                >
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Subscribe Form and Socials -->
      <div
        class="flex flex-col md:flex-row md:justify-between md:items-center space-y-6 md:space-y-0 mb-6"
      >
      <form
          class="xl:flex flex-col items-center md:flex-row space-y-4 md:space-y-0 xl:space-x-4"
          @submit.prevent="handleSubscribe"
        >
          <div>
            <h3 class="xl:text-2xl uppercase text-white text-center md:text-left">
            Subscribe to our Newsletter
          </h3>
          <p v-if="errors.email" class="text-red-500 text-sm">{{ errors.email }}</p>
          </div>
          <div>
            
            <input
            v-model="email"
            type="email"
            placeholder="Enter your email"
            class="px-4 py-2 w-full md:w-[375px] border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0564A4]"
          />
          
          </div>
          <button
            type="submit"
            :disabled="loading"
            class="px-6 py-3 bg-[#0564A4] w-full md:w-auto text-white rounded-md hover:bg-[#001927] disabled:opacity-50"
          >
            <span v-if="loading">Subscribing...</span>
            <span v-else>Subscribe</span>
          </button>
        </form>
        <div class="flex justify-center space-x-6">
          <a
            href="https://www.instagram.com/tamsnigeria/"
            class="text-gray-700 hover:text-blue-500"
          >
            <img src="/public/img/instagram.svg" alt="" />
          </a>
          <a
            href="https://www.facebook.com/TAMSNIGERIA/"
            class="text-gray-700 hover:text-blue-500"
          >
            <img src="/public/img/facebook.svg" alt="" />
          </a>
          <a
            href="https://www.linkedin.com/company/TAMSNIGERIA/"
            class="text-gray-700 hover:text-blue-500"
          >
            <img src="/public/img/linkedin.svg" alt="" />
          </a>
          <!-- <a
            href="https://twitter.com/TAMSNIgeria"
            class="text-gray-700 hover:text-blue-500"
          >
            <img src="/public/img/x.svg" alt="" />
          </a> -->
        </div>
      </div>

      <!-- Divider Line -->
      <hr class="border-[#0564A4] mb-4" />
      <div
        class="container flex flex-col md:flex-row justify-between items-center mx-auto px-4 mt-10 space-y-4 md:space-y-0"
      >
        <!-- Copyright -->
        <div class="inline-flex text-[#F8FAFC] text-center md:text-left">
          <img class="mr-3" src="/public/img/copyright.svg" alt="" />
          Copyright {{ new Date().getFullYear() }}. All rights Reserved.
        </div>
        <div class="inline-flex text-[#F8FAFC] space-x-3">
          <a href="/privacy-policy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms-and-conditions">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { ref } from "vue";
import axios from "axios";
import { ElNotification } from "element-plus";

// State
const email = ref("");
const errors = ref<{ email?: string }>({});
const loading = ref(false);

// Validate the email input
function validateForm() {
  errors.value = {};
  if (!email.value) {
    errors.value.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = "Please enter a valid email address.";
  }
  return Object.keys(errors.value).length === 0;
}

// Handle the subscription form submission
async function handleSubscribe() {
  if (!validateForm()) {
    return;
  }

  loading.value = true;

  try {
    await axios.post("https://api.example.com/subscribe", { email: email.value });
    ElNotification({
      title: "Success",
      message: "You have successfully subscribed to our newsletter.",
      type: "success",
    });
    email.value = ""; // Clear the input field
  } catch (error) {
    ElNotification({
      title: "Error",
      message: `${error.response?.data?.message || "An error occurred while subscribing."}`,
      type: "error",
    });
  } finally {
    loading.value = false;
  }
}
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
