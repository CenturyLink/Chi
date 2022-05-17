<template lang="pug">
  div
    h2.-py--2.-anchor(:id="id") Target specific viewports
      span
        a(class="-ml--1" :href="'/utilities/position/?theme=' + $store.state.themes.theme + '#' + id") #
    p.-text
      | To target a specific viewport, add the viewport abbreviation to the class.
      | It's important to note that viewport-specific classes apply to their respective
      | viewport and any larger viewport (unless overridden by a larger viewport class).

    div(v-for="viewport in viewports")
      h3.-anchor(:id="id + '-' + viewport") {{ setTitle(viewport) }}
        span
          a(class="-ml--1" :href="'/utilities/position/?theme=' + $store.state.themes.theme + '#' + id + '-' + viewport") #
      .-mb--2
        pre(class="language-html" :slot="`code-snippet-viewport-${viewport}`")
          code(v-highlight="setCodeSnippets(viewport)" class="html")
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      id: 'target-specific-viewport',
      viewports: [
        'static',
        'relative',
        'fixed',
        'absolute',
        'sticky',
        'fixed-top',
        'fixed-bottom'
      ],
      sizes: ['sm', 'md', 'lg', 'xl']
    };
  }
})
export default class TargetSpecificViewports extends Vue {
  setCodeSnippets(viewport: string) {
    let codeSnippet = '';

    this.$data.sizes.forEach((size: string) => {
      codeSnippet += `<div class="-position-${size}--${viewport}"></div>\n`;
    });

    return codeSnippet;
  }

  setTitle(viewport: string) {
    if (viewport.includes('-')) {
      return `${viewport
        .split('-')[0]
        .charAt(0)
        .toUpperCase() + viewport.split('-')[0].slice(1)} ${viewport
        .split('-')[1]
        .charAt(0)
        .toUpperCase() + viewport.split('-')[1].slice(1)}`;
    } else {
      return viewport.charAt(0).toUpperCase() + viewport.slice(1);
    }
  }
}
</script>
