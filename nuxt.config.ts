// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/image', '@nuxt/icon'],
  image: {
    quality: 82,
    format: ['webp'],
    providers: {
      none: {
        provider: 'none'
      }
    },
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536
    }
  },
  icon: {
    mode: 'svg'
  },
  css: ['~/assets/css/tokens.css']
})
