<script setup lang="ts">
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

