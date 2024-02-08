<script setup lang="ts">
  import { 
    Ref,
  } from 'vue';
  import {  useMailchimpStore } from '../../../store'
  const mailchimpStore = useMailchimpStore();
  function subscribe(isActive: Ref<boolean>) {
    isActive.value = false;
    mailchimpStore.subscribe();
  }
</script>

<template>
  <v-dialog width="500">
    <template #activator="{ props }">
      <v-btn
        v-bind="props"
        text="Subscribe"
        :loading="mailchimpStore.loading"
      />
    </template>

    <template #default="{ isActive }">
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
            @click="isActive.value = false"
          />
          <v-spacer />

          <v-btn
            text="Subscribe"
            :disabled="!mailchimpStore.valid"
            @click="() => subscribe(isActive)"
          />
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>