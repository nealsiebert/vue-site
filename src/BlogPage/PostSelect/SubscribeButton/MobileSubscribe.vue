<script setup lang="ts">
  import {  useMailchimpStore } from '../../../store';
  import SignUpModal from '../../../SignUpModal.vue'
  const mailchimpStore = useMailchimpStore();
</script>

<template>
  <SignUpModal />
  <v-btn
    text="Sign up"
    :loading="mailchimpStore.loading"
    @click="() => mailchimpStore.dialogModel = true"
  />
</template>