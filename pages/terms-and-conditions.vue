<template>
    <section class="bg-gray-50 py-16">
      <div class="container mx-auto px-4">
        <!-- Title -->
        <h1 class="text-4xl font-bold text-center mb-8">
          Terms and Conditions
        </h1>
  
        <!-- Content -->
        <div class="bg-white p-5 md:p-6 rounded-lg space-y-6">
          <p>
            Welcome to TAMS, a time and attendance management system designed to streamline workforce operations. By accessing or using our platform, you agree to comply with and be bound by the following terms and conditions. Please read them carefully before using our services.
          </p>
  
          <h2 class="text-2xl font-semibold">1. Use of the Platform</h2>
          <p>
            TAMS grants you a non-exclusive, non-transferable, and revocable license to access and use our platform for managing employee attendance, schedules, and related workforce operations. You agree to use the platform only for lawful purposes and in compliance with all applicable laws and regulations. Unauthorized use of the platform, including but not limited to hacking, data scraping, or reverse engineering, is strictly prohibited.
          </p>
  
          <h2 class="text-2xl font-semibold">2. User Responsibilities</h2>
          <p>
            As a user of TAMS, you are responsible for maintaining the confidentiality of your account credentials and ensuring that all information provided during registration is accurate and up-to-date. You agree not to share your login details with unauthorized individuals or entities. Any activity conducted under your account will be deemed your responsibility, and TAMS will not be liable for any unauthorized access or misuse of your account.
          </p>
  
          <h2 class="text-2xl font-semibold">3. Data Privacy</h2>
          <p>
            TAMS is committed to protecting your privacy and safeguarding your data. By using our platform, you consent to the collection, storage, and processing of your data as outlined in our <a href="/privacy-policy" class="text-[#0564A4] hover:underline">Privacy Policy</a>. You retain ownership of your data, and TAMS will not share your information with third parties without your explicit consent, except as required by law or to provide our services.
          </p>
  
          <h2 class="text-2xl font-semibold">4. Limitation of Liability</h2>
          <p>
            TAMS is provided on an "as-is" and "as-available" basis. While we strive to ensure the reliability and accuracy of our platform, we do not guarantee that it will be error-free or uninterrupted. To the fullest extent permitted by law, TAMS disclaims all warranties, express or implied, and will not be liable for any direct, indirect, incidental, or consequential damages arising from your use of the platform.
          </p>
  
          <h2 class="text-2xl font-semibold">5. Termination</h2>
          <p>
            TAMS reserves the right to suspend or terminate your access to the platform at any time, with or without notice, if you violate these terms and conditions or engage in any activity that may harm the platform or its users. Upon termination, your right to use the platform will cease immediately, and any data associated with your account may be deleted in accordance with our data retention policies.
          </p>
  
          <p>
            By using TAMS, you acknowledge that you have read, understood, and agreed to these terms and conditions. We reserve the right to update or modify these terms at any time, and any changes will be communicated to you through our platform or via email. Continued use of TAMS after such changes constitutes your acceptance of the updated terms.
          </p>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  useHead({
    title: 'Terms and Conditions',
    meta: [
      {
        name: 'description',
        content: 'Terms and Conditions for TAMS, a workforce management solution.',
      },
    ],
  });
  </script>
  
  <style scoped>
  /* Tailwind CSS handles most of the styling */
  </style>