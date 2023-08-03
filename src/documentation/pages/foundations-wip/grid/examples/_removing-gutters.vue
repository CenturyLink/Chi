<template lang="pug">
  <ComponentExample title="Removing Gutters" id="removing-gutters" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
    p.-text(slot="example-description")
      | Columns are rendered with a consistent amount of spacing between them. 
      | To collapse these margins, you may use the <code>-no-gutter</code> 
      | modifier class on the grid container.
    
    .-show--example.-mb--2(slot="example")
      .chi-grid.-no-gutter.-mb--2
        .chi-col(v-for="item in grid3Columns" :key="item")
    
    <pre class="language-html" slot="code-htmlblueprint" style="border:none;">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
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
      ]
    };
  }
})
export default class RemovingGutters extends Vue {
  grid3Columns = Array(3).fill('chi-col');

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }

  generateHtml() {
    return `<!-- grid container with collapsed margins -->
<div class="chi-grid -no-gutter">
${this.grid3Columns
  .map((item: string) => `  <div class=${item}></div>`)
  .join('\n')}
</div>`;
  }
}
</script>
