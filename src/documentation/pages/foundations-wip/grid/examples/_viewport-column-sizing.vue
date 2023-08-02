<template lang="pug">
  <ComponentExample title="Viewport-Specific Column Sizing" id="viewport-specific-column-sizing" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | The columns in the following rows will be 50% wide until they are in 
      | the configured viewport, at which point they will become 12 column 
      | units wide.
    
    .-show--example.chi-grid.-mb--3(slot="example" v-for="{className} in gridColumns" :key="className")
      .chi-col.-w--6(:class="className")

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
export default class ViewportColumnSizing extends Vue {
  gridColumns = [
    {
      comment:
        '<!-- 50% on xs viewports; 100% on sm, md, lg and xl viewports -->',
      className: '-w-sm--12'
    },
    {
      comment:
        '<!-- 50% on xs and sm viewports; 100% on md, lg and xl viewports -->',
      className: '-w-md--12'
    },
    {
      comment:
        '<!-- 50% on xs, sm and md viewports; 100% on lg and xl viewports -->',
      className: '-w-lg--12'
    },
    {
      comment:
        '<!-- 50% on xs, sm, md and lg viewports; 100% on xl viewports -->',
      className: '-w-xl--12'
    }
  ];

  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
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
