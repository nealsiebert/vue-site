<script setup lang="ts">
  import { 
    mdiChevronLeft,
    mdiChevronRight,
  } from '@mdi/js'
  import { useBlogPostsStore } from '../../store'
  const blogPosts = useBlogPostsStore();
</script>

<template>
  <v-btn
    icon
    :disabled="!blogPosts.hasPrevPage"
  >
    <v-icon
      :icon="mdiChevronLeft"
      @click="blogPosts.prevPage()"
    />
  </v-btn>
  <v-btn 
    icon
    :disabled="!blogPosts.hasNextPage"
  >
    <v-icon
      :icon="mdiChevronRight"
      :disabled="blogPosts.hasNextPage"
      @click="blogPosts.nextPage()"
    />
  </v-btn>
</template>