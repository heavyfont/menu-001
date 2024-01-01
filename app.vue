<script lang="ts" setup>
const isLoading = ref(true);
const { $gsap } = useNuxtApp()
  const locale = useState<string>('locale.setting')
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
  const nuxtApp = useNuxtApp();
  const loading = ref(false);
  nuxtApp.hook("page:start", () => {
    loading.value = true;
  });
  nuxtApp.hook("page:finish", () => {
    loading.value = false;
  });
  onMounted(() => {
    const fontLoad = document.fonts.ready.then(() => {
            const fontsLoadedEvent = new CustomEvent(CUSTOM_EVENTS.FONTS_LOADED)
            window.dispatchEvent(fontsLoadedEvent)
    })

    Promise.all([fontLoad]).then(() => {
         isLoading.value = true
    })
  });
</script>
<template>
  <Html lang="en"> 
    <div
      v-if="loading"
      class="fixed left-0 top-0 h-0.5 w-full z-50 bg-green-500"
    ></div>
      <main class="app">
        <Preloader v-if="isLoading" />
        <NuxtLayout>
          <NuxtPage />
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

</style>