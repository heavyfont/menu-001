<script setup>

    import { useToggle } from '@vueuse/core'
    const { $ScrollTrigger } = useNuxtApp()
    const { $gsap } = useNuxtApp()
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
        title: 'About - Vickywitvicky ',
        meta: [
            { name: 'description', content: 'About Vickywitvicky portfolio' }
        ],
    })

    const items = ref([
        { title1: 'Skills ', 
          title2: '& Expertise', 
          content1:'Branding',
          content2:'Typography',
          content3:'Logo',
          content4:'Web Designing',
          content4:'Graphic design',
          content5:'Front-End development',
        },
        { title1: 'Technical ', 
          title2: 'proficiency', 
          content1:'Figma',
          content2:'Adobe Photoshop',
          content3:'Adobe Illustrator',
          content4:'Html & Css',
          content4:'Javascript',
          content5:'Nuxt js & Prismic CMS',
        },
        { title1: 'Problem', 
          title2: 'Solving', 
          content1:'User research',
          content2:'Design System',
          content3:'Brand guidelines',
          content4:'Wireframing',
        },
    ]);


    onMounted(() => {})

    const activeAccordion = ref(null);
    // Function to toggle the accordion item
    
    const toggleAccordion = (index) => {
    // Check if the clicked item is already open
    if (activeAccordion.value === index) {
      // If already open, close it
      activeAccordion.value = null;
    } else {
      // If closed, open it
      activeAccordion.value = index;
    }

    }


</script>

<template>
    <div class="page" >
        <section class="relative h-100 hero-about">
        <div class=" p-4 about-hero-wrapper relative">
            <div class="md:mb-20 mb-10 lg:mt-0 pt-20">
                    <h2 class="text-orange title-text">
                        <Intersect :once="true">
                            <TextSplit class="flex flex-col overflow-hidden">
                              <span class="uppercase ">About Me</span>
                            </TextSplit>
                        </Intersect>
                    </h2>
            </div>
            <div>
                <figure class="relative about-image img-wrapper">
                            <div class="absolute inset-0 bg-dark-yellow rounded-lg">
                                    <NuxtImg class="rounded-lg absolute top-0 left-0 h-full w-full " src="https://res.cloudinary.com/do3kfvk9o/image/upload/v1703738810/Mask_group_dao1m6.jpg" />             
                            </div>
                </figure>
            </div>
        </div>
        </section>
        <section class="about-bio bg-back-white px-4">
            <div class="about-bio-title ">
                <h2 class="pt-10 text-orange title-text">
                    <Intersect :once="true">
                        <TextSplit class="flex flex-col overflow-hidden">
                           <span>About Myself</span>
                        </TextSplit>
                    </Intersect>   
                </h2>

                <div class="flex justify-center">
                    <p class="content-paragraph md:w-70 lg:text-4xl text-xl text-center my-5">
                        from Kuala Lumpur, Malaysia
                    </p>
                </div>
            </div>
            <article class="about-content ">
                <div class=" lg:text-2xl md:flex md:mt-10 gap-x-10 justify-center">
                    <p class="serif my-5 md:w-96">
                        From my early days experimenting with design software to the dynamic projects 
                        I handle today, every step of my creative journey has been a lesson and an 
                        adventure. I believe in the power of design to shape perceptions, 
                        evoke emotions, and spark connections.
                    </p>
                    <p class="serif my-5 md:w-96">
                        At the core of my design philosophy is a commitment to blending aesthetics 
                        with functionality. I thrive on the challenge of turning abstract ideas into 
                        tangible, user-centered solutions. I'm fueled by the belief that great 
                        design goes beyond the visual – it enhances experiences and solves 
                        real-world problems.
                    </p>
                    <p class="serif my-5 md:w-96">
                        My work extends across various domains, including UI/UX design, 
                        web design, and branding. Whether it's creating intuitive user 
                        interfaces, designing eye-catching visuals, or shaping brand 
                        identities, I approach each project with enthusiasm and a 
                        meticulous attention to detail.
                    </p>
                </div>
            </article>
            <div class="lg:grid grid-cols-2 gap-x-5 images mt-10">
                <figure class="image-wrapper mb-10">
                    <div class="image rounded-lg">
                        <NuxtImg class="w-full h-full rounded-lg top-0 left-0 absolute overflow-hidden" src="https://res.cloudinary.com/do3kfvk9o/image/upload/v1703738039/sadie-teper-WG-hXR1rLNk-unsplash_1_1_fw44yc.jpg" loading="lazy" draggable="false" />
                    </div>
                </figure>
                <figure class="image-wrapper ">
                    <div class="image rounded-lg">
                        <NuxtImg class="w-full h-full rounded-lg top-0 left-0 absolute overflow-hidden" src="https://res.cloudinary.com/dnwakycvo/image/upload/v1708588578/etc%20images/img_no74ot.jpg" loading="lazy" draggable="false" />
                    </div>
                </figure>
            </div>
        </section>
        <section class="about-skill px-4">
            <div class="md:my-20 my-5">
                <article class=" about-accordion">
                    <div v-for="(item, index) in items" :key="index"  class="accordion-item cursor-pointer" @click="toggleAccordion(index)">
                        <h3 class="accordion-title flex gap-4 text-orange flex-col text-left uppercase sans-serif-bold md:py-10 py-4">
                            <span> {{ item.title1 }}</span>
                            <span>{{ item.title2 }}</span>   
                        </h3>
                        <div v-if="activeAccordion === index" class="accordion-content serif mt-14 lg:text-6xl md:text-5xl text-4x" >
                                <ul class="flex flex-col gap-4 mb-10">
                                <li>{{ item.content1 }}</li>
                                <li>{{ item.content2 }}</li>
                                <li>{{ item.content3 }}</li>
                                <li>{{ item.content4 }}</li>
                                <li>{{ item.content5 }}</li>
                                </ul>
                        </div>
                    </div>
                </article>
            </div>
        </section>
        <section>
             <div>
                
             </div>
        </section>
        <Footer />
    </div>
  
</template>

<style lang="scss" scoped>
 .about-image{
    &::before{
        content: "";
        display: block;
        width: 100%;
        padding-bottom: 50vw;
    }
 }


 .image-wrapper{
    position: relative;
        &::before{
            content: '';
            display: block;
            padding-top: 14rem;
            @media (min-width: 768px){
                padding-top: 40rem;
            }
        }  
        &:first-child{
            .image{
                height: 100%;   
            }
        }
        &:nth-child(2){
            .image{
                height: 80%;   
            }
        } 
 }
 .image{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background-color: azure;

 }
 .accordion-item{
    border-top: 1px solid #EA451D;
    background-color: #F2EAE2;
    position: relative;
    overflow: hidden;
    &:nth-last-child(1){
        border-bottom: 1px solid #EA451D;
    }
 
}



</style>