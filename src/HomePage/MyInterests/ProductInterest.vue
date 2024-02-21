<script setup lang="ts">
  import product from '../../assets/product.md?raw';
  
</script>

<template>
  <v-col
    lg="6"
    cols="12"
    order-lg="2"
  >
    <router-link to="/blog?tag=product">
      <v-card
        min-height="100%"
        min-width="100%"
        image="/product.jpg"
        class="hidden-md-and-down"
      />
      <v-card
        min-height="100%"
        class="hidden-lg-and-up"
      >
        <v-card-text>
          <v-img
            alt="Neal Siebert Portrait"
            src="/product.jpg"
            cover
          />
        </v-card-text>
      </v-card>
    </router-link>
  </v-col>
  <v-col
    lg="6"
    cols="12"
    order-lg="1"
  >
    <router-link to="/blog?tag=product">
      <v-card>
        <v-card-subtitle class="text-center">
          Product
        </v-card-subtitle>
        <v-card-text class="text-center">
          <render-markdown :source="product" />
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