// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    tursoDbUrl: process.env.TURSO_DB_URL,
    tursoAuthToken: process.env.TURSO_AUTH_TOKEN,
  },
  modules: ["nuxt-icon", '@nuxtjs/tailwindcss',
  '@nuxtjs/color-mode'],
  colorMode:{
    classSuffix: ''
  },
  devtools: { enabled: true },
  css: ["~/assets/css/main.scss"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
