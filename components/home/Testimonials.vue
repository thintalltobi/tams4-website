<template>
  <section class="bg-[#F1F5FF] py-20">
    <div class="container mx-auto px-4">
      <!-- Title and Subtitle -->
      <h2 class="text-3xl md:text-4xl font-bold text-center mb-4">
        What Our Clients Say
      </h2>
      <p class="text-lg text-center text-gray-600 mb-20">
        Hear from our satisfied clients about their experience with TAMS.
      </p>

      <!-- Testimonial Cards -->
      <div class="relative overflow-hidden">
        <div
          class="flex transition-transform duration-500"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="w-full md:w-1/3 px-4 flex-shrink-0"
          >
            <div class="bg-[#3395CD] text-white rounded-xl p-7">
              <p class="italic text-xl mb-10">"{{ testimonial.quote }}"</p>
              <div class="flex items-center space-x-5">
                
                <div>
                  <h3 class="text-xl font-semibold">{{ testimonial.name }}</h3>
                  <p class="">{{ testimonial.role }}</p>
                </div>
              </div>
              <div
                class="mt-6 cursor-pointer font-semibold inline-flex items-center gap-3"
              >
              <a href="https://signup.tams.com.ng/signup" target="_blank"> Get Started </a>
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.84613 11.6534L8.7923 10.5688L12.6116 6.7495H0.5V5.24955H12.6116L8.7923 1.4303L9.84613 0.345703L15.5 5.99953L9.84613 11.6534Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <div class="flex justify-center mt-8 space-x-4">
        <!-- Previous Button -->
        <div
          :class="[
            'w-12 h-12 flex items-center justify-center border rounded-full cursor-pointer',
            currentIndex === 0
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : 'border-blue-500 text-blue-500 hover:bg-blue-100',
          ]"
          @click="prev"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </div>

        <!-- Next Button -->
        <div
          :class="[
            'w-12 h-12 flex items-center justify-center border rounded-full cursor-pointer',
            currentIndex >= maxIndex
              ? 'border-gray-300 text-gray-300 cursor-not-allowed'
              : 'border-blue-500 text-blue-500 hover:bg-blue-100',
          ]"
          @click="next"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

// Testimonial data
const testimonials = [
  {
    name: "Adebiyi Idowu",
    role: "VON Automobile",
    quote:
      "The kind of operation we run at Von Automobile is about productivity, with TAMS we have been able to increase productivity by 30%, because staff are conscious of their time.",
    image: "/img/user-1.png",
  },
  {
    name: "Ijewere",
    role: "Ijewere & Co",
    quote:
      "You have no idea how much you have helped me and how much time you have saved me with your Time Attendance and Access Control Solution.",
    image: "/img/user-1.png",
  },
  {
    name: "Oluwole Oderinde",
    role: "IT Specialist, MRS Oil Nigeria Plc ",
    quote:
      "We told them our problems and we worked out a solution. Their strongest point is being able to design their own software that works for you. TAMS has been able to help us capture attendance of our staff, which in turn improves productivity.",
    image: "/img/user-1.png",
  },
  {
    name: "Rachael Ademola",
    role: "HR Manager, Leadway",
    quote:
      "Tracking shifts and attendance has become seamless. Our payroll is always accurate!",
    image: "/img/user-1.png",
  },
  {
    name: "Bola Akande",
    role: "GIG Logistics",
    quote:
      "From onboarding to performance reviews, TAMS makes every step simpler and more effective.",
    image: "/img/user-1.png",
  },
  
];

// State for the current index
const currentIndex = ref(0);

// Number of cards to show at a time
const cardsPerView = 3;

// Maximum index for navigation
const maxIndex = computed(
  () => Math.ceil(testimonials.length / cardsPerView) - 1
);

// Navigation functions
function next() {
  if (currentIndex.value < maxIndex.value) {
    currentIndex.value++;
  }
}

function prev() {
  if (currentIndex.value > 0) {
    currentIndex.value--;
  }
}
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
