<script setup lang="ts">
  import pricepoint from '../assets/pricepoint.md?raw';
  import yodle from '../assets/yodle.md?raw';
  import terrago from '../assets/terrago.md?raw';
  import doubleHelix from '../assets/doubleHelix.md?raw';
  import { ref } from 'vue';
  const workHistory = [{
    title: 'PricePoint, 2017 - 2024',
    markdown: pricepoint,
    value: 'pricepoint'
  }, {
    title: 'Yodle/Web.com, 2013 - 2017',
    markdown: yodle,
    value: 'yodle'
  }, {
    title: 'TerraGo, 2011 - 2013',
    markdown: terrago,
    value: 'terrago'
  }, {
    title: 'Double Helix, 2006 - 2011',
    markdown: doubleHelix,
    value: 'doubleHelix'
  }];
  const panel = ref(workHistory[0].value);
</script>

<template>
  <v-row>
    <v-col
      cols="12"
    >
      <v-expansion-panels
        v-model="panel"
      >
        <v-expansion-panel
          v-for="history in workHistory"
          :key="history.title"
          :value="history.value"
        >
          <v-expansion-panel-title>
            {{ history.title }}
          </v-expansion-panel-title>
          <v-expansion-panel-text>
            <render-markdown :source="history.markdown" />
          </v-expansion-panel-text>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</template>

