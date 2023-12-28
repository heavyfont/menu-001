<script lang="ts" setup>
const isLoading = ref(true);
const { $gsap } = useNuxtApp()
  const locale = useState<string>('locale.setting')
  useHead({

  })


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