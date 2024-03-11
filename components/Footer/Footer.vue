<script setup lang="ts">
</script>
<template>
    <footer class="footer pt-20">
        <div class="footer-wrapper">
          <span class="uppercase text-orange text-sm flex items-center gap-2 justify-center mb-4">
                    <span><SvgStar /></span><span>Contact</span>
                  </span>
          <div>
            <h2 class="text-orange title-text">
                <Intersect :once="true">
                  <TextSplit class="flex flex-col items-center">
                      <span class="uppercase overflow-hidden">LET’S Work </span>
                      <span class="uppercase overflow-hidden">Together</span>
                  </TextSplit>
                </Intersect>
            </h2>
   
              <div class="card w-full p-4 ">
                  <div class="email-card rounded-lg pt-4 mx-auto hover:rotate-0 transition duration-700 hover:duration-700 ease-in-out md:-rotate-6 lg:w-96 md:w-80 bg-dark-yellow">
                    <NuxtLink class="flex flex-col justify-between h-full" to="mailto:vickywitvicky@gmail.com">
                    <span class="uppercase sans-serif-bold lg:text-7xl text-4xl title px-5">Start from here</span>
                      <div class="flex flex-col gap-y-10 ">
                        <span class="description serif lg:text-4xl text-xl px-5"> I'm excited about the possibility of working together.</span>
                        <div class="bg-dark-orange p-2 overflow-hidden ">
                         
                              <Marquee >
                                <span class="text-3xl text-white uppercase px-2">vickywitvicky@gmail.com</span>
                              </Marquee>
                          
                        </div>
                      </div>
                    </NuxtLink>
                  </div>
              </div>
         
          <div class="flex md:flex-row flex-col items-center justify-between py-5 px-4 ">
            <span class=" md:order-2 order-1 ">©2024 vickywitvicky</span>
            <span class="md:mb-0 mb-4">
                <span class="uppercase text-orange text-sm">
                    Let’s connect
                </span>
                <ul class="flex gap-x-5 md:order-1 order-2 text-lg serif social-link ">
                <li class="link"><NuxtLink to="https://www.linkedin.com/in/vikneswaran-gnanasegran-33201574" target="_blank">LinkedIn</NuxtLink> </li>
                <li class="link"><NuxtLink to="https://www.instagram.com/witvickyvicky/" target="_blank">Instagram</NuxtLink></li>
                <li class="link"><NuxtLink to="https://www.behance.net/vickywitvibc6a" target="_blank">Behance</NuxtLink></li>
              </ul>
            </span>
             
          </div>
        </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>

.email-card{

  height: 300px;
  @media screen and (min-width: 768px){
    height: 450px;
  }
  .title{
    line-height: 0.8;
  }
}

.social-link{

}
</style>