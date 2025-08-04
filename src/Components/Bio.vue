<script setup>
import StarBorder from './Animations/StarBorder/StarBorder.vue';
import ShinyText from './TextAnimations/ShinyText/ShinyText.vue';
import TextType from './TextAnimations/TextType/TextType.vue';


</script>

<template>

  <div class="flex justify-center items-center">
    <div>
      <div class="flex justify-center items-center">
        <img src="../assets/img/pfp_pro.webp" alt="avatar" class="object-top h-[175px] w-[175px] !rounded-full" />
      </div>
      <h1 class="text-center font-bold py-6 md:text-2xl text-lg">
        <ShinyText text="Bonjour 👋 je suis Thomas Dignoire." :disabled="false" :speed="2.5" />
      </h1>
      <h1 class="text-center font-bold pb-4">
        <TextType class="text-center font-bold md:text-5xl text-3xl whitespace-normal break-words pb-4" :text="[`Concepteur Développeur d'Applications`,
          `Développeur Fullstack`,
          `Développeur Mobile`,]" :variableSpeed="{ min: 60, max: 120 }" :typingSpeed="75" :pauseDuration="1500"
          :showCursor="true" cursorCharacter="_" />
      </h1>

      <p class="text-center md:text-lg text-xs"> Je conçois et développe des applications web et mobiles facile
        d'utilisation.</p>
      <p class="text-center md:text-lg text-xs"> Diplômé d’un Bachelor Concepteur Développeur d’Applications, je cherche
        à mettre mes compétences au service d’une équipe ambitieuse.</p>
      <div class="flex pt-4">
        <div class="grow"></div>
          
        <a href="mailto:tdignoire@pm.me" title="Envoyer un mail à tdignoire@pm.me" class="text-center relative py-3">
          <StarBorder as="button" :color="'magenta'" :speed="'6s'" :thickness="3" customClass="z-10">
            <span class="relative font-bold md:text-xl text-base">Me contacter</span>
          </StarBorder>
        </a>
        <div class="grow"></div>
        <a href="/CV_Thomas Dignoire.pdf" title="Télécharger mon CV" target="_blank" class="text-center relative py-3">
          <StarBorder as="button" :color="'green'" :speed="'6s'" :thickness="3" customClass="z-10">
            <span class="relative font-bold md:text-xl text-base">Mon CV</span>
          </StarBorder>
        </a>
        <div class="grow"></div>
      </div>
    </div>
  </div>


</template>

<style scoped>
</style>