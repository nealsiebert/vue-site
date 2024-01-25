<script setup lang="ts">
  import summary from '../assets/executiveSummary.md?raw'
  import colors from 'vuetify/util/colors';
  import TLDREntry from './ExecSummary/TLDREntry.vue';
  const tldrColor = colors.grey.lighten3
</script>

<template>
  <v-row>
    <v-col
      lg="4"
      sm="12"
    >
      <v-card
        min-height="100%"
        density="compact"
        :color="tldrColor"
      >
        <v-card-text>
          <v-card-title>TLDR;</v-card-title>
          <TLDREntry
            href="/resume.docx"
            title="resume.docx"
            :color="tldrColor"
          />
          <TLDREntry
            title="experience"
            text="people management 10, total 18"
            :color="tldrColor"
          />
          <TLDREntry
            title="industries"
            text="gaming, geospatial, digital ads, moving"
            :color="tldrColor"
          />
          <TLDREntry
            title="leadership"
            text="servant leadership, coaching & mentorship, team building"
            :color="tldrColor"
          />
          <TLDREntry
            title="product management"
            text="discovery, rapid prototyping, dual-track agile"
            :color="tldrColor"
          />
          <TLDREntry
            title="engineering practices"
            text="agile, devops, delivery management, quality assurance"
            :color="tldrColor"
          />
          <TLDREntry
            title="software design"
            text="domain-driven design, distributed systems, microservices"
            :color="tldrColor"
          />
          <TLDREntry
            title="eduction"
            text="2006, BSE, Ohio State, 3.67"
            :color="tldrColor"
          />
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

