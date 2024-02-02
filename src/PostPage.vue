<script setup lang="ts">
  import colors from 'vuetify/util/colors'
  import { Post, useBlogPostsStore } from './store'
  import { useRoute, useRouter } from 'vue-router';
  import PostDisplay from './PostPage/PostDisplay.vue';
  import _ from 'lodash';
  import { computed } from 'vue';
  import { onBeforeMount, onBeforeUpdate } from 'vue';
  // this is the page that displays a
  // blog posts we get the title of the post from the params

  // find the post we are supposed to be showing
  const blogPosts = useBlogPostsStore();
  const route = useRoute();
  const router = useRouter();
  const selectedPost = computed(()=> {
    return blogPosts.allPosts.find((post) => post.title.toLowerCase() === _.toLower(route.params['title'] as string))
  });
  function checkPost() {
    if (selectedPost.value === undefined) {
      if (router.options.history.state['back'] !== undefined) {
        router.back();
      } else {
        router.push({
          path: '/blog'
        })
      }
    }
  }
  onBeforeMount(checkPost);
  onBeforeUpdate(checkPost);
</script>

<template>
  <v-sheet
    :color="colors.grey.lighten4"
    min-width="100%"
    min-height="100%"
  >
    <v-container>
      <v-row>
        <v-spacer
          class="hidden-sm-and-down"
        />
        <v-col 
          cols="12"
          md="10"
        >
          <PostDisplay
            v-if="selectedPost"
            :post="(selectedPost as Post)"
          />
        </v-col>
        <v-spacer
          class="hidden-sm-and-down"
        />
      </v-row>
    </v-container>
  </v-sheet>
</template>
