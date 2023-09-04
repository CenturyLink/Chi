<template lang="pug">
  <ComponentExample title="Breakpoints" id="breakpoints" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description") Target specific breakpoints with responsive classes.
    .chi-grid.-no-gutter(slot="example")
      .example-spacing-margin
        .-mx--0.-px--0.-mx-lg--6.-px-lg--6.example-spacing-padding
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
        htmlblueprint: `<div class="-mx--0 -px--0 -mx-lg--6 -px-lg--6"></div>`
      }
    };
  }
})
export default class Breakpoints extends Vue {}
</script>
