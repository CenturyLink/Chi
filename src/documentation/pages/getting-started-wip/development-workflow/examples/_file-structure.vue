<template lang="pug">
<TitleAnchor title="Style guide" id="style-guide" titleSize="h2" />
p.-text: em This style guide is based on <a target="_blank" href="https://stenciljs.com/docs/style-guide" rel="noopener">the one used by Ionic team</a>.

<TitleAnchor title="File structure" id="file-structure" titleSize="h2" />
ul
  li.-text One component per file.
  li.-text
    | One component per directory. Though it may make sense to group similar components into the same directory, it's
    | easier to document components when each one has its own directory.
  li.-text Implementation (.tsx) and styles of a component should live in the same directory.
Copy(id="file-structure" :code="codeSnippets.htmlblueprint" lang="bash")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class FileStructure extends Vue {
  codeSnippets = {
    htmlblueprint: `├── icon
│   ├── icon.scss
│   ├── icon.tsx
├── card
│   ├── card.scss
│   ├── card.tsx
│   └── test (to be defined)
├── card-content
│   ├── card-content.scss
│   └── card-content.tsx
├── card-title
│   ├── card-title.scss
│   ├── card-title.tsx`,
  };
}
</script>
