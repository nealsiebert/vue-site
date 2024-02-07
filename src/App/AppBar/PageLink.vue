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
  // page link is smart enough to change
  // from displaying text when the window is
  // big to displaying an icon when its small
</script>
<template>
  <router-link
    :to="to"
    class="hidden-md-and-down"
  >
    {{ text }}
  </router-link>
  <router-link
    :to="to"
    class="hidden-lg-and-up"
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