<template lang="pug">
  <ComponentExample title="Absolute" titleSize="h4" id="target-absolute" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;" >
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
export default class TargetAbsolute extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: `<div class="-position-sm--absolute"></div>
<div class="-position-md--absolute"></div>
<div class="-position-lg--absolute"></div>
<div class="-position-xl--absolute"></div>`
    }
  }
}
</script>