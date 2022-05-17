<template lang="pug">
  ComponentExample(title="Text transform" :padding="'-p--0'" :id="id" :codeSnippetWithoutTabs="true")
    p.-text(slot="example-description") Change text transform to lowercase, uppercase, or capitalize.
    .-m--3(slot="example")
      p.-text(v-for="transform in transforms" :class="`-text--${transform}`") This text will render as {{ transform }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'text-transform',
      transforms: ['lowercase', 'uppercase', 'capitalize'],
      codeSnippets: ``
    };
  }
})
export default class TextTransform extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.transforms.forEach((transform: string) => {
      this.$data.codeSnippets += `<p class="-text--${transform}">This text will render as ${transform}</p>\n`;
    });
  }
}
</script>
