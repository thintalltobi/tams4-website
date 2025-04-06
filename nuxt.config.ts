// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  runtimeConfig: {
    public: {
      apiUrl: process.env.NUXT_PUBLIC_API_URL,
    },
  },

  modules: [
    "@nuxt/fonts",
    "@nuxt/icon",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "@element-plus/nuxt",
  ],
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      titleTemplate: '%s - TAMS | Better, Smarter HRM for your organisations',
      meta: [
        {
          name: "description",
          content:
            "TAMS is a comprehensive workforce management solution designed to streamline payroll, attendance, and performance management.",
        },
        {
          name: "keywords",
          content:
            "TAMS, workforce management, payroll, attendance, performance, recruitment, time management",
        },
        {
          property: "og:title",
          content: "TAMS - Transforming Workforce Management",
        },
        {
          property: "og:description",
          content:
            "TAMS is a comprehensive workforce management solution designed to streamline payroll, attendance, and performance management.",
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: "https://www.tams-ng.com",
        },
        {
          property: "og:image",
          content: "https://www.tams-ng.com/img/og-image.jpg",
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: "TAMS - Transforming Workforce Management",
        },
        {
          name: "twitter:description",
          content:
            "TAMS is a comprehensive workforce management solution designed to streamline payroll, attendance, and performance management.",
        },
        {
          name: "twitter:image",
          content: "https://www.tams-ng.com/img/og-image.jpg",
        },
      ],
      link: [
        {
          rel: "canonical",
          href: "https://www.tams-ng.com",
        },
      ],
    },
  },
});