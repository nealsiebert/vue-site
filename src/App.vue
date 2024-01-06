<script setup lang="ts">
  import { ref } from 'vue'
  const drawer = ref(true);
</script>

<template>
  <v-app>
    <v-app-bar
      app
      elevation="1"
      color="secondary"
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-avatar>
        <v-img
          src="/src/assets/profile.jpg"
          alt="Neal"
        />
      </v-avatar>
      <v-app-bar-title>Neal Siebert</v-app-bar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="primary"
    >
      <v-list-item>
        <router-link to="/">
          Home
        </router-link>
      </v-list-item>
      <v-list-item>
        <router-link to="/bio">
          Bio
        </router-link>
      </v-list-item>
    </v-navigation-drawer>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
