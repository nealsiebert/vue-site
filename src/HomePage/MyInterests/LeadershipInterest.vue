<script setup lang="ts">
  import leadership from '../../assets/leadership.md?raw';
  
</script>

<template>
  <v-col
    lg="6"
    xl="7"
    xxl="8"
    cols="12"
  >
    <router-link to="/blog?tag=leadership">
      <v-card
        min-height="100%"
        min-width="100%"
        image="/leadership.jpg"
        class="hidden-md-and-down"
      />
      <v-card
        min-height="100%"
        class="hidden-lg-and-up"
      >
        <v-card-text>
          <v-img
            alt="Neal Siebert Portrait"
            src="/leadership.jpg"
            cover
          />
        </v-card-text>
      </v-card>
    </router-link>
  </v-col>
  <v-col
    lg="6"
    xl="5"
    xxl="4"
    cols="12"
  >
    <router-link to="/blog?tag=leadership">
      <v-card>
        <v-card-subtitle class="text-center">
          Leadership
        </v-card-subtitle>
        <v-card-text class="text-center">
          <render-markdown :source="leadership" />
        </v-card-text>
      </v-card>
    </router-link>
  </v-col>
</template>

<style scoped>
a {
  text-decoration: none;
}
</style>