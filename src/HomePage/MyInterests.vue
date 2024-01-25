<script setup lang="ts">
import leadership from '../assets/leadership.md?raw';
import product from '../assets/product.md?raw';
import engineering from '../assets/engineering.md?raw';
</script>
<template>
  <v-row>
    <v-col col="12">
      <v-card min-width="100%">
        <v-card-title class="text-center">
          What I Care About
        </v-card-title>
        <v-container>
          <v-row>
            <v-col
              lg="4"
              sm="12"
            >
              <router-link to="/blog?tag=product">
                <v-card-subtitle class="text-center">
                  Product
                </v-card-subtitle>
                <v-card-text class="text-center">
                  <render-markdown :source="product" />
                </v-card-text>
              </router-link>
            </v-col>
            <v-col
              lg="4"
              sm="12"
            >
              <router-link to="/blog?tag=engineering">
                <v-card-subtitle
                  class="text-center"
                >
                  Engineering
                </v-card-subtitle>
                <v-card-text class="text-center">
                  <render-markdown :source="engineering" />
                </v-card-text>
              </router-link>
            </v-col>
            <v-col
              lg="4"
              sm="12"
            >
              <router-link to="/blog?tag=leadership">
                <v-card-subtitle class="text-center">
                  Leadership 
                </v-card-subtitle>
                <v-card-text class="text-center">
                  <render-markdown :source="leadership" />
                </v-card-text>
              </router-link>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
a {
  text-decoration: none;
  color: inherit;
}
</style>