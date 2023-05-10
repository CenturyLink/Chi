<template lang="pug">
  <ComponentExample title="Examples" id="display-examples" :tabs="exampleTabs" :showSnippetTabs="false">
    <Wrapper slot="example">
      .-mb--3
        .-show--example
          .-text.-p--3.-m--1(
            v-for="example in examples"
            :class="example") {{ example }}
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
      examples: ['-d--none -d-xl--inline-flex', '-d-sm--none', '-d--inline-flex', '-d--flex'],
      codeSnippets: {
        htmlblueprint: `<!-- hidden on all breakpoints except xl -->
<div class="-d--none -d-xl--inline-flex"></div>
<!-- hidden on sm breakpoints -->
<div class="-d-sm--none"></div>
<!-- inline-flex on all breakpoints -->
<div class="-d--inline-flex"></div>
<!-- flex on all breakpoints -->
<div class="-d--flex"></div>`
      }
    };
  }
})
export default class DisplayExamples extends Vue {}
</script>
