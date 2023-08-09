<template lang="pug">
  <ComponentExample title="Fixed Top" id="fixed-top" :tabs="exampleTabs" :showSnippetTabs="false" padding="-p--0" additionalStyle="border: none;">
    p.-text(slot="example-description")
      | Use the <code>-position--fixed-top</code> class to position an element at the top of the viewport.
    <pre class="language-html" slot="code-htmlblueprint">
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
export default class FixedTop extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: `<div class="-position--fixed-top"></div>`
    };
  }
}
</script>
