// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@pinia-plugin-persistedstate/nuxt',  
  ],
  css: [
    '@/assets/css/main.css'
  ]
})