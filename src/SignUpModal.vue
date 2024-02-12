<script setup lang="ts">
  import {  useMailchimpStore } from './store'
  const mailchimpStore = useMailchimpStore();
  const emit = defineEmits(['on-close']);
  function onCancel() {
    emit('on-close');
    mailchimpStore.dialogModel = false
  }
  function onSignUp() {
    emit('on-close');
    mailchimpStore.subscribe()
  }
</script>

<template>
  <v-dialog
    v-model="mailchimpStore.dialogModel"
    width="500"
  >
    <v-card>
      <v-card-text>
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
      </v-card-text>

      <v-card-actions>
        <v-btn
          text="Cancel"
          @click="onCancel"
        />
        <v-spacer />
        <v-btn
          text="Sign Up"
          :disabled="!mailchimpStore.valid"
          @click="onSignUp"
        />
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>