<template lang="pug">
  <ComponentExample title="Viewport-Specific Column Sizing" id="viewport-specific-column-sizing" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    template(#example-description)
      p.-text
        | The columns in the following rows will be 50% wide until they are in
        | the configured viewport, at which point they will become 12 column
        | units wide.
    template(#example)
      .-show--example.chi-grid.-mb--3( v-for="{className} in gridColumns" :key="className")
        .chi-col.-w--6(:class="className")

    template(#code-htmlblueprint)
      Copy(lang="html" :code="codeSnippets.htmlblueprint")
  </ComponentExample>
</template>

<script lang="ts">
import { Vue } from 'vue-facing-decorator';

@NuxtComponent({})
export default class ViewportColumnSizing extends Vue {
  exampleTabs = [
    {
      active: true,
      id: 'htmlblueprint',
      label: 'HTML Blueprint',
    },
  ];
  gridColumns = [
    {
      comment: '<!-- 50% on xs viewports; 100% on sm, md, lg and xl viewports -->',
      className: '-w-sm--12',
    },
    {
      comment: '<!-- 50% on xs and sm viewports; 100% on md, lg and xl viewports -->',
      className: '-w-md--12',
    },
    {
      comment: '<!-- 50% on xs, sm and md viewports; 100% on lg and xl viewports -->',
      className: '-w-lg--12',
    },
    {
      comment: '<!-- 50% on xs, sm, md and lg viewports; 100% on xl viewports -->',
      className: '-w-xl--12',
    },
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml(),
    };
  }

  generateHtml() {
    return this.gridColumns
      .map(
        (item: { comment: string; className: string }) => `${item.comment}
<div class="chi-grid">
  <div class="chi-col -w--6 ${item.className}"></div>
</div>
`
      )
      .join('\n');
  }
}
</script>
