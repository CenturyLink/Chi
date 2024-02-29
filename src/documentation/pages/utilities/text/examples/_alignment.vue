<template lang="pug">
<ComponentExample padding="-p--0" title="Text alignment" id="text-alignment" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
  template(#example-description)
    p.-text
      | Change text alignment to justified, left, center, or right.
  template(#example)
    .-m--3
      p.-text.-text--justify This text will render as justified
      p.-text(v-for="alignment in alignments", :class="`-text--${ alignment }`") This text will render as {{ alignment }} aligned
  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class Alignment extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  alignments = ['left', 'center', 'right'];

  get codeSnippets() {
    return {
      htmlblueprint: `<p class="-text--justify">This text will render as justified</p>
${this.generateHtml()}`,
    };
  }

  generateHtml() {
    return this.alignments
      .map((alignment: string) => `<p class="-text--${alignment}">This text will render as ${alignment} aligned</p>`)
      .join('\n');
  }
}
</script>
