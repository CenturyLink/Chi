<template lang="pug">
  ComponentExample(title="Displays" :id="id" :codeSnippetWithoutTabs="true")
    .-show--example(slot="example")
      .-text.-p--3.-m--1(v-for="display in displays" :class="display") {{ display }}
    pre(class="language-html" :slot="`code-snippet-${id}`")
      code(v-highlight="codeSnippets" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'displays-example',
      displays: [
        '-d--none -d-xl--inline-flex',
        '-d--flex -d-sm--none',
        '-d--inline-flex',
        '-d--flex'
      ],
      codeSnippets: ``
    };
  }
})
export default class Displays extends Vue {
  created() {
    this._setCodeSnippets();
  }

  _setCodeSnippets() {
    this.$data.displays.forEach((display: string) => {
      this.$data.codeSnippets += `<!-- ${
        display.includes('-d--none')
          ? 'hidden on all breakpoints except xl'
          : display.includes('-d-sm--none')
          ? 'hidden on sm breakpoints'
          : `${display.slice(4, display.length)} on all breakpoints`
      } -->\n<div class="${display}"></div>\n`;
    });
  }
}
</script>
