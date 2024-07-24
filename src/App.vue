<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Bio from '@/components/Bio.vue';
import Social from './components/Social.vue';
</script>

<template>
  <header>
  </header>
  <main>
    <div
      class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]">
      <div class="md:container md:mx-auto sm:px-10 flex justify-center items-center text-slate-200">
        <Bio />
      </div>
      <footer class="h-50">
      <Social />
    </footer>
    </div>
  </main>

</template>

<style scoped>
</style>
