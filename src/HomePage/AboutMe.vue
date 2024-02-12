<script setup lang="ts">
// nothing really interesting here, just a couple of places
// where clicking on something lands you on the blog with content
// filters already in place
import { computed } from 'vue';
import { useDisplay } from 'vuetify';
import { useMailchimpStore } from '../store';
const mailchimpStore = useMailchimpStore();
const display = useDisplay();
const src = computed(() => {
  const aspectRatio = (display.width.value / display.height.value);
  if (aspectRatio > 1.5) {
    return 'home-page-1.5-1.jpg';
  }
  if (aspectRatio > 1.2) {
    return 'home-page-1-1.jpg';
  }
  return 'home-page-3-5.jpg'
})

</script>
<template>
  <v-row>
    <v-col
      cols="12"
      lg="6"
    >
      <v-card
        min-height="100%"
        min-width="100%"
        :image="src"
        class="hidden-md-and-down"
      />
      <v-card
        min-height="100%"
        class="hidden-lg-and-up"
      >
        <v-card-text>
          <v-img
            alt="Neal Siebert Portrait"
            :src="src"
            cover
          />
        </v-card-text>
      </v-card>
    </v-col>
    <v-col 
      cols="12"
      lg="6"
    >
      <v-card min-height="100%">
        <v-card-title class="text-center">
          About Me
        </v-card-title>
        <v-card-text class="text-center">
          Hi, I'm Neal. I have been a software engineer for 18 years working in the video game, GIS, ad tech, and moving industries. I've shipped software for XBox,
          Playstation, Wii, Windows, Linux, IOS, Android, and the web. For the past 10 years I have managed product development teams and organizations.
          <!-- eslint-disable-next-line -->
          If you would like to know more about my professional credentials please head over <router-link to="/career">here</router-link>, 
          visit me on <a href="https://www.linkedin.com/in/nealsiebert/">LinkedIn</a>, or contact me at <a href="mailto:info@nealsiebert.com">info@nealsiebert.com</a>
        </v-card-text>
        <v-card-text class="text-center">
          <!-- eslint-disable-next-line -->
          Occasionally, I also <router-link to="/blog">write</router-link> about product development, engineering, and management. Writing is an important tool. I write a lot.
          I am going to publish some of of it. My goal is to provide context for the when, how, and why decisions are made in software projects. Most of my content is adapted,
          to remove any private or privileged information, from dev journals, notes, or other writings I have done in the course of my professional
          career and on personal projects. If you are interested please consider
          <span
            class="text-decoration-underline cursor-pointer"
            @click="() => mailchimpStore.dialogModel=true"
          >
            signing up
          </span> for my newsletter or <a href="/feed.xml">subscribing</a> to my RSS feed.
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style scoped>
.cursor-pointer {
  cursor: pointer;
}
</style>