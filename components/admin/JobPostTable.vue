<template>
  <div class="bg-white p-10">
    <h2 class="text-xl font-bold text-gray-800 mb-4">Job Post</h2>

    <!-- Empty State -->
    <div
      v-if="jobs.length === 0"
      class="text-gray-500 flex justify-center items-center flex-col text-center py-40"
    >
      <img class="w-16 h-16 mb-4" src="/public/img/empty.svg" alt="No Data" />
      <p>Job post will appear here</p>
    </div>

    <!-- Table -->
    <el-table
      v-else
      :data="jobs"
      style="width: 100%"
    >
      <!-- ID Column -->
      <el-table-column
        prop="id"
        label="ID"
        width="80"
        align="center"
      />

      <!-- Role Column -->
      <el-table-column
        prop="role"
        label="ROLE"
        align="center"
      />

      <!-- Job Type Column -->
      <el-table-column
        prop="jobType"
        label="Job Type"
        align="center"
      />

      <!-- Work Mode Column -->
      <el-table-column
        prop="workMode"
        label="Work Mode"
        align="center"
      />

      <!-- Applicant No Column -->
      <el-table-column
        prop="applicantNo"
        label="Applicant No"
        align="center"
      />

      <!-- Application Date Column -->
      <el-table-column
        prop="applicationDate"
        label="Application Date"
        align="center"
      />

      <!-- Action Column -->
      <el-table-column
        label="Action"
        align="center"
        width="120"
      >
        <template #default="scope">
          <el-dropdown @command="handleAction(scope.row)">
            <el-button
              type="text"
            >
            <icon name="iconamoon:menu-kebab-vertical-bold"  :size="20" />
          </el-button>
            
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item command="view">View Details</el-dropdown-item>
                <el-dropdown-item command="edit">Edit</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { ElMessage } from "element-plus";

// Job data
const jobs = ref([
  {
    id: 1,
    role: "Frontend Developer",
    jobType: "Fulltime",
    workMode: "Hybrid",
    applicantNo: 10,
    applicationDate: "2023-09-01",
  },
  {
    id: 2,
    role: "Backend Developer",
    jobType: "Part-time",
    workMode: "Remote",
    applicantNo: 5,
    applicationDate: "2023-09-02",
  },
]);

// Handle dropdown actions
function handleAction(row: {role: string}) {
  ElMessage({
    message: `Action triggered for ${row.role}`,
    type: "info",
  });
}
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>