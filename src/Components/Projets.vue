<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ProjectItem from './ProjectItem/ProjectItem.vue';

</script>

<template>
  <div class="text-center text-slate-200 pt-16 pb-8 flex flex-row justify-center items-center">
    <FontAwesomeIcon :icon="['fas', 'arrow-down']"/>
    <div class="font-bold md:px-16 px-4 md:text-3xl text-xl">Quelques projets</div>
    <FontAwesomeIcon :icon="['fas', 'arrow-down']"/>
  </div>
  <div
    class="md:h-[470px] md:container md:mx-auto sm:px-10 items-center justify-center grid grid-cols-1 md:grid-cols-3 gap-2">
    <ProjectItem title="La bonne Franquette"
      description="Application Android de gestion de restaurant simple et intuitive." content="Application de gestion de cuisine ne nécessitant pas de système informatique dédié et honéreux.
          La solution contient une API REST, une application Android et un dashboard.
          Projet réalisé lors de mon Bachelor CDA chez ForEach Academy."
      :technos="['Java', 'Spring', 'Dart', 'Flutter', 'Javascript', 'Vue.js']" image="lbf.webp" img-size="100"
      link="https://github.com/iDrack/la-bonne-franquette-back" class="h-full flex flex-col" />
    <ProjectItem title="Mégapole"
      description="Une application de sondage communautaire où les utilisateurs peuvent débattre de leurs idées."
      content="Application de sondage mettant l'accent sur l'échange entre utilisateurs.
          Les utilisateurs peuvent créer des sondages limités dans le temps et échanger avec les autres utilisateurs participants aux même sondage."
      :technos="['Dart', 'Flutter', 'Firebase']" image="megapole.webp" img-size="50"
      link="https://gitlab.com/iDrack/megapole" class="h-full flex flex-col" />
        <ProjectItem title="Cook Off"
      description="Votre bibliothèque de recettes à self-host." content="Un site de recette utilisant NuxtUI et MongoDB.
      Parfait si vous voulez moderniser votre livre de recette et le partager avec votre famille et vos amis."
      :technos="['Nuxt', 'Tailwind', 'Mongodb']" image="cookoff.webp"
      link="https://github.com/iDrack/cook-off"
      class="h-full flex flex-col" />
  </div>
  <div>
    <div class="md:text-3xl text-xl font-bold text-center text-slate-200">
      <p class="pt-8 pb-14">
        Et bien d'autres !<br>Pourquoi ne pas aller faire un tour sur mon <a href="https://github.com/iDrack"
          title="https://github.com/iDrack" target="_blank"
          class="relative before:absolute before:bg-[#63e] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500"><span
            class="relative">GitHub</span></a> 👀 ?
      </p>
    </div>

  </div>
</template>

<style scoped></style>
