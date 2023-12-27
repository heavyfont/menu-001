<script lang="ts" setup>
const isLoading = ref(true);
const { $gsap } = useNuxtApp()
  const locale = useState<string>('locale.setting')
  useHead({

  })
  useFont([
    {
      src: '/fonts/LibreCaslonCondensed-Medium.woff2',
      family: 'Libre Med',
      weight: '600',
      fallback: ['serif'],
      variable: 'font_libre_med',
      preload: true, 
    },
    {
      src: '/fonts/LibreCaslonCondensed-Regular.woff2',
      family: 'Libre',
      weight: '300',
      fallback: ['serif'],
      variable: 'font_libre',
      preload: true,
    },
    {
      src: '/fonts/OverusedGrotesk-Bold.woff2',
      family: 'Over Bold',
      weight: '100 900',
      fallback: ['sans-serif'],
      variable: 'font_over_bold',
      preload: true, 
    },
    {
      src: '/fonts/OverusedGrotesk-Medium.woff2',
      family: 'Over Med',
      weight: '100 900',
      fallback: ['sans-serif'],
      variable: 'font_over_med',
      preload: true, 
    },
  ])
  


  onMounted(() => {
  // nuxtApp.hook("page:start", () => {
  //   isLoading.value = true;
  // });

  // nuxtApp.hook("page:finish", () => {
  //   isLoading.value = false;
  // });
  });
</script>
<template>
  <Html lang="en"> 
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