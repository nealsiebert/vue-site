<script setup lang="ts">
  import { computed } from 'vue';
  import {
    sortFields,
    sortOrders,
    useBlogPostsStore,
  } from '../store';
  const props = defineProps<{
    drawer: boolean
  }>();
  const emit = defineEmits(['drawer-toggle']);
  // this just keeps track of the state of the drawer
  // if it doesn't match the existing props
  // we emit an event so the parent can
  // change the prop
  const drawer = computed({
    get: () => props.drawer,
    set: (newDrawer) => {
      if (newDrawer !== props.drawer) {
        emit('drawer-toggle')
      }
    }
  });
  const blogStore = useBlogPostsStore();
</script>
<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
  >
    <v-select
      v-model="blogStore.sortField"
      label="Sort"
      :items="sortFields"
      clearable
    />
    <v-select
      v-model="blogStore.sortOrder"
      label="Order"
      :items="sortOrders"
      clearable
    />
    <v-select
      v-model="blogStore.tagFilter"
      chips
      label="Tag"
      :items="blogStore.tags"
      multiple
      clearable
    />
    <v-select
      v-model="blogStore.seriesFilter"
      chips
      label="Series"
      :items="blogStore.series"
      multiple
      clearable
    />
  </v-navigation-drawer>
</template>