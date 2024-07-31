<script setup>

const props = defineProps({
  lien: String,
  titre: String,
  imgPath: String,
  description: String,
  description2: String,
  aDroite: Boolean,
  techs: [],
  liensExtras: [],
})

function getImageUrl() {
  return new URL(`../assets/img/${props.imgPath}`, import.meta.url)
}
</script>

<template>
  <div class="text-slate-200">
    <h1 class="font-bold text-4xl">{{ props.titre }}</h1>
    <div class="flex item-center grow justify-evenly">
      <div class="pr-4 text-xl">
        <p class="py-4 pl-4"> {{ props.description }}</p>
        <p class="pl-4"> {{ props.description2 }}</p>

        <div v-if="props.liensExtras.length > 0" class="pt-6">
          <h2 class="font-bold">Aller voir le projet : </h2>
          <ul class="pl-4">
            <li v-for="e in props.liensExtras">
              <a :href="e" class="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
                {{ e }}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="">
        <a :href="props.lien" v-if="imgPath">
          <img :src="getImageUrl()" :alt="props.titre" class="!rounded-3xl">
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
