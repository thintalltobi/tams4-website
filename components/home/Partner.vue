<template>
  <div class="mt-[100px]">
    <h2 class="text-4xl text-center text-black md:text-4xl font-bold mb-8">
      Our Trusted Clients & Partners
    </h2>
    <div
      class="py-10 overflow-hidden"
      style="
        background: linear-gradient(
          270deg,
          #3395cd 0%,
          #16214d 48.36%,
          #16214d 98.44%
        );
      "
    >
      <div class="container mx-auto px-4">
        <!-- Scroll Wrapper -->
        <div class="relative">
          <div
            class="flex space-x-20 animate-scroll w-max items-center"
          >
            <!-- Duplicated logos for seamless looping -->
            <template v-for="i in 2" :key="i">
              <img
                v-for="(logo, index) in logos"
                :key="index + '-' + i"
                :src="logo.src"
                :alt="logo.alt"
                class="w-[135px] h-[49px] object-contain"
              />
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const logos = [
  { src: "/img/lufthansa.svg", alt: "Partner 1" },
  { src: "/img/firs.svg", alt: "Partner 2" },
  { src: "/img/dangote.svg", alt: "Partner 3" },
  { src: "/img/radisson.svg", alt: "Partner 4" },
  { src: "/img/glo.svg", alt: "Partner 5" },
  { src: "/img/fidson.png", alt: "Partner 6" },
  { src: "/img/gig.png", alt: "Partner 7" },
  { src: "/img/leadway.png", alt: "Partner 8" },
  { src: "/img/lftz.png", alt: "Partner 9" },
  { src: "/img/phd.png", alt: "Partner 10" },
  { src: "/img/premier-lotto.png", alt: "Partner 11" },
  { src: "/img/tsl.png", alt: "Partner 12" },
];
</script>


<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-scroll {
  animation: scroll 30s linear infinite;
}
</style>
