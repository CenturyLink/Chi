<template lang="pug">
  ComponentExample(title="Text wrapping" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Prevent text wrapping with nowrap or control overflow with truncate.
    .-m--3(slot="example")
      p.-text(v-for="wrap in wrappers" :class="`-text--${wrap}`" :style="`width: 11rem;${wrap === 'nowrap' ? 'background:#eeeeee;' : ''}`") This text will {{ wrap === 'nowrap' ? 'render without wrapping' : 'truncate with an ellipsis' }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'text-wrapping',
      wrappers: ['nowrap', 'truncate'],
      codeSnippets: ``
    };
  }
})
export default class TextWrapping extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.wrappers.forEach((wrap: string) => {
      this.$data.codeSnippets += `<p class="-text--${wrap}">This text will ${
        wrap === 'nowrap'
          ? 'render without wrapping'
          : 'truncate with an ellipsis'
      }</p>\n`;
    });
  }
}
</script>
