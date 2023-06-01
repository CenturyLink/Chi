<template lang="pug">
  div
    <ComponentExample title="Automatic Layout" titleSize="h3" id="automatic-layout" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      p.-text(slot="example")
        | Grid layouts are defined as a grid container that is composed of 
        | one or more rows of columns. By default, columns within a grid container 
        | will occupy an equal amount of horizontal space. Content within those 
        | columns is constrained to the width of the column (i.e. the column will 
        | not widen to accommodate its contents).
      
      .chi-grid.-mb--2.-show--example(slot="example")
        .chi-col(v-for="i in grid3Columns" :key="i")
      
      <pre class="language-html" slot="code-htmlblueprint" style="border:none;">
        <code v-highlight="codeSnippets.htmlblueprint3Cols" class="html"></code>
      </pre>
    </ComponentExample>

    <ComponentExample id="automatic-layout" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
      .chi-grid.-mb--2.-show--example(slot="example")
        .chi-col(v-for="i in grid5Columns" :key="i")


      <pre class="language-html" slot="code-htmlblueprint" style="border:none;">
        <code v-highlight="codeSnippets.htmlblueprint5Cols" class="html"></code>
      </pre>
    </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { grid3Columns, grid5Columns } from '../../../../fixtures/fixtures';

@Component({
  data: () => {
    return {
      grid3Columns,
      grid5Columns,
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
export default class AutomaticLayout extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint3Cols: this.generateHtml3Cols(),
      htmlblueprint5Cols: this.generateHtml5Cols()
    };
  }
  generateHtml3Cols() {
    return `<!-- three columns of equal width -->
<div class="chi-grid">
${grid3Columns.map((item: string) => `  <div class=${item}></div>`).join('\n')}
</div>`;
  }

  generateHtml5Cols() {
    return `<!-- five columns of equal width -->
<div class="chi-grid">
${grid5Columns.map((item: string) => `  <div class=${item}></div>`).join('\n')}
</div>`;
  }
}
</script>
