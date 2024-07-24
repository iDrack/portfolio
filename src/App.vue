<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Bio from '@/components/Bio.vue';
import Social from './components/Social.vue';
import Projet from './components/Projet.vue';
import { ref } from 'vue';
import Competences from './components/Competences.vue';

const projets = ref([])

projets.value.push({ titre: "La bonne Franquette", 
  description: "La bonne Franquette est une solution de gestion de commandes destinée aux petits restaurateurs. Elle se démarque par sa facilité de mise en place ne nécessitant pas de système informatique spécialisé.",
  description2: "Application réaisée dans le cadre de mon bachelor à ForEach Academy. Ce projet m\'a permit de mettre en oeuvre ce que j\'ai vu au cours de ce même bachelor, notement: la conception d\'applications en couche, le développemet mobile multi-plateforme, le développement d\'API REST, les principes DevOps.", 
  imgPath: "lbf.png", lien: "https://franfran62.github.io/la-bonne-franquette-website/", 
  liensExtras: [
    "https://github.com/Franfran62/la-bonne-franquette-appli",
    "https://github.com/iDrack/la-bonne-franquette-back",
  ]})
//projets.value.push({ titre: "", description: "", description2: "", imgPath: "", lien: "", lienExtras: []})

projets.value.forEach(element => {
  console.log(element.titre);
});


console.log(projets.value.length);

</script>

<template>
  <header>
  </header>
  <main>
    <div
      class="inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div class="md:container md:mx-auto sm:px-10 flex justify-center items-center text-slate-200">
        <Bio />
      </div>
      <div class="md:container md:mx-auto sm:px-10 items-center justify-center">
        <Competences />
      </div>
      <div class="text-center text-slate-200 pt-12 pb-16 flex flex-row justify-center items-center">
          <i class="fa fa-arrow-down fa-2x"></i>
          <div class="font-bold text-2xl px-16">Voici quelque projets</div>
          <i class="fa fa-arrow-down fa-2x"></i>
        </div>
      <div>
        <div v-for="(item, index) in projets" class="md:container md:mx-auto sm:px-10 flex justify-center items-center">
         <Projet :titre="item.titre" :description="item.description" :description2="item.description2" :img-path="item.imgPath" :lien="item.lien" :liens-extras="item.liensExtras" :a-droite="true"/>
        </div>
        
      </div>
      <footer class="h-50">
      <Social />
    </footer>
    </div>
  </main>

</template>

<style scoped>
</style>
