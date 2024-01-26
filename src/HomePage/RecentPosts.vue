<script setup lang="ts">
  import { useBlogPostsStore } from '../store';
  import { onBeforeMount } from 'vue';
  import { useRouter } from 'vue-router';
  import PostsPreview from '../PostsPreview.vue';
  const blogPosts = useBlogPostsStore();
  onBeforeMount(() => {
    blogPosts.resetStore();
  });
  const router = useRouter();
  // if the user clicks on a post we
  // want to go to the blog and bring
  // up the post, same as /blog?title=${title}
  function selectPost(title: string) {
    router.push({
      path: '/blog',
      query: {
        title,
      }
    });
  }
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
            lg="4"
            sm="12"
            :posts="blogPosts.recent"
            @select-post="(title) => selectPost(title)"
          />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

