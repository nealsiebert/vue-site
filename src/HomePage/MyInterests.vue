<script setup lang="ts">
import leadership from './MyInterests/leadership.md?raw';
import product from './MyInterests/product.md?raw';
import engineering from './MyInterests/engineering.md?raw';
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
              <v-card-subtitle class="text-center">
                Product
              </v-card-subtitle>
              <v-card-text class="text-center">
                <render-markdown :source="product" />
              </v-card-text>
            </v-col>
            <v-col
              lg="4"
              sm="12"
            >
              <v-card-subtitle class="text-center">
                Engineering
              </v-card-subtitle>
              <v-card-text class="text-center">
                <render-markdown :source="engineering" />
              </v-card-text>
            </v-col>
            <v-col
              lg="4"
              sm="12"
            >
              <v-card-subtitle class="text-center">
                Leadership 
              </v-card-subtitle>
              <v-card-text class="text-center">
                <render-markdown :source="leadership" />
              </v-card-text>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>