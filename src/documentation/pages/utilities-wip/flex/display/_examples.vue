<template lang="pug">
  div
    ComponentExample(v-for="display in displays" :key="display" :title="setTitle(display)" :id="id" :codeSnippetWithoutTabs="true")
      .-show--example(slot="example")
        .-text.-p--2.-m--1(:class="`-d--${display}`") -d--{{ display }}
      pre(class="language-html" :slot="`code-snippet-${id}`")
        code(v-highlight="setCodeSnippets(display)" class="html")
    
    p.-text Target specific breakpoints with Display responsive classes.
    ul.-mb--3
      li(v-for="display in displays")
        code -d--{{ display }}
      li(v-for="responsiveDisplay in responsiveDisplays")
        code {{ responsiveDisplay }}
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'display-examples',
      sizes: ['sm', 'md', 'lg', 'xl'],
      displays: ['flex', 'inline-flex'],
      items: ['Item 1', 'Item 2', 'Item 3'],
      responsiveDisplays: [],
      codeSnippets: ``
    };
  }
})
export default class DisplayExamples extends Vue {
  created() {
    this._generateBreakpoints();
  }

  setTitle(display: string) {
    if (display.includes('inline')) {
      const title =
        display.split('-')[0] +
        ' ' +
        display
          .split('-')[1]
          .charAt(0)
          .toUpperCase() +
        display.split('-')[1].slice(1);

      return title.charAt(0).toUpperCase() + title.slice(1) + 'box container';
    }

    return display.charAt(0).toUpperCase() + display.slice(1) + ' container';
  }

  _generateBreakpoints() {
    this.$data.sizes.forEach((size: string) => {
      this.$data.displays.forEach((display: string) => {
        this.$data.responsiveDisplays.push(`-d-${size}--${display}`);
      });
    });
  }

  setCodeSnippets(display: string) {
    return `<div class="-d--${display}"></div>`;
  }
}
</script>
