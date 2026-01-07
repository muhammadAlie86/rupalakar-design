import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './node_modules/@nuxt/ui/dist/**/*.{js,vue}'
  ],
  theme: {
    extend: {
      colors: {
         brand: {
          orange: '#D34010',
          background: '#F9EBEA'
        }
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif']
      }
    }
  }
}

export default config
