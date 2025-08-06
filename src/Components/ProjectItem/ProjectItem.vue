<script setup>
import { ref } from 'vue';
import SpotlightCard from '../SpotlightCard/SpotlightCard.vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
const props = defineProps({
  title: String,
  description: String,
  content: String,
  link: String,
  websiteLink: String,
  technos: Array,
  image: String,
  imgSize: String,
});

const isActive = ref(false)

const handleClick = () => {
  isActive.value = !isActive.value;
}

function getImageUrl() {
  return new URL(`../../assets/img/${props.image}`, import.meta.url)
}

const getLogoUrl = (logo) => {
  logo = logo.toLowerCase();
  logo = logo.replace(/ /g, '_');
  if (logo.includes('.')) {
    logo = logo.split('.')[0];
  }
  return new URL(`/src/assets/img/logos/${logo}.svg`, import.meta.url)
}

const imgWidth = () => {
  return "" + props.imgSize + ""
}
</script>

<template>
  <SpotlightCard class-name="spotlight" spotlight-color="rgba(255, 255, 255, 0.25)">
    <div class="text-slate-200 h-full flex flex-col" @click="handleClick">
      <h1 class="text-center md:text-3xl text-xl font-bold">
        {{ props.title }}
      </h1>

      <div class="flex-grow flex flex-col justify-center">
        <div v-if="isActive">
          <div class="md:text-lg text-xs py-3 text-center whitespace-pre-line">
            <span v-html="props.content"></span>
          </div>
        </div>
        <div v-else>
          <div class="py-3 flex justify-center">
            <!--Thumbnail-->
            <img :src="getImageUrl()" :alt="props.titre" :style="{ width: imgWidth() + '%' }"
              :class="'hidden md:block !rounded-xl h-fit'">
          </div>
          <div class=" md:text-xl text-lg font-semibold text-center">
            <!--Description-->
            {{ props.description }}
          </div>
        </div>
      </div>

      <div v-if="isActive" class="mt-auto">
        <hr class="text-center md:pt-4 pt-2" style="border-color: #2d2d2d;" />
        <div class="md:pb-4 pb-2 flex justify-around">
          <!--Technos-->
          <img v-for="techno in technos" :key="techno.index" :src="getLogoUrl(techno)" :alt="props.name"
            class="md:w-[24px] md:h-[24px] w-[16px] h-[16px]">
        </div>
      </div>

      <div class="mt-auto">
        <hr class="text-center mb-6" style="border-color: #2d2d2d;" />
        <div class="flex justify-around">
          <a :href="props.link" title="Accéder au dépôt." target="_blank">
            <FontAwesomeIcon v-if="props.link.includes('gitlab.com')" :icon="['fab', 'gitlab']" size="2x"
              class="transition-transform duration-200 hover:scale-125" />
            <FontAwesomeIcon v-else :icon="['fab', 'github']" size="2x"
              class="transition-transform duration-200 hover:scale-125" />
          </a>
          <a v-if="props.websiteLink" :href="props.websiteLink" title="Visiter l'application." target="_blank">
            <FontAwesomeIcon :icon="['fas', 'link']" size="2x"
              class="transition-transform duration-200 hover:scale-125" />
          </a>

        </div>
      </div>
    </div>
  </SpotlightCard>
</template>

<style scoped>
.spotlight {
  border-color: #333;
  background-color: #0b0b0bef;
  margin-top: 0.5rem;
  cursor: pointer;
}
</style>