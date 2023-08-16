// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1.0, viewport-fit=cover",
      title: "Format54",
      meta: [
        // <meta name="description" content="My amazing site">
        { name: "description", content: "Format54" },
      ],
    },
  },
  css: [
    // SCSS file in the project
    "~/assets/css/main.scss", // you should add main.scss somewhere in your app
  ],
  nitro: {
    // preset: "netlify",
  },
  runtimeConfig: {
    private: {
      CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
      CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
      CONTENTFUL_ENVIRONMENT: process.env.CONTENTFUL_ENVIRONMENT,
    },
    public: {
      STRAPI_URL: process.env.STRAPI_URL || "http://127.0.0.1:1337",
    }
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@vueuse/nuxt",
    "@nuxt/image",
    "@nuxtjs/strapi",
    "nuxt-swiper",
  ],
  swiper: {
    modules: ["navigation", "pagination", "autoplay"],
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    injectPosition: 0,
    viewer: true,
  },
  strapi: {
    url: process.env.STRAPI_URL || "http://127.0.0.1:1337",
    prefix: "/api",
    version: "v4",
    cookie: {},
    cookieName: "strapi_jwt",
  },
  image: {
    quality: 80,
    format: ["webp"],
    strapi: {
      baseURL: process.env.STRAPI_URL || "http://127.0.0.1:1337",
    },
  },
  pinia: {
    autoImports: ["defineStore", "acceptHMRUpdate"],
  },
  imports: {
    dirs: ["stores"],
  },
  build: {
    transpile: ["gsap", "VueMarkdown"],
  },
});
