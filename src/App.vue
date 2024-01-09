<script setup lang="ts">
  import { ref } from 'vue'
  import SocialIcon from './App/SocialIcon.vue'
  const drawer = ref(true);
</script>

<template>
  <v-app>
    <v-app-bar
      app
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-avatar>
        <v-img
          src="/profile.jpg"
          alt="Neal"
        />
      </v-avatar>
  
      <v-app-bar-title>
        Neal Siebert
      </v-app-bar-title>
      <SocialIcon 
        href="https://www.linkedin.com/in/nealsiebert/"
        icon="fa-brands fa-linkedin"
        transform="left-8"
      />
      <SocialIcon 
        href="https://github.com/nealsiebert"
        icon="fa-brands fa-github"
        transform="left-4"
      />
      <SocialIcon 
        href="mailto:nealsiebert@gmail.com"
        icon="fa-solid fa-envelope"
        transform=""
      />
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list-item>
        <router-link to="/">
          <font-awesome-icon
            icon="fa-solid fa-home"
          />
          Home
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/career">
          <font-awesome-icon
            icon="fa-solid fa-briefcase"
          />
          Career
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/blog">
          <font-awesome-icon
            icon="fa-solid fa-blog"
          />
          Blog
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/tech">
          <font-awesome-icon
            icon="fa-solid fa-laptop-code"
          />
          Tech
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/product">
          <font-awesome-icon
            icon="fa-regular fa-lightbulb"
          />
          Product
        </router-link>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
