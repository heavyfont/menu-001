<script setup>


</script>

<template>
  <nav class="menu fixed z-10	w-full" >
    <div class="flex justify-between py-3 px-4 items-center">
      <div class="logo "> <NuxtLink to="/"  class="md:text-2xl"><span class="sans-serif-bold uppercase"> Vicky</span><span class="serif-medium">witvicky</span></NuxtLink> </div>
      <div>
        <ul class="flex justify-between gap-x-3 px-4">
          <li class="link"> <NuxtLink to="/about">About</NuxtLink></li>
          <li class="link"> <NuxtLink to="mailto:vickywitvicky@gmail.com">Contact</NuxtLink></li>
        </ul>
      </div>
      <!-- <div><Hamburger /></div> -->
    </div>
  </nav>
</template>

<style lang="scss" scoped>
 .logo{
  color: #FAFF00;
 }
</style>