export default defineNuxtConfig({
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