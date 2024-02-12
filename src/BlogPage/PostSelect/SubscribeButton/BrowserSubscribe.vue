<script setup lang="ts">
  import {  useMailchimpStore } from '../../../store'
  const mailchimpStore = useMailchimpStore();
</script>

<template>
  <v-responsive
    class="mx-auto"
    width="256"
  >
    <v-text-field
      v-model="mailchimpStore.email"
      :loading="mailchimpStore.loading"
      :error="!mailchimpStore.valid && mailchimpStore.email !== ''"
      single-line
      hide-details="auto"
      label="Email address"
      placeholder="johndoe@gmail.com"
      type="email"
    />
  </v-responsive>
  <v-btn
    text="Sign up"
    :disabled="!mailchimpStore.valid"
    :loading="mailchimpStore.loading"
    @click="() => mailchimpStore.subscribe()"
  />
</template>