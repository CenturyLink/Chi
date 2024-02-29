<template lang="pug">
  div
    h2 Recommended layout
    p.-text Use this layout to ensure the sidenav renders correctly in your project.
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({
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
</div>`,
      },
    };
  },
})
export default class RecommendedLayout extends Vue {}
</script>
