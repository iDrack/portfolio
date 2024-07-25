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

const getImageUrl = (logo) => {
  return new URL(`../assets/img/logos/${logo}.svg`, import.meta.url)
}
</script>

<template>
  <h1 class="text-2xl text-slate-200 font-bold pt-14 pb-10">Compétences</h1>
  <div class="text-slate-200 flex flex-wrap place-content-start">
      <h1 class="font-semibold text-xl pb-2">Langages, frameworks et outils</h1>
    </div>
    <div id="skills" class="flex flex-wrap animate-shimmer bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-[length:400%_100%] rounded-lg shrink">
      <div
        class="w-full inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li v-for="item in master" :key="item.name" class="justify-start m-3">
            <img :src="getImageUrl(item.name)" :alt="item.name" class="w-[50px] h-[50px]">
          </li>
        </ul>
        <ul
          class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
          <li v-for="item in master" :key="item.name" class="justify-start m-3">
            <img :src="getImageUrl(item.name)" :alt="item.name" class="w-[50px] h-[50px]">
          </li>
        </ul>
      </div>
    </div>
</template>

<style scoped></style>
<div class=" h-12 w-40 rounded-lg"></div>