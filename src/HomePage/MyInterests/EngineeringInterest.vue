<script setup lang="ts">
  import product from '../../assets/engineering.md?raw';
  
</script>

<template>
  <v-col
    lg="3"
    xl="4"
    cols="12"
  >
    <router-link to="/blog?tag=engineering">
      <v-card
        min-height="100%"
        min-width="100%"
        image="/engineering-1.jpg"
        class="hidden-md-and-down"
      />
      <v-card
        min-height="100%"
        class="hidden-lg-and-up"
      >
        <v-card-text>
          <v-img
            alt="Neal Siebert Portrait"
            src="/engineering-1.jpg"
            cover
          />
        </v-card-text>
      </v-card>
    </router-link>
  </v-col>
  <v-col
    lg="6"
    xl="4"
    cols="12"
  >
    <router-link to="/blog?tag=product">
      <v-card>
        <v-card-subtitle class="text-center">
          Engineering
        </v-card-subtitle>
        <v-card-text class="text-center">
          <render-markdown :source="product" />
        </v-card-text>
      </v-card>
    </router-link>
  </v-col>
  <v-col
    lg="3"
    xl="4"
    cols="12"
  >
    <router-link to="/blog?tag=product">
      <v-card
        min-height="100%"
        min-width="100%"
        image="/engineering-3.jpg"
        class="hidden-md-and-down"
      />
      <v-card
        min-height="100%"
        class="hidden-lg-and-up"
      >
        <v-card-text>
          <v-img
            alt="Neal Siebert Portrait"
            src="/engineering-3.jpg"
            cover
          />
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