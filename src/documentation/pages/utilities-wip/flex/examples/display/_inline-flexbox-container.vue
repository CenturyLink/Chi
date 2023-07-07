<template lang="pug">
  <ComponentExample title="Inline Flexbox container" id="flexbox-container" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    .-p--3.-show--example(slot="example")
      .-text.-p--2.-m--1.-d--inline-flex -d--inline-flex
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
      ],
      codeSnippets: {
        htmlblueprint: `<div class="-d--inline-flex"></div>`
      }
    };
  }
})
export default class InlineFlexboxContainer extends Vue {}
</script>
