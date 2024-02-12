<script setup lang="ts">
// based on https://github.com/cloudacy/vue-markdown-render
// I adapted it to be a single file component as part of
// learning vue and because I needed to add some 
// css because lists are broken in vuetify.
import MarkdownIt, {
  Options as MarkdownItOptions,
  PluginSimple,
} from "markdown-it";
import { computed } from "vue";
const props = defineProps<{
  source: string,
  options?: MarkdownItOptions,
  plugins?: PluginSimple[]
}>()

const classes = 'class=\'pl-7 pt-4 pb-4\'';

const markdownItContext =computed(() => {
  const md = new MarkdownIt(props.options ?? { });

  // I need these override because vuetify has
  // a bug where lists don't have the right
  // margin so I am adding some
  md.renderer.rules.ordered_list_open = function(tokens, i) {
    let token = tokens[i];
    return `<${token.tag} ${classes}>`;
  }

  md.renderer.rules.bullet_list_open = function(tokens, i) {
    let token = tokens[i];
    return `<${token.tag} ${classes}>`;
  }

  md.renderer.rules.heading_open = function(tokens, i) {
    let token = tokens[i];
    return `<${token.tag} class = "pt-4 pb-4">`;
  }

  for (const plugin of props.plugins ?? []) {
    md.use(plugin);
  }
  return md.render(props.source)
}); 
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html-->
  <div v-html="markdownItContext" />
</template>


