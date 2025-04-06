<template>
  <div class="bg-white">
    <header
      class="mx-auto max-w-screen-2xl flex items-center justify-between px-5 py-3"
    >
      <!-- Logo -->
      <div class="flex items-center">
        <nuxt-link to="/">
          <img src="/img/logo-blue.svg" alt="Logo" class="h-20 w-20" />
        </nuxt-link>
      </div>

      <!-- Right Section -->
      <div class="flex items-center border px-5 py-3 rounded-xl space-x-10">
        <!-- Notification Bell -->
        <el-badge :value="0" class="cursor-pointer">
          <icon name="uil:bell"  :size="30" />
        </el-badge>

        <!-- Profile Dropdown -->
        <el-dropdown @command="handleCommand">
          <span class="el-dropdown-link flex items-center cursor-pointer">
            <img
              src="/img/user-avatar.png"
              alt="User Avatar"
              class="h-10 w-10 rounded-full border border-gray-300 mr-2"
            />
            <span class="text-gray-700 mr-4 font-medium">Adedeji Rojaye</span>
            <icon name="uil:angle-down"  :size="30" />
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="logout">Logout</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </header>
  </div>
</template>

<script setup lang="ts">
import { ElMessage } from "element-plus";
import "element-plus/es/components/icon/style/css"; // Ensure icons are imported

// Handle dropdown commands
function handleCommand(command: string) {
  if (command === "logout") {
    ElMessage({
      message: "You have been logged out.",
      type: "info",
    });
    // Add your logout logic here (e.g., redirect to login page)
  }
}
</script>

<style scoped>
/* No additional styles needed since Tailwind CSS and Element Plus handle styling */
</style>
