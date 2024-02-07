<script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import ContactIcons from './ContactInfo/ContactIcons.vue'
  import ContactMenu from './ContactInfo/ContactMenu.vue'
  const display = useDisplay();
</script>

<template>
  <ContactIcons v-if="display.lgAndUp.value" />
  <ContactMenu v-if="display.mdAndDown.value" />
</template>

