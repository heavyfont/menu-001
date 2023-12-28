<script setup>
        const { $lenis } = useNuxtApp()
        const showPreloader = ref(true);
        const { $ScrollTrigger } = useNuxtApp()
        const { $gsap } = useNuxtApp()
        // Disable scroll when the preloader is active
        const disableScrolls = () => {
            $lenis.stop()
        };

        // Enable scroll when the preloader is hidden
        const enableScroll = () => {
            let body = document.querySelector("body")
            body.classList.remove("overflow-hidden")
            $lenis.start()
        };

        onBeforeMount(() =>{
            disableScrolls();
        })
        onMounted(() => {

            const font = [
                new FontFace('Libre Med', 'url(/fonts/LibreCaslonCondensed-Medium.woff2)'),
                new FontFace('Libre', 'url(/fonts/LibreCaslonCondensed-Regular.woff2)'),
                new FontFace('Over Bold', 'url(/fonts/OverusedGrotesk-Bold.woff2)'),
                new FontFace('Over Med', 'url(/fonts/OverusedGrotesk-Medium.woff2)'),
            ] 
            
            let targets = $gsap.utils.toArray(".logo-wrapper .char");
            const preload = document.querySelector(".preloader")
            const logoWrapper = document.querySelector(".logo-wrapper")
            const logo = document.querySelectorAll(".logo-wrapper>.char")
            const tl = $gsap.timeline()
            tl.set([logo, logoWrapper],{
                opacity:0,
                y:50
            })
            tl.to(logoWrapper,{
                opacity:1,
                y:0,
                duration:.4
            })
            tl.fromTo(logo,{
                opacity:0,
                y:50
            },{
                opacity:1,
                y:0,
                duration:2,
                stagger: .06,
                ease:"expo.inOut",
                onComplete() {
                    $gsap.to(preload,{
                        yPercent:-100,
                        duration:1,
                        ease:"expo.inOut"
                    }) 

                    enableScroll()
                    window.scrollTo(0, 0); // Scroll to the top of the window
                    
                }
            })
            disableScrolls();
            
        });

        onUnmounted(() => {
        //   enableScroll();
        });

</script>

<template>
    <div v-if="showPreloader" class="preloader">
        <div class="text-center flex flex-col">
            <span class="serif-medium">
                Welcome to
            </span>
            <span class="overflow-hidden logo">
                <p class="sans-serif-bold text-4xl uppercase overflow-hidden logo-wrapper" v-split-text="{ splitBy: 'char' }" >
                    vickywitvicky
                </p>
            </span>
            <span class="serif-medium">
                Portfolio
            </span>
        </div>
    </div>
</template>

<style lang="scss" scoped>
 .preloader{
    position: fixed;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #FAFF00;
    color:#1A1A1A;
    z-index:9999;
    overflow: hidden;
 }

</style>
<style>
 .logo-wrapper {
    opacity: 0 ;
 }
</style>