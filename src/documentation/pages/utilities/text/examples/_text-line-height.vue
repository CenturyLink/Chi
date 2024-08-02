<template lang="pug">
<ComponentExample padding="-p--0" title="Text line height" id="text-line-height" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Use shorthand utility classes to control an element's line-height. Line height sizes are equal to <code>$base-unit * {size}</code>
      | and illustrated in green in the example below.
  template(#example)
    .-m--3.-show--example
      p.-text.-pl--1(v-for="height in lineHeights", :class="height") {{ height }}
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class TextLineHeight extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  lineHeights = ['-lh--1', '-lh--2', '-lh--3', '-lh--4', '-lh--5', '-lh--6', '-lh--7', '-lh--8', '-lh--9'];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.lineHeights.map((height: string) => `<p class="-text ${height}">${height}</p>`).join('\n');
  }
}
</script>
