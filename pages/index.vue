<template>
  <div>
    <HomeHeroSection />
    <HomePartner />
    <HomeWhyCompanyChooseUs />
    <HomeOurNumbers />
    <HomePowerfulFeatures />
    <HomeFaq />
    <HomeTestimonials />
    <HomeCtaSection />
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Home",
  meta: [
    {
      name: "description",
      content:
        "TAMS is a time and attendance management system that helps businesses manage their workforce efficiently.",
    },
  ],
});
</script>

<style scoped></style>
