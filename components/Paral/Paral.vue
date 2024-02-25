<template>
  <div ref="parallax" class="parallax">
    <div ref="parallaxContent" class="parallax-content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup>

const { $ScrollTrigger } = useNuxtApp()
const { $gsap } = useNuxtApp()

// Refs
const parallax = ref(null);
const parallaxContent = ref(null);

// Function to initialize the parallax effect
const initParallax = () => {
  if (!parallax.value || !parallaxContent.value) return;

  // Define the tween for the parallax effect
  $gsap.to(parallaxContent.value, {
    y: '-50%',
    ease: 'none',
    scrollTrigger: {
      trigger: parallax.value,
      start: 'top top',
      end: 'bottom bottom',
      scrub: true
    }
  });
};
onMounted(() => {
  // Initialize parallax effect
  initParallax();
});
</script>

<style scoped>
.parallax {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100vh;
}

.parallax-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto; /* Adjust this according to your content */
}
</style>
