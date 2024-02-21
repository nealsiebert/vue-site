<script setup lang="ts">
import ProductInterest from './MyInterests/ProductInterest.vue';
import EngineeringInterest from './MyInterests/EngineeringInterest.vue';
import LeadershipInterest from './MyInterests/LeadershipInterest.vue';
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
            <ProductInterest />
          </v-row>
          <v-row>
            <EngineeringInterest />
          </v-row>
          <v-row>
            <LeadershipInterest />
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>
