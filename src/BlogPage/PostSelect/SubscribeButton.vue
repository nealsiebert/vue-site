<script setup lang="ts">
  import { useDisplay } from 'vuetify';
  import BrowserSubscribe from './SubscribeButton/BrowserSubscribe.vue';
  import MobileSubscribe from './SubscribeButton/MobileSubscribe.vue';
  const display = useDisplay();
</script>

<template>
  <BrowserSubscribe v-if="display.lgAndUp.value" />
  <MobileSubscribe v-if="display.mdAndDown.value" />
</template>