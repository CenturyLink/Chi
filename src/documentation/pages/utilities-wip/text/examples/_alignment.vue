<template lang="pug">
  <ComponentExample padding="-p--0" title="Text alignment" id="text-alignment" titleSize="h2" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Change text alignment to justified, left, center, or right.
    .-m--3(slot="example")
      p.-text.-text--justify This text will render as justified
      p.-text(v-for="alignment in alignments", :class="`-text--${ alignment }`") This text will render as {{ alignment }} aligned
    <pre class="language-html" slot="code-htmlblueprint">
       <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint',
        }
      ]
    };
  }
})
export default class Alignment extends Vue {
  alignments = ['left', 'center', 'right']

  get codeSnippets() {
    return {
      htmlblueprint: `<p class="-text--justify">This text will render as justified</p>
${ this.generateHtml() }`
    };
  }

  generateHtml() {
    return this.alignments
      .map((alignment: string) => `<p class="-text--${ alignment }">This text will render as ${ alignment } aligned</p>`)
      .join('\n');
  }
}
</script>
