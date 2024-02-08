import Vue, { createApp } from 'vue'
import 'vuetify/styles'
import './style.css'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg';
import { fa } from 'vuetify/iconsets/fa-svg';
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
  faEnvelope,
  faRss,
  faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons'
import App from './App.vue'
import { 
  createRouter,
  createWebHistory
} from 'vue-router';
import { createPinia } from 'pinia'
import RenderMarkdownVue from './RenderMarkdown.vue';
import shave from './shave';
import { usePagesStore } from './store';

// All my routes
const routes = [
  { path: '/', component: () => import('./HomePage.vue') },
  { path: '/career', component: () => import('./CareerPage.vue') },
  { path: '/blog', component: () => import('./BlogPage.vue') },
  { path: '/blog/:title', component: () => import('./PostPage.vue') },
  // the 404 page this matches everything
  { path: '/:pathMatch(.*)*', component: () => import('./404Page.vue')}
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  // make sure when we change pages we go back to the top
  // of the page
  scrollBehavior(/*to, from,  savedPosition */) {
    // always scroll to top
    return { top: 0 }
  },
});

router.beforeEach((_to, from) => {
  const pagesStore = usePagesStore();
  pagesStore.lastPage = from.path;
});

// only use the icons I need
library
.add(
  faLinkedin,
  faGithub,
  faEnvelope,
  faRss,
  faEllipsisVertical,
)

const vuetify = createVuetify({
  components,
  directives,
  // use js icons so tree shaking works
  icons: {
    aliases,
    defaultSet: 'mdi',
    sets: {
      mdi,
      fa,
    }
  },
  defaults: {
    global: {
      // I like things flat
      elevation: 0
    }
  },
})

const pinia = createPinia();

const app = createApp(App);
app.use(vuetify)
.use(router)
.use(pinia)
// add our custom plugin
.use(shave)
// you need this for c-icon to render
// font awesome icons correctly
.component('font-awesome-icon', FontAwesomeIcon)
// add our custom tag
.component('render-markdown', RenderMarkdownVue)
.mount('#app');

