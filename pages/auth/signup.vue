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
              <div class="mt-6">
                <!-- Company Name -->
                <div>
                  <label
                    for="companyName"
                    class="block text-sm font-medium text-gray-700"
                    >Company Name</label
                  >
                  <input
                    id="companyName"
                    v-model="form.company_name"
                    type="text"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your company name"
                  />
                  <p v-if="errors.company_name" class="text-red-500 text-sm">
                    {{ errors.company_name }}
                  </p>
                </div>

             
              </div>

               <div class="mt-6">
                <!-- Company Address -->
                <div>
                  <label
                    for="companyAddress"
                    class="block text-sm font-medium text-gray-700"
                    >Company Address</label
                  >
                  <input
                    id="companyAddress"
                    v-model="form.company_address"
                    type="text"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your company address"
                  />
                  <p v-if="errors.company_address" class="text-red-500 text-sm">
                    {{ errors.company_address }}
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
                    v-model="form.desired_url"
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
                <p v-if="errors.desired_url" class="text-red-500 text-sm">
                  {{ errors.desired_url }}
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
                  v-model="form.industry_id"
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="" disabled>Select your industry</option>
                  <option v-for="industry in industries" :key="industry.id" :value="industry.id">
                    {{ industry.industry_type }}
                  </option>
                </select>
                <p v-if="errors.industry_id" class="text-red-500 text-sm">
                  {{ errors.industry_id }}
                </p>
              </div>
            </div>

              <!-- Referral Code -->
              <div class="mt-6">
                <label
                  for="email"
                  class="block text-sm font-medium text-gray-700"
                  >Referral Code</label
                >
                <input
                  id="referral_code"
                  v-model="form.referral_code"
                  type="text"
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Referral Code (Optional)"
                />
                <!-- <p v-if="errors.referral_code" class="text-red-500 text-sm">
                  {{ errors.referral_code }}
                </p> -->
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
                    v-model="form.first_name"
                    type="text"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your first name"
                  />
                  <p v-if="errors.first_name" class="text-red-500 text-sm">
                    {{ errors.first_name }}
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
                    v-model="form.last_name"
                    type="text"
                    class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your last name"
                  />
                  <p v-if="errors.last_name" class="text-red-500 text-sm">
                    {{ errors.last_name }}
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
                  v-model="form.phone_no"
                  type="tel"
                  class="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your phone number"
                />
                <p v-if="errors.phone_no" class="text-red-500 text-sm">
                  {{ errors.phone_no }}
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
                    v-model="confirm.confirmPassword"
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
import { useRuntimeConfig } from "nuxt/app";

const config = useRuntimeConfig();
const form = ref({
  company_name: "",
  desired_url: "",
  industry_id: 1,
  first_name: "",
  last_name: "",
  email: "",
  phone_no: "",
  username: "",
  password: "",
  accept_terms_conditions: true,
  company_address: '',
  referral_code: ''
});

const confirm = ref({
  confirmPassword: ""
})

const errors = ref<{
  company_name?: string;
  company_address?: string;
  desired_url?: string;
  industry_id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  phone_no?: string;
  username?: string;
  password?: string;
  confirmPassword?: string;
}>({});
const loading = ref(false);

function validateForm() {
  errors.value = {};
  if (!form.value.company_name) errors.value.company_name = "Company name is required.";
  if (!form.value.desired_url) errors.value.desired_url = "Company URL is required.";
  if (!form.value.industry_id) errors.value.industry_id = "Industry is required.";
  if (!form.value.first_name) errors.value.first_name = "First name is required.";
  if (!form.value.last_name) errors.value.last_name = "Last name is required.";
  if (!form.value.email) errors.value.email = "Email is required.";
  if (!form.value.phone_no) errors.value.phone_no = "Admin phone is required.";
  if (!form.value.username) errors.value.username = "Username is required.";
  if (!form.value.password) errors.value.password = "Password is required.";
  if (form.value.password !== confirm.value.confirmPassword) {
    errors.value.confirmPassword = "Passwords do not match.";
  }
  return Object.keys(errors.value).length === 0;
}

const industries = ref<{
  id: number;
  industry_type: string;
}[]>([]);

async function fetchIndustries() {
  try {
    const response = await axios.get(`${config.public.apiUrl}/industries`);
    console.log(response.data.data);
    
    industries.value = response.data.data; 
  } catch (error) {
    ElNotification({
      title: "Error",
      message: "Failed to load industries. Please try again later.",
      type: "error",
    });
    console.error("Error fetching industries:", error);
  }
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
    await axios.post(`${config.public.apiUrl}/auth/signup`, form.value);
    ElNotification({
      title: "Success",
      message: "Your account has been created successfully, kindly check your email for the activation link",
      type: "success",
    });
    form.value = {
      company_name: "",
      phone_no: "",
      desired_url: "",
      industry_id: 1,
      first_name: "",
      last_name: "",
      email: "",
      username: "",
      password: "",
      accept_terms_conditions: true,
      company_address: "",
      referral_code: ""
    };

    confirm.value = {
      confirmPassword: ""
    }
  } catch (error: any) {    
    ElNotification({
      title: "Error",
      message: `${error.response.data.message || "An error occurred while creating your account."}`,
      type: "error",
    });
  } finally {
    loading.value = false;
  }
}

onMounted(() => {
  fetchIndustries();
});

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