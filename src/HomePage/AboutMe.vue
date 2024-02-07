<script setup lang="ts">
// nothing really interesting here, just a couple of places
// where clicking on something lands you on the blog with content
// filters already in place
import { onUpdated, onMounted } from 'vue';
import { useDisplay } from 'vuetify';
const display = useDisplay();
onMounted(() => {
  console.log(display.name.value);
});
onUpdated(() => {
  console.log(display.name.value);
});

</script>
<template>
  <v-row>
    <v-col
      cols="12"
      md="6"
    >
      <v-card>
        <v-card-text>
          <v-img
            alt="Neal Siebert Portrait"
            src="/home-page2.jpg"
            height="512px"
          />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col 
      cols="12"
      md="6"
    >
      <v-card min-height="100%">
        <v-card-title class="text-center">
          About Me
        </v-card-title>
        <v-card-text class="text-center">
          Hi, I'm Neal. Sometime I hike in a suit, most of the time I make software. I have been a software engineer for 18 years working in the video game, GIS, ad tech, and moving industries.
          I've built software for XBox, Playstation, Wii, Windows, Linux, IOS, Android, and the web. For the past 10 years I have been building product development teams and organizations.
          <!-- eslint-disable-next-line -->
          If you would like to know more about my professional credentials please head over <router-link to="/career">here</router-link>, 
          visit me on <a href="https://www.linkedin.com/in/nealsiebert/">LinkedIn</a>, or contact me at <a href="mailto:info@nealsiebert.com">info@nealsiebert.com</a>
          <br><br>
          <!-- eslint-disable-next-line -->
          I also have a <router-link to="/blog">blog</router-link>. I use writing as tool, to remember something, to process information, or refine and simplify my ideas. 
          I write a lot. I am going to publish some of of it. In general, I take a more narrative approach than most technology blogs. Context is always important. They didn't set 
          out to write an unmaintainable mess. Let's design an architecture that doesn't scale, said no one ever. Context is important. I want to talk about the journey, the how 
          and the why.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

