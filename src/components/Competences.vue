<script setup>
import { onBeforeMount, ref } from 'vue';

const master = ref([{ name: "html" }, { name: "css" }, { name: "bootstrap" }, { name: "tailwind" },
                    { name: "java" }, { name: "spring" }, { name: "hibernate" }, { name: "maven" }, { name: "gradle" }, { name: "junit" },
                    { name: "javascript" }, { name: "typescript" }, { name: "vue" }, { name: "vite" }, { name: "pinia" }, { name: "nodejs" }, { name: "express" }, { name: "npm" }, 
                    { name: "dart" }, {name: "flutter"},
                    { name: "c"}, { name: "python" },
                    { name: "mysql" }, { name: "sqlite" }, { name: "postgresql" }, { name: "mongodb" },
                    { name: "git" }, { name: "github" }, { name: "githubaction" }, { name: "gitlab" }, { name: "docker" }, { name: "bash" }, { name: "linux" }, 
                    { name: "vscode"}, { name: "intellij" }, { name: "webstorm" }, { name: "eclipse" },
                    { name: "figma" }, { name: "dbeaver" }, { name: "filezilla" },{ name: "postman" },])

const competences = ref([{name : "Conception d'applications en couche"}, {name: "Développement d'API REST"}, {name: "Développement s'applications web et mobile"}, {name: "CI/CD et DevOps"}, {name: "Méthodologie Agile"}, {name: "Clean code"}])

const getImageUrl = (logo) => {
  return new URL(`../assets/img/logos/${logo}.svg`, import.meta.url)
}

</script>

<template>
  <div class="text-slate-200 pb-6 grid grid-cols-2 gap-4">
    <div class="lg:pl-20 sm:pl-1">
      <h1 class="text-2xl font-bold pt-12 pb-2">Compétences</h1>
      <ul class="lg:text-xl sm:text-lg ml-2 font-bold ">
        <li class="pt-2" v-for="item in competences">
          {{ item.name }}
        </li>
      </ul>
    </div>
    <div class="lg:pr-20 sm:pr-1 sm:pl-14">
      <h1 class="text-2xl  font-bold pt-12 pb-2">Formation</h1>
      <ul class="lg:text-xl sm:text-lg ml-2">
        <li>
          <h1 class="font-bold">ForEach Academy</h1>
          <div class="text-slate-300"> Bacehelor Convepteur Développeur d'Applications (CDA)</div>
          <div class="font-bold text-slate-300 text-sm"> Sept 2023 - Juillet 2025</div>
        </li>
        <li class="pt-2">
          <h1 class="font-bold">FAC des sciences Jean-Perrin</h1>
          <div class="text-slate-300"> 3éme année de Licence en Informatique</div>
          <div class="font-bold text-slate-300 text-sm">Sept 2020 - Juillet 2021</div>
        </li>
        <li class="pt-2">
          <h1 class="font-bold">IUT de Lens</h1>
          <div class="text-slate-300"> Diplôme Universitaure de Technologie en Informatique</div>
          <div class="font-bold text-slate-300 text-sm">Sept 2018 - Juillet 2020</div>
        </li>
      </ul>
    </div>
  </div>
  <div class="text-slate-200 flex flex-wrap place-content-start">
      <h1 class="font-semibold text-xl pb-2">Langages, frameworks et outils</h1>
    </div>
    <div id="skills" class="flex flex-wrap animate-shimmer bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:400%_100%] rounded-lg shrink">
      <div
        class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          class="flex items-center justify-center md:justify-start md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li v-for="item in master" :key="item.name" class="justify-start m-3">
            <img :src="getImageUrl(item.name)" :alt="item.name" class="md:w-[50px] md:h-[50px] w-[25px] h-[25px]">
          </li>
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start md:[&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li v-for="item in master" :key="item.name" class="justify-start m-3">
            <img :src="getImageUrl(item.name)" :alt="item.name" class="md:w-[50px] md:h-[50px] w-[25px] h-[25px]">
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped></style>
<div class=" h-12 w-40 rounded-lg"></div>