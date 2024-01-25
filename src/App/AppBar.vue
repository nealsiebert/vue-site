<script setup lang="ts">
    import {
    mdiHome,
    mdiBriefcase,
    mdiRssBox
  } from '@mdi/js'
  import colors from 'vuetify/util/colors';
  import PageLink from './AppBar/PageLink.vue';
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
      :icon="mdiRssBox"
      text="Blog"
    />
    <v-spacer />
    <v-btn
      href="https://www.linkedin.com/in/nealsiebert/"
      icon
    >
      <v-icon
        icon="fa:fab fa-linkedin"
      />
    </v-btn>
    <v-btn
      href="https://github.com/nealsiebert"
      icon
    >
      <v-icon
        icon="fa:fab fa-github"
      />
    </v-btn>
    <v-btn
      href="mailto:nealsiebert@gmail.com"
      icon
    >
      <v-icon
        icon="fa:fas fa-envelope"
      />
    </v-btn>
  </v-app-bar>
</template>

