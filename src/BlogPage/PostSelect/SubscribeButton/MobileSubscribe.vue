<script setup lang="ts">
  import {  useMailchimpStore } from '../../../store'
  const mailchimpStore = useMailchimpStore();
</script>

<template>
  <v-btn
    text="Sign up"
    :loading="mailchimpStore.loading"
    @click="mailchimpStore.dialogModel = true"
  />
</template>