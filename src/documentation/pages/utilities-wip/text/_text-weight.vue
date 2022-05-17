<template lang="pug">
  ComponentExample(title="Text weight" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Change text weight to thin, normal, semi-bold, bold, bolder, or boldest.
    .-m--3(slot="example")
      p.-text(v-for="weight in weights" :class="`-text--${weight}`") This text will render as {{ weight }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'text-weight',
      weights: ['thin', 'normal', 'semi-bold', 'bold', 'bolder', 'boldest'],
      codeSnippets: ``
    };
  }
})
export default class TextWeight extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.weights.forEach((weight: string) => {
      this.$data.codeSnippets += `<p class="-text--${weight}">This text will render as ${weight}</p>\n`;
    });
  }
}
</script>
