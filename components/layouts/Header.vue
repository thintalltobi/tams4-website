<template>
  <div class="bg-white">
    <header
      class="mx-auto max-w-screen-2xl flex items-center justify-between px-5 py-3"
    >
      <!-- Logo -->
      <div class="flex items-center justify-between">
        <nuxt-link to="/"
          ><img
            src="/img/logo-blue.svg"
            alt="Logo"
            class="h-14 w-14 md:h-20 md:w-20"
        /></nuxt-link>
      </div>

      <!-- Navigation Links (Desktop) -->
      <nav class="hidden md:flex items-center space-x-14">
        <a
          href="/jobs"
          :class="[
            'text-gray-700 hover:font-semibold',
            isActive('/jobs') ? 'font-bold text-blue-500' : '',
          ]"
        >
          Jobs
        </a>
        <a
          href="/blog"
          :class="[
            'text-gray-700 hover:font-semibold',
            isActive('/blog') ? 'font-bold text-blue-500' : '',
          ]"
        >
          Blog
        </a>
        <a
          href="/faqs"
          :class="[
            'text-gray-700 hover:font-semibold',
            isActive('/faqs') ? 'font-bold text-blue-500' : '',
          ]"
        >
          FAQs
        </a>
        <a
          href="/pricing"
          :class="[
            'text-gray-700 hover:font-semibold',
            isActive('/pricing') ? 'font-bold text-blue-500' : '',
          ]"
        >
          Pricing
        </a>
        <a
          href="/contact"
          :class="[
            'text-gray-700 hover:font-semibold',
            isActive('/contact') ? 'font-bold text-blue-500' : '',
          ]"
        >
          Contact Us
        </a>
      </nav>

      <button
        class="px-6 py-3 bg-[#0564A4] hover:bg-[#001927] hidden md:flex text-white rounded-md"
      >
      <a href="https://signup.tams.com.ng/signup" target="_blank"> Get Started </a>
      </button>

      <!-- Hamburger Menu (Mobile) -->
      <div class="md:hidden flex items-center">
        <button class="focus:outline-none" @click="toggleMobileMenu">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Menu -->
      <div
        v-if="isMobileMenuOpen"
        class="absolute top-16 z-50 py-10 left-0 w-full bg-white shadow-md flex flex-col items-center space-y-5 md:hidden"
      >
        <a
          href="/jobs"
          :class="[
            'text-gray-700 hover:text-blue-500',
            isActive('/jobs') ? 'font-bold text-blue-500' : '',
          ]"
        >
          Jobs
        </a>
        <a
          href="/blog"
          :class="[
            'text-gray-700 hover:text-blue-500',
            isActive('/blog') ? 'font-bold text-blue-500' : '',
          ]"
        >
          Blog
        </a>
        <a
          href="/faqs"
          :class="[
            'text-gray-700 hover:text-blue-500',
            isActive('/faqs') ? 'font-bold text-blue-500' : '',
          ]"
        >
          FAQs
        </a>
        <a
          href="/pricing"
          :class="[
            'text-gray-700 hover:text-blue-500',
            isActive('/pricing') ? 'font-bold text-blue-500' : '',
          ]"
        >
          Pricing
        </a>
        <a
          href="/contact"
          :class="[
            'text-gray-700 hover:text-blue-500',
            isActive('/contact') ? 'font-bold text-blue-500' : '',
          ]"
        >
          Contact Us
        </a>
        <button
          class="px-4 py-2 bg-[#0564A4] hover:bg-[#001927] text-white rounded-md"
        >
        <a href="https://signup.tams.com.ng/signup" target="_blank"> Get Started </a>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRoute } from "vue-router";

const isMobileMenuOpen = ref(false);

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
}

// Use Vue Router's `useRoute` to get the current route
const route = useRoute();

function isActive(path: string) {
  return route.path === path;
}
</script>

<style scoped>
/* No additional styles needed since Tailwind CSS handles styling */
</style>
