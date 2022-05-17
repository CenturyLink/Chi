<template lang="pug">
  ComponentExample(title="Text decoration" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Change text decoration to no-decoration, underline, or line-through.
    .-m--3(slot="example")
      p.-text(v-for="decoration in decorations" :class="`-text--${decoration}`") This text will render with {{ decoration === 'no decoration' ? 'justified' : decoration === 'underline' ? 'an underline' : 'a line through' }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'text-decoration',
      decorations: ['no-decoration', 'underline', 'line-through'],
      codeSnippets: ``
    };
  }
})
export default class TextDecoration extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.decorations.forEach((decoration: string) => {
      this.$data.codeSnippets += `<p class="-text--${decoration}">This text will render with ${
        decoration === 'no decoration'
          ? 'justified'
          : decoration === 'underline'
          ? 'an underline'
          : 'a line through'
      }</p>\n`;
    });
  }
}
</script>
