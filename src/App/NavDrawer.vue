<script setup lang="ts">
  import { computed } from 'vue'; 
  const props = defineProps<{
    drawer: boolean
  }>();
 const emit = defineEmits(['drawer-toggle']);
  const drawer = computed({
    get: () => props.drawer,
    set: (newDrawer) => {
      if (newDrawer !== props.drawer) {
        emit('drawer-toggle')
      }
    }
  });
</script>

<template>
  <v-navigation-drawer
    v-model="drawer"
    app
  >
    <v-list-item>
      <router-link to="/">
        <font-awesome-icon
          icon="fa-solid fa-home"
        />
        Home
      </router-link>
    </v-list-item>
    <v-list-item>
      <router-link to="/career">
        <font-awesome-icon
          icon="fa-solid fa-briefcase"
        />
        Career
      </router-link>
    </v-list-item>
    <v-list-item>
      <router-link to="/blog">
        <font-awesome-icon
          icon="fa-solid fa-blog"
        />
        Blog
      </router-link>
    </v-list-item>
  </v-navigation-drawer>
</template>
