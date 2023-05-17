<template lang="pug">
  <ComponentExample title="Fixed Bottom" titleSize="h4" id="fixed-bottom" :tabs="exampleTabs" :showSnippetTabs="false" padding="0" additionalStyle="border: none;" >
    p.-text(slot="example-description")
      | Use the <code>-position--fixed-bottom</code> class to position an element at the bottom of the viewport.
    <pre class="language-html -mb--2" slot="code-htmlblueprint">
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
export default class FixedBottom extends Vue {
  get codeSnippets() {
    return {
      htmlblueprint: `<div class="-position--fixed-bottom"></div>`
    }
  }
}
</script>