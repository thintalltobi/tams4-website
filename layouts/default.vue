<template>
  <div>
    <HeaderComponent />
    <main>
      <slot />
    </main>
    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
import HeaderComponent from '@/components/layouts/Header.vue';
import FooterComponent from '@/components/layouts/Footer.vue';
</script>

<style scoped>
</style>