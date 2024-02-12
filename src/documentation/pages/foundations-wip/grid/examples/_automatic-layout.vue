<template lang="pug">
ComponentExample(title="Automatic Layout" id="automatic-layout" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;")
  template(#example-description)
  p.-text
    | Grid layouts are defined as a grid container that is composed of
    | one or more rows of columns. By default, columns within a grid container
    | will occupy an equal amount of horizontal space. Content within those
    | columns is constrained to the width of the column (i.e. the column will
    | not widen to accommodate its contents).
  template(#example)
    .chi-grid.-mb--2.-show--example()
      .chi-col(v-for="item in grid3Columns" :key="item")

  template(#code-htmlblueprint)
    Copy(id="layout-3-cols" :code="codeSnippets.htmlblueprint3Cols" lang="html")

ComponentExample(id="automatic-layout" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;")
  template(#example)
    .chi-grid.-mb--2.-show--example()
      .chi-col(v-for="item in grid5Columns" :key="item")

  template(#code-htmlblueprint)
    Copy(id="layout-5-cols" :code="codeSnippets.htmlblueprint5Cols" lang="html")
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class AutomaticLayout extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  grid3Columns = Array(3).fill('chi-col');
  grid5Columns = Array(5).fill('chi-col');

  get codeSnippets() {
    return {
      htmlblueprint3Cols: this.generateHtml('<!-- three columns of equal width -->', this.grid3Columns),
      htmlblueprint5Cols: this.generateHtml('<!-- five columns of equal width -->', this.grid5Columns),
    };
  }

  generateHtml(comment: string, columns: string[]) {
    return `${comment}
<div class="chi-grid">
${columns.map((item: string) => `  <div class="${item}"></div>`).join('\n')}
</div>`;
  }
}
</script>
