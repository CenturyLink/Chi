<template lang="pug">
  ComponentExample(:id="id" :padding="'-p--0'" :codeSnippetWithoutTabs="true")
    .-m--3(slot="example")
      p.-text(v-for="alignment in alignments" :class="alignment") This text will render as {{ setAlignmentText(alignment) }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'alignments-example',
      alignments: [
        '-text-md--justify',
        '-text-lg--left',
        '-text-sm--center',
        '-text-xl--right'
      ],
      codeSnippets: ``
    };
  }
})
export default class Example extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.alignments.forEach((alignment: string) => {
      this.$data.codeSnippets += `<p class="${alignment}">This text will render as ${this.setAlignmentText(
        alignment
      )}</p>\n`;
    });
  }

  setAlignmentText(alignment: string) {
    return alignment.includes('justify')
      ? 'justified from md and larger breakpoints'
      : alignment.includes('left')
      ? 'left aligned from lg and larger breakpoints'
      : alignment.includes('center')
      ? 'center aligned from sm and larger breakpoints'
      : 'right aligned from xl and larger breakpoints';
  }
}
</script>
