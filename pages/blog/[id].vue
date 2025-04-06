<template>
  <section>
    <!-- Hero Section -->
    <div class="container mx-auto relative h-[650px] mt-10">
      <img
        :src="singleBlogs?.image || '/img/blog-hero.jpg'"
        alt="Blog Image"
        class="w-full h-full object-cover md:rounded-[24px]"
      />
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black bg-opacity-60 md:rounded-[24px] flex flex-col justify-center items-center text-white"
      >
        <h1 class="text-3xl md:text-6xl font-bold text-center mb-4 w-4/5">
          {{ singleBlogs?.title }}
        </h1>
      </div>
      <!-- Author and Meta Info -->
      <div class="absolute bottom-4 left-4 p-4 rounded-lg space-y-4 shadow-md">
        <p class="text-white font-semibold flex items-center">
          <img class="mr-4" :src="singleBlogs?.author_image" alt="" />
          {{ singleBlogs?.author }}
        </p>
        <p class="text-white font-semibold flex items-center">
          <img class="mr-4" src="/public/img/clock.svg" alt="" />
          {{ singleBlogs?.date }}
        </p>
        <p class="text-white font-semibold flex items-center">
          <img class="mr-4" src="/public/img/clock.svg" alt="" />
          {{ singleBlogs?.read_time }}
        </p>
      </div>
    </div>

    <!-- Main Content -->
    <div
      class="container mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-4 gap-8"
    >
      <div class="md:col-span-4 space-y-16">
        <div
          class="blog-content text-gray-700 leading-relaxed"
          v-html="singleBlogs?.content"
        />
        <div v-if="!singleBlogs" class="text-center text-gray-500">
          <p>No blog content available.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useHead } from "nuxt/app";
import { onMounted, ref, watch } from "vue";

const singleBlogs = ref(null);

onMounted(() => {
  const response = localStorage.getItem("selectedBlog");
  singleBlogs.value = response ? JSON.parse(response) : null;
});

watch(
  singleBlogs,
  (newVal: { title: string; description: string; image: string }) => {
    if (newVal) {
      useHead({
        title: newVal.title || "Blog Detail",
        meta: [
          {
            name: "description",
            content: newVal.description || "Blog detail page",
          },
          { property: "og:title", content: newVal.title || "Blog Detail" },
          {
            property: "og:description",
            content: newVal.description || "Blog detail page",
          },
          {
            property: "og:image",
            content: newVal.image || "/img/blog-hero.jpg",
          },
        ],
      });
    }
  },
  { immediate: true }
);
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
