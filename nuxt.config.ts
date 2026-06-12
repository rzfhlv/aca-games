import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: ['@nuxt/image'],

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Fredoka:wght@300..700&display=swap' },
      ],
    },
  },

  nitro: {
    output: {
      publicDir: 'dist',
    },
    prerender: {
      routes: ['/learning/letters', '/learning/numbers', '/learning/animals', '/learning/objects'],
    },
  },

  compatibilityDate: '2025-07-15',
})
