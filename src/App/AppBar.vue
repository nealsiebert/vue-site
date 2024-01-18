<script setup lang="ts">
  import SocialIcon from './AppBar/SocialIcon.vue';
  defineEmits(['navToggle'])
</script>

<template>
  <v-app-bar
    app
  >
    <v-app-bar-nav-icon @click="$emit('navToggle')" />
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
      transform="left-12"
    />
    <SocialIcon 
      href="https://github.com/nealsiebert"
      icon="fa-brands fa-github"
      transform="left-8"
    />
    <SocialIcon 
      href="mailto:nealsiebert@gmail.com"
      icon="fa-solid fa-envelope"
      transform="left-4"
    />
  </v-app-bar>
</template>
