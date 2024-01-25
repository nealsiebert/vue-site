<script setup lang="ts">
  import AppBar from './App/AppBar.vue'
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
