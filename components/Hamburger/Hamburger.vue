<script setup>

    const { $gsap } = useNuxtApp()
 
    const menuOpen = ref(false);
    const menuItems = ref(null);
    const { $lenis } = useNuxtApp()

    const toggleMenu = (event) => {
      event.preventDefault();
      menuOpen.value = !menuOpen.value;
      animateMenu();
    };

    const animateMenu = () => {
      const tl =  $gsap.timeline();
      if (menuOpen.value) {
        document.body.classList.add('menu-open');
        tl.to(menuItems.value, { clipPath:"inset(0 0 0% 0)", duration: 0.5, transform: "translate(0px, 0px)", stagger: 0.1,  display:"block",
        onComplete:()=>{
          $lenis.stop()
        }
      });
      } else {
        tl.to(menuItems.value, { clipPath:"inset(0 0 100% 0)", transform: "translate(0px, 0px)",  duration: 0.5, stagger: -0.1,
         onComplete : () =>{
          $gsap.set(menuItems.value, {
              display:"none"
          })
          document.body.classList.remove('menu-open');
          $lenis.start()
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
    <button class="toggle-menu" @click="toggleMenu">{{ menuOpen ? 'Close' : 'Menu' }}</button>
     <div ref="menuItems" class="menu-items ">
        <ul class="flex flex-col justify-center items-center h-full  uppercase ">
            <li >
               <NuxtLink to="/work" @click="toggleMenu" >
                 <span class="lg:text-9xl text-6xl sans-serif-bold">Work</span>  
               </NuxtLink>
            </li>
            <li>
               <NuxtLink to="/about"  @click="toggleMenu">
                <span class="lg:text-9xl text-6xl sans-serif-bold">About</span>
               </NuxtLink>
            </li>
            <li>
              <NuxtLink to="mailto:vickywitvicky@gmail.com" @click="toggleMenu">
                <span class="lg:text-9xl text-6xl sans-serif-bold">Contact</span>
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

.menu-open {
  /* Your open menu styles */
}
.menu-items{
  position: fixed;
  background-color: #EA451D;
  width: 100%;
  height: 100%;
  top: 0;
  left:0;
  clip-path: inset(0 0 100% 0);
  will-change: clip-path;
  display: none;
}
.menu-items{
  ul li{
    color: #F2EAE2;
  }
}
.menu-open{
  .toggle-menu {
  color:#F2EAE2;
}
}
</style>