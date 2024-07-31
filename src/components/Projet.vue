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
    <h1 class="font-bold md:text-4xl text-xl">{{ props.titre }}</h1>
    <div class="flex flex-wrap md:item-center grow md:justify-evenly justify-center">
      <div class="px-4 md:text-xl text-sm md:w-3/5">
        <p class="py-4"> {{ props.description }}</p>
        <p class=""> {{ props.description2 }}</p>

        <div v-if="props.liensExtras.length > 0" class="pt-6 content-start">
          <h2 class="font-bold">Aller voir le projet : </h2>
          <ul class="pl-4">
            <li v-for="e in props.liensExtras">
              <a :href="e" class="md:text-lg text-[10px] break-all relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 md:after:h-[2px] after:h-[1px] after:w-full after:origin-bottom-left after:scale-x-100 hover:after:origin-bottom-right hover:after:scale-x-0 after:transition-transform after:ease-in-out after:duration-300">
                {{ e }}
              </a>
            </li>
          </ul>
        </div>
      </div>
       <div class="pt-3 md:pt-0 md:w-2/5 flex md:justify-center">
        <a :href="props.lien" v-if="imgPath" class="">
          <img :src="getImageUrl()" :alt="props.titre" class="!rounded-xl h-fit md:w-[100%]">
        </a>
      </div>
    </div>
  </div>

</template>

<style scoped></style>
