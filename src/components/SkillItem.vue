<script setup>
const props = defineProps({
  name: {
    type: String,
  },
  showImage: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const getImageUrl = (logo) => {
  logo = logo.toLowerCase();
  logo = logo.replace(/ /g, '_');
  if (logo.includes('.')) {
    logo = logo.split('.')[0];
  }
  return new URL(`../assets/img/logos/${logo}.svg`, import.meta.url)
}

</script>

<template>
  <span class="flex items-center gap-2">
    <img v-if="showImage" :src="getImageUrl(props.name)" :alt="props.name"
      class="md:w-[32px] md:h-[32px] w-[24px] h-[24px]">
    <span>{{ props.name }}</span>
  </span>

</template>

<style scoped></style>