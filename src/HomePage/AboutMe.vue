<template>
  <v-row>
    <v-col
      lg="6"
      sm="12"
    >
      <v-card>
        <v-card-text>
          <v-img
            alt="Neal Siebert Portrait"
            height="256"
            src="/mario4x5.png"
          />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col 
      lg="6"
      sm="12"
    >
      <v-card min-height="100%">
        <v-card-title class="text-center">
          About Me
        </v-card-title>
        <v-card-text class="text-center">
          Hi, I'm Neal, I build software. I have been a senior engineering leader, software engineer, and gameplay programmer. If you would like to know more about my professional credentials please head over <router-link to="/career">
            here
          </router-link>, 
          visit me on <a href="https://www.linkedin.com/in/nealsiebert/">LinkedIn</a>, or contact me at <a href="mailto:nealsiebert@gmail.com">nealsiebert@gmail.com</a>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>