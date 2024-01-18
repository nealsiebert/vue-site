<script setup lang="ts">
  import summary from './ExecSummary/summary.md?raw'
</script>

<template>
  <v-row>
    <v-col
      lg="4"
      sm="12"
    >
      <v-card
        variant="tonal"
        min-height="100%"
        density="compact"
      >
        <v-card-title>
          TLDR;
        </v-card-title>
        <v-card-text style="padding-bottom: 0%;">
          <font-awesome-icon
            icon="fa-solid fa-file"
          />
          <a
            href="/resume.docx"
            download
          >
            resume
          </a>
        </v-card-text>
        <v-card-text style="padding-bottom: 0%; padding-top: 2%;">
          <font-awesome-icon
            icon="fa-solid fa-calendar-days"
          />
          people management > 10, total ~20 experience
        </v-card-text>
        <v-card-text style="padding-bottom: 0%; padding-top: 2%;">
          <font-awesome-icon
            icon="fa-solid fa-industry"
          />
          gaming, geospatial, digital ads, moving
        </v-card-text>
        <v-card-text style="padding-top: 2%;">
          <font-awesome-icon
            icon="fa-solid fa-graduation-cap"
          />
          2006, BSE, Ohio State, 3.67
        </v-card-text>
      </v-card>
    </v-col>
    <v-col
      lg="8"
      sm="12"
    >
      <v-card>
        <v-card-title>
          Summary
        </v-card-title>
        <v-card-text>
          <render-markdown :source="summary" />
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

