<script setup>
import { onBeforeMount, ref } from 'vue';

const langages = ref([{ name: "c" }, { name: "css" }, { name: "dart" }, { name: "html" }, { name: "java" }, { name: "javascript" }, { name: "python" }, { name: "typescript" }, { name: "vite" }, { name: "vue" }])
const frameworks = ref([{ name: "bootstrap" }, { name: "express" }, { name: "flutter" }, { name: "hibernate" }, { name: "junit" }, { name: "maven" }, { name: "nodejs" }, { name: "pinia" }, { name: "spring" }, { name: "tailwind" },])
const systemes = ref([{ name: "bash" }, { name: "linux" }, { name: "arch" }])
const donnees = ref([{ name: "mongodb" }, { name: "mysql" }, { name: "postgresql" }, { name: "sqlite" },])
const devops = ref([{ name: "docker" }, { name: "git" }, { name: "github" }, { name: "githubaction" }, { name: "gitlab" }])
const outils = ref([{ name: "dbeaver" }, { name: "eclipse" }, { name: "figma" }, { name: "filezilla" }, { name: "gradle" }, { name: "intellij" }, { name: "npm" }, { name: "postman" },])

const getImageUrl = (logo) => {
  console.log(`${logo}`);
  return new URL(`../assets/img/logos/${logo}.svg`, import.meta.url)
}

console.log({ langages });

</script>

<template>
  <h1 class="text-2xl text-slate-200 font-bold pt-14 pb-10">Compétences</h1>
  <div class="text-slate-200">
    <div>
      <h1>Langages</h1>
      <div>
        <div v-for="item in langages" :key="item.name" class="flex flex-wrap justify-start">
          <img :src="getImageUrl(item.name)" :alt="item.name" class="p-1 w-[50px] h-[50px]">
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
