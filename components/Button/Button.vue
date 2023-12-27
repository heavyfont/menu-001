<script setup>
  const props = defineProps(['to']);
</script>
<template>
   <nuxt-link :to="to" class="btn-main relative overflow-hidden">
    <slot />
  </nuxt-link>   
</template>
<style lang="scss">
 .btn-main{
  font-family: 'Over Med', sans-serif;
   font-size: 24px;
   background-color: #FAFF00;
   color: #1b1b1b;
   padding-left: 0.2rem;
   padding-right: 0.2rem;
   border-radius: 3px;
   display: inline-flex;
   pointer-events:auto;
   text-transform: uppercase;
    span{
      display: block;
    position: relative;
    z-index: 10;
   }
 }


</style>