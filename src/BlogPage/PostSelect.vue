<script setup lang="ts">
  import { 
    mdiFilter,
  } from '@mdi/js'
  import _ from 'lodash';
  import { useBlogPostsStore } from '../store'
  import Pagination from './PostSelect/PostPagination.vue'
  import Search from './PostSelect/PostSearch.vue'
  import PostsPreview from '../PostsPreview.vue'
  const blogPosts = useBlogPostsStore();
  defineEmits(['filterToggle'])
</script>

<template>
  <v-card
    min-width="100%"
    min-height="100%"
  >
    <v-toolbar
      color="white"
    >
      <v-btn icon>
        <v-icon
          :icon="mdiFilter"
          @click="$emit('filterToggle')"
        />
      </v-btn>
      <v-spacer />
      <Search />
      <v-spacer />
      <Pagination />
    </v-toolbar>
    <v-card-text>
      <PostsPreview
        lg="6"
        sm="12"
        :posts="blogPosts.page"
        @select-post="(title) => blogPosts.selectPost(title)"
      />      
    </v-card-text>
    <v-toolbar
      color="white"
    >
      <v-spacer />
      <Pagination />
      <v-spacer />
    </v-toolbar>
  </v-card>
</template>