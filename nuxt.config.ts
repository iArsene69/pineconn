// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    tursoDbUrl: process.env.TURSO_DB_URL,
    tursoAuthToken: process.env.TURSO_AUTH_TOKEN,
    jwtAccessSecret: process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret: process.env.JWT_REFRESH_TOKEN_SECRET,
    cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    cloudinaryApiKey: process.env.CLOUDINARY_API_KEY,
    cloudinaryApiSecret: process.env.CLOUDINARY_API_SECRET
  },
  modules: ["nuxt-icon", '@nuxtjs/tailwindcss',
  '@nuxtjs/color-mode'],
  colorMode:{
    classSuffix: ''
  },
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css"],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config',
    config: {},
    viewer: true,
  },
  // postcss: {
  //   plugins: {
  //     tailwindcss: {

  //     },
  //     autoprefixer: {},
  //   },
  // },
});
