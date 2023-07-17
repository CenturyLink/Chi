<template lang="pug">
  <ComponentExample title="Viewport-Specific Column Sizing" id="viewport-specific-column-sizing" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | The columns in the following rows will be 50% wide until they are in 
      | the configured viewport, at which point they will become 12 column 
      | units wide.
    
    .chi-grid.-show--example.-mb--2(slot="example")
      .chi-col.-w--6.-mb--3(v-for="item in gridColumns" :key="item" :class="`-w-${item}--12`")

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
  gridColumns = ['sm', 'md', 'lg', 'xl'];
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }
  generateHtml() {
    return `<!-- 50% on xs viewports; 100% on sm, md, lg and xl viewports -->
<div class="chi-grid">
  <div class="chi-col -w--6 -w-sm--12"></div>
</div>

<!-- 50% on xs and sm viewports; 100% on md, lg and xl viewports -->
<div class="chi-grid">
  <div class="chi-col -w--6 -w-md--12"></div>
</div>

<!-- 50% on xs, sm and md viewports; 100% on lg and xl viewports -->
<div class="chi-grid">
  <div class="chi-col -w--6 -w-lg--12"></div>
</div>

<!-- 50% on xs, sm, md and lg viewports; 100% on xl viewports -->
<div class="chi-grid">
  <div class="chi-col -w--6 -w-xl--12"></div>
</div>`;
  }
}
</script>
