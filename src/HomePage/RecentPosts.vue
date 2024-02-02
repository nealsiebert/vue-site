<script setup lang="ts">
  import { useBlogPostsStore } from '../store';
  import { onBeforeMount } from 'vue';
  import PostsPreview from '../PostsPreview.vue';
  const blogPosts = useBlogPostsStore();
  onBeforeMount(() => {
    blogPosts.resetStore();
  });
</script>

<template>
  <v-row>
    <v-col>
      <v-card
        min-width="100%"
        min-height="100%"
      >
        <v-card-title class="text-center">
          I Write Stuff Too
        </v-card-title>
        <v-card-text>
          <PostsPreview 
            md="4"
            cols="12"
            :posts="blogPosts.recent"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

