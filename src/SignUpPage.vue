<script setup lang="ts">
  import { onMounted } from 'vue';
  import {  useMailchimpStore } from './store'
  import SignUpModal from './SignUpModal.vue';
  import { useRouter } from 'vue-router';
  const mailchimpStore = useMailchimpStore();
  const router = useRouter()
  onMounted(() => mailchimpStore.dialogModel = true);
</script>

<template>
  <SignUpModal @on-close="() => router.back()" />
</template>