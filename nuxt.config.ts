export default defineNuxtConfig({
  ssr: false, 
  
  routeRules: {
    '/**': { prerender: true }
  },
 future: {
    compatibilityVersion: 4,
  },
  
  runtimeConfig: {
    emailHost: process.env.EMAIL_HOST,
    emailPort: process.env.EMAIL_PORT,
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailUserTo: process.env.EMAIL_USER_TO
   },
  
  modules: [
    '@nuxt/ui',
    '@nuxtjs/google-fonts',
    '@nuxt/image'
  ],

  css: [
    '~/assets/css/main.css'
  ],

  googleFonts: {
    families: {
      Raleway: [400, 700, 900]
    }
  }
})