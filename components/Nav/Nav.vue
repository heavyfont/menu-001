<script setup>

</script>

<template>
  <nav class="menu fixed left-0 top-0 z-10	w-full" >
    <div class="flex justify-between px-4 py-3 items-center menu-wrapper">
      <div class="logo z-10"> <NuxtLink to="/"  class="md:text-xl uppercase"><span class="sans-serif-bold">Half Menu</span></NuxtLink> </div>
      <div class=""><Hamburger /></div>
      <div class="flex items-center">
        <ul class="z-10">
          <li > <NuxtLink to="/">Contact</NuxtLink></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style lang="scss" scoped>
 .logo{
  color: #131313;
 }
 .menu-wrapper{
  z-index: 999;
  position: relative;
 }
.menu{
  &::after{
    backdrop-filter: blur(12px);
    background: rgba(0, 0, 0, .8);
    bottom: 0;
    content: "";
    left: 0;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    right: 0;
    top: 0;
    height: 100vh;
    transition: opacity .5s cubic-bezier(.3,.86,.36,.95);
    z-index: 30;
  }
}
.menu-open{
  .menu{
  &::after{
    content: "";
    opacity: 1;

  }
}
}
</style>