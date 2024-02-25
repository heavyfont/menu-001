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
   border: 1px solid #1b1b1b;
   color: #1b1b1b;
   padding-left: 3rem;
   padding-right: 3rem;
   border-radius: 50px;
   display: inline-flex;
   pointer-events:auto;
   text-transform: uppercase;
    span{
      display: block;
    position: relative;

   }
 }


</style>