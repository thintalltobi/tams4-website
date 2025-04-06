<template>
  <section class="flex">
    <div
      class="bg-white w-full container mx-auto my-10 rounded-[24px] p-5 lg:p-[60px]"
    >
      <h2 class="text-4xl font-bold mb-10 text-center">
        Login to your account
      </h2>
      <div class="flex">
        <!-- Left Section -->
        <div
          class="hidden md:flex flex-col rounded-[24px] bg-[#0564A4] text-white w-1/2 p-14"
        >
          <h1 class="text-3xl font-bold mb-4">
            See How Tams Can Transform your Business
          </h1>
          <p class="mb-8">
            Try our HR software for free and see how it can make your job
            easier. Sign up in seconds and explore tools that help you hire,
            manage payroll, and support your team—all in one place.
          </p>
          <img
            src="/public/img/tams-dashboard.png"
            alt="Login Illustration"
            class="w-full"
          />
        </div>

        <!-- Right Section -->
        <div
          class="flex flex-col items-center w-full md:w-1/2 md:p-8"
        >
          <form class="w-full max-w-xl space-y-8" @submit.prevent="handleSubmit">
            <!-- Company Details -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Company Details</h3>

              <!-- Company URL -->
              <div class="mt-6 mb-4">
                <label
                  for="companyUrl"
                  class="block text-sm font-medium text-gray-700"
                  >Company URL</label
                >
                <div class="flex">
                  <input
                    id="companyUrl"
                    v-model="form.companyUrl"
                    type="text"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-l-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your company URL"
                  />
                  <span
                    class="inline-flex items-center px-4 bg-gray-100 border border-gray-300 rounded-r-md text-gray-500"
                  >
                    .tams.com.ng
                  </span>
                </div>
                <p v-if="errors.companyUrl" class="text-red-500 text-sm">
                  {{ errors.companyUrl }}
                </p>
              </div>

              <!-- Username -->
              <div class="mb-4">
                <label
                  for="username"
                  class="block text-sm font-medium text-gray-700"
                  >Username</label
                >
                <input
                  id="username"
                  v-model="form.username"
                  type="text"
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your username"
                />
                <p v-if="errors.username" class="text-red-500 text-sm">
                  {{ errors.username }}
                </p>
              </div>

              <!-- Password -->
              <div class="mb-4">
                <label
                  for="password"
                  class="block text-sm font-medium text-gray-700"
                  >Password</label
                >
                <input
                  id="password"
                  v-model="form.password"
                  type="password"
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your password"
                />
                <p v-if="errors.password" class="text-red-500 text-sm">
                  {{ errors.password }}
                </p>
              </div>
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
                Login
              </el-button>
            </div>

            <!-- Signup Link -->
            <p class="text-center text-sm text-gray-600">
              Don't have an account?
              <a href="/auth/signup" class="text-[#0564A4] hover:underline"
                >Create an account</a
              >
            </p>
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
  companyUrl: "",
  username: "",
  password: "",
});

const errors = ref<{
  companyUrl?: string;
  username?: string;
  password?: string;
}>({});
const loading = ref(false);

function validateForm() {
  errors.value = {};
  if (!form.value.companyUrl) errors.value.companyUrl = "Company URL is required.";
  if (!form.value.username) errors.value.username = "Username is required.";
  if (!form.value.password) errors.value.password = "Password is required.";
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
    await axios.post("https://api.example.com/login", form.value);
    ElNotification({
      title: "Success",
      message: "You have successfully logged in.",
      type: "success",
    });
    // Redirect to dashboard or another page
    window.location.href = "/admin";
  } catch (error) {
    ElNotification({
      title: "Error",
      message: `${error || "An error occurred while logging in."}`,
      type: "error",
    });
  } finally {
    loading.value = false;
  }
}

useHead({
  title: "Login - TAMS",
  meta: [
    {
      name: "description",
      content: "Login to your TAMS account to manage your workforce efficiently.",
    },
  ],
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>