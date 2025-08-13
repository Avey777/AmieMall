// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  ssr: false,
  nitro: {
    preset: "static",
  },

  components: [{ path: "~/app/components", prefix: "App" }],
  modules: [
    // "@nuxt/content", //自定义，内容管理配置
    "@nuxt/eslint",
    "@nuxt/image",
    "@nuxt/scripts",
    "@nuxt/test-utils",
    "@nuxt/ui",
    "@pinia/nuxt",
    "@nuxtjs/tailwindcss",
  ],
  fonts: {
    providers: {
      google: false,
      googleicons: false,
    },
  },
});
