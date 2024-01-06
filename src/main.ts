import { createApp } from 'vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify, ThemeDefinition } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { md3 } from 'vuetify/blueprints'
import './style.css'
import App from './App.vue'
import colors from 'vuetify/util/colors'
import { 
  createRouter,
  createWebHistory
} from 'vue-router';
import Home from './HomePage.vue';
import Bio from './BioPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/bio', component: Bio },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

const myCustomLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: colors.shades.white,
    surface: colors.grey.lighten5,
    primary: colors.blueGrey.lighten5,
    'primary-darken-1': colors.blueGrey.lighten4,
    secondary: colors.amber.lighten5,
    'secondary-darken-1': colors.amber.lighten4,
    error: colors.red.base,
    info: colors.yellow.base,
    success: colors.green.base,
    warning: colors.orange.base,
  },
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
.mount('#app')
