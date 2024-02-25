<template>
  <div class="loading-page">
    <!-- Your loading animation content here -->
    <p>Loading...</p>
  </div>
</template>

<script setup>
 const { $gsap } = useNuxtApp()
 const animateLoading = () => {
   document.body.classList.add('isPageAnimating')
  // Example GSAP animation
  const tl = $gsap.timeline();
  tl.set('.loading-page', { opacity:1, yPercent:100, 
    
  });
  tl.to( '.loading-page',{
    yPercent:0, duration:1, ease: "expo.inOut"
  })
  tl.to('.loading-page', {
    yPercent:-100, duration:1, ease: "expo.inOut",
    onComplete: onAnimationEnd,
  })
};
// Declare Emit with event or object
const emit = defineEmits(["animation-end"])
const onAnimationEnd = () => {
    // Emit event to signal the end of the animation
    emit('animation-end');
    document.body.classList.remove('isPageAnimating')
  };
onMounted(() => {
  // animateLoading();
});

// Clean up animation when component is unmounted
onUnmounted(() => {
  $gsap.killTweensOf('.loading-page');
});
</script>

<style scoped>
/* Example styling for the loading page */
.loading-page {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #FFC107 ; /* Add your desired background color */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: 0;
}
</style>
