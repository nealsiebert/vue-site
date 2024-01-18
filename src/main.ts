import { createApp } from 'vue'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faLinkedin,
  faGithub
} from '@fortawesome/free-brands-svg-icons'
import {
  faHome,
  faBriefcase,
  faLaptopCode,
  faBlog,
  faEnvelope,
  faArrowRight,
  faArrowLeft,
  faFile,
  faCalendarDays,
  faIndustry,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'
import {
  faLightbulb,
} from '@fortawesome/free-regular-svg-icons'
import './style.css'
import App from './App.vue'
import { 
  createRouter,
  createWebHistory
} from 'vue-router';
import { createPinia } from 'pinia'
import Home from './HomePage.vue';
import Career from './CareerPage.vue';
import Blog from './BlogPage.vue';
import RenderMarkdownVue from './RenderMarkdown.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/career', component: Career },
  { path: '/blog', component: Blog },
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
  faBriefcase,
  faLaptopCode,
  faBlog,
  faLightbulb,
  faEnvelope,
  faArrowRight,
  faArrowLeft,
  faFile,
  faCalendarDays,
  faIndustry,
  faGraduationCap
)



const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: {
      elevation: 0
    }
  },
})

const pinia = createPinia();

createApp(App)
.use(vuetify)
.use(router)
.use(pinia)
.component('font-awesome-icon', FontAwesomeIcon)
.component('render-markdown', RenderMarkdownVue)
.mount('#app')
