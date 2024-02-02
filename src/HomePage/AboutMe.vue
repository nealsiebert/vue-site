<script setup lang="ts">
// nothing really interesting here, just a couple of places
// where clicking on something lands you on the blog with content
// filters already in place
</script>
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
            src="/home-page2.jpg"
            max-height="512px"
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
          Hi, I'm Neal, when I am not hiking in a suit I build software. I have been a senior engineering leader, software engineer, and gameplay programmer. If you would like to know more about my professional credentials please head over
          <!-- eslint-disable-next-line -->
          <router-link to="/career">here</router-link>, 
          visit me on <a href="https://www.linkedin.com/in/nealsiebert/">LinkedIn</a>, or contact me at <a href="mailto:nealsiebert@gmail.com">nealsiebert@gmail.com</a>
          <br><br>
          <!-- eslint-disable-next-line -->
          What I love about building software is how fast things change. There is always something new to learn, to play around with. I am just starting a new <router-link to="/blog">blog</router-link> where
          I will be exploring new technologies by solving real world problems using modern product management techniques.
          <br><br>
          <!-- eslint-disable-next-line -->
          If you are interested I am currently writing about making my own blog using <router-link to="/blog/I%20need%20a%20website">Vue</router-link>, my experiences as Head of Engineering at <router-link to="/blog?series=bootstrap startup">PricePoint</router-link>,
          <!-- eslint-disable-next-line -->
          and trying to help my dog Bear with his <router-link to="/blog?series=dog training app">separation anxiety</router-link>. 
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
