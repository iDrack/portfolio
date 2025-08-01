<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Bio from '@/components/Bio.vue';
import Social from './components/Social.vue';
import Projet from './components/Projet.vue';
import { ref } from 'vue';
import Competences from './components/Competences.vue';
import 'flowbite/dist/flowbite.js'
import Squares from './Backgrounds/Squares/Squares.vue';

const projets = ref([])
projets.value.push({
  titre: "La bonne Franquette",
  description: "La bonne Franquette est une solution de gestion de commandes destinée aux petits restaurateurs. Elle se démarque par sa facilité de mise en place ne nécessitant pas de système informatique spécialisé.",
  description2: "Application réalisée dans le cadre de mon bachelor à ForEach Academy. Ce projet m\'a permis de mettre en oeuvre ce que j\'ai vu au cours de ce même bachelor, notamment : la conception d\'application en couche, le développement mobile multiplateforme, le développement d\'API REST, les principes DevOps.",
  imgPath: "lbf.png", lien: "https://franfran62.github.io/la-bonne-franquette-website/",
  liensExtras: [
    "https://github.com/Franfran62/la-bonne-franquette-appli",
    "https://github.com/iDrack/la-bonne-franquette-back",
    "https://franfran62.github.io/la-bonne-franquette-website/",
  ]
})

projets.value.push({
  titre: "ForEach Pizzas",
  description: "Application Flutter utilisant la solution de Google Firebase comme back-end. Cette application a été réalisée lors de mon cursus chez ForEach Academy afin de pratiquer le développement d'application mobile en Flutter.",
  description2: "ForEach Pizza est une application mobile de commande groupé de pizza. Elle permet donc la prise de commande groupé, d'afficher un récapitulatif de la commande par utilisateur ainsi qu'une répartition des prix par utilisateurs. Vous pouvez rejoindre le programme de test en cliquant sur le second lien.",
  imgPath: "fpizza.png", lien: "https://gitlab.com/flutter_foreach/flutter_exo_1",
  liensExtras: [
    "https://gitlab.com/flutter_foreach/flutter_exo_1",
    "https://appdistribution.firebase.dev/i/7867194136919c95"
  ]
}
)

projets.value.push({
  titre: "Le Bar'App",
  description: "Application web de gestion de commandes de bar à cocktails. Réalisée dans le cadre de l'examen de première année du bachelor CDA de ForEach Academy. Le projet devait être réalisé en moins de 4 jours. L'application a un design mobile first avec un accès client et un accès barman.",
  description2: "Le projet avait pour contraintes: les langages Java, SpringBoot, Typescript, Vue et MySQL, maquettes du projet sous Figma, MCD du back-end, création d'un dockefile pour le fornt-end et un autre pour le back-end ainsi qu'une démonstration devant un jury.",
  imgPath: "barapp2.png", lien: "https://gitlab.com/barapp",
  liensExtras: [
    "https://gitlab.com/barapp"
  ]
})

projets.value.push({
  titre: "Youtube to MP3",
  description: "Petite API REST en Node.js et Express permettant de télécharger des vidéos Youtube et de les convertir en fichier mp3. L'API utilise un script bash pour télécharger et convertir les vidéos, ce script utilise youtube-dl plus et ffmpeg.",
  description2: "Ce projet m'a servi d'introduction au framework Express et à l'environnement Node.js.",
  imgPath: "", lien: "https://gitlab.com/script_dump/youtube_to_mp3",
  liensExtras: [
    "https://gitlab.com/script_dump/youtube_to_mp3"
  ]
})

projets.value.push({
  titre: "LabyJava",
  description: "Projet de fin d'année de Licence 3 à la FAC Jean perrin reprenant le jeu de société Labyrinthe. Le projet venait tester nos compétences en Programmation Orienté Objet ainsi qu'en Interaction Humain-Machine.",
  description2: "Application client lourd réalisée en Java et JavaSwing.",
  imgPath: "labyjava.png", lien: "https://gitlab.com/github_import2/LabyJava",
  liensExtras: [
    "https://gitlab.com/github_import2/LabyJava"
  ]
})

projets.value.push({
  titre: "Naval Battle",
  description: "Application reprenant le jeu de société \"La Bataille Navale réalisé\" en C. Premier projet de programmation de la Licence 3 de la FAC de Jean-Perrin, le projet visait à évaluer nos compétences en programmation, algorithmie et gestion de ressources mémoire.",
  description2: "Le projet avait des contraintes tel que les navires composant la flotte des joueurs, la création d'une IA afin de pouvoir jouer contre l'ordinateur, la possibilité de sauvegarder une partie, etc. ",
  imgPath: "bn.png", lien: "https://gitlab.com/github_import2/Naval_Battle",
  liensExtras: [
    "https://gitlab.com/github_import2/Naval_Battle"
  ]
})

projets.value.push({
  titre: "TriShell",
  description: "Script Bash mimant les outils \"tree\" et \"ls\" des systèmes d'exploitation GNU/Linux. Projet de la Licence 3 de la FAC de Jean Perrin servant à évaluer nos compétences en script Shell et connaissances des systèmes Unix.",
  description2: "Le script devait pouvoir lister le contenu du répertoire et de trier le résultat selon des instructions passées en paramètres.",
  imgPath: "",
  lien: "",
  liensExtras: ["https://gitlab.com/github_import2/TriShell"]
})

projets.value.push({
  titre: "Portail des IUT",
  description: "Site web venant remettre au goût du jour le portail des IUT (datant d'avant 2018).",
  description2: "Le site devait mettre à jour l'ancien portail des IUT en utilisant un web design plus moderne.Premier projet du DUT Informatique de LIUT de Lens, visant à évaluer nos compétences en HTML et CSS / Bootstrap ainsi qu'en web design et responsive design.",
  imgPath: "piut.png",
  lien: "https://gitlab.com/github_import2/Portail-IUT",
  liensExtras: ["https://gitlab.com/github_import2/Portail-IUT", "https://www.iut-informatique.fr/"]
})

</script>

<template>
  <header>
  </header>
  <main class="relative min-h-screen">
    <div class="fixed inset-0 z-0">
       <Squares
      direction="diagonal"
      :speed="0.5"
      :squareSize="40"
      borderColor="#555"
      hoverFillColor="#fff"
    />
    </div>

    <div class="relative px-5 py-24">
   
      <div class="md:container md:mx-auto sm:px-10 flex justify-center items-center text-slate-200">
        <Bio />
      </div>
      <div class="md:container md:mx-auto sm:px-10 items-center justify-center">
        <Competences />
      </div>
      <div class="text-center text-slate-200 pt-8 pb-16 flex flex-row justify-center items-center">
        <i class="fa fa-arrow-down fa-sm"></i>
        <div class="font-bold md:px-16 px-4 md:text-2xl text-lg">Voici quelques projets</div>
        <i class="fa fa-arrow-down fa-sm"></i>
      </div>
      <div>
        <!--         <div v-for="(item, index) in projets" class="md:container md:mx-auto sm:px-10 justify-center items-center">
          <Projet class="pb-8" :titre="item.titre" :description="item.description" :description2="item.description2"
                  :img-path="item.imgPath" :lien="item.lien" :liens-extras="item.liensExtras" :a-droite="true"/>
        </div> -->

        <div class="md:text-3xl text-xl font-bold text-center text-slate-200">
          <p class="pt-6 pb-14">
            Et bien d'autres !<br>Pourquoi ne pas aller faire un tour sur mon <a href="https://github.com/iDrack"
              class="relative before:absolute before:bg-[#63e] before:bottom-0 before:left-0 before:h-full before:w-full before:origin-bottom before:scale-y-[0.35] hover:before:scale-y-100 before:transition-transform before:ease-in-out before:duration-500"><span
                class="relative">GitHub</span></a> 👀 ?
          </p>
        </div>

      </div>
      <footer class="md:pb-52 pb-48">
        <Social />
      </footer>
    </div>
  </main>

</template>

<style scoped>
main {
  background-color: black; /* Couleur de fond de secours */
}
</style>
