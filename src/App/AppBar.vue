<script setup lang="ts">
    import {
    mdiHome,
    mdiBriefcase,
    mdiPost
  } from '@mdi/js'
  import colors from 'vuetify/util/colors';
  import PageLink from './AppBar/PageLink.vue';
  import ContactInfo from './AppBar/ContactInfo.vue';
</script>

<template>
  <v-app-bar
    app
    :color="colors.grey.darken4"
  >
    <v-spacer />
    <PageLink
      to="/"
      :icon="mdiHome"
      text="Home"
    />
    <v-spacer />
    <PageLink
      to="/career"
      :icon="mdiBriefcase"
      text="Career"
    />
    <v-spacer />
    <PageLink
      to="/blog"
      :icon="mdiPost"
      text="Blog"
    />
    <v-spacer />
    <ContactInfo />
  </v-app-bar>
</template>

