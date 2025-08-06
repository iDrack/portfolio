import './assets/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faWrench, faCode, faBrain, faCompassDrafting, faRightLong, faEnvelope, faLink } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faGitlab, faLinkedin } from '@fortawesome/free-brands-svg-icons' // Ajout de l'import

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faWrench)
library.add(faCompassDrafting)
library.add(faBrain)
library.add(faCode)
library.add(faRightLong)
library.add(faGithub)
library.add(faGitlab)
library.add(faLinkedin)
library.add(faEnvelope)
library.add(faLink)

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
app.mount('#app')