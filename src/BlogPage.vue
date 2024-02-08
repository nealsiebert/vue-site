<script setup lang="ts">
  import colors from 'vuetify/util/colors'
  import { useBlogPostsStore, usePagesStore } from './store'
  import { ref, onBeforeMount } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import FilterDrawer from './BlogPage/FilterDrawer.vue'
  import PostSelect from './BlogPage/PostSelect.vue';
  import _ from 'lodash';
  import {
    arrayHelper,
  } from './BlogPage/paramHelpers';
  // its a blog folks
  
  // keep track of the state of the
  // filter drawer
  const drawer = ref(false);
  function toggleDrawer() {
    drawer.value = !drawer.value;
  }

  // some pages select blog posts or
  // set filters based on query params
  // check that here when the page
  // first mounts and clear the query
  // params
  const blogPosts = useBlogPostsStore();
  const pages = usePagesStore();
  const route = useRoute();
  const router = useRouter();
  onBeforeMount(() => {
    if (!pages.lastPage.startsWith('/blog')) {
      blogPosts.resetStore();
      if (route.query['tag']) {
        blogPosts.tagFilter = arrayHelper(route.query['tag']);
      }
      if (route.query['series']) {
        blogPosts.seriesFilter = arrayHelper(route.query['series']);
      }
      router.replace({
        query: {},
      });
    }
  });
</script>

<template>
  <FilterDrawer
    :drawer="drawer"
    @drawer-toggle="toggleDrawer"
  />
  <v-sheet
    :color="colors.grey.lighten4"
    min-width="100%"
    min-height="100%"
  >
    <v-container>
      <v-row>
        <v-spacer
          class="hidden-md-and-down"
        />
        <v-col 
          cols="12"
          md="10"
        >
          <PostSelect 
            @filter-toggle="toggleDrawer" 
          />
        </v-col>
        <v-spacer
          class="hidden-md-and-down"
        />
      </v-row>
    </v-container>
  </v-sheet>
</template>
