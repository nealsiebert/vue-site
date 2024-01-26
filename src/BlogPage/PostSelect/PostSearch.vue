<script setup lang="ts">
  import { 
    mdiMagnify,
  } from '@mdi/js'
  import { ref, watch } from 'vue';
  import _ from 'lodash';
  import { useBlogPostsStore } from '../../store'
  const blogPosts = useBlogPostsStore();
  // make a copy of the value so we
  // can watch for changes and debounce
  // to be sure we aren't spamming search updates
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