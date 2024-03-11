<script setup lang="ts">
      const {slug} = useRoute().params;


definePageMeta({
  pageTransition: {
    name: 'custom-transition',
    mode: 'out-in',
    onEnter: (el, done) => {
      const { $gsap } = useNuxtApp();
      const tl =  $gsap.timeline();
      tl.fromTo(el,{
        y:40,
        opacity:0,
      },{
        y:0,
        opacity:1,
        duration:1,
        ease: "expo.inOut",
      })
        done()
    },

    onLeave:(el, done)=>{
      const { $gsap } = useNuxtApp();
      const tl =  $gsap.timeline();
      tl.to(el,{
        y:40,
        opacity:0,
        duration:1,
        ease: "expo.inOut",
        onComplete:() => {
          window.scrollTo(0, 0);
          done()
        }
      }) 
    }
  }
})
</script>

<template> 
    <div class="page">
      <section class="md:mb-20 mb-10  lg:mt-0 pt-20 hero-section">
            <article>
                  <ContentDoc v-slot="{ doc }">
                        <article class="flex flex-col items-center justify-center text-center">
                               <div class="content-title title-text"> 
                                    <Intersect :once="true">
                                          <TextSplit class="overflow-hidden">
                                               <h2 class="text-orange ">{{ doc.title }}</h2>
                                          </TextSplit>
                                    </Intersect>
                               </div>
                              <div class="mt-10 flex flex-col gap-5 content-overview items-center">
                                 <span class="text-2xl">
                                    Overview
                                 </span>
                                 <span class="content-overview-paragraph px-4">
                                    <p class="text-xl serif">
                                          {{ doc.desc }}
                                    </p>
                                 </span>
                                 <aside class="flex md:flex-row flex-col justify-center md:gap-7">
                                    <span class="">
                                      <span class="uppercase text-orange text-sm mr-2"> Type</span> <span>{{ doc.type }}</span>
                                    </span>
                                    <span class="">
                                      <span class="uppercase text-orange text-sm mr-2"> Role</span> <span>{{ doc.role }}</span>
                                    </span>
                                    <span class="">
                                      <span class="uppercase text-orange text-sm mr-2"> Date</span> <span>{{ doc.date }}</span>
                                    </span>
                                    <span class=""  v-if="doc.link">
                                      <span class="uppercase text-orange text-sm mr-2 "> Link</span> <span class="underline"> <NuxtLink :to=" doc.link">{{ doc.link }}</NuxtLink></span>
                                    </span>
                                 </aside>
                              </div>
                        </article>
                  </ContentDoc>
            </article>
      </section>
      <section class="content-section container mx-auto">
            <ContentDoc v-slot="{ doc }">
            <article class="px-4 md:py-4 py-2">
                <figure class="relative image-wrapper">
                        <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                              <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.firstimg" />
                        </div>
                </figure>
            </article>
            <div class="grid grid-cols-2 md:gap-x-8 gap-3 px-4">
                  <article class=" md:py-4 py-2">
                        <figure class="relative image-wrapper">
                              <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                                    <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg" :src="doc.secondimg" />
                              </div>
                        </figure>
                  </article>
                  <article class="md:py-4 py-2">
                        <figure class="relative image-wrapper">
                              <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                                    <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.thirdimg" />
                              </div>
                        </figure>
                  </article>
            </div>
            <article class="px-4 md:py-4 py-2">
                <figure class="relative image-wrapper">
                   <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                        <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.fourthimg" />
                   </div>
                </figure>
            </article>
            <article class="px-4 md:py-4 py-2">
                <figure class="relative image-wrapper">
                        <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                              <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.fifthimg" />
                        </div>
                </figure>
            </article>
            <div class="grid grid-cols-2 md:gap-x-8 gap-3 px-4">
                  <article class="md:py-4 py-2" v-if="doc.sixthimg">
                        <figure class="relative image-wrapper">
                              <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                                    <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.sixthimg" />
                              </div>
                        </figure>
                  </article>
                  <article class="md:py-4 py-2" v-if="doc.seventhimg" >
                        <figure class="relative image-wrapper">
                              <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                                    <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.seventhimg" />
                              </div>
                        </figure>
                  </article>
            </div>
            <article class="px-4 md:py-4 py-2" v-if="doc.eigthimg">
                <figure class="relative image-wrapper">
                        <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                              <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.eigthimg" />
                        </div>
                </figure>
            </article>
            <article class="px-4 md:py-4 py-2" v-if="doc.ninthimg">
                <figure class="relative image-wrapper">
                        <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                              <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.ninthimg" />
                        </div>
                </figure>
            </article>
            <article class="px-4 md:py-4 py-2" v-if="doc.tenthimg">
                <figure class="relative image-wrapper">
                        <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                              <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.tenthimg" />
                        </div>
                </figure>
            </article>
            <article class="px-4 md:py-4 py-2" v-if="doc.eleventhimg">
                <figure class="relative image-wrapper">
                        <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                              <NuxtImg class="abosolute top-0 left-0 h-full w-full rounded-lg"  :src="doc.eleventhimg" />
                        </div>
                </figure>
            </article>
          </ContentDoc>
      </section>
      <Footer />
    </div>
</template>
<style lang="scss" scoped>
.content-overview{
     &-paragraph{
            @media (min-width: 768px){
                  width: 35rem;
            } 
     }
}
.image-wrapper{
      height: 50vw
}
</style>