<script setup>
import 'flowbite/dist/flowbite.js'

const handleClick = () => {
  navigator.clipboard.writeText("tdignoire@pm.me");
}

</script>

<template>
  <div class="md:text-4xl text-lg font-bold text-center text-slate-200">  
    <p class="py-14">
      Vous recrutez ? Mon profil vous plaît ?
    </p>
    <a href="mailto:tdignoire@pm.me" title="Envoyer un mail à tdignoire@pm.me" class="group md:text-5xl text-4xl text-blue-400 transition ease-in-out duration-200">N'hésitez pas <span aria-hidden="true" class="inline-block translate-x-0 group-hover:translate-x-3 transition-transform ease-in-out duration-200">📨</span></a>
  </div>
  <div class="flex gap-4 justify-center items-center pt-16 pb-24">
    <div>
      <button
        data-popover-target="popover-click" data-popover-trigger="click" data-popover-placement="bottom"
        class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full bg-[#73afeb] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10"
        type="button" @click="handleClick" title="Copier mon adresse e-mail">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"><i
            class="fa fa-envelope fa-lg" aria-hidden="true"></i></span></button>
        </div>
    <a href="https://www.linkedin.com/in/thomas-dignoire-882618281">
      <button
        class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full bg-[#0a66c2] hover:shadow-[#1DA1F2]/20 focus:shadow-[#1DA1F2]/20 active:shadow-[#1DA1F2]/10"
        type="button" title="Aller sur mon LinkedIn">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"><i
            class="fa fa-linkedin fa-lg" aria-hidden="true"></i></span></button>
    </a>
    <a href="https://gitlab.com/iDrack">
      <button
        class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full bg-[#e24329] hover:shadow-[#ea4c89]/20 focus:shadow-[#ea4c89]/20 active:shadow-[#ea4c89]/10"
        type="button" title="https://gitlab.com/iDrack">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <i class="fa fa-gitlab fa-2x" aria-hidden="true"></i></span></button>
    </a>
    <a href="https://github.com/iDrack">
      <button
        class="relative align-middle select-none font-sans font-medium text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-10 max-w-[40px] h-10 max-h-[40px] text-xs text-white shadow-md shadow-gray-900/10 hover:shadow-lg focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full bg-[#333333] hover:shadow-[#333333]/20 focus:shadow-[#333333]/20 active:shadow-[#333333]/10"
        type="button" title="https://github.com/iDrack">
        <span class="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <i class="fa fa-github fa-2x" aria-hidden="true"></i>
        </span>
      </button>
    </a>
  </div>

<div data-popover id="popover-click" role="tooltip" class="absolute z-10 invisible inline-block w-72 text-sm transition-opacity duration-300 border rounded-lg shadow-sm opacity-0 text-gray-400 border-gray-600 bg-gray-800">
    <div class="px-3 py-2 text-center">
        <p>E-mail copié dans le press-papier !</p>
    </div>
    <div data-popper-arrow></div>
</div>
  
</template>

<style scoped></style>
