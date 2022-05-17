<template lang="pug">
  ComponentExample(title="Text alignment" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Change text alignment to justified, left, center, or right.
    .-m--3(slot="example")
      p.-text(v-for="alignment in alignments" :class="`-text--${alignment}`") This text will render as {{ alignment === 'justify' ? 'justified' : `${alignment} aligned` }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'text-line-height',
      alignments: ['justify', 'left', 'center', 'right'],
      codeSnippets: ``
    };
  }
})
export default class TextAlignment extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.alignments.forEach((alignment: string) => {
      this.$data.codeSnippets += `<p class="-text--${alignment}">This text will render as ${
        alignment === 'justify' ? 'justified' : `${alignment} aligned`
      }</p>\n`;
    });
  }
}
</script>
