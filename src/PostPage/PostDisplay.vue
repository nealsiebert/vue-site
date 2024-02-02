<script setup lang="ts">
  import { mdiClose } from '@mdi/js';
  import { useRouter } from 'vue-router';
  import { Post } from '../store';
  import _ from 'lodash';
  const { post } = defineProps<{
    post: Post,
  }>();
  const router = useRouter();
</script>

<template>
  <v-card
    min-width="100%"
    min-height="100%"
  >
    <template #append>
      <v-icon
        :icon="mdiClose"
        @click="()=> router.back()"
      />
    </template>
    <v-card-title>{{ post.title }}</v-card-title>
    <v-card-subtitle>{{ post.date }}</v-card-subtitle>
    <v-card-subtitle v-if="post.series">
      Series: {{ _.startCase(_.defaultTo(post.series, '')) }}
    </v-card-subtitle>
    <v-card-subtitle v-if="post.tags.length > 0">
      Tags: <v-chip
        v-for="(tag, i) in post.tags"
        :key="i"
      >
        {{ tag }}
      </v-chip>
    </v-card-subtitle>
    <v-card-text>
      <render-markdown :source="post.content" />
    </v-card-text>
  </v-card>
</template>
