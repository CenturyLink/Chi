<template lang="pug">
  <ComponentExample title="Sticky" id="target-sticky" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
    <pre class="language-html" slot="code-htmlblueprint" style="border:none;">
      <code v-highlight="codeSnippets.htmlblueprint" class="html"></code>
    </pre>
  </ComponentExample>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { SIZES } from '~/constants/constants';

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
export default class TargetSticky extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: this.generateHtml()
    };
  }

  generateHtml() {
    return SIZES.map(
      (size: string) => `<div class="-position-${size}--sticky"></div>`
    ).join('\n');
  }
}
</script>
