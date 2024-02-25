<script lang="ts" setup>
  const nuxtApp = useNuxtApp();
  const { $gsap } = useNuxtApp()
  const locale = useState<string>('locale.setting')
  const router = useRouter();
  const isLoading = ref(true);

    // nuxtApp.hook("page:start", () => {
    //   isLoading.value = true;
    // });
    // nuxtApp.hook("page:finish", () => {
    //   isLoading.value = false;
    // });

  useHead({
    title: 'Vickywitvicky',
    meta: [
    { name: 'description', content: 'Vickywitvicky portfolio' }
  ],
  })

  useFont([
    {
      src: '/fonts/LibreCaslonCondensed-Medium.woff2',
      family: 'Libre Med',
      weight: '600',
      variable: 'font_libre_med',
      display: 'swap',
      preload: true, 
    },
    {
      src: '/fonts/LibreCaslonCondensed-Regular.woff2',
      family: 'Libre',
      weight: '300',
      variable: 'font_libre',
      display: 'swap',
      preload: true,
    },
    {
      src: '/fonts/OverusedGrotesk-Bold.woff2',
      family: 'Over Bold',
      weight: '100 900',
      display: 'swap',
      preload: true, 
    },
    {
      src: '/fonts/OverusedGrotesk-Medium.woff2',
      family: 'Over Med',
      weight: '100 900',
      display: 'swap',
      preload: true, 
    },
  ])

  onMounted(() => {
    const fontLoad = document.fonts.ready.then(() => {
            const fontsLoadedEvent = new CustomEvent(CUSTOM_EVENTS.FONTS_LOADED)
            window.dispatchEvent(fontsLoadedEvent)
    })

    Promise.all([fontLoad]).then(() => {
         isLoading.value = true
    })

  });
  
  const handleLoadingComplete = () => {
      isLoading.value = false
      console.log('Loading complete event received in app.vue');
  }

// Scroll to top when route changes

</script>
<template>
  <Html lang="en"> 
      <main class="app">
        <Preloader @loadingComplete="handleLoadingComplete"  />
        <NuxtLayout ref="main" v-if="!isLoading"  >
           <NuxtPage  />
        </NuxtLayout>
      </main>
  </Html>
</template>

<style lang="scss" scoped>
.app {
  min-height: 100vh;
  margin: 0 auto;
  padding: 0.5rem;
}
.main-wrapper{
  display: none;
}
</style>
