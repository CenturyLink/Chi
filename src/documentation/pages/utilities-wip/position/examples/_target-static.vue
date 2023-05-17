<template lang="pug">
  <ComponentExample title="Static" titleSize="h4" id="target-static" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
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
export default class TargetStatic extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: `<div class="-position-sm--static"></div>
<div class="-position-md--static"></div>
<div class="-position-lg--static"></div>
<div class="-position-xl--static"></div>`
    }
  }
}
</script>