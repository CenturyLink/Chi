<template lang="pug">
  <ComponentExample title="Auto" id="auto" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Use <code>-overflow--auto</code> to show scrollbars if content overflows its box.
      | If content fits within its box, no scrollbars are shown.
    .-mb--3(slot="example")
      .chi-grid.-no-gutter
        .chi-col.-w--6.-w-md--4.-p--1
          .-overflow--auto.-b--1.-p--1(style=`height:4rem;`)
            p.-text.-m--0
              | This is an example of an element with a defined height
              | using <code>-overflow--auto</code> to scroll the content overflowing its box.
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
        htmlblueprint: `<div class="-overflow--auto">...</div>`
      }
    };
  }
})

export default class Auto extends Vue {}
</script>
