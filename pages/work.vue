<script setup>

    useHead({
        title: 'Work - Vickywitvicky ',
        meta: [
            { name: 'description', content: 'About Vickywitvicky portfolio' }
        ],
    })
  // Define the page transition
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
        <section>
            <div class="px-4">
                <div class="md:mb-20 mb-10 lg:mt-0 pt-20">
                    <h2 class="text-orange title-text">
                        <Intersect :once="true">
                            <TextSplit class="flex flex-col overflow-hidden">
                              <span class="uppercase ">My Work</span>
                            </TextSplit>
                        </Intersect>
                    </h2>
            </div>
            </div>
        </section>
        <section>
            <div class="section-container mx-auto">
                <ContentList path="/work" v-slot="{list}"  >
                        <div class="md:grid grid-cols-2 gap-10">
                            <article v-for="(work, index) in list" :key="work._path" class="mb-10 md:grid grid-cols-12 work-item" >
                                <NuxtLink :to="`/work/${work.slug}`" class="overflow-hidden col-span-6 col-start-4">
                                    <figure class=" relative w-full overflow-hidden  rounded-lg ">
                                            <div class="work-item-img relative bg-dark-yellow rounded-lg overflow-hidden">
                                            <NuxtImg class="rounded-lg absolute top-0 left-0 h-full w-full overflow-hidden" :src="work.thumbnail" />
                                            </div>
                                        </figure>
                                </NuxtLink>
                            </article>
                        </div>
                </ContentList>
            </div>
        </section>
        <Footer class="mt-20" />
    </div>
</template>
<style lang="scss" >
.work-item{
    &:nth-child(2n){
        @media (min-width: 768px){
            margin-top: 10rem;
        }   
    }
}
.work-item-img{
    &::before{
        content: "";
        display: block;
        width: 100%;
        aspect-ratio: 800/1000;
        padding-top: 14rem;
    }
}
</style>