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
      
          I am also interested in how to use technologies that are new, or new to me at least. 
          I believe that technologies are meant to be used to solve a problem, so I pair those investigations with a product idea.
          <!-- eslint-disable-next-line -->
          You can see some of the work I have done <router-link to="/blog?series=personal site">this site</router-link>, <router-link to="/blog?series=dog training app">dog training app</router-link>, or just go check out my <router-link to="/blog">blog</router-link>. 
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
a {
  color: inherit;
}
</style>