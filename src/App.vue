<script setup lang="ts">
  import { ref } from 'vue'
  import AppBar from './App/AppBar.vue'
  import NavDrawer from './App/NavDrawer.vue'
  const drawer = ref(true);
  function toggleDrawer() {
    drawer.value = !drawer.value;
  }
</script>

<template>
  <v-app>
    <AppBar @nav-toggle="toggleDrawer" />
    <NavDrawer
      :drawer="drawer"
      @drawer-toggle="toggleDrawer"
    />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
