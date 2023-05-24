<template lang="pug">
  <ComponentExample title="SASS" id="sass" :tabs="exampleTabs" :showSnippetTabs="false" padding="0" additionalStyle="border: none;">
    p.-text(slot="example-description")
      | Chi defines shadows with Saas maps. The following example will render a shadow equivalent to <code>-s--1</code> / <code>1px</code>.
    <pre class="language-html" slot="code-htmlblueprint">
      <code v-highlight="$data.codeSnippets.htmlblueprint" class="html"></code>
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
      ],
      codeSnippets: {
        webcomponent: ``,
        htmlblueprint: `@import '@centurylink/chi/src/chi/_global-variables';

.example {
  box-shadow: map-get($shadow, 1);
}`,
      },
    };
  }
})
export default class SASS extends Vue {}
</script>