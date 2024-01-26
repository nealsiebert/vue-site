<script setup lang="ts">
  // this is a custom component that renders a card for each
  // of the entries in the tldr list, sets a download option if
  // there is a passed in href and only shows the text if it exists
  // this is all for the resume.docx entry
  import colors from 'vuetify/util/colors';
  const {
    href,
    title,
    text,
    color,
  } = defineProps<{
    href?: string | undefined
    title: string
    text?: string | undefined
    color: string
  }>();
  const download = !!href;
  const showText = !!text;
  const style = {
    'padding-top': '0%',
    'padding-bottom': '2%',
    color: colors.grey.darken1
  };
  const titleClass = href ? "text-decoration-underline" : "";
</script>

<template>
  <v-card
    :color="color"
    :href="href"
    :download="download"
  >
    <v-card-text 
      style="padding-top: 0%; padding-bottom: 2%;"
      :class="titleClass"
    >
      {{ title }}
    </v-card-text>
    <v-card-text
      v-if="showText"
      :style="style"
    >
      {{ text }}
    </v-card-text>
  </v-card>
</template>