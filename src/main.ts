import { createApp } from 'vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faBriefcase
} from '@fortawesome/free-solid-svg-icons'
import './style.css'
import App from './App.vue'
import colors from 'vuetify/util/colors'
import { 
  createRouter,
  createWebHistory
} from 'vue-router';
import Home from './HomePage.vue';
import Career from './CareerPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/career', component: Career },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

library
.add(
  faLinkedin,
  faGithub,
  faHome,
  faBriefcase
)

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
 /*  colors: {
    background: colors.shades.white,
    surface: colors.grey.lighten5,
    primary: '80b7db',
    'primary-darken-1': '70add7',
    secondary: 'e7d2c5',
    'secondary-darken-1': 'e1c7b7',
    error: colors.red.base,
    info: colors.yellow.base,
    success: colors.green.base,
    warning: colors.orange.base,
  }, */
}

const vuetify = createVuetify({
  components,
  directives,
  blueprint: md3,
  theme: {
    defaultTheme: 'myCustomLightTheme',
    themes: {
      myCustomLightTheme,
    },
  }
})

createApp(App)
.use(vuetify)
.use(router)
.component('font-awesome-icon', FontAwesomeIcon)
.mount('#app')
