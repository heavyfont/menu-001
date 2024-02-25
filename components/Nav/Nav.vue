<script setup>


</script>

<template>
  <nav class="menu fixed left-0 top-0 z-10	w-full" >
    <div class="flex justify-between px-4 py-3 items-center">
      <div class="logo z-10"> <NuxtLink to="/" class="md:text-xl uppercase"><span class="sans-serif-bold"> Vicky</span><span class="">witvicky</span></NuxtLink> </div>
      <div class="flex items-center">
        <ul class="md:flex hidden justify-between gap-x-3 px-4 text-orange">
          <li class="link"> <NuxtLink to="/work">Work</NuxtLink></li>
          <li class="link"> <NuxtLink to="/about">About</NuxtLink></li>
          <li class="link"> <NuxtLink to="mailto:vickywitvicky@gmail.com">Contact</NuxtLink></li>
        </ul>
      </div>
      <div class="md:hidden flex"><Hamburger /></div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
 .logo{
  color: #EA451D;
 }
 .menu-open{
   .logo{
    color: #F2EAE2;
   }
 }
</style>