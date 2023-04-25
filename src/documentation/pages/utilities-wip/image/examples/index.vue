<template lang="pug">
fragment
  <AnchorTitle title="Examples" tag="h2" :anchor="`?theme=${$store.state.themes.theme}#examples`" />

  <ComponentExample title="Responsive images" id="responsive-images" titleSize="h3" :tabs="$data.exampleTabs" hideTabs="true">
    p.-text(slot="example-description")
      | Use <code>-img--responsive</code> to enable responsive behavior on image elements.
      | When applied, images will scale proportionally on all devices and not exceed
      | the width or height of their parent container.
    div(slot="example", v-html="$data.codeSnippetPrintable")

    pre(class="language-html" slot="code-default")
      code(v-highlight="$data.codeSnippet" class="html")
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

const codeSnippet = `<img src="" class="-img--responsive" alt="">`;

const codeSnippetPrintable = `<svg class="-img--responsive" width="100%" height="250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder responsive image" preserveAspectRatio="xMidYMid slice" focusable="false">
  <title>Placeholder image</title>
  <rect width="100%" height="100%" fill="#000000"></rect>
  <text class="-text--h2" x="50%" y="50%" fill="#FFFFFF" dominant-baseline="middle" text-anchor="middle">Responsive image</text>
</svg>`;

@Component({
  data() {
    return {
      exampleTabs: [{ active: true, id: 'default', label: 'Default' }],
      codeSnippet,
      codeSnippetPrintable
    };
  }
})
export default class Examples extends Vue {}
</script>
