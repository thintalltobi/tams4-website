<template>
  <div class="bg-[#E8E8E8]">
    <HeaderComponent />
    <main>
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from "@/components/layouts/AdminHeader.vue";
</script>

<style scoped></style>
