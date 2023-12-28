<script setup lang="ts">
</script>
<template>
    <footer class="footer">
        <div class="footer-wrapper">
          <div>
            <h1 class="flex flex-col items-center">
              <span class="uppercase">Each</span>
              <span class="uppercase">Other</span>
            </h1>
            <Parallax :speed="20">
              <div class="card w-full p-4">
                  <div class="email-card flex flex-col px-5 py-4 mx-auto justify-between md:-rotate-6 lg:w-96 md:w-80 w-64">
                    <span class="uppercase sans-serif-bold lg:text-7xl text-4xl title">Through media</span>
                      <div class="flex flex-col gap-y-10">
                        <span class="description serif-medium lg:text-4xl text-xl"> I'm excited about the possibility of working together.</span>
                        <div>
                          <Button to="mailto:vickywitvicky@gmail.com" ><span>email me</span></Button>
                        </div>
                      </div>
                  </div>
              </div>
           </Parallax>
          <div class="flex md:flex-row flex-col items-center justify-between pt-5 pb-10 px-4">
            <span class=" md:order-2 order-1 ">©2024 vickywitvicky</span>
            <span>
                <ul class="flex gap-x-5 md:order-1 order-2 text-lg  social-link">
                <li><NuxtLink to="https://www.linkedin.com/in/vikneswaran-gnanasegran-33201574" target="_blank">LinkedIn</NuxtLink> </li>
                <li><NuxtLink to="https://www.instagram.com/witvickyvicky/" target="_blank">Instagram</NuxtLink></li>
                <li><NuxtLink to="https://www.behance.net/vickywitvibc6a" target="_blank">Behance</NuxtLink></li>
              </ul>
            </span>
             
          </div>
        </div>
        </div>
    </footer>
</template>
<style lang="scss" scoped>
.footer{

}
.footer-wrapper{
    position: relative;
    height: 100%;
    width: 100%;
    background-image: url("https://res.cloudinary.com/do3kfvk9o/image/upload/v1703733238/bg_y5rklj.jpg");
      background-attachment: fixed;
      background-position: center;
      background-repeat: no-repeat;
      background-size: cover;
      background-position: bottom;
}
.card{
  
}
.email-card{
  background-color: #ED323E;
  height: 300px;
  @media screen and (min-width: 768px){
    height: 450px;
  }
  .title{
    line-height: 0.8;
  }
}

.social-link{
  color: #FAFF00;
  text-transform: uppercase;
}
</style>