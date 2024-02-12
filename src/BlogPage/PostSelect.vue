<script setup lang="ts">
  import { 
    mdiFilter,
  } from '@mdi/js'
  import _ from 'lodash';
  import { useBlogPostsStore } from '../store'
  import Pagination from './PostSelect/PostPagination.vue'
  import SubscribeButton from './PostSelect/SubscribeButton.vue';
  import PostsPreview from '../PostsPreview.vue'
  import { computed } from 'vue';
  import colors from 'vuetify/util/colors'
  const blogPosts = useBlogPostsStore();
  defineEmits(['filterToggle'])
  const filters = computed(()=> {
    return _.sum([
      _.defaultTo(blogPosts.tagFilter?.length, 0),
      _.defaultTo(blogPosts.seriesFilter?.length, 0),
      blogPosts.searchFilter ? 1 : 0,
  ])
  })
  // a list of posts with the toggle for the filter drawer, text entry for the search,
  // and pagination controls since this is already the blog page we just update
  // the store on click
</script>

<template>
  <v-card
    min-width="100%"
    min-height="100%"
  >
    <v-toolbar
      :color="colors.grey.lighten2"
    >
      <v-badge
        :content="filters"
        :dot="filters === 0"
        inline
        max="9"
      >
        <v-btn icon>
          <v-icon
            :icon="mdiFilter"
            @click="$emit('filterToggle')"
          />
        </v-btn>
      </v-badge>
      <v-spacer />
      <v-toolbar-items>
        <SubscribeButton />
      </v-toolbar-items>
      <v-spacer />
      <v-toolbar-items>
        <v-btn
          href="https://www.nealsiebert.com/feed.xml"
          icon
        >
          <v-icon
            icon="fa:fas fa-rss"
          />
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-card-text v-if="blogPosts.page.length > 0">
      <PostsPreview
        md="6"
        cols="12"
        :posts="blogPosts.page"
      />      
    </v-card-text>
    <v-card-text
      v-if="blogPosts.page.length === 0"
      style="text-align: center;"
    >
      I'm sorry, I this content isn't available yet. Please check back soon.     
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