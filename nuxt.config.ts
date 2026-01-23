export default defineNuxtConfig({
  app: {
    head: {
      script: [
        {
          innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-NCV65X7W');`,
          type: 'text/javascript'
        } as any
      ],
      noscript: [
        {
          innerHTML: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NCV65X7W"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          body: true
        } as any
      ]
    }
  },
   
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