<template lang="pug">
  <ComponentExample title="Row (default)" id="row" titleSize="h4" padding="-p--0" :tabs="exampleTabs" :showSnippetTabs="false">
    p.-text(slot="example-description") Use <code>-flex--row</code> to display items horizontally. In most cases this class
      |  can be omitted as it is the browsers default behavior.
    .-p--3.-d--flex.-flex--row.-show--example(slot="example")
      .-text.-p--2 Item 1
      .-text.-p--2 Item 2
      .-text.-p--2 Item 3
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
        htmlblueprint: `<div class="-d--flex -flex--row">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>`
      }
    };
  }
})
export default class Row extends Vue {}
</script>
