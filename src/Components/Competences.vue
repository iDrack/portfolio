<script setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import SkillItem from './SkillItem/SkillItem.vue';
import SpotlightCard from './SpotlightCard/SpotlightCard.vue';

const languages = ref([
  "HTML", "CSS",
  "Java",
  "Javascript", "Typescript",
  "Dart",
  "LUA",
  "MySQL", "SQLite", "PostgreSQL", "MongoDB",
  "Bash"
]);

const frameworks = ref([
  "Spring", "Hibernate", "Junit", "Vue.js", "Vite",
  "Pinia", "Express.js", "Flutter", "Tailwind",
]);

const tools = ref([
  "Linux", "git", "GitHub", "Github Actions", "GitLab", 
  "Docker", "Visual Studio Code", "IntelliJ", "WebStorm", "Android Studio",
  "Maven", "Gradle", "Node.js", "npm", "Figma", 
  "DBeaver", "Postman"
]);

const concepts = ref([
  "Développement d'applications web",
  "Développement d'API REST",
  "Conception d'applications en couche",
  "Conception & maquettage UI/UX",
  "CI/CD et DevOps",
  "Méthodologie Agile",
  "Clean code",
  "Gestion de projet"
]);

</script>

<template>
  <div class="text-slate-200">
    <h1 class="md:text-3xl text-xl font-bold py-10 text-center">Compétences :</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-2">
      <!-- Left column: Languages + Frameworks -->
      <div class="">
        <!-- Languages section -->
        <SpotlightCard class-name="spotlight" spotlight-color="rgba(255, 255, 255, 0.25)">
          <div class="">
            <div class="md:text-2xl text-lg pb-2 font-bold">
              <FontAwesomeIcon :icon="['fas', 'code']" class="text-[#35f248]" /> Langages :
            </div>
            <div class="grid grid-cols-3 lg:grid-cols-5 gap-1 items-center md:font-semibold">
              <template v-for="(item, index) in languages" :key="index">
                <SkillItem :name="item" :show-image="true" class="pt-4" />
              </template>
            </div>
          </div>
        </SpotlightCard>
        <!-- Frameworks section (below languages) -->
        <SpotlightCard class-name="spotlight" spotlight-color="rgba(255, 255, 255, 0.25)">
        <div class="">
          <div class="md:text-2xl text-lg font-bold pb-2">
            <FontAwesomeIcon :icon="['fas', 'compass-drafting']" class="text-[#347cda]" /> Frameworks :
          </div>
          <div class="grid grid-cols-3 lg:grid-cols-5 gap-1 items-center md:font-semibold">
            <template v-for="(item, index) in frameworks" :key="index">
              <SkillItem :name="item" :show-image="true" class="pt-4" />
            </template>
          </div>
        </div>
        </SpotlightCard>
      </div>
      <!-- Right column: Tools (full height) -->
        <SpotlightCard class-name="spotlight" spotlight-color="rgba(255, 255, 255, 0.25)">

      <div class="flex flex-col h-full">

        <div class="md:text-2xl text-lg font-bold pb-2">
          <FontAwesomeIcon :icon="['fas', 'wrench']" class="text-[#5d5e64]" /> Outils :
        </div>
        <div class="grid grid-cols-3 lg:grid-cols-5 gap-1 items-center md:font-semibold">
          <template v-for="(item, index) in tools" :key="index">
            <SkillItem :name="item" :show-image="true" class="pt-4" />
          </template>
        </div>
      </div>
      </SpotlightCard>
    </div>
    <!-- Méthodologies section (outside grid) -->
        <SpotlightCard class-name="spotlight" spotlight-color="rgba(255, 255, 255, 0.25)">

    <div class="">
      <div class="md:text-2xl text-lg font-bold pb-2">
        <FontAwesomeIcon :icon="['fas', 'brain']" class="text-[#d834cd]" /> Méthodologies :
      </div>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-2">
        <template v-for="(item, index) in concepts" :key="index">
          <div class="flex items-center md:font-semibold">
        <SkillItem :name="item" :show-image="false" />
          </div>
        </template>
      </div>
    </div>
    </SpotlightCard>
  </div>
</template>

<style scoped>
.spotlight{
  border-color: #333;
  background-color: #0b0b0bef;
  margin-top: 0.5rem;
}
</style>