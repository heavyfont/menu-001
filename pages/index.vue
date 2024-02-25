<script setup>
  
    const { $ScrollTrigger } = useNuxtApp();
    const { $gsap } = useNuxtApp();
 
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
    useHead({
      title: 'Vickywitvicky',
      meta: [
         { name: 'description', content: 'Vickywitvicky portfolio' }
      ],
    })
    const tl =  $gsap.timeline();
    const onAnimationEnd = () => {
      const img = document.querySelector('.hero-image')
      const title = document.querySelectorAll('.title-item>.word>.char')
            tl.set(img,{ scale:0, })
            tl.set(title,{yPercent:100})
            tl.fromTo(title, {
                  'will-change': 'transform', 
                    transformOrigin: '50% 100%',
                    perspective:'1000px',
                    scaleY: 0,
                    skewY: 10,
                    yPercent:100,
                    
          },{
                    duration:1.8,
                    // delay:0.4,
                    scaleY: 1,
                    skewY: 0,
                    yPercent:0,
                    ease: 'expo.out',
                    stagger: {
                        amount: 0.4,
                        
                    }
          })
          tl.fromTo(img,{
            transformOrigin: 'center',
            clipPath: 'inset(50% round 50%)',
            scale: 0,
          },{
            clipPath: 'inset(0% round 0%)',
            scale: 1,
            duration:1,
            ease:'expo.out'
          },'-=2')
       
    }

 
    onMounted(() => {
      onAnimationEnd();
      window.scrollTo(0, 0); 
    });
</script>

<template>
  <div class="page" >
    <div >
      <section class="relative h-100 home-hero">
        <div class=" p-4">
          <div class="mb-5 lg:mt-0 pt-20 text-center">
            <span class="text-2xl flex flex-col leading-6 serif mb-5">
              <span> I am dedicated to crafting meaningful </span>
              <span>and visually elegant experiences</span>
            </span>
          </div>
        </div>
        <aside class="px-4 h-full">
          <h1 class="hero-title title">
              <Intersect :once="true">
              <TextSplit class="flex flex-col text-center relative h-0">
                    <div class="overflow-hidden">
                      <span class="uppercase title-item overflow-hidden">Vicky</span>
                    </div>
                    <span class="absolute h-full w-full top-0 left-0">
                          <span class="relative hero-image">
                            <NuxtImg class="rounded-lg absolute top-0 left-0 h-full w-full" src="https://res.cloudinary.com/dnwakycvo/image/upload/v1708585283/etc%20images/person-image_fkhupt.jpg" />
                          </span>
                    </span>
                    <div class="overflow-hidden">
                      <span class="uppercase title-item overflow-hidden">witvicky</span>
                    </div>
                  
              </TextSplit>
              </Intersect>
            </h1>
        </aside>
        <aside class="px-4 md:flex justify-between">
            <div class="flex flex-col text-lg leading-5 serif md:w-72 mb-5">
                  <span>
                    <p>
                      Specialized in branding, graphic design,
                      web design and visual identity 
                    </p>
                  </span>
                  <span class=" mt-2 ">
                      <NuxtLink to="/about" class="link-alter">
                          More about me
                      </NuxtLink>
                  </span>
            </div>
            <div class="flex flex-col mb-5">
                <span class="uppercase text-orange text-sm">
                  Let’s work together
                </span>
                <span class="serif">
                        <NuxtLink to="mailto:vickywitvicky@gmail.com" class="link-alter ">
                          vickywitvicky@gmail.com
                        </NuxtLink>
                </span>
            </div>
        </aside>
      </section>
      <section class="home-projects" >
          <div class="md:py-20 pt-20">
              <div class="flex flex-col items-center">
                    <span class="uppercase text-orange text-sm flex items-center gap-2 mb-4">
                      <span><SvgStar /></span><span>Featured work</span>
                    </span>
                    <h2 class="text-orange title-text">
                      <Intersect :once="true">
                          <TextSplit class="flex flex-col">
                              <div class="overflow-hidden">
                                  <span class="">Creating </span>
                              </div>
                              <div class="overflow-hidden">
                                  <span class="">More than</span>
                              </div>
                              <div class="overflow-hidden">
                                <span class="">Expected</span>
                              </div>
                          </TextSplit>
                      </Intersect>
                    </h2>
              </div>
              <div class="lg:py-32 py-16 section-container mx-auto">
                <ContentList path="/work" limit: 4, v-slot="{list}"  >
                    <div class="lg:grid grid-cols-12 flex flex-col gap-10" >
                        <article class="featured-projects"  v-for="(work, index) in list.slice(0, 4)" :key="work._path" >     
                          <NuxtLink :to="`/work/${work.slug}`" class="overflow-hidden">
                              <figure class=" relative w-full overflow-hidden  rounded-lg ">
                                    <div class="home-archives-img relative bg-dark-yellow rounded-lg overflow-hidden">
                                      <NuxtImg class="rounded-lg absolute top-0 left-0 h-full w-full overflow-hidden" :src="work.thumbnail" />
                                    </div>
                                </figure>
                            </NuxtLink>
                        
                            <figcaption class="mt-3 text-xl">{{work.title}} - <span class="text-neutral-400 text-lg">{{work.type}}</span></figcaption>  
                        </article> 
                    </div>
                    <div class="flex justify-center mt-20">
                       <Btn  :to="`/work`" >
                            <span  class="py-4">All Work ({{ list.length }}) </span>
                       </Btn>
                    </div>
                </ContentList>
              </div>
          </div>
      </section>
 
      <Footer />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.home-hero{
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.hero-image{
    width: 50vw;
    height: 60vw;
    margin-top: 2vw;
    margin-right: auto;
    margin-left: auto;
    display: block;

    @media (min-width: 601px){
      width: 20vw;
      height: 24vw;
      margin-top: 10vw;
    }
    
}
.hero-title{
  span{
    &:nth-child(2){
      
      @media (min-width: 601px){
        position: absolute !important;
    }
    }
  }
  span{
    &:nth-child(3){
      z-index: 2;
    }
  }

}

.home-project-img{
  img{
    
  }
  &::before{
    content: "";
    display: block;
    width: 100%;
    aspect-ratio: 1 / 1;
    padding-top: 20rem;
  }
  &-small{
    padding-top: 10rem;
    width: 10rem;
  }
}

.home-archives-img{
  &::before{
    content: "";
    display: block;
    width: 100%;
    aspect-ratio: 800 / 1000;
    padding-top: 14rem;
  }
}
.featured-projects{
  &:first-child{
    @media (min-width: 900px){
        margin-top: 15rem;
    }
    grid-column: 2/7;
  }
  &:nth-child(2){
    grid-column: 8/12;
  }
  &:nth-child(3){
    grid-column: 7/11;
  }
  &:nth-child(4){
    @media (min-width: 900px){
        margin-top: -15rem;
    }
    grid-column: 2/5;
  }
}

</style>
