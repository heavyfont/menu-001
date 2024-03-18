<script setup>

const { $gsap } = useNuxtApp()
const menuOpen = ref(false);
const menuItems = ref(null);
const { $lenis } = useNuxtApp()
const menuButton = ref(null); // Reference to the menu button element

const toggleMenu = () => {
  // Toggle on off
  menuOpen.value = !menuOpen.value;
  // Animation function
  animateMenu();
};


// Animation function
const animateMenu = () => {
  const menuItem = document.querySelectorAll('.menu-item')
  const tl =  $gsap.timeline();
  
  // Disable menu button during animation
  menuButton.value.disabled = true;

  // Menu gsap animation
  if (menuOpen.value) {
    document.body.classList.add('menu-open');
    tl.set(menuItem,{y:50, opacity:0 })
    tl.to(menuItems.value, { clipPath:"inset(0 0 0% 0)", duration: 0.5, stagger: 0.1,  display:"block",
    ease: "expo.inOut",
      onComplete:()=>{
        // Stop Lenis when open menu
        $lenis.stop()
        // Enable menu button on animation completion
        menuButton.value.disabled = false; 
      }
    });
    tl.to(menuItem,{
      duration:.5,
       y:0,
       opacity:1,
       stagger:0.1,
       ease: "expo.inOut"
    },+0.1)
  } else {
    tl.to(menuItems.value, { clipPath:"inset(0 0 100% 0)",  duration: 0.3, stagger: -0.1,
     onComplete : () =>{
      $gsap.set(menuItems.value, {
          display:"none"
      })
      document.body.classList.remove('menu-open');
      // Start Lenis after closing menu
      $lenis.start()
      // Enable menu button on animation completion
      menuButton.value.disabled = false; 
     }
    });
  }
};

onMounted(() => {
// Initially set the opacity to 0 for the entire menu
  $gsap.set(menuItems.value, { clipPath:"inset(0 0 100% 0)", display:"none" });
});
</script>

<template>
  <div class="mobile-menu">
    <button ref="menuButton" class="toggle-menu" @click="toggleMenu">{{ menuOpen ? 'Close' : 'Menu' }}</button>
     <div ref="menuItems" class="menu-items">
        <ul class="flex md:flex-row md:justify-between flex-col justify-center md:items-end items-center h-full px-4 py-5  uppercase ">
            <li class="menu-item ">
               <NuxtLink to="/" @click="toggleMenu" >
                 <span class="lg:text-8xl text-6xl sans-serif-bold"> About</span>  
               </NuxtLink>
            </li>
            <li class="menu-item">
               <NuxtLink to="/" @click="toggleMenu" >
                 <span class="lg:text-8xl text-6xl sans-serif-bold ">Work</span>  
               </NuxtLink>
            </li>
            <li class="menu-item ">
               <NuxtLink to="/"  @click="toggleMenu" >
                 <span class="lg:text-8xl text-6xl sans-serif-bold ">Service</span>  
               </NuxtLink>
            </li>
        </ul>
     </div>
  </div>
</template>

<style scoped>
/* Add your CSS styles here */

.mobile-menu {
  /* Your menu styles */
  .toggle-menu{
    z-index: 88;
    position: relative;
  }
}

.menu-items{
    position: fixed;
    background-color: #c9bb3f;
    width: 100%;
    height: 25rem;
    top: 0;
    left:0;
    clip-path: inset(0 0 100% 0);
    will-change: clip-path;
    display: none;
}

</style>
