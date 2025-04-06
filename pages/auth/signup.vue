<template>
  <section class="flex">
    <div class="bg-white w-full container mx-auto my-10 rounded-[24px] p-5 lg:p-[60px]">
      <h2 class="text-4xl font-bold mb-10 text-center">Create an Account</h2>
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
            alt="Signup Illustration"
            class="w-full"
          />
        </div>

        <!-- Right Section -->
        <div
          class="flex flex-col justify-center items-center w-full md:w-1/2 md:p-8"
        >
          <form class="w-full max-w-xl space-y-8" @submit.prevent="handleSubmit">
            <!-- Company Details -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Company Details</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your company name"
                  />
                  <p v-if="errors.companyName" class="text-red-500 text-sm">
                    {{ errors.companyName }}
                  </p>
                </div>

                <!-- Phone Number -->
                <div>
                  <label
                    for="companyPhone"
                    class="block text-sm font-medium text-gray-700"
                    >Phone Number</label
                  >
                  <input
                    id="companyPhone"
                    v-model="form.companyPhone"
                    type="tel"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your phone number"
                  />
                  <p v-if="errors.companyPhone" class="text-red-500 text-sm">
                    {{ errors.companyPhone }}
                  </p>
                </div>
              </div>

              <!-- Company URL -->
              <div class="mt-6">
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

              <!-- Industry -->
              <div class="mt-6">
                <label
                  for="industry"
                  class="block text-sm font-medium text-gray-700"
                  >Industry</label
                >
                <select
                  id="industry"
                  v-model="form.industry"
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
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
            </div>

            <!-- Administrator Details -->
            <div>
              <h3 class="text-lg font-semibold mb-4">Administrator Details</h3>
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <!-- First Name -->
                <div>
                  <label
                    for="firstName"
                    class="block text-sm font-medium text-gray-700"
                    >First Name</label
                  >
                  <input
                    id="firstName"
                    v-model="form.firstName"
                    type="text"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your first name"
                  />
                  <p v-if="errors.firstName" class="text-red-500 text-sm">
                    {{ errors.firstName }}
                  </p>
                </div>

                <!-- Last Name -->
                <div>
                  <label
                    for="lastName"
                    class="block text-sm font-medium text-gray-700"
                    >Last Name</label
                  >
                  <input
                    id="lastName"
                    v-model="form.lastName"
                    type="text"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your last name"
                  />
                  <p v-if="errors.lastName" class="text-red-500 text-sm">
                    {{ errors.lastName }}
                  </p>
                </div>
              </div>

              <!-- Email -->
              <div class="mt-6">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Email</label
                >
                <input
                  id="email"
                  v-model="form.email"
                  type="email"
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email"
                />
                <p v-if="errors.email" class="text-red-500 text-sm">
                  {{ errors.email }}
                </p>
              </div>

              <!-- Phone Number -->
              <div class="mt-6">
                <label
                  for="adminPhone"
                  class="block text-sm font-medium text-gray-700"
                  >Phone Number</label
                >
                <input
                  id="adminPhone"
                  v-model="form.adminPhone"
                  type="tel"
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
                <p v-if="errors.adminPhone" class="text-red-500 text-sm">
                  {{ errors.adminPhone }}
                </p>
              </div>

              <!-- Username and Role -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
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
                <div>
                  <label
                    for="role"
                    class="block text-sm font-medium text-gray-700"
                    >Role</label
                  >
                  <select
                    id="role"
                    v-model="form.role"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  >
                    <option value="" disabled>Select a role</option>
                    <option value="admin">Admin</option>
                    <option value="manager">Manager</option>
                    <option value="employee">Employee</option>
                  </select>
                  <p v-if="errors.role" class="text-red-500 text-sm">
                    {{ errors.role }}
                  </p>
                </div>
              </div>

              <!-- Password and Confirm Password -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
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
                <div>
                  <label
                    for="confirmPassword"
                    class="block text-sm font-medium text-gray-700"
                    >Confirm Password</label
                  >
                  <input
                    id="confirmPassword"
                    v-model="form.confirmPassword"
                    type="password"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Confirm your password"
                  />
                  <p v-if="errors.confirmPassword" class="text-red-500 text-sm">
                    {{ errors.confirmPassword }}
                  </p>
                </div>
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
                Create Account
              </el-button>
            </div>

            <!-- Login Link -->
            <p class="text-center text-sm text-gray-600">
              Already have an account?
              <a href="/auth/login" class="text-[#0564A4] hover:underline"
                >Login</a
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
  companyName: "",
  companyPhone: "",
  companyUrl: "",
  industry: "",
  firstName: "",
  lastName: "",
  email: "",
  adminPhone: "",
  username: "",
  role: "",
  password: "",
  confirmPassword: "",
});

const errors = ref<{
  companyName?: string;
  companyPhone?: string;
  companyUrl?: string;
  industry?: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  adminPhone?: string;
  username?: string;
  role?: string;
  password?: string;
  confirmPassword?: string;
}>({});
const loading = ref(false);

function validateForm() {
  errors.value = {};
  if (!form.value.companyName) errors.value.companyName = "Company name is required.";
  if (!form.value.companyPhone) errors.value.companyPhone = "Company phone is required.";
  if (!form.value.companyUrl) errors.value.companyUrl = "Company URL is required.";
  if (!form.value.industry) errors.value.industry = "Industry is required.";
  if (!form.value.firstName) errors.value.firstName = "First name is required.";
  if (!form.value.lastName) errors.value.lastName = "Last name is required.";
  if (!form.value.email) errors.value.email = "Email is required.";
  if (!form.value.adminPhone) errors.value.adminPhone = "Admin phone is required.";
  if (!form.value.username) errors.value.username = "Username is required.";
  if (!form.value.role) errors.value.role = "Role is required.";
  if (!form.value.password) errors.value.password = "Password is required.";
  if (form.value.password !== form.value.confirmPassword) {
    errors.value.confirmPassword = "Passwords do not match.";
  }
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
    await axios.post("https://api.example.com/signup", form.value);
    ElNotification({
      title: "Success",
      message: "Your account has been created successfully.",
      type: "success",
    });
    form.value = {
      companyName: "",
      companyPhone: "",
      companyUrl: "",
      industry: "",
      firstName: "",
      lastName: "",
      email: "",
      adminPhone: "",
      username: "",
      role: "",
      password: "",
      confirmPassword: "",
    };
  } catch (error) {
    ElNotification({
      title: "Error",
      message: `${error || "An error occurred while creating your account."}`,
      type: "error",
    });
  } finally {
    loading.value = false;
  }
}

useHead({
  title: "Signup",
  meta: [
    {
      name: "description",
      content: "Create an account on TAMS to streamline your workforce management.",
    },
  ],
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>