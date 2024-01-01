// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: [
          '@nuxtjs/prismic',
          '@vueuse/nuxt',
          '@nuxtjs/tailwindcss',
          '@nuxt/image-edge',
          'nuxt-swiper',
          '@hypernym/nuxt-gsap',
          '@hypernym/nuxt-font',
          "nuxt-split-type",
          "@nuxt/image"
     ],
     
     css: [
          '~/assets/styles/main.scss',
          '~/assets/css/fonts.css'
     ],
     nitro: {
          prerender: {
            routes: ['/', '/about'],
          },
        },
     gsap: {
          extraPlugins: {
            scrollTrigger: true,
            draggable: true,
            flip: true,
            observer:true,
          }
     },
     font: {
          autoImport: true,
     },
     experimental: {
          viewTransition: true
        },
     tailwindcss: {
          cssPath: '~/assets/css/tailwind.css',
          configPath: 'tailwind.config.js',
          exposeConfig: false,
          injectPosition: 0,
          viewer: true,
     },
     
     build: {
          transpile: ['swiper']
     }
})