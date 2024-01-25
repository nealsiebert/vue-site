<script setup lang="ts">
  const {
    to,
    icon,
    text
  } = defineProps<{
    to: string,
    icon: string
    text: string
  }>();
</script>
<template>
  <router-link
    :to="to"
    class="hidden-sm-and-down"
  >
    <v-icon
      :icon="icon"
    />
    {{ text }}
  </router-link>
  <router-link
    :to="to"
    class="hidden-md-and-up"
  >
    <v-icon
      :icon="icon"
    />
  </router-link>
</template>

<style scoped>
a {
  text-decoration: none;
  color: #bdbdbd;
}
a.router-link-active {
  color: white;
}
</style>