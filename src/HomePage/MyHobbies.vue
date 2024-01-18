<template>
  <v-row>
    <v-spacer />
    <v-col
      lg="8"
      sm="12"
    >
      <v-card min-width="100%">
        <v-card-title class="text-center">
          My Hobbies
        </v-card-title>
   
        <v-card-text class="text-center">
          <v-carousel
            hide-delimiters
          >
            <v-carousel-item
              src="/hobbies.gif"
              height="384"
            />
          </v-carousel>
        </v-card-text>
      </v-card>
    </v-col>
    <v-spacer />
  </v-row>
</template>
