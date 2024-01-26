<script setup lang="ts">
  import colors from 'vuetify/util/colors'
  import { useBlogPostsStore } from './store'
  import { ref, onBeforeMount } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import FilterDrawer from './BlogPage/FilterDrawer.vue'
  import PostSelect from './BlogPage/PostSelect.vue';
  import PostDisplay from './BlogPage/PostDisplay.vue';
  import _ from 'lodash';
  import {
    arrayHelper,
    singleHelper
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
  const route = useRoute();
  const router = useRouter();
  onBeforeMount(() => {
    blogPosts.resetStore();
    if (route.query['title']) {
      blogPosts.selectPost(singleHelper(route.query['title']));
    }
    if (route.query['tag']) {
      blogPosts.tagFilter = arrayHelper(route.query['tag']);
    }
    if (route.query['series']) {
      blogPosts.seriesFilter = arrayHelper(route.query['series']);
    }
    router.replace({
      path: route.path,
      query: {},
    });
  });
  // below is where we switch between showing the
  // blog posts content or the blog preview based
  // on if there is a blogPosts.selectedPost or not
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
    <v-row>
      <v-spacer
        class="hidden-sm-and-down"
      />
      <v-col 
        sm="12"
        lg="10"
      >
        <PostSelect 
          v-if="!blogPosts.selectedPost"
          @filter-toggle="toggleDrawer" 
        />
        <PostDisplay v-if="!!blogPosts.selectedPost" />
      </v-col>
      <v-spacer
        class="hidden-sm-and-down"
      />
    </v-row>
  </v-sheet>
</template>