<script setup lang="ts">
  import { mdiClose } from '@mdi/js';
  import { useBlogPostsStore } from '../store'
  const blogPosts = useBlogPostsStore();
</script>

<template>
  <v-card
    min-width="100%"
    min-height="100%"
  >
    <template #append>
      <v-icon
        :icon="mdiClose"
        @click="()=> blogPosts.selectPost(undefined)"
      />
    </template>
    <v-card-title>{{ blogPosts.selectedPost?.title }}</v-card-title>
    <v-card-subtitle>{{ blogPosts.selectedPost?.date }}</v-card-subtitle>
    <v-card-text>
      <render-markdown :source="blogPosts.selectedPost?.content" />
    </v-card-text>
  </v-card>
</template>