<template lang="pug">
  <ComponentExample title="Stretch (Browser default)" id="stretch" titleSize="h4" padding="-p--3" :tabs="exampleTabs" :showSnippetTabs="false">
    .-mb--2.-d--flex.-show--example.-bg--grey-10(slot="example" style="height:7rem;")
      .-text.-p--2 Item
      .-text.-p--2.-align-self--stretch Aligned Item
      .-text.-p--2 Item
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
        htmlblueprint: `<div class="-d--flex">
  <div>Item</div>
  <div class="-align-self--stretch">Aligned Item</div>
  <div>Item</div>
</div>`
      }
    };
  }
})
export default class Stretch extends Vue {}
</script>
