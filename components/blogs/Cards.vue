<template>
  <div
    :class="[
      'bg-white border border-[#E1E1E1] rounded-[24px] overflow-hidden',
      layout === 'horizontal' ? 'md:flex md:items-center md:p-4 p-3' : 'p-3',
    ]"
  >
    <!-- Image Section -->
    <div>
      <img
        :src="blog.image"
        :alt="blog.title"
        :class="[
          'object-cover',
          layout === 'horizontal'
            ? 'md:rounded-[12px] md:w-[340px] md:h-[233px] md:object-cover w-full h-[295px] rounded-[12px]'
            : 'w-full h-[295px] rounded-[12px]',
        ]"
      />
    </div>

    <!-- Content Section -->
    <div
      :class="[
        layout === 'horizontal'
          ? 'md:ml-6 md:flex-1 mt-4 md:mt-0'
          : 'my-4 h-auto',
      ]"
    >
      <p class="text-sm text-gray-500 mb-2">{{ blog.date }}</p>
      <h3 class="text-xl font-bold mb-2">{{ blog.title }}</h3>
      <p class="text-gray-600">{{ blog.subtitle }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  blog: {
    type: Object,
    default: () => ({
      image: null,
      date: "No Date",
      title: "No Title",
      subtitle: "No Subtitle",
    }),
  },
  layout: {
    type: String,
    default: "vertical",
    validator: (value: string) => ["vertical", "horizontal"].includes(value),
  },
});
</script>

<style scoped>
/* Tailwind CSS handles most of the styling */
</style>
