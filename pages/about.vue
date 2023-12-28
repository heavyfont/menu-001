<script setup>

    import { useToggle } from '@vueuse/core'

 
    const { $ScrollTrigger } = useNuxtApp()
    const { $gsap } = useNuxtApp()
    const { $Draggable } = useNuxtApp()
    const { $Flip } = useNuxtApp()
    const { $Observer } = useNuxtApp()


    onMounted(() => {
    })


</script>

<template>
    <div class="page-container" >
        <section class="relative h-100 about-hero">
        <div class=" p-4 about-hero-wrapper relative">
            <div class="mb-5 lg:mt-0 mt-5">
            <h1 class="flex flex-col ">
                <span class="uppercase ">My</span>
                <span class="flex md:flex-row flex-col items-center ">
                    <span class="uppercase">Name</span>
                </span>
                <span class="flex md:flex-row flex-col md:items-center justify-end">
                    <span class="content-paragraph lg:text-8xl md:text-4xl md:mt-0 mt-4">is</span>
                    <span class="uppercase"> Vicky</span>
                </span>
            </h1>
            </div>
            
            <div class="absolute h-full w-full left-0 top-0 lg:flex hidden ">
                
                <div class="md:-rotate-6 lg:w-96 md:w-80 w-64 about-image ">
                    <span class="about-image-wrapper">
                        <NuxtImg class="w-full h-full top-0 left-0 absolute overflow-hidden" src="https://res.cloudinary.com/do3kfvk9o/image/upload/v1703737452/_2a16070d-4c91-4929-8544-8d8c7777d50b_xpppxe.jpg" />
                    </span>
                </div>
              
            </div>
            
        </div>
        </section>
        <section class="about-bio bg-back-white px-4">
            <div class="about-bio-title">
                <h2 class="flex flex-col pt-5">
                    <span>About Myself</span>   
                </h2>
                <div class="flex justify-center">
                    <p class="content-paragraph md:w-70 lg:text-4xl text-xl text-center my-5">
                        from Kuala Lumpur, Malaysia
                    </p>
                </div>
            </div>
            <article class="about-content ">
                <div class=" lg:text-2xl md:flex md:mt-10 gap-x-10 justify-center">
                    <p class="serif-medium my-5 md:w-96">
                        From my early days experimenting with design software to the dynamic projects 
                        I handle today, every step of my creative journey has been a lesson and an 
                        adventure. I believe in the power of design to shape perceptions, 
                        evoke emotions, and spark connections.
                    </p>
                    <p class="serif-medium my-5 md:w-96">
                        At the core of my design philosophy is a commitment to blending aesthetics 
                        with functionality. I thrive on the challenge of turning abstract ideas into 
                        tangible, user-centered solutions. I'm fueled by the belief that great 
                        design goes beyond the visual – it enhances experiences and solves 
                        real-world problems.
                    </p>
                    <p class="serif-medium my-5 md:w-96">
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
                    <div class="image ">
                        <NuxtImg class="w-full h-full top-0 left-0 absolute overflow-hidden" src="https://res.cloudinary.com/do3kfvk9o/image/upload/v1703738039/sadie-teper-WG-hXR1rLNk-unsplash_1_1_fw44yc.jpg" />
                    </div>
                </figure>
                <figure class="image-wrapper ">
                    <div class="image">
                        <NuxtImg class="w-full h-full top-0 left-0 absolute overflow-hidden" src="https://res.cloudinary.com/do3kfvk9o/image/upload/v1703738810/Mask_group_dao1m6.jpg" />
                    </div>
                </figure>
            </div>
        </section>
        <section class="about-skill px-4">
            <div>
                <h2 class="flex flex-col pt-5">
                    <span>
                        skills and backgrounds
                    </span>   
                </h2>
            </div>
            <div class="mt-20">
                <article class=" md:grid grid-cols-6 my-20">
                     <div class="xl:col-span-2 col-span-3 sans-serif-bold lg:text-7xl md:text-5xl text-4xl uppercase line-height-8 flex flex-col">
                        <span>Skills and</span>
                        <span>Expertise</span>
                     </div>
                     <div class="col-span-2 md:mt-0 mt-6">
                         <ul class="serif-medium flex flex-wrap lg:text-5xl text-2xl lg:gap-4 gap-2">
                            <li>Branding,</li>
                            <li>Typography,</li>
                            <li>Logo,</li>
                            <li>Web Design,</li>
                            <li>Graphic Design,</li>
                            <li>Front-End</li>
                         </ul>
                     </div>
                </article>
                <article class="md:grid grid-cols-6 my-20">
                     <div class="xl:col-span-2 col-span-3 sans-serif-bold lg:text-7xl md:text-5xl text-4xl uppercase line-height-8 flex flex-col">
                        <span>Technical</span>
                        <span>Proficiency</span>
                     </div>
                     <div class="col-span-2 mt-6">
                         <ul class="serif-medium flex flex-wrap lg:text-5xl text-2xl lg:gap-4 gap-2">
                            <li>Figma,</li>
                            <li>Adobe Photoshop,</li>
                            <li>Adobe Illustration,</li>
                            <li>Html & Css,</li>
                            <li>Adobe After Effect,</li>
                            <li>Adobe Premier Pro,</li>
                            <li>Javascript,</li>
                            <li>Nuxt js & Prismic CMS</li>
                         </ul>
                     </div>
                </article>
                <article class=" md:grid grid-cols-6 mt-20 pb-10 leading-3">
                     <div class="xl:col-span-2 col-span-3 sans-serif-bold lg:text-7xl md:text-5xl text-4xl uppercase line-height-8 flex flex-col">
                        <span>Problem</span>
                        <span>Solving</span>
                     </div>
                     <div class="col-span-2 mt-6">
                         <ul class="serif-medium flex flex-wrap lg:text-5xl text-2xl lg:gap-4 gap-2">
                            <li>User research,</li>
                            <li>Design System,</li>
                            <li>Brand guidelines,</li>
                            <li>Wireframing</li>
                         </ul>
                     </div>
                </article>
            </div>
            <div>
                <h2 class="flex flex-col pt-20 lg:pb-14 pb-6"> 
                    <span class="uppercase">Let's get</span>
                    <span class="uppercase">To know</span>
                </h2>
            </div>
        </section>
        <Footer />
    </div>
  
</template>

<style lang="scss" scoped>
 .about{
  &-hero{
    &-wrapper{
      background-image: url("https://res.cloudinary.com/do3kfvk9o/image/upload/v1703736681/Group_184_lygjpz.jpg");
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
 }
 .about-image-wrapper{
    position: absolute;
    left: 0;
    top: 0;
    padding-bottom: 30rem;
    height: 100%;
    width: 100%;
 }
 .about-image{
    top: 19%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
 }
 .about-bio-title{
 color: #1a1a1a;
 }
 .about-content{
    color: #1a1a1a;
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
 .about-skill{
    background-color: #1a1a1a;
 }
</style>