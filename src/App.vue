<script setup lang="ts">
  import AppBar from './App/AppBar.vue'
  import colors from 'vuetify/util/colors';
</script>

<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-sheet
        :color="colors.grey.lighten4"
        min-width="100%"
        min-height="100%"
      >
        <v-container>
          <v-row>
            <v-spacer class="hidden-md-and-down" />
            <v-col 
              cols="12"
              xl="8"
              lg="10"
              xxl="6"
            >
              <router-view />
            </v-col>
            <v-spacer class="hidden-md-and-down" />
          </v-row>
        </v-container>
      </v-sheet>
    </v-main>
  </v-app>
</template>