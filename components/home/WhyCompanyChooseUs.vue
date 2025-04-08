<template>
  <section class="bg-[#3395CD1A] py-20">
    <div class="container mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex flex-col h-full"
        >
          <div v-if="index === 0" class="p-8 rounded-lg text-[#004A74] flex-1">
            <h3 class="text-3xl font-semibold mb-4">{{ feature.title }}</h3>
            <p class="text-xl">{{ feature.description }}</p>
          </div>
          <div v-else class="relative group transition-all duration-300">
            <!-- Shadow layer (the stack behind) -->
            <div
              :class="feature.bgColor"
              class="absolute top-0 left-0 w-full h-full rounded-[12px] z-0 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-300"
            />

            <!-- Foreground card -->
            <div
              class="relative z-10 flex flex-col h-full transition-all duration-300 group-hover:-translate-y-8 group-hover:translate-x-8"
            >
              <div
                :class="feature.bgColor"
                class="flex text-[22px] items-center gap-3 p-5 rounded-t-[12px]"
              >
                <div class="bg-white rounded-lg py-3 px-4">
                  <img
                    :src="feature.image"
                    :alt="feature.title"
                    class="h-full object-contain"
                  />
                </div>
                <h3 class="text-white font-semibold">{{ feature.title }}</h3>
              </div>
              <div
                :class="`${feature.border}`"
                class="border rounded-b-[12px] text-black py-8 px-6 flex-1 bg-white"
              >
                <p class="text-xl">{{ feature.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    title: "Why Companies Choose Us",
    description:
      "Discover the reason thousands of companies have trusted us to help them simplify their business process iover the years ",
    bgColor: "bg-black",
    image: "/img/seamless.svg",
    border: "border-black",
  },
  {
    title: "Seamless Integration",
    description:
      "Assign clear responsibilities, set deadlines, and track progress to ensure every team member knows their role and stays on target, giving you a live overview of your spending.",
    image: "/img/seamless.svg",
    bgColor: "bg-black",
    border: "border-black",
  },
  {
    title: "Employee Engagement",
    description:
      "Happy employees do their best work. Tams helps you keep them motivated. With easy communication, feedback, and recognition, you can create a workplace where everyone feels valued and connected.",
    image: "/img/employee.svg",
    bgColor: "bg-orange-500",
    border: "border-orange-500",
  },
  {
    title: "30% Productivity Increase",
    description:
      "With Tams, you can automate repetitive HR tasks and streamline workflows, giving your team more time to focus on meaningful work. Less admin, fewer delays—just a smoother, more efficient way to get things done.",
    image: "/img/productivity.svg",
    bgColor: "bg-green-600",
    border: "border-green-600",
  },
  {
    title: "Device Management",
    description:
      "Hardware Integration lets you pair biometric devices with TAMS for accurate attendance tracking. Remote Monitoring keeps track of device status and connectivity, while Data Synchronization automatically syncs records to the cloud.",
    image: "/img/devices.svg",
    bgColor: "bg-purple-600",
    border: "border-purple-600",
  },
  {
    title: "Time Tracking",
    description:
      "Our Time Tracking feature makes it easy to track employee hours, attendance, and shifts in real-time. It ensures accurate timekeeping, streamlines payroll, and gives you valuable insights into workforce productivity—all with minimal effort and no manual errors.",
    image: "/img/time.svg",
    bgColor: "bg-blue-600",
    border: "border-blue-600",
  },
];
</script>

<style scoped>
.shadow-md {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
</style>
