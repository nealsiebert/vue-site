<script setup lang="ts">
  import {
    mdiDotsVertical
  } from '@mdi/js';
  import ContactIcons from './ContactIcons.vue'
</script>

<template>
  <v-menu>
    <template #activator="{ props }">
      <v-btn
        :icon="mdiDotsVertical"
        v-bind="props"
      />
    </template>
    <ContactIcons />
  </v-menu>
</template>


