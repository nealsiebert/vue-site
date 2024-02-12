<script setup lang="ts">
  import AboutMe from './HomePage/AboutMe.vue'
  import Interests from './HomePage/MyInterests.vue'
  import RecentPosts from './HomePage/RecentPosts.vue'
  import SignUpModal from './SignUpModal.vue';
  // This page displays so basic info about me,
  // what I am interested in, and my recent blog
  // posts
</script>

<template>
  <SignUpModal />
  <v-container>
    <AboutMe />
    <Interests />
    <RecentPosts />
  </v-container>
</template>

