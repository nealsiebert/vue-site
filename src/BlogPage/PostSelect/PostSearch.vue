<script setup lang="ts">
  import { 
    mdiMagnify,
  } from '@mdi/js'
  import { ref, watch } from 'vue';
  import _ from 'lodash';
  import { useBlogPostsStore } from '../../store'
  const blogPosts = useBlogPostsStore();
  const textValue = ref(blogPosts.searchFilter);
  watch(textValue, _.debounce((search: string | null) => {
    if (search === '') {
      blogPosts.searchFilter = null;
    } else {
      blogPosts.searchFilter = search;
    }
  }))
</script>

<template>
  <v-text-field
    v-model="textValue"
    hide-details
    :prepend-icon="mdiMagnify"
    single-line
    placeholder="Search"
    clearable
  />
</template>