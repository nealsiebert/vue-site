<script setup lang="ts">
import intro from './CareerPage/intro.md?raw'
import Markdown from './RenderMarkdown.vue'
</script>

<template>
  <v-card>
    <v-card-text>
      <Markdown
        :source="intro"
      />
    </v-card-text>
  </v-card>
</template>

