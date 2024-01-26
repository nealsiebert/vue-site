<script setup lang="ts">
// based on https://github.com/cloudacy/vue-markdown-render
// I adapted it to be a single file component as part of
// learning vue, it is not complicated
import MarkdownIt, {
  Options as MarkdownItOptions,
  PluginSimple,
} from "markdown-it";
import { computed, ref } from "vue";
const props = defineProps<{
  source: string,
  options?: MarkdownItOptions,
  plugins?: PluginSimple[]
}>()
const md = ref<MarkdownIt>(new MarkdownIt(props.options ?? {}));

for (const plugin of props.plugins ?? []) {
  md.value.use(plugin);
}

const content = computed(() => md.value.render(props.source));
</script>

<template>
  <!-- eslint-disable-next-line vue/no-v-html-->
  <div v-html="content" />
</template>

