<template lang="pug">
<ComponentExample title="Removing Gutters" id="removing-gutters" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
  template(#example-description)
    p.-text
      | Columns are rendered with a consistent amount of spacing between them.
      | To collapse these margins, you may use the <code>-no-gutter</code>
      | modifier class on the grid container.

  template(#example)
    .-show--example.-mb--2
      .chi-grid.-no-gutter.-mb--2
        .chi-col(v-for="item in grid3Columns" :key="item")

  template(#code-htmlblueprint)
    Copy(lang="html" :code="codeSnippets.htmlblueprint" class="html")
</ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class RemovingGutters extends Vue {
  grid3Columns = Array(3).fill('chi-col');
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return `<!-- grid container with collapsed margins -->
<div class="chi-grid -no-gutter">
${this.grid3Columns.map((item: string) => `  <div class=${item}></div>`).join('\n')}
</div>`;
  }
}
</script>
