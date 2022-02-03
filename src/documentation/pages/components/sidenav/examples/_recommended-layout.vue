<template lang="pug">
  div
    h2 Recommended layout
    p.-text Use this layout to ensure the sidenav renders correctly in your project.
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      codeSnippets: {
        htmlblueprint: `<div class="-d--flex">
  <aside class="chi-sidenav -flex--shrink0">
    <!-- Sidenav content goes here -->
  </aside>
  <div class="-flex--grow1">
    <!-- Page content goes here -->
  </div>
</div>`
      }
    };
  }
})
export default class RecommendedLayout extends Vue {}
</script>
