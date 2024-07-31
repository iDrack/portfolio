<script setup>
const handleClick = () => {

}
</script>

<template>
  <div class="flex justify-center items-center">
    <div>
      <div class="flex justify-center items-center">
        <img src="../assets/img/pfp_pro.png" alt="avatar" class="object-top h-[175px] w-[175px] !rounded-full" />
      </div>
      <h1 class="text-center font-bold text-2xl py-6"> Bonjour 👋 je suis Thomas Dignoire </h1>
      <h1 class="text-center font-bold text-5xl pb-4">
        <span
          class="animate-text-shimmer bg-clip-text text-transparent bg-[linear-gradient(110deg,#e2e8f0,45%,#1e293b,55%,#e2e8f0)] bg-[length:250%_100%]">Concepteur
          Développeur d'Applications</span>
      </h1>
      <p class="text-center text-lg"> Je conçois et développe des applications web et mobiles facile d'utilisation.</p>
      <p class="text-center text-lg"> Actuellement en formation à <a href="https://www.foreach-academy.fr/"
          class="group text-gray-200 hover:text-sky-600 transition ease-in-out duration-200">ForEach Academy <span
            aria-hidden="true"
            class="inline-block translate-x-0 group-hover:translate-x-1 transition-transform ease-in-out duration-200">→</span></a>
      </p>
      <div class="flex pt-4">
        <div class="grow"></div>
        <a href="mailto:tdignoire@pm.me"
          class="group [transform:translateZ(0)] px-6 py-3 rounded-3xl overflow-hidden bg-gray-200 relative before:absolute before:bg-[#63e] before:top-1/2 before:left-1/2 before:h-8 before:w-8 before:-translate-y-1/2 before:-translate-x-1/2 before:rounded-full before:scale-[0] before:opacity-0 hover:before:scale-[6] hover:before:opacity-100 before:transition before:ease-in-out before:duration-500">
          <span class="relative z-0 font-bold text-xl text-black group-hover:text-gray-200 transition ease-in-out duration-500">Me contacter</span></a>
        <div class="grow"></div>
      </div>
    </div>
  </div>

</template>

<style scoped></style>