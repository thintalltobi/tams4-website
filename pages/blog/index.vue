<template>
  <section class="bg-gray-50 py-16">
    <div class="container mx-auto px-4">
      <!-- Title and Search -->
      <div class="flex justify-center items-center mb-12">
        <div class="flex justify-center flex-col items-center">
          <div class="text-center">
            <h1 class="text-4xl font-bold mb-2">The Tams Blog</h1>
            <p class="text-xl mb-6 text-gray-600">
              Updates, announcements and news from Tams team
            </p>
          </div>
          <!-- <input
            type="text"
            placeholder="Search Here..."
            class="px-4 py-4 lg:w-[675px] w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0564A4]"
          /> -->
        </div>
      </div>

      <!-- Recent Section -->
      <div class="grid grid-cols-1 md:grid-cols-6 gap-8 mb-16 items-stretch">
        <!-- Left Section -->
        <div class="col-span-3 h-full">
          <div
            class="bg-white h-full border border-[#E1E1E1] rounded-[24px] overflow-hidden p-3 cursor-pointer"
            @click="navigateToBlog(blogMain[0])"
          >
            <!-- Image Section -->
            <div class="h-[80%]">
              <img
                :src="blogMain[0].image"
                :alt="blogMain[0].title"
                class="object-cover w-full h-full rounded-[12px]"
              />
            </div>

            <!-- Content Section -->
            <div class="my-4 h-auto">
              <p class="text-sm text-gray-500 mb-2">
                {{ blogMain[0].date }}
              </p>
              <h3 class="text-xl font-bold mb-2">
                {{ blogMain[0].title }}
              </h3>
              <p class="text-gray-600">{{ blogMain[0].subtitle }}</p>
            </div>
          </div>
        </div>
        <!-- Right Section -->
        <div class="col-span-3 space-y-4 flex flex-col">
          <BlogCard
            v-for="(blog, index) in RecentBlog"
            :key="index"
            :blog="blog"
            layout="horizontal"
            class="flex-1 cursor-pointer"
            @click="navigateToBlog(blog)"
          />
        </div>
      </div>

      <!-- All Blog Posts -->
      <div>
        <h2 class="text-2xl font-bold mb-6">All Blog Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard
            v-for="(blog, index) in allblogData"
            :key="index"
            :blog="blog"
            class="cursor-pointer"
            @click="navigateToBlog(blog)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import BlogCard from "../../components/blogs/Cards.vue";
import allblogData from "@/contents/blog.json";
import blogMain from "@/contents/main.json";
import RecentBlog from "@/contents/recent.json";


const router = useRouter();

function navigateToBlog(blog: { id: number }) {
  localStorage.setItem("selectedBlog", JSON.stringify(blog));
  router.push(`/blog/${blog.id}`);
}

useHead({
  title: "Blogs",
  meta: [
    {
      name: "description",
      content:
        "Stay updated with the latest news and insights from TAMS. Explore our blog for tips, trends, and best practices in workforce management.",
    },
  ],
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
