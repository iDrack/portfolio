<script setup>
import SplitText from '@/TextAnimations/SplitText/SplitText.vue';



const handleClick = () => {

}
</script>

<template>
  <div class="flex justify-center items-center">
    <div>
      <div class="flex justify-center items-center">
        <img src="../assets/img/pfp_pro.png" alt="avatar" class="object-top h-[175px] w-[175px] !rounded-full" />
      </div>
      <h1 class="text-center font-bold py-6 md:text-2xl text-lg"> Bonjour 👋 je suis Thomas Dignoire </h1>
      <h1 class="text-center font-bold pb-4">
        <SplitText class="text-center font-bold md:text-5xl text-3xl whitespace-normal break-words pb-4"
          text="Concepteur Développeur d'Applications" class-name="text-2xl font-semibold text-center" :delay="100"
          :duration="0.4" ease="power3.out" split-type="chars" :from="{ opacity: 0, y: 40 }" :to="{ opacity: 1, y: 0 }"
          :threshold="0.1" root-margin="-100px" text-align="center" @animation-complete="() => { }" />
      </h1>

      <p class="text-center md:text-lg text-xs"> Je conçois et développe des applications web et mobiles facile
        d'utilisation.</p>
      <p class="text-center md:text-lg text-xs"> Diplômé d’un Bachelor Concepteur Développeur d’Applications, je cherche
        à mettre mes compétences au service d’une équipe ambitieuse.</p>
      <div class="flex pt-4">
        <div class="grow"></div>
        <a href="mailto:tdignoire@pm.me"
          class="group [transform:translateZ(0)] md:w-48 w-32 text-center md:px-6 px-2 py-3 rounded-3xl overflow-hidden bg-gray-200 relative before:absolute before:bg-[#63e] before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-300">
          <span
            class="relative z-0 font-bold md:text-xl text-base text-black group-hover:text-gray-200 transition ease-in-out duration-500">Me
            contacter</span></a>
        <div class="grow"></div>
        <a href="/CV_Thomas Dignoire.pdf" target="_blank"
          class="group [transform:translateZ(0)] md:w-48 w-32 text-center md:px-6 px-2 py-3 rounded-3xl overflow-hidden bg-gray-200 relative before:absolute before:bg-[#63e] before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-300">
          <span
            class="relative z-0 font-bold md:text-xl text-base text-black group-hover:text-gray-200 transition ease-in-out duration-500">Mon
            CV</span></a>
        <div class="grow"></div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>