<script setup lang="ts">
  // Shared component to render a list of posts
  // it uses the shave plugin to truncate text
  // content
  import _ from 'lodash';
  import { Post } from './store'
import { useRouter } from 'vue-router';
  const {
    cols,
    md,
    posts
  } = defineProps<{
    md: string
    cols: string
    posts: Post[]
  }>();
  const router = useRouter()
</script>

<template>
  <v-container fluid>
    <v-row>
      <v-col 
        v-for="post in posts"
        :key="post.title"
        :md="md"
        :cols="cols"
      >
        <v-card
          :title="post.title"
          variant="outlined"
          min-height="100%"
          @click="() => router.push({
            path: `/blog/${encodeURIComponent(post.title)}`
          })"
        >
          <v-card-subtitle>
            {{ post.date }}
          </v-card-subtitle>
          <v-card-subtitle>
            Series: {{ _.startCase(_.defaultTo(post.series, '')) }}
          </v-card-subtitle>
          <v-card-subtitle>
            Tags: <v-chip
              v-for="(tag, i) in post.tags"
              :key="i"
            >
              {{ tag }}
            </v-chip>
          </v-card-subtitle>
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
