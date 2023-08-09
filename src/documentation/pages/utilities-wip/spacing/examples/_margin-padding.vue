<template lang="pug">
  <ComponentExample title="Margin + Padding" id="margin-padding" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description") Apply both margin and padding to an element by adding both class names.
    .chi-grid.-no-gutter(slot="example")
      .example-spacing-margin
        .-m--3.-p--3.example-spacing-padding
          .example-spacing-padding__block
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  data: () => {
    return {
      exampleTabs: [
        {
          active: true,
          id: 'htmlblueprint',
          label: 'HTML Blueprint'
        }
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-m--3 -p--3"></div>`
      }
    };
  }
})
export default class MarginPadding extends Vue {}
</script>
