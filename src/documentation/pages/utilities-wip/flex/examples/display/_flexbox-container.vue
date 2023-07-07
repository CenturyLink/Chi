<template lang="pug">
  <ComponentExample title="Flexbox container" id="flexbox-container" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    .-p--3.-show--example(slot="example")
      .-text.-p--2.-m--1.-d--flex -d--flex
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
        htmlblueprint: `<div class="-d--flex"></div>`
      }
    };
  }
})
export default class FlexboxContainer extends Vue {}
</script>
