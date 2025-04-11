<template>
  <div class="bg-white p-10">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Job Applications</h2>
    <div
      v-if="candidates.length === 0"
      class="text-gray-500 flex justify-center items-center flex-col text-center py-40"
    >
      <img class="w-16 h-16 mb-4" src="/public/img/empty.svg" alt="" />
      <p>Job post will appear here</p>
    </div>
    <table v-else class="w-full border-collapse border border-gray-300">
      <thead>
        <tr class="bg-gray-100">
          <th class="border border-gray-300 px-4 py-2">ID</th>
          <th class="border border-gray-300 px-4 py-2">NAME</th>
          <th class="border border-gray-300 px-4 py-2">ROLE</th>
          <th class="border border-gray-300 px-4 py-2">Job Type</th>
          <th class="border border-gray-300 px-4 py-2">Work Mode</th>
          <th class="border border-gray-300 px-4 py-2">Application Date</th>
          <th class="border border-gray-300 px-4 py-2">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="candidate in candidates" :key="candidate.id">
          <td class="border border-gray-300 px-4 py-2">{{ candidate.id }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ candidate.name }}</td>
          <td class="border border-gray-300 px-4 py-2">{{ candidate.role }}</td>
          <td class="border border-gray-300 px-4 py-2">
            {{ candidate.jobType }}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {{ candidate.workMode }}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            {{ candidate.applicationDate }}
          </td>
          <td class="border border-gray-300 px-4 py-2">
            <button class="text-blue-500 hover:underline">View Details</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
const candidates = [
  {
    id: 1,
    name: "John Doe",
    role: "Frontend Developer",
    jobType: "Fulltime",
    workMode: "Hybrid",
    applicationDate: "2023-09-01",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "Backend Developer",
    jobType: "Part-time",
    workMode: "Remote",
    applicationDate: "2023-09-02",
  },
];
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
