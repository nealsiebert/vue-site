<script setup lang="ts">
 const props = defineProps<{
    icon: string,
    transform: string,
    href: string
  }>()
</script>
<template>
  <a
    :href="props.href"
  >
    <font-awesome-icon
      :icon="'fa-brands ' + props.icon"
      size="2xl"
      :transform="props.transform"
    />
  </a>
</template>

<style scoped>
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>