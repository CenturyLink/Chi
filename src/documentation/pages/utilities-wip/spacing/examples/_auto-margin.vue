<template lang="pug">
  <ComponentExample title="Auto margin" id="auto-margin" titleSize="h4" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description")
      | Apply margin auto to an element
    <Wrapper slot="example">
      .example-spacing-margin.-d--flex
        .-m--auto.example-spacing-padding
          .example-spacing-padding__block
    </Wrapper>
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
        htmlblueprint: `<div class="-m--auto"></div>`
      }
    };
  }
})
export default class AutoMargin extends Vue {}
</script>
