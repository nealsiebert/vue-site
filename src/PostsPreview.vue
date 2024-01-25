<script setup lang="ts">
  import _ from 'lodash';
  import { Post } from './store'
  const {
    lg,
    sm,
    posts
  } = defineProps<{
    lg: string
    sm: string
    posts: Post[]
  }>();
  defineEmits(['selectPost'])
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col 
        v-for="post in posts"
        :key="post.title"
        :lg="lg"
        :sm="sm"
      >
        <v-card
          :title="post.title"
          :subtitle="post.date"
          variant="outlined"
          @click="$emit('selectPost', post.title)"
        >
          <v-card-text
            v-shave="{ height: 256 }"
            height="100%"
          >
            <render-markdown 
              :source="post.content"
            />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>