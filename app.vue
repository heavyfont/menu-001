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
      weight: '400',
      fallback: ['serif'],
      variable: 'font_libre',
      preload: true,
    },
    {
      src: '/fonts/OverusedGrotesk-Bold.woff2',
      family: 'Over Bold',
      weight: '100 900',
      fallback: ['sans-serif'],
      preload: true, 
    },
    {
      src: '/fonts/OverusedGrotesk-Medium.woff2',
      family: 'Over Med',
      weight: '100 900',
      fallback: ['sans-serif'],
      preload: true, 
    },
  ])
  
// Function to load fonts using the FontFace API
async function loadFonts() {
  const fontPromises = [
    new FontFace('Libre Med', 'url(/fonts/LibreCaslonCondensed-Medium.woff2)', { weight: '600' }).load(),
    new FontFace('Libre', 'url(/fonts/LibreCaslonCondensed-Regular.woff2)', { weight: '400' }).load(),
    new FontFace('Over Bold', 'url(/fonts/OverusedGrotesk-Bold.woff2)', { weight: '800' }).load(),
    new FontFace('Over Med', 'url(/fonts/OverusedGrotesk-Medium.woff2)', { weight: '600' }).load(),
    // Add other font configurations
  ];

  try {
    await Promise.all(fontPromises);
  } catch (error) {
    console.error('Error loading fonts:', error);
  }
}

  onMounted(async () => {
      await loadFonts(); // Wait for fonts to be loaded
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
