<template>
    <section id="features" class="py-20">
      <div class="container mx-auto">
        <h2 class="text-4xl text-center text-black md:text-4xl font-bold mb-8">
          Powerful Features to Simplify Your Workflow
        </h2>
        <div class="grid gap-8">
          <!-- First row with three items -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(feature, index) in firstRowFeatures" :key="index" class="flex flex-col h-full">
              <div class="flex flex-col h-full bg-[#0564A4] rounded-[20px]">
                <div class="">
                  <img :src="feature.image" :alt="feature.title" class="h-full w-full object-contain"/>
                </div>
                <div :class="`${feature.border}`" class="text-white py-8 px-6 flex-1">
                  <h3 class="text-lg font-bold">{{ feature.title }}</h3>
                  <p class="text-sm mt-3">{{ feature.description }}</p>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Second row with two items -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div v-for="(feature, index) in secondRowFeatures" :key="index" class="flex flex-col h-full">
              <div class="flex flex-col h-full bg-[#0564A4] rounded-[20px]">
                <div class="">
                  <img :src="feature.image" :alt="feature.title" class="h-full w-full object-contain"/>
                </div>
                <div :class="`${feature.border}`" class="text-white py-8 px-6 flex-1">
                  <h3 class="text-lg font-bold">{{ feature.title }}</h3>
                  <p class="text-sm mt-3">{{ feature.description }}</p>
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
      title: "Performance Analytics",
      description: "Flexible Working Options: Adapt schedules to accommodate hybrid or remote working.",
      image: "/img/overall-performance.png",
    },
    {
      title: "Shift Schedule",
      description: "Dynamic Scheduling: Create and manage complex shift patterns. Flexible Working Options: Adapt schedules to accommodate hybrid or remote working.",
      image: "/img/shift-schedule.png",
    },
    {
      title: "Employee Self- Service",
      description: "Leave & Exemption Requests: Employees can apply for leave and track approval status. Paylips & Reports: Access pay summaries and performance reviews directly from the app",
      image: "/img/self-service.png",
    },
    {
      title: "Payroll Management",
      description: "Automated Salary Calculations: Effortlessly calculate salaries, deductions, and bonuses. Compliance Tools: Generate tax and pension remittance schedules with accuracy. Flexible Payment Options: Enable integration with payment platform for seamless transactions.",
      image: "/img/payrol.png",
    },
    {
      title: "Task Management",
      description: "Workflow Simplification: Assign tasks, set deadlines, and monitor progress in real time. Team Collaboration: Foster seamless communication and updates among team members. Priority Indicators: Tag tasks by priority to ensure timely execution.",
      image: "/img/task-management.png",
    },
  ];
  
  const firstRowFeatures = features.slice(0, 3);
  const secondRowFeatures = features.slice(3, 5);
  </script>
  