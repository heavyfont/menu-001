<script setup>
    import { inView, animate, stagger } from "motion";
    const { $ScrollTrigger } = useNuxtApp()
    const { $gsap } = useNuxtApp()



    const projects = [
  {
    title: 'Harmony Fest',
    link: 'https://www.behance.net/gallery/181674983/Music-Festival-Identity-HarmonyFest',
    marqueeDuration: 10,
    firstWord: 'Harmony',
    imageSrc: 'https://res.cloudinary.com/do3kfvk9o/image/upload/v1703733237/harmony_kgeqt1.jpg',
    secondWord: 'Fest',
    direction:'none'
  },
  {
    title: 'Evo Wave',
    link: 'https://www.behance.net/gallery/184570419/Eco-wave-Visual-identity',
    marqueeDuration: 10,
    firstWord: 'Eco',
    imageSrc: 'https://res.cloudinary.com/do3kfvk9o/image/upload/v1703733237/eco_xrlksg.jpg',
    secondWord: 'Wave',
    direction:'reverse'
  },
  {
    title: 'Craft Wise',
    link: 'https://www.behance.net/gallery/186430097/Craftwise-Visual-Identity',
    marqueeDuration: 15,
    firstWord: 'Craft',
    imageSrc: 'https://res.cloudinary.com/do3kfvk9o/image/upload/v1703733237/craft_l8co7x.jpg',
    secondWord: 'Wise',
    direction:'none'
  },
  {
    title: 'Brews & Books',
    link: 'https://www.behance.net/gallery/171457637/Brews-Books-(-passion-project-)',
    marqueeDuration: 11,
    firstWord: 'Brews &',
    imageSrc: 'https://res.cloudinary.com/do3kfvk9o/image/upload/v1703733236/coffee_aicxhw.jpg',
    secondWord: 'Books',
    direction:'reverse'
  },
  {
    title: 'Anhsin',
    link: 'https://anhsin.io/',
    marqueeDuration: 11,
    firstWord: 'Anhsin',
    imageSrc: 'https://res.cloudinary.com/do3kfvk9o/image/upload/v1703733559/image_3_kyzyzu.jpg',
    secondWord: '',
    direction:'none'
  },
];


  onMounted(() => {
    // inView('.test', ({ target }) => {
    //   animate(
    //     target.querySelectorAll('.word > .char'),
    //     { opacity: 1, transform: 'none' },
    //     { delay: stagger(0.05), duration: 0.9, easing: [0.17, 0.55, 0.55, 1] }
    //   );
    // });

  });
</script>

<template>
  <div class="page-container">
    <section class="relative h-100 home-hero">
      <div class=" p-4 home-hero-wrapper">
        <div class="mb-5 lg:mt-0 mt-5">
          
          <h1 class="flex flex-col ">
            <span class="uppercase ">Digi</span>
            <span class="flex md:flex-row flex-col items-center">
              <span class="content-paragraph lg:text-4xl text-xl md:w-96 md:mt-0 mt-4">I am dedicated to crafting meaningful and visually stunning experiences</span>
              <span class="uppercase">Desig</span>
            </span>
            <span class="flex md:flex-row flex-col md:items-center">
              <span class="uppercase">Tal</span>
              <span class="content-paragraph lg:text-4xl md:text-2xl text-sm md:mt-0 mt-4">↓ Scroll to Discover More ↓</span>
            </span>
            <span class="uppercase grid grid-cols-7">
              <span class="col-start-3" >Ner</span>
            </span>
          </h1>
        
        </div>
      </div>
    </section>
    <section class="home-project bg-back-white">
       <div class="px-4 mb-10">
         <h2 class="flex flex-col pt-5 home-project-title">
            <span>Selected Projects</span>
            <span></span>
         </h2>
         <div class="flex justify-center home-project-desc">
            <p class="content-paragraph md:w-70 lg:text-4xl text-xl text-center my-5">
              Some of the chosen projects that 
              i have done also included with the self initiative projects
            </p>
         </div>
       </div>
       <div class=" projects-wrapper">
            <div class=" projects flex flex-col gap-y-10">
                  <ul>
                    <li v-for="(project, index) in projects" :key="index" class="project">
                      <NuxtLink :to="project.link" target="_blank" rel="noopener">
                        <Marquee :clone="true" :duration="project.marqueeDuration"  :direction="project.direction">
                          <span class="flex">
                            <span class="serif-medium mx-2">{{ project.title }}</span>
                          </span>
                        </Marquee>

                        <div class="project-content lg:gap-x-4 gap-x-2 py-2">
                          <span class="lg:text-8xl md:text-5xl text-4xl sans-serif-bold uppercase">{{ project.firstWord }}</span>
                          <div class="project-image">
                            <span class="image absolute inset-0">
                              <NuxtImg class="w-full h-full top-0 left-0 absolute overflow-hidden" :src="project.imageSrc" loading="lazy" draggable="false" />
                            </span>
                          </div>
                          <span class="lg:text-8xl md:text-5xl text-4xl sans-serif-bold uppercase">{{ project.secondWord }}</span>
                        </div>

                        <Marquee :clone="true" :duration="project.marqueeDuration" :direction="project.direction">
                          <span class="flex">
                            <span class="serif-medium mx-2">{{ project.title }}</span>
                          </span>
                        </Marquee>
                      </NuxtLink>
                    </li>
                  </ul>

            </div>
        </div>
    </section>
    <section class="home-skill">
      <div>
         <h2 class="flex flex-col pt-5">
            <span class="uppercase">SKILLS & SERVICES</span>
         </h2>
       </div> 
       <div class="mt-20">
         <div class="relative overflow-hidden">
           <div class="home-skill-image my-10 mx-auto overflow-hidden">
            <figure class="overflow-hidden">
               <NuxtImg class="w-full h-full top-0 left-0 absolute overflow-hidden" src="https://res.cloudinary.com/do3kfvk9o/image/upload/v1703733237/skill-3_wndar8.jpg" loading="lazy" draggable="false" />
            </figure>
           </div>
           <div class="absolute  top-0 capsules w-full h-full lg:text-2xl  text-sm">
               <span class="absolute left-0 top-0 capsule-wrapper" >
                  <Parallax :speed="40">
                    <span class="uppercase sans-serif-Med capsule">Graphic Design</span>
                  </Parallax>
               </span>
               <span class="absolute left-0 top-0 capsule-wrapper">
                  <Parallax :speed="50">
                    <span class="uppercase sans-serif-Med capsule">Html</span>
                  </Parallax>
               </span>
               <span class="absolute left-0 top-0 capsule-wrapper">
                  <Parallax :speed="30">
                    <span class="uppercase sans-serif-Med capsule">Logo</span>
                  </Parallax>
               </span>
               <span class="absolute left-0 top-0 capsule-wrapper">
                  <Parallax :speed="10">
                    <span class="uppercase sans-serif-Med capsule">Css</span>
                  </Parallax>
               </span>
               <span class="absolute left-0 top-0 capsule-wrapper">
                  <Parallax :speed="20">
                    <span class="uppercase sans-serif-Med capsule">Concept</span>
                  </Parallax>
               </span>

             </div>  
           <aside class="mb-10">
           <div class="md:text-center md:px-0 px-4">
              <span class="uppercase sans-serif-bold lg:text-7xl md:text-5xl text-4xl">Branding</span>
              <ul class="md:flex items-center justify-center gap-x-4 serif-medium xl:text-5xl lg:text-4xl text-3xl mt-4 mb-10 ">
                 <li class="flex items-center gap-x-2"><span>Graphic Design</span><span><SvgStar /></span></li>
                 <li class="flex items-center gap-x-2"><span>Typography</span><span><SvgStar /></span></li>
                 <li class="flex items-center gap-x-2"><span>Logo</span><span><SvgStar /></span> </li>
                 <li class="flex items-center gap-x-2"><span>Web Design</span><span><SvgStar /></span></li>
                 <li class="flex items-center gap-x-2"><span>Concept</span><span><SvgStar /></span></li>
              </ul>
           </div>
           <div class="md:text-center md:px-0 px-4">
              <span class="uppercase sans-serif-bold lg:text-7xl md:text-5xl text-4xl">Development</span>
              <ul class="md:flex items-center justify-center gap-x-4 serif-medium xl:text-5xl lg:text-4xl text-3xl mt-4 ">
                 <li class="flex items-center gap-x-2"><span>Html</span><span><SvgStar /></span></li>
                 <li class="flex items-center gap-x-2"><span>Css</span><span><SvgStar /></span></li>
                 <li class="flex items-center gap-x-2"><span>Javascript</span><span><SvgStar /></span></li>
                 <li class="flex items-center gap-x-2"><span>Nuxt</span><span><SvgStar /></span></li>
                 <li class="flex items-center gap-x-2"><span>Headless Cms</span><span><SvgStar /></span></li>
              </ul>
           </div>
          </aside>
          <div class="flex justify-center py-10 mx-auto">
            <Button to="/about" class="z-10"><span>More about me</span></Button> 
          </div>
         </div>
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

 .hero-image{
  img{
    width: 100%;
  }
 }
 .home-project{
   &-title{
      color: #1A1A1A;
   }
   &-desc{
      color: #1A1A1A;
   }
 }
 .home{
  &-hero{
    &-wrapper{
      background-image: url("https://res.cloudinary.com/do3kfvk9o/image/upload/v1703733238/bg_y5rklj.jpg");
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
 }
  .project{
    background-color: #1A1A1A;
    &:nth-child(2n){
      background-color: #FAFF00;
      color: #1A1A1A;
      }
    &-content{
      display: flex;
      justify-content: center;
      line-height: 1;
      text-align: center;
      flex-grow: 1;

    }
    &-image{
      overflow: hidden;
      vertical-align: bottom;
      display: inline-block;
      position: relative;
      width: 0em;
      transition: width .2s;
      &::before{
        content: '';
        display: block;
        padding-bottom: calc(1em);
      }
    }
    &:hover{
      @media (min-width: 1024px){
        .project-image{
          width: 7.5em;
          transition-duration:.45s
        }
        .image{
          
        }
      } 
    }
  }
  .image-wrapper{
    position: relative;
    padding-top: 16.8055555556vw;

  }

 .home-skill{
  background-color: #1A1A1A;
 }
 .home-skill-image{
   position: relative;
   padding-top: 50%;
    width: 60vw;
 }
 .capsule{
  padding: .1rem;
  padding-left: .3rem;
  padding-right: .3rem;
  background-color: #ED323E;
  &-wrapper{
    &:first-child{
    transform: rotate(-20deg);
     left: 12vw;
     top: 10vw;
  }
  &:nth-child(2){
    transform: rotate(10deg);
    left: 80vw;
    top: 20vw;
  }
   &:nth-child(3){
    transform: rotate(5deg);
    left: 18vw;
    top: 35vw;
   }
   &:nth-child(4){
    transform: rotate(50deg);
    left: 55vw;
    top: 40vw;
   }
   &:nth-child(5){
    transform: rotate(-30deg);
    left: 45vw;
    top: 20vw;
   }
  }

 }
</style>
