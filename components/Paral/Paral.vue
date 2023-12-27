<template>
<div ref="trigger" class="parallax-section">
    <div ref="target" class="parallax-content">
      <slot></slot>
    </div>
  </div>
  </template>
  
  <script setup>
        const { $ScrollTrigger } = useNuxtApp()
        const { $gsap } = useNuxtApp()
        const trigger = ref(null)
        const target = ref(null)
        const position = 'top' // replace with your position value
        const props = defineProps({
            speed: {
            type: Number,
            default: 0.5
            }
        })
  
  onMounted(() => {

  const windowWidth = window.innerWidth
  const y = windowWidth * props.speed * 0.1

  const setY = $gsap.quickSetter(target.value, 'y', 'px')
  const set3D = $gsap.quickSetter(target.value, 'force3D', 'auto')
  $gsap.timeline({
    scrollTrigger: {
      trigger: trigger.value,
      scrub: true,
      start: 'top bottom',
      end: 'bottom top',
      invalidateOnRefresh: true,
      onUpdate: (e) => {
        if (position === 'top') {
          setY(e.progress * y)
        } else {
          setY(-mapRange(0, 1, e.progress, -y, y))
        }

        set3D(e.progress > 0 && e.progress < 1)
      },
    },
  })
  })
  </script>
  
  <style scoped>
  .parallax-section {
    position: relative;
   
  }
  
  .parallax-content {
    width: 100%;
    height: 100%;
  }
  </style>
  