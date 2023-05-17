<template lang="pug">
  <ComponentExample title="Fixed Top" titleSize="h4" id="target-fixed-top" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
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
export default class TargetFixedTop extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: `<div class="-position-sm--fixed-top"></div>
<div class="-position-md--fixed-top"></div>
<div class="-position-lg--fixed-top"></div>
<div class="-position-xl--fixed-top"></div>`
    }
  }
}
</script>